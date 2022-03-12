<?php
declare (strict_types = 1);

namespace app\controller;

use app\model\CompetitionTypeModel;
use think\Request;

class CompetitionType
{
    /**
     * 显示资源列表
     *
     * @return \think\Response
     */
    public function index()
    {
        return json(CompetitionTypeModel::select());
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
        $competitions = new CompetitionTypeModel;
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
        return json(CompetitionTypeModel::find($id));
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
        CompetitionTypeModel::update($data);
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
        CompetitionTypeModel::destroy($id);
        return json(['code' => 1, 'message' => '删除成功']);
    }
}
