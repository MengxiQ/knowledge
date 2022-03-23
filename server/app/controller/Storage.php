<?php

namespace app\controller;

use app\BaseController;
use app\model\AttendModel;
use think\facade\Cookie;

class Storage extends BaseController
{
    public function upload_image(){
        // 获取表单上传文件 例如上传了001.jpg
        $file = request()->file('image');
        // 上传到本地服务器
        $savename = \think\facade\Filesystem::putFile( 'images', $file);
        return json('/storage/' . $savename);
    }
    public function upload_works(){
        $uid = Cookie::get('uid');
        $file = request()->file('works');
        $attend_id = request()->param('id');
        $attend_user = request()->param('user');
        $attend_competition = request()->param('competition');
        $attend = AttendModel::where('id',$attend_id)->find();
        $savename = \think\facade\Filesystem::putFileAs( 'works/uid_'.$uid, $file, $file->getOriginalName());
        $attend['works'] = '/storage/' . $savename;
        $attend->save();
        return json($attend);
    }
}