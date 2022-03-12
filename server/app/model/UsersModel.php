<?php

namespace app\model;

use think\Model;

class UsersModel extends Model
{
    protected $name = 'users';
    static function getUsersList(){
        return UsersModel::select();
    }

    public function competitions()
    {
        return $this->belongsToMany(CompetitionsModel::class, attendModel::class,'user','id');
    }
}