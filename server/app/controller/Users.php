<?php
declare (strict_types=1);

namespace app\controller;

use app\model\UsersModel;
use think\Exception;
use think\Request;

class Users
{
    /**
     * 显示资源列表
     *
     * @return \think\Response
     */
    public function index()
    {
        return json(UsersModel::getUsersList());
        //
    }

    /**
     * 保存新建的资源
     *
     * @param \think\Request $request
     * @return \think\Response
     */
    public function save(Request $request)
    {
        $data = $request->post();
        $user = new UsersModel;
        $user->save($data);
        return json(['code' => 1, 'message' => '添加成功']);
    }

    /**
     * 显示指定的资源
     *
     * @param int $id
     * @return \think\Response
     */
    public function read($id)
    {
        return json(UsersModel::find($id));
    }

    /**
     * 保存更新的资源
     *
     * @param \think\Request $request
     * @param int $id
     * @return \think\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->put();
        UsersModel::update($data);
        return json(['code' => 1, 'message' => '更新成功']);
    }

    /**
     * 删除指定资源
     *
     * @param int $id
     * @return \think\Response
     */
    public function delete($id)
    {
        UsersModel::destroy($id);
        return json(['code' => 1, 'message' => '删除成功']);
    }


}
