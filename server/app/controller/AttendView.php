<?php

namespace app\controller;

use app\model\CompetitionsModel;
use think\facade\View;

class AttendView
{
    public function attend($id)
    {
        $competition = CompetitionsModel::find($id);
        View::assign('competition',$competition);
        return View::fetch('../view/pages/competitions/attend.html');
    }
}