<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\FollowProjectTable;
use App\Http\Controllers\Controller;
use DB;

class FollowController extends Controller
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
        $follow = new FollowProjectTable;
        $follow->name = $request->get('name');
        $follow->project_id = $request->get('project_id');


                               
        $follow->save();
        return 'Success';
    }

    
    public function show($id)
    {

        $followTotal = DB::table('follow_project_tables')
                    ->select(DB::raw('count(*) as totalFollow'))
                    ->where('project_id','=',$id)
                    
                    ->pluck('totalFollow');

        return $followTotal;
        
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
        $delFollow= FollowProjectTable::find($id);


        $delFollow->delete();
  
        return response()->json('Success Unfollow');
    }
}
