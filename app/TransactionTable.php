<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TransactionTable extends Model
{
    
    protected $fillable = ['id','name','project_id','currency'];


    public function project_create_table(){
        return $this->hasMany(project_create::class);
    }
}
