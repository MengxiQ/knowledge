<?php

namespace app\model;

use think\Model;

class SuperModel extends Model
{
    protected $name = 'super';
    static function getUsersList(){
        return SuperModel::select();
    }

    public function competitions()
    {
        return $this->belongsToMany(CompetitionsModel::class, attendModel::class,'user','id');
    }
}