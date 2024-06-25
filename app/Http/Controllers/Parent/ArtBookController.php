<?php

namespace App\Http\Controllers\Parent;

use App\Classes\ArtBookHelper;
use App\Http\Controllers\Controller;
use Barryvdh\DomPDF\Facade\Pdf;
use Hashids\Hashids;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ArtBookController extends Controller
{
    public function index(Request $request)
    {
        
        $hashids = new Hashids('', 10);
        $programme_id   =   $hashids->decode($request->segment(2));
    
        if(count($programme_id) < 1){
            return redirect(route('parent.home'))->with(['type' => 'error', 'message' => 'Unable to fetch class data']);
        }
    
        $programme_info =   DB::table('programmes')->where('id', $programme_id[0])->first();

        $levels     =   ArtBookHelper::getLevels();

        return Inertia::render('Parent/Class/ArtBook',[
            'programme_info'    => $programme_info,
            'programme_id'      => $request->segment(2),
            'levels'            =>  $levels,
        ]);
    }

    public function generate(Request $request){
        
        $image_condition    =   DB::table('art_book_conditions')->where('theme_id', $request->theme_id)->get();

        $data['image_1']    =   DB::table('student_art_gallery')
                                    ->where('theme_id', $request->theme_id)
                                    ->where('lesson_id', $image_condition->where('artwork_number', 1)->pluck('lesson_id')->first())
                                    ->where('activity_id', $image_condition->where('artwork_number', 1)->pluck('activity_id')->first())
                                    ->where('student_id', $request->student_id)
                                    ->pluck('filename')
                                    ->first();
                            
        $data['image_2']    =   DB::table('student_art_gallery')
                                    ->where('theme_id', $request->theme_id)
                                    ->where('lesson_id', $image_condition->where('artwork_number', 2)->pluck('lesson_id')->first())
                                    ->where('activity_id', $image_condition->where('artwork_number', 2)->pluck('activity_id')->first())
                                    ->where('student_id', $request->student_id)
                                    ->pluck('filename')
                                    ->first();

        
        $data['image_3']    =   DB::table('student_art_gallery')
                                    ->where('theme_id', $request->theme_id)
                                    ->where('lesson_id', $image_condition->where('artwork_number', 3)->pluck('lesson_id')->first())
                                    ->where('activity_id', $image_condition->where('artwork_number', 3)->pluck('activity_id')->first())
                                    ->where('student_id', $request->student_id)
                                    ->pluck('filename')
                                    ->first();
                            
        $data['image_4']    =   DB::table('student_art_gallery')
                                    ->where('theme_id', $request->theme_id)
                                    ->where('lesson_id', $image_condition->where('artwork_number', 4)->pluck('lesson_id')->first())
                                    ->where('activity_id', $image_condition->where('artwork_number', 4)->pluck('activity_id')->first())
                                    ->where('student_id', $request->student_id)
                                    ->pluck('filename')
                                    ->first();
                                    
        $data['name']   =   Str::headline($request->student_nickname);
        $folder         =   DB::table('art_themes')->where('id', $request->theme_id)->pluck('art_book_assets')->first();
        
        $pdf = PDF::setPaper(array(0,0,648,576))
                    ->setOption('fontDir', public_path('/fonts'))
                    ->loadView($folder.'template', compact('data'));
        return $pdf->stream();
    }
}
