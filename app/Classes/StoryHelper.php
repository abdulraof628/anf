<?php

namespace App\Classes;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class StoryHelper {
    
    public static function getStories($centre_id = null, $programme_id = null){
        $user_centres   =   DB::table('user_has_centres')->where('user_id', auth()->id())->get()->pluck('centre_id');
        $is_admin       =   (bool)auth()->user()->is_admin;

        /* Get stories */
        $stories    =   DB::table('stories')
                            ->leftJoin('wpvt_users', 'stories.created_by', '=', 'wpvt_users.ID')
                            ->leftJoin('story_likes', 'story_likes.story_id', '=', 'stories.id')
                            ->join('programmes', 'stories.programme_id', '=', 'programmes.id')
                            ->select(
                                'stories.id as story_id',
                                'stories.title as story_title',
                                'stories.created_at as story_date',
                                'stories.created_by as story_author_id',
                                'wpvt_users.display_name as story_author_name',
                                'programmes.id as story_programme_id',
                                DB::raw('count(story_likes.story_id) as reaction_count')
                            )
                            ->when(!$is_admin, function($query) use ($user_centres){
                                $query->whereIn('stories.centre_id', $user_centres);
                            })
                            ->when($centre_id, function($query) use ($centre_id){
                                $query->where('stories.centre_id', $centre_id);
                            })
                            ->when($programme_id, function($query) use ($programme_id){
                                $query->where('stories.programme_id', $programme_id);
                            })
                            ->groupBy('stories.id')
                            ->paginate(10);
                    
        $storiesCollection  = collect($stories->items());
        $storyIds           = $storiesCollection->pluck('story_id');

        /* Get images */
        $images  = DB::table('story_images')
                    ->whereIn('story_id', $storyIds)
                    ->select('id', 'story_id', 'image_filename')
                    ->get()
                    ->groupBy('story_id');

        /* Get likes */
        $likes  = DB::table('story_likes')
                    ->leftJoin('wpvt_users', 'story_likes.liked_by', '=', 'wpvt_users.ID')
                    ->whereIn('story_likes.story_id', $storyIds)
                    ->select('story_likes.id', 'story_likes.story_id', 'wpvt_users.ID as like_author_id', 'wpvt_users.display_name as like_author_name')
                    ->get()
                    ->groupBy('story_id');

        /* Get Students */
        $students  = DB::table('story_students')
                    ->whereIn('story_id', $storyIds)
                    ->select('id', 'story_id', 'student_id')
                    ->get()
                    ->groupBy('story_id');

        /* Insert into existing array */
        $storiesCollection = $storiesCollection->map(function($story) use ($likes, $students, $images) {
            $story->images      = $images->get($story->story_id, collect())->toArray();
            $story->likes       = $likes->get($story->story_id, collect())->toArray();
            $story->students    = $students->get($story->story_id, collect())->toArray();
            return $story;
        });

        $stories = new \Illuminate\Pagination\LengthAwarePaginator(
            $storiesCollection,
            $stories->total(),
            $stories->perPage(),
            $stories->currentPage(),
            ['path' => \Illuminate\Pagination\Paginator::resolveCurrentPath()]
        );
        return $stories;
    }

    public static function getStudentStories($for_current_student = false){
        $enrolled_child_student_ids =   DB::table('students')
                                            ->leftJoin('children', 'students.children_id', '=', 'children.id')
                                            ->leftJoin('wpvt_users', 'children.parent_id', '=', 'wpvt_users.ID')
                                            ->select('students.id')
                                            ->where('wpvt_users.ID', auth()->id())
                                            ->get()->pluck('id')->toArray();

        /* Get stories */
        $stories    =   DB::table('stories')
                            ->join('wpvt_users', 'stories.created_by', '=', 'wpvt_users.ID')
                            ->join('story_students', 'story_students.story_id', '=', 'stories.id')
                            ->join('programmes', 'stories.programme_id', '=', 'programmes.id')
                            ->select(
                                'stories.id as story_id',
                                'stories.title as story_title',
                                'stories.created_at as story_date',
                                'stories.created_by as story_author_id',
                                'wpvt_users.display_name as story_author_name',
                                'programmes.name as story_programme_name',
                            )
                            ->whereIn('story_students.student_id', $enrolled_child_student_ids)
                            ->when($for_current_student, function($query){
                                $query->where('story_students.student_id', session('current_active_child.student_id'))
                                        ->where('stories.programme_id', session('current_active_programme.id'));
                            })
                            ->when(!$for_current_student, function($query) use ($enrolled_child_student_ids){
                                $query->whereIn('story_students.student_id', $enrolled_child_student_ids);
                            })
                            ->orderByDesc('stories.created_at')
                            ->paginate(3);
                            
        $storiesCollection  = collect($stories->items());
        $storyIds           = $storiesCollection->pluck('story_id');

        /* Get images */
        $images  = DB::table('story_images')
                    ->whereIn('story_id', $storyIds)
                    ->select('story_id', 'image_filename')
                    ->get()
                    ->groupBy('story_id');

        /* Get likes */
        $likes  = DB::table('story_likes')
                    ->leftJoin('wpvt_users', 'story_likes.liked_by', '=', 'wpvt_users.ID')
                    ->whereIn('story_likes.story_id', $storyIds)
                    ->whereNull('deleted_at')
                    ->select('story_likes.story_id', 'wpvt_users.ID as like_author_id', 'wpvt_users.display_name as like_author_name')
                    ->get()
                    ->groupBy('story_id');

        /* Get Students */
        $students  = DB::table('story_students')
                    ->whereIn('story_id', $storyIds)
                    ->select('story_id', 'student_id')
                    ->get()
                    ->groupBy('story_id');

        /* Insert into existing array */
        $storiesCollection = $storiesCollection->map(function($story) use ($likes, $students, $images) {
            $story->images      = $images->get($story->story_id, collect())->toArray();
            $story->likes       = $likes->get($story->story_id, collect())->toArray();
            $story->students    = $students->get($story->story_id, collect())->toArray();
            return $story;
        });

        $stories = new \Illuminate\Pagination\LengthAwarePaginator(
            $storiesCollection,
            $stories->total(),
            $stories->perPage(),
            $stories->currentPage(),
            ['path' => \Illuminate\Pagination\Paginator::resolveCurrentPath()]
        );
        
        return $stories;
    }

