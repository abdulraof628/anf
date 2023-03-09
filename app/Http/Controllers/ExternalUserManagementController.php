<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ExternalUserManagementController extends Controller
{
    public function __construct(){
        $this->division_manager_role_id =   4;
        $this->centre_manager_role_id   =   5;
        $this->edupreneur_role_id       =   6;

        $this->division_managers    =   $this->getDivisionManagers()->toArray();
        $this->centre_managers      =   $this->getCentreManagers()->toArray();
        $this->edupreneurs          =   $this->getEdupreneurs()->toArray();
    }

    public function divisionManagerList(Request $request)
    {
        $query          =   DB::table('wpvt_users')
                                ->join('user_has_roles', 'wpvt_users.id', '=', 'user_has_roles.user_id')
                                ->join('roles', 'user_has_roles.role_id', '=', 'roles.id')
                                ->select([  'wpvt_users.id as id', 
                                            'wpvt_users.display_name as name', 
                                            'wpvt_users.user_email as email', 
                                            'roles.display_name as role'])->where('user_has_roles.role_id', $this->division_manager_role_id);

        if($request->search){
            $query->where('wpvt_users.display_name', 'LIKE', '%'.$request->search.'%');
        }

        return Inertia::render('ExternalUserManagement/DivisionManagers/Index', [
            'filter'                => request()->all('search'),
            'division_managers'     => $query->paginate(10),
        ]);
    }

    public function manageDivisionManager(Request $request)
    {
        if(in_array($request->user_id, $this->division_managers)){
            $user_info      =   DB::table('wpvt_users')->where('id', $request->user_id)->first();
            $centres        =   DB::table('centres')->select(['ID', 'label as name'])->get();
            $user_centres   =   DB::table('user_has_centres')->where('user_id', $request->user_id)->get('centre_id')->keyBy('centre_id');
    
            return Inertia::render('ExternalUserManagement/DivisionManagers/ManageUser',[
                'user_id'       => $request->user_id,
                'user_info'     => $user_info,
                'centres'       => $centres,
                'user_centres'  => $user_centres,
            ]);
        }

        return redirect(route('division_manager.users'))->with(['type'=>'error', 'message'=>"You're not allowed to perform this action!"]);
    }

    public function manageDivisionManagerStore(Request $request)
    {
        DB::table('user_has_centres')->where('user_id', $request->user_id)->delete();

        foreach($request->selected_centres as $key=>$centre_id){
            DB::table('user_has_centres')->insert([
                'user_id'   =>  $request->user_id,
                'centre_id'   =>  $centre_id
            ]);
        }

        return redirect(route('division_manager.users'))->with(['type'=>'success', 'message'=>'Operation successfull !']);
    }

    public function centreManagerList(Request $request)
    {
        $query          =   DB::table('wpvt_users')
                                ->join('user_has_roles', 'wpvt_users.id', '=', 'user_has_roles.user_id')
                                ->join('roles', 'user_has_roles.role_id', '=', 'roles.id')
                                ->select([  'wpvt_users.id as id', 
                                            'wpvt_users.display_name as name', 
                                            'wpvt_users.user_email as email', 
                                            'roles.display_name as role'])->where('user_has_roles.role_id', $this->centre_manager_role_id);

        if($request->search){
            $query->where('wpvt_users.display_name', 'LIKE', '%'.$request->search.'%');
        }

        return Inertia::render('ExternalUserManagement/CentreManagers/Index', [
            'filter'                => request()->all('search'),
            'centre_managers'     => $query->paginate(10),
        ]);
    }

    public function manageCentreManager(Request $request)
    {
        if(in_array($request->user_id, $this->centre_managers)){
            $user_info      =   User::find($request->user_id);
            $user_centre    =   DB::table('user_has_centres')->where('user_id', $request->user_id)->first();

            return Inertia::render('ExternalUserManagement/CentreManagers/ManageUser',[
                'user_id'       => $request->user_id,
                'user_info'     => $user_info,
                'user_centre'     => $user_centre,
            ]);
        }

        return redirect(route('centre_manager.users'))->with(['type'=>'error', 'message'=>"You're not allowed to perform this action!"]);
    }

    public function manageCentreManagerStore(Request $request)
    {
        DB::table('user_has_centres')->where('user_id', $request->user_id)->delete();

        DB::table('user_has_centres')->insert([
            'user_id'   =>  $request->user_id,
            'centre_id'   =>  $request->centre_id
        ]);

        return redirect(route('centre_manager.users'))->with(['type'=>'success', 'message'=>'Operation successfull !']);
    }

    // public function edupreneurList(Request $request)
    // {
    //     $query          =   DB::table('wpvt_users')
    //                             ->join('user_has_roles', 'wpvt_users.id', '=', 'user_has_roles.user_id')
    //                             ->join('roles', 'user_has_roles.role_id', '=', 'roles.id')
    //                             ->select([  'wpvt_users.id as id', 
    //                                         'wpvt_users.display_name as name', 
    //                                         'wpvt_users.user_email as email', 
    //                                         'roles.display_name as role'])->where('user_has_roles.role_id', $this->edupreneur_role_id);

    //     if($request->search){
    //         $query->where('wpvt_users.display_name', 'LIKE', '%'.$request->search.'%');
    //     }

    //     return Inertia::render('ExternalUserManagement/Edupreneurs/Index', [
    //         'filter'        => request()->all('search'),
    //         'edupreneurs'     => $query->paginate(10),
    //     ]);
    // }

    public function create()
    {
        //External Staff
        $role_group =   2;
        $roles  =   DB::table('roles')
                        ->join('role_groups', 'roles.role_group_id', '=', 'role_groups.id')
                        ->where('roles.role_group_id', $role_group)
                        ->select(['roles.id', 'roles.display_name'])->get();
        
        return Inertia::render('CentreManagement/Users/Create', [
            'roles' =>  $roles
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id'   => 'required',
            'centre_id' => 'required',
        ]);

        $user_exist =   !empty(DB::table('centre_users')->where('user_id', $request->user_id)->first()) ? true : false;

        if($user_exist){
            return back()->with(['type' => 'error', 'message' => 'User already exists!']);
        }

        DB::table('centre_users')->insert([
            'user_id'   => $request->user_id,
            'role_id'   => $request->role_id,
            'centre_id' => $request->centre_id
        ]);

        return back()->with(['type' => 'success', 'message' => 'New user added!']);
    }

    public function find(Request $request)
    {
        $users   =   DB::table('wpvt_users')->where('display_name', 'LIKE', '%'.$request->keyword.'%')->select(['ID', 'display_name', 'user_email'])->get();
        return $users;
    }

    public function getDivisionManagers()
    {
        $division_managers          =   DB::table('wpvt_users')
                                            ->join('user_has_roles', 'wpvt_users.id', '=', 'user_has_roles.user_id')
                                            ->join('roles', 'user_has_roles.role_id', '=', 'roles.id')
                                            ->select([  'wpvt_users.id as id'])
                                            ->where('user_has_roles.role_id', $this->division_manager_role_id)
                                            ->pluck('id');

        return $division_managers;
    }

    public function getCentreManagers()
    {
        $centre_managers          =   DB::table('wpvt_users')
                                            ->join('user_has_roles', 'wpvt_users.id', '=', 'user_has_roles.user_id')
                                            ->join('roles', 'user_has_roles.role_id', '=', 'roles.id')
                                            ->select([  'wpvt_users.id as id'])
                                            ->where('user_has_roles.role_id', $this->centre_manager_role_id)
                                            ->pluck('id');

        return $centre_managers;
    }

    public function getEdupreneurs()
    {
        $edupreneurs          =   DB::table('wpvt_users')
                                            ->join('user_has_roles', 'wpvt_users.id', '=', 'user_has_roles.user_id')
                                            ->join('roles', 'user_has_roles.role_id', '=', 'roles.id')
                                            ->select([  'wpvt_users.id as id'])
                                            ->where('user_has_roles.role_id', $this->edupreneur_role_id)
                                            ->pluck('id');

        return $edupreneurs;
    }
}