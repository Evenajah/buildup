<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FollowProjectTable extends Model
{
    protected $table='follow_project_tables';

    protected $fillable = [
        'id',
        'name',
        'project_id'
    ];


    public function project_create_table(){
        return $this->belongsTo(project_create::class,'project_id');
    }
}