    public static function createPost(Request $request){

        DB::beginTransaction();

        try {
            /* Get User centre and class */
            $centre_id      =   DB::table('user_has_centres')->where('user_id', auth()->id())->pluck('centre_id')->first();

            /* Get students for the centre */
            $students    =   DB::table('student_fees')
                                    ->join('programme_level_fees', 'student_fees.fee_id', '=', 'programme_level_fees.id')
                                    ->join('programme_levels', 'programme_level_fees.programme_level_id', '=', 'programme_levels.id')
                                    ->join('programmes', 'programme_levels.programme_id', '=', 'programmes.id')
                                    ->where('programmes.id', $request->programme_id)
                                    ->where('student_fees.centre_id', $centre_id)
                                    ->whereNull('student_fees.status')
                                    ->whereYear('student_fees.created_at', '=', Carbon::now()->format('Y'))
                                    ->whereMonth('student_fees.created_at', '=', Carbon::now()->format('m'))
                                    ->get();
                                    
            /* Post */
            $story_id   =   DB::table('stories')->insertGetId([
                                'programme_id'  =>  $request->programme_id,
                                'centre_id'     =>  $centre_id,
                                'title'         =>  $request->caption,
                                'created_by'    =>  auth()->id(),
                            ]);

            /* Photos */
            foreach($request->photos as $photo){
                $file       =   $photo['file'];
                $extension  =   $file->getClientOriginalExtension(); // Get the image extension
                $filename   =   Str::uuid() . '.' . $extension;

                Storage::putFileAs('stories',$file, $filename);

                DB::table('story_images')->insert([
                    'story_id'          =>  $story_id,
                    'image_filename'    =>  $filename,
                ]);
            }

            /* Students */
            foreach($students as $student){
                DB::table('story_students')->insert([
                    'story_id'      =>  $story_id,
                    'student_id'    =>  $student->student_id,
                ]);
            }

            DB::commit(); 

            return redirect()->back();
        } catch (\Exception $e) {
            DB::rollback();
        }
    }

    public static function editPost(Request $request){
        DB::beginTransaction();

        try {
            /* Post */
            DB::table('stories')->where('id', $request->story_id)->update([
                'programme_id'  =>  $request->programme_id,
                'title'         =>  $request->caption,
            ]);

            /* Photos */
            if($request->file('photos')){
                foreach($request->file('photos') as $key=>$photo){
                    $file       =   $photo['file'];
                    $extension  =   $file->getClientOriginalExtension(); // Get the image extension
                    $filename   =   Str::uuid() . '.' . $extension;
    
                    Storage::putFileAs('stories',$file, $filename);
    
                    DB::table('story_images')->insert([
                        'story_id'          =>  $request->story_id,
                        'image_filename'    =>  $filename,
                    ]);
                }
            }

            /* Delete Photos */
            if(!empty($request->photos_to_delete)){
                $photos_to_delete   =   DB::table('story_images')->whereIn('id', $request->photos_to_delete)->get();
                foreach($photos_to_delete as $key=>$photo){
                    Storage::delete('stories/'.$photo->image_filename);
                }
                DB::table('story_images')->whereIn('id', $request->photos_to_delete)->delete();
            }

            DB::commit(); 

            return redirect()->back();
        } catch (\Exception $e) {
            DB::rollback();
        }
    }
    
    public static function likeStory(Request $request){
        DB::beginTransaction();

        try {
            if($request->to_delete){
                DB::table('story_likes')->where('story_id', $request->story_id)->where('liked_by', auth()->id())->update([
                    'deleted_at'    =>  Carbon::now()
                ]);
            }
            else{
                DB::table('story_likes')->updateOrInsert(
                    ['story_id' => $request->story_id, 'liked_by' => auth()->id()],
                    ['deleted_at' => NULL]
                );
            }

            DB::commit(); 

            return true;
        } catch (\Exception $e) {
            DB::rollback();
        }
    }

    public static function deletePost($id){
        DB::beginTransaction();

        try {
            $photos_to_delete   =   DB::table('story_images')->where('story_id', $id)->get();
            if(!empty($photos_to_delete)){
                foreach($photos_to_delete as $key=>$photo){
                    Storage::delete('stories/'.$photo->image_filename);
                }
                DB::table('stories')->where('id', $id)->delete();
            }

            DB::commit(); 

            return redirect()->back();
        } catch (\Exception $e) {
            DB::rollback();
        }
    }
}