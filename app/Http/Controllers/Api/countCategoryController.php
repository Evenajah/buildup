<?php
namespace App\Http\Controllers\Api;


use Illuminate\Http\Request;
use App\Category;
use DB;
use App\project_create;
use App\Http\Controllers\Controller;
class countCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $category = Category::all('category_name')->pluck('category_name');
      
        foreach($category as $key => $countCategory){
            $count[] = project_create::where('category','=',"$countCategory")->count();
            
        }


        return response()->json($count);
       
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
