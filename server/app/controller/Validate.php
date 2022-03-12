<?php

namespace app\controller;

use app\model\UsersModel;
use think\Request;
use think\facade\Cookie;

class Validate
{
    public function login(Request $request)
    {
        try {
            $data = $request->post();
            $user = UsersModel::where('email', $data['email'])->find();
            if ($user['password'] === $data['password']) {
                Cookie::set('uid', $user['id'], 3600);
                Cookie::set('uname', $user['nickname'], 3600);
                return json(['code' => 1, 'message' => '登录成功']);
            } else {
                return json(['code' => 0, 'message' => '账户或者密码错误']);
            }

        } catch (\Exception $exception) {
            return json(['code' => 0, 'message' => '账户不存在']);
        }

    }
}