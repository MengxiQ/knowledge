<?php

namespace app\controller;

use app\BaseController;

class Storage extends BaseController
{
    public function upload_image(){
        // 获取表单上传文件 例如上传了001.jpg
        $file = request()->file('image');
        // 上传到本地服务器
        $savename = \think\facade\Filesystem::putFile( 'images', $file);
        return json('/storage/' . $savename);
    }
}