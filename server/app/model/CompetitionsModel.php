<?php

namespace app\model;
use think\Model;

class CompetitionsModel extends Model
{
    protected $name = 'competitions';
    public function users()
    {
        return $this->belongsToMany(UsersModel::class, attendModel::class,'competition','id');
    }
}