<?php

namespace app\controller;

use app\model\SuperModel;
use app\model\UsersModel;
use think\Request;
use think\facade\Cookie;
use Firebase\JWT\ExpiredException;
use Firebase\JWT\JWT as JWTUtil;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

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
                Cookie::set('avatar', $user['avatar'], 3600);
                return json(['code' => 1, 'message' => '登录成功']);
            } else {
                return json(['code' => 0, 'message' => '账户或者密码错误']);
            }

        } catch (\Exception $exception) {
            return json(['code' => 0, 'message' => '账户不存在']);
        }

    }

    public function superLogin(Request $request)
    {
        try {
            $data = $request->post();
            $user = SuperModel::where('nickname', $data['nickname'])->find();
            if ($user['password'] === $data['password']) {
                $key = md5('LYL'); //jwt的签发密钥，验证token的时候需要用到
                $time = time(); //签发时间
                $expire = $time + 14400; //过期时间
                $token = array(
                    "id" => $user->id,
                    "iss" => "乐高学院",//签发组织
                    "aud" => "LYL", //签发作者
                    "iat" => $time,
                    "nbf" => $time,
                    "exp" => $expire
                );
                $jwt = JWTUtil::encode($token, $key, 'HS256');
                return json(['code' => 1, 'message' => '登录成功', 'token' => $jwt]);
            } else {
                return json(['code' => 0, 'message' => '账户或者密码错误']);
            }

        } catch (\Exception $exception) {
            return json(['code' => 0, 'message' => '账户不存在']);
        }

    }

    public function superInfo(Request $request)
    {
        try {
            $jwt = $request->param('token');
//            $jwt= input("jwt");
            $key = md5('LYL'); //jwt的签发密钥，验证token的时候需要用到

            $decoded = JWTUtil::decode($jwt, new Key($key, 'HS256'));

            $user = SuperModel::where('id',$decoded->id)->find();

//                $jwtAuth = json_encode();
//                $authInfo = json_decode($jwtAuth,true);

//                if (!$authInfo['user_id']){
//                    json(['code' => 0, 'message' => '用户不存在']);
//                }
            $user->password = '*';
            return json(['code' => 0, 'data' => $user]);

//            }catch (ExpiredException $e){
//                json(['code' => 0, 'message' => 'token过期']);
//            }catch (\Exception $e){
//                return json(['code' => 0, 'message' => $e->getMessage()]);
//            }

        } catch (\Exception $exception) {
            return json(['code' => 0, 'message' => '服务端异常']);
        }
    }
}