<?php

namespace App\Http\Controllers\Api;

use App\users;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;



class LoginController extends Controller
{
    //เรียกข้อมูลในตาราง
    public function index()
    {
        $users = users::all();
        return response()->json($users);
    }

    //เช็ค login
    public function store(Request $request)
    {
        //validate ข้อมูล
        $this->validate($request,[
            'name' => 'required',
            'password' => 'required'
        ]);

        //create name from request
        $user=$request->get('name');

        //Auth เช็คในตาราง
        if(Auth::attempt(['name'=>$request->get('name'),'password'=>$request->get('password')])){
            return response()->json($user);
        }else{
            return ('error');
        }


    }
}
