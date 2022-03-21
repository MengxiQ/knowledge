<?php
declare (strict_types = 1);

namespace app\controller;

use app\model\ContentsModel;
use think\Request;

class Contents
{
    /**
     * 显示资源列表
     * @return \think\Response
     */
    public function index()
    {
        return json(ContentsModel::select());
    }

    /**
     * 保存新建的资源
     *
     * @param  \think\Request  $request
     * @return \think\Response
     */
    public function save(Request $request)
    {
        $data = $request->post();
        $user = new ContentsModel;
        $user->save($data);
        return json(['code' => 1, 'message' => '添加成功']);
    }

    /**
     * 显示指定的资源
     *
     * @param  string  $id
     * @return \think\Response
     */
    public function read($id)
    {
        $data = ContentsModel::where('page_name',$id)->find();
        return json($data);
    }

    /**
     * 保存更新的资源
     *
     * @param  \think\Request  $request
     * @param  int  $id
     * @return \think\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->put();
        ContentsModel::update($data);
        return json(['code' => 1, 'message' => '更新成功']);
    }

    /**
     * 删除指定资源
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function delete($id)
    {
        //
    }
    public function upload_img(){
        // 获取表单上传文件 例如上传了001.jpg
        $file = request()->file('img');
        // 上传到本地服务器
        $savename = \think\facade\Filesystem::putFile( 'contents', $file);
//        $savename = \think\facade\Filesystem::putFileAs( 'users/avatar', $file, $uid );// 保存文件名为用户id,需要手动添加文件后缀和解决浏览器缓存的问题
        return json('/storage/' . $savename);
    }
}
