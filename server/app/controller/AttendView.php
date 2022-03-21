<?php

namespace app\controller;

use app\model\CompetitionsModel;
use think\facade\Cookie;
use think\facade\View;

class AttendView
{
    public function attend($id)
    {
        $uid = Cookie::get('uid');
        if ($uid) {
            $competition = CompetitionsModel::find($id);
            View::assign('competition',$competition);
            return View::fetch('../view/pages/competitions/attend.html');
        } else {
            return View::fetch('../view/stage/login.html');
        }

    }
}