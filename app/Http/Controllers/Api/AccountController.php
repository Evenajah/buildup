<?php

namespace App\Http\Controllers\Api;



use DB;
use App\project_create;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AccountController extends Controller
{
    
    public function index()
    {
        
    }

   
    public function create()
    {
        //
    }

   
    public function store(Request $request)
    {
        //
    }

   
    public function show($id)
    {
        $categorySelect = DB::table('project_creates')
        ->where('user_create','=',"$id")
        ->paginate(8);
      
        
        return response()->json($categorySelect);
    }

    
    public function edit($id)
    {
        $myfollow = DB::table('follow_project_tables')
            ->join('project_creates', 'follow_project_tables.project_id', '=', 'project_creates.id')
            ->select('project_creates.*')
            ->where('follow_project_tables.name','=',"$id")
            ->orderBy('follow_project_tables.created_at','DESC')
            ->paginate(8);

            return $myfollow;
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
