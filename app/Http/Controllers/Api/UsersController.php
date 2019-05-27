<?php

namespace App\Http\Controllers\Api;

use App\users;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = users::all();
        return response()->json($users);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       
        $user = new users([
            'name' => $request->get('name'),
            'password' => bcrypt(request('password')), //hash
            'email' => $request->get('email')
          ]);
        $user->save();
        return response()->json('Successfully added');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $stat = DB::table('users')
                           ->select('stat')
                           ->where('name','=',"$id")
                           ->pluck('stat')
                           ->first();
                           
                            
        return $stat;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = users::find($id);
        return response()->json($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = users::find($id);
        $user->name = $request->get('name');
        $user->password = $request->get('password');
        $user->email = $request->get('email');
        $user->save();

        return response()->json('Successfully Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = users::find($id);
        $user->delete();
  
        return response()->json('Successfully Deleted');
    }
}
