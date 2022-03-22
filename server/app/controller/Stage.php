<?php

namespace app\controller;

use app\BaseController;

use app\model\AttendModel;
use app\model\CompetitionsModel;
use app\model\CompetitionTypeModel;
use app\model\ContentsModel;
use app\model\GuidesModel;
use app\model\UsersModel;
use think\facade\Cookie;
use think\facade\Db;
use think\facade\Request;
use think\facade\View;
class Type{
    var $desc;
    function __construct( $par1 ) {
        $this->desc = $par1;
    }
}

class Stage extends BaseController
{
    public function index()
    {
        $content = json_decode((ContentsModel::where('page_name', 'index')->find())['content']);
        $recommend_ids = $content->recommend;
        $recommend = CompetitionsModel::select($recommend_ids);

        View::assign('banner', $content->banner);
        View::assign('recommend', $recommend);
        return View::fetch();
    }

    public function myhome()
    {
        $uid = Cookie::get('uid');
        if ($uid) {
            $user = UsersModel::find($uid);
            $attend = Db::table('attend_list_views')->where('user', $uid)->select();
            View::assign('user', $user);
            View::assign('attend', $attend);
            return View::fetch();
        } else {
            return View::fetch('../view/stage/login.html');
        }

    }

    public function login()
    {
        return View::fetch();
    }

    public function competitions_news()
    {
        $param = Request::param();
        if (!$param){
            $filter = 'all';
        }
        else{
            $filter = $param['filter'];
        }
        if($filter == 'all'){
            $competitions = CompetitionsModel::select();
        }else{

            $competitions = CompetitionsModel::where('status',$filter)->select();
        }

        $total = CompetitionsModel::count();
        $register_total = CompetitionsModel::where('status', 'register')->count();
        $preview_total = CompetitionsModel::where('status', 'preview')->count();
        $end_total = CompetitionsModel::where('status', 'end')->count();
        $begin_total = CompetitionsModel::where('status', 'begin')->count();
        View::assign('competitions', $competitions);
        View::assign('total', $total);
        View::assign('register_total', $register_total);
        View::assign('preview_total', $preview_total);
        View::assign('end_total', $end_total);
        View::assign('begin_total', $begin_total);
        View::assign('filter', $filter);

        //banner
        $content = json_decode((ContentsModel::where('page_name', 'competitions_news')->find())['content']);
        View::assign('banner', $content->banner);

        return View::fetch();
    }

    public function competitions_category()
    {
        $param = Request::param();
        if (!$param){
            $filter = 'all';
        }
        else{
            $filter = $param['type'];
        }
        if($filter == 'all'){
            $competitions = CompetitionsModel::select();
        }else{

            $competitions = CompetitionsModel::where('type',$filter)->select();
        }
        for($x=0;$x<count($competitions);$x++)
        {
            //报名人数
            $statistics = AttendModel::where('competition',$competitions[$x]->id)->where('status','pass')->count();
            $competitions[$x]->statistics = $statistics;
        }
        $currentTyps = CompetitionTypeModel::where('id',$filter)->findOrEmpty();
        if ($currentTyps->isEmpty()) {

            $currentTyps = new Type('');
        }
        View::assign('competitions', $competitions);
        View::assign('current', $filter);
        View::assign('currentTyps', $currentTyps);

        $types = CompetitionTypeModel::select();
        View::assign('types', $types);

        //banner
        $content = json_decode((ContentsModel::where('page_name', 'competitions_category')->find())['content']);
        View::assign('banner', $content->banner);
        return View::fetch();
    }

    public function detail(){
        $uid = Cookie::get('uid');
        if ($uid) {
            $param = Request::param();
            $id = $param['id'];
            $competition = CompetitionsModel::where('id',$id)->find();
            //报名人数,报名成功了才算
            $statistics = AttendModel::where('competition',$id)->where('status','pass')->count();
            $competition->statistics = $statistics;

            //是否报名该比赛,根据status属性判断是否报名成功,
            //有新建提交和已经报名通过的的不开放报名，报名被驳回的开放报名
            $attend = AttendModel::where('competition',$id)->where('user',$uid)->find();
            //到达比赛开始时间，并且用户报名成功 开放上传按钮

//            $nowTime = date("Y-m-d H:i:s");
////            print_r($nowTime);
//            print_r($competition['start_date'] > $nowTime);

            View::assign('competition',$competition);
            View::assign('attend',$attend);

            return View::fetch();
        } else {
            return View::fetch('../view/stage/login.html');
        }
    }

    public function guides(){
        $guides = GuidesModel::select();
        View::assign('guides',$guides);
        return View::fetch();
    }
    public function guide_detail(){
        $id = Request::param()['id'];
        $guide = GuidesModel::where('id',$id)->find();
        View::assign('guide',$guide);
        return View::fetch();
    }
    public function register(){
        return View::fetch();
    }
}