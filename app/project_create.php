<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class project_create extends Model
{
    protected $table = 'project_creates';

    protected $fillable = ['id','user_create','topic','category','image','detail'];

   
    public function FollowProjectTable(){

        return $this->belongsTo(FollowProjectTable::class,'id');
        
        // $this->hasMany('follow_project_tables','project_id')->selectRaw('project_creates.*,count(*) as count')->groupBy('count');

        
    }

    public function transaction_table(){
        return $this->belongsTo(TransactionTable::class,'id');
    }
}
