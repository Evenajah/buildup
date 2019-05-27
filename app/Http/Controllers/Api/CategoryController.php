<?php

namespace App\Http\Controllers\Api;

use App\Category;
use DB;
use App\project_create;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    
    public function index()
    {
        $categories = Category::all();
        return response()->json($categories);
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
        //
    }

    public function edit($id)
    {
       

        $categorySelect = DB::table('project_creates')
                            
                           ->where('category','=',"$id")
                           ->paginate(6);
                           
                            
        return response()->json($categorySelect);
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
