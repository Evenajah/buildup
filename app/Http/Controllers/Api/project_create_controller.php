<?php

namespace App\Http\Controllers\Api;

use App\project_create;
use App\FollowProjectTable;
use App\TransactionTable;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use File;
use DB;


class project_create_controller extends Controller
{
    
    public function index()
    {
        $projects = project_create::orderBy('created_at','DESC')->limit(3)->get();
                    
        return response()->json($projects);
    }

    public function create()
    {
        $projectsAll = project_create::orderBy('created_at','DESC')->paginate(6);
                    
        return response()->json($projectsAll);
    }

  
    public function store(Request $request)
    {
        //validate
        $this->validate($request,[
            'user' => 'required',
            'category' => 'required',
            'topic' => 'required',
            'detail' => 'required'
        ]);

          

        $Create = new project_create;
        $Create->user_create = $request->get('user');
        $Create->topic = $request->get('topic');
        $Create->category = $request->get('category');
        $Create->detail = $request->get('detail');

        //save file
        if ($request->hasFile('image')) {
            $ext = $request->file('image')->getClientOriginalExtension();//ดึงนามสกุล
            $newfilename = str_random(10).'.'.$ext;
            $request->file('image')->move(public_path().'/images/',$newfilename);

            $Create->image=$newfilename;
        }

                       
        $Create->save();
        return response()->json('Success');

       
    }

    public function show($id)
    {
        $search = project_create::where('topic','like',"%$id%")
                                ->orWhere('category', 'like',"%$id%" )
                                ->get();
                                
                  
        return response()->json($search);
    }




    public function edit($id)
    {
        $findID = project_create::find($id);
        return response()->json($findID);
    }

    public function update(Request $request, $id)
    {
        $projectUpdate = project_create::find($id);

        if ($request->hasFile('image')) {


            //ลบรูปเก่า
            if($projectUpdate->image !='nopic.jpg'){

                File::delete(public_path().'\\images\\'.$projectUpdate->image);
            }

            $ext = $request->file('image')->getClientOriginalExtension();
            $newfilename = str_random(10).'.'.$ext;
            $request->file('image')->move(public_path().'/images/',$newfilename);

            $projectUpdate->image=$newfilename;
        }

        $projectUpdate->category = $request->get('category');
        $projectUpdate->topic = $request->get('topic');
        $projectUpdate->detail = $request->get('detail');
        $projectUpdate->save();

        return 'Successfully Updated';
    }


    public function destroy($id)
    {
        
     
    
        //ลบโดยวนลูป transaction
        $transaction = TransactionTable::where('project_id','=',$id)->get();

            foreach($transaction as $row){
                $row->delete();
            }
        
      
        //ลบโดยวนลูป follow
        $follow = FollowProjectTable::where('project_id','=',$id)->get();

        
            foreach($follow as $rows){
                $rows->delete();
            }
    

    
       

        $project = project_create::find($id);

        if($project->image !='nopic.jpg'){
            File::delete(public_path().'\\images\\'.$project->image);
        }
        
        $project->delete();
  
        
        return response()->json('Successfully Deleted');
    }
}
