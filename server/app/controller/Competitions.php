<?php
declare (strict_types = 1);

namespace app\controller;

use app\model\CompetitionsModel;
use think\Request;

class Competitions
{
    /**
     * 显示资源列表
     *
     * @return \think\Response
     */
    public function index()
    {
        $list = CompetitionsModel::select();
        $nowTime = date("Y-m-d H:i:s");
        for($index=0;$index<count($list);$index++)
        {
            if($list[$index]['start_date'] < $nowTime && $list[$index]['end_date'] > $nowTime){
                $list[$index]['status'] = 'started';
            }else if ($list[$index]['end_date'] < $nowTime){
                $list[$index]['status'] = 'ended';
            }else if ($list[$index]['register_start_date'] < $nowTime && $list[$index]['register_end_date'] > $nowTime){
                $list[$index]['status'] = 'registerStart';
            }else if ($list[$index]['register_end_date'] < $nowTime && $list[$index]['start_date'] > $nowTime){
                $list[$index]['status'] = 'registerEnd';
            } else {
                $list[$index]['status'] = 'preview';
            }
            $list[$index]->save();
        }

        return json($list);
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
        $competitions = new CompetitionsModel;
        $competitions->save($data);
        return json(['code' => 1, 'message' => '添加成功']);
    }

    /**
     * 显示指定的资源
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function read($id)
    {
        return json(CompetitionsModel::find($id));
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
        CompetitionsModel::update($data);
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
        CompetitionsModel::destroy($id);
        return json(['code' => 1, 'message' => '删除成功']);
    }
    //上传封面
    public function upload_cover(){
        // 获取表单上传文件 例如上传了001.jpg
        $file = request()->file('img');
        // 上传到本地服务器
        $savename = \think\facade\Filesystem::putFile( 'competition/cover', $file);
        return json('/storage/' . $savename);
    }
}
