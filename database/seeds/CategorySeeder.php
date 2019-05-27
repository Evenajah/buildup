<?php

use Illuminate\Database\Seeder;
use App\Category;


class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categorys = [
          
           ['category_name'=>'Comics'],
           ['category_name'=>'Craft'],
           ['category_name'=>'Design'],
           ['category_name'=>'Fashion'],
           ['category_name'=>'Film & Video'],
           ['category_name'=>'Food'],
           ['category_name'=>'Game'],
           ['category_name'=>'Music'],
           ['category_name'=>'Photography'],
           ['category_name'=>'Technology'],
           
        ];
    
        foreach($categorys as $category){
            Category::create($category);
        }
    }
}
