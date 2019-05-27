<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\FollowProjectTable;
use App\project_create;
use DB;

use App\Http\Controllers\Controller;

class StatusFollowController extends Controller
{
   
    public function index()
    {
        $projects = DB::table('project_creates')
            ->join('follow_project_tables', 'project_creates.id', '=', 'follow_project_tables.project_id')
            ->select('project_creates.*',DB::raw('COUNT(*) as follow'))
            ->groupBy('follow_project_tables.project_id')
            ->orderBy('follow','DESC')
            ->limit(6)
            ->get();

            return $projects;
    }

    
    public function create()
    {

        //หน้าหลัก Top Follow
        $followStat = DB::table('project_creates')
            ->join('follow_project_tables', 'project_creates.id', '=', 'follow_project_tables.project_id')
            ->select('project_creates.*',DB::raw('COUNT(*) as follow'))
            ->groupBy('follow_project_tables.project_id')
            ->orderBy('follow','DESC')
            ->paginate(6);
           

            return $followStat;
    }

  
    public function store(Request $request)
    {
        
        $statFollow = DB::table('follow_project_tables')
                           ->select('id')
                           ->where('name','=',$request->get('user'))
                           ->where('project_id','=',$request->get('project_id'))
                           ->pluck('id');
                           
                            
        return response()->json($statFollow);
    }

    
    public function show($id)
    {
        //
    }

    
    public function edit($id)
    {
        //
    }

    
    public function update(Request $request, $id)
    {
        //
    }

   
    public function destroy($id)
    {
        //
    }
}
