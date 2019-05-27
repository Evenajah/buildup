<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Auth\Authenticatable as AuthenticableTrait;

class users extends \Eloquent implements Authenticatable
{
    use AuthenticableTrait;
    protected $fillable = ['name','password','email'];
}
