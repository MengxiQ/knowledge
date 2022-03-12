<?php

namespace app\controller;

use app\BaseController;

use app\model\UsersModel;
use think\facade\Cookie;
use think\facade\Db;
use think\facade\View;

class Stage extends BaseController
{
    public function myhome()
    {
        $uid = Cookie::get('uid');
        $user = UsersModel::find($uid);

        $attend = Db::table('attend_list_views')->where('user',$uid)->select();

        View::assign('user',$user);
        View::assign('attend',$attend);
        return View::fetch();
    }
    public function login()
    {
        return View::fetch();
    }
    public function home()
    {
        return View::fetch();
    }
}