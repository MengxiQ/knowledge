<?php

namespace app\controller;

use app\model\AttendModel;
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
            $attend = AttendModel::where('user',$uid)->where('competition',$id)->find();
            if ($attend){
                $form = json_decode($attend->form);
                View::assign('form',$form);
                View::assign('attend_id',$attend->id);
            }

            View::assign('competition',$competition);
            return View::fetch('../view/pages/competitions/attend.html');
        } else {
            $redirect = '?redirect=/stage/attend/'.$id;
            View::assign('redirect',$redirect);
            return View::fetch('../view/stage/login.html');
        }

    }
}