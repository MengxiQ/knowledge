<template>
  <div class="app-container">
    <!--    <el-button-->
    <!--      size="mini"-->
    <!--      type="primary"-->
    <!--      @click="handleAdd"-->
    <!--    >添加-->
    <!--    </el-button>-->

    <div class="search-container">
      <el-input
        v-model="search.competition_title"
        size="mini"
        placeholder="赛事名称"
        style="width: 150px;"
        class="search-input"
      />
      <el-input
        v-model="search.nickname"
        size="mini"
        placeholder="用户名"
        style="width: 150px;"
        class="search-input"
      />
      <el-button icon="el-icon-search" class="" size="mini" type="primary">搜索</el-button>
    </div>
    <el-table
      :data="filterList"
      style="width: 100%"
    >
      <el-table-column
        label="id"
        prop="id"
      />

      <el-table-column
        label="用户名"
        prop="nickname"
      />
      <el-table-column
        label="竞赛名称"
        prop="competition_title"
      />

      <el-table-column
        label="报名时间"
        prop="date"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="状态"
        prop="status"
      >
        <template slot-scope="scope">
          <el-tag :type="showTagType(scope.row.status)">{{ showTagStatusName(scope.row.status) }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="报名表"
        prop="form"
      >
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click.native="handleAudit(scope.row)">审核报名</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="作品"
        prop="works"
      >
        <template slot-scope="scope">
          <el-link v-if="scope.row.works" target="_blank" :href="RESOURCE_API + scope.row.works" :underline="false">
            <el-button size="mini" type="warning">下载作品</el-button>
          </el-link>
          <el-button v-else size="mini" type="warning" disabled>未上传</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="成绩"
        prop="score"
      >
        <template slot-scope="scope">
          <el-popover
            v-if="scope.row.score"
            placement="right"
            width="400"
            trigger="click">
            <div>
              <h3><i class="el-icon-s-cooperation el-icon--left" />作品：{{ scope.row.works ? scope.row.works : '未上传' }}
              </h3>
              <h3><i class="el-icon-s-check el-icon--left" />评级：
                <el-tag slot="reference" :type="scoreMap(scope.row.score).type" class="score-btn" title="查看详情">{{ scope.row.score }}</el-tag>
              </h3>
              <h3><i class="el-icon-s-comment el-icon--left" style="" />点评：</h3>
              <el-input
                v-model="scope.row.comments"
                type="textarea"
                :rows="5"
                placeholder="请输入内容"
                readonly
              />
            </div>
            <el-tag slot="reference" :type="scoreMap(scope.row.score).type" class="score-btn" title="查看详情">{{ scope.row.score }} <i
              class="el-icon-view el-icon--right"
            /></el-tag>
          </el-popover>
          <el-tag v-else type="info" class="score-btn" title="查看详情">未评奖</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="right"
      >
        <template slot="header" slot-scope="scope">
          操作
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="primary" :disabled="!scope.row.works" @click="rating(scope.row)">评分</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="dialogFormVisible" :title="'竞赛名称：' + activeAttend.competition_title">
      <el-descriptions title="报名信息">
        <template slot="extra">
          <el-button type="primary" size="small" @click="handlePass">通过</el-button>
          <el-button type="danger" size="small" @click="handleRefuse">驳回</el-button>
        </template>
        <el-descriptions-item label="用户名">{{ formCache.nickname }}</el-descriptions-item>
        <el-descriptions-item label="姓名">{{ formCache.name }}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{ formCache.phone }}</el-descriptions-item>
        <el-descriptions-item label="邮箱">{{ formCache.email }}</el-descriptions-item>
        <el-descriptions-item label="学历">{{ formCache.xueli }}</el-descriptions-item>
        <el-descriptions-item label="学校">{{ formCache.school }}</el-descriptions-item>
        <el-descriptions-item label="联系地址">{{ formCache.address }}</el-descriptions-item>
      </el-descriptions>
      <div v-if="activeAttend.msg">
        <h4><i class="el-icon-warning" style="color: #F56C6C" />上次驳回信息:</h4>
        <el-input
          v-model="activeAttend.msg"
          type="textarea"
          :rows="5"
          readonly
          placeholder="请输入内容"
        />
      </div>
    </el-dialog>
    <el-dialog :visible.sync="dialogRatingVisible" :title="'竞赛名称：' + activeAttend.competition_title">
      <el-descriptions title="报名信息">
        <el-descriptions-item label="用户名">{{ formCache.nickname }}</el-descriptions-item>
        <el-descriptions-item label="姓名">{{ formCache.name }}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{ formCache.phone }}</el-descriptions-item>
        <el-descriptions-item label="邮箱">{{ formCache.email }}</el-descriptions-item>
        <el-descriptions-item label="学历">{{ formCache.xueli }}</el-descriptions-item>
        <el-descriptions-item label="学校">{{ formCache.school }}</el-descriptions-item>
        <el-descriptions-item label="联系地址">{{ formCache.address }}</el-descriptions-item>
      </el-descriptions>
      <div>
        <h3><i class="el-icon-s-cooperation el-icon--left" />作品：{{ activeAttend.works ? activeAttend.works : '未上传' }}
        </h3>
        <h3><i class="el-icon-s-check el-icon--left" />评级：
          <el-select v-model="activeAttend.score" placeholder="请对作品评级">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </h3>
        <h3><i class="el-icon-s-comment el-icon--left" style="" />点评：</h3>
        <el-input
          v-model="activeAttend.comments"
          type="textarea"
          :rows="5"
          placeholder="请输入内容"
        />
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogRatingVisible = false">取消</el-button>
        <el-button type="primary" @click="handleRatingSave">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { createAttend, deleteAttendById, getAttendList, updateAttend } from '@/api/attend'

export default {
  name: 'Attend',
  data() {
    return {
      options: [{
        value: '一等奖',
        label: '一等奖'
      }, {
        value: '二等奖',
        label: '二等奖'
      }, {
        value: '三等奖',
        label: '三等奖'
      }, {
        value: '未获奖',
        label: '未获奖'
      }],
      formCache: {
        competition: '',
        uname: '',
        name: '',
        phone: '',
        email: '',
        xueli: '',
        school: '',
        address: ''
      },
      activeAttend: {},
      loading: false,
      isCreate: true, // 是否是新建
      formLabelWidth: '120px',
      dialogFormVisible: false,
      dialogRatingVisible: false,
      search: {
        nickname: '',
        competition_title: ''
      },
      list: []
    }
  },
  computed: {
    BASE_API() {
      return process.env.VUE_APP_BASE_API
    },
    RESOURCE_API() {
      return process.env.VUE_APP_RESOURCE_API
    },
    filterList() {
      return this.list.filter(ele => {
        return ele.competition_title.trim().toLowerCase().includes(this.search.competition_title.trim().toLowerCase()) && ele.nickname.trim().toLowerCase().includes(this.search.nickname.trim().toLowerCase())
      })
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    scoreMap(score) {
      const temp = {}
      switch (score) {
        case '一等奖': { temp.type = 'danger'; break }
        case '二等奖': { temp.type = 'warning'; break }
        case '三等奖': { temp.type = 'primary'; break }
        case '未获奖': { temp.type = 'info'; break }
      }
      return temp
    },
    rating(row) {
      this.activeAttend = Object.assign({}, row)
      this.dialogRatingVisible = true
    },
    handleRatingSave() {
      this.update(this.activeAttend)
    },
    handleAudit(obj) {
      this.dialogFormVisible = true
      this.activeAttend = obj
      this.formCache = JSON.parse(obj.form)
    },
    handlePass() {
      this.activeAttend.status = 'pass'
      this.update(this.activeAttend)
    },
    handleRefuse() {
      this.activeAttend.status = 'refuse'
      this.$prompt('报名者报名页面将显示驳回信息.', '编辑驳回信息', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputType: 'textarea'
      }).then(({ value }) => {
        this.activeAttend.msg = value
        this.update(this.activeAttend).then(_ => {
          this.$message({
            type: 'warning',
            message: '已驳回用户的报名信息'
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    showTagStatusName(type) {
      let temp = ''
      switch (type) {
        case 'pass': {
          temp = '报名成功'
          break
        }
        case 'commit': {
          temp = '新建提交'
          break
        }
        case 'refuse': {
          temp = '审核未通过'
          break
        }
      }
      return temp
    },
    showTagType(type) {
      let temp = ''
      switch (type) {
        case 'pass': {
          temp = 'success'
          break
        }
        case 'refuse': {
          temp = 'danger'
          break
        }
        case 'commit': {
          temp = ''
          break
        }
      }
      return temp
    },
    beforeClose() {
      // this.$refs['myForm'].resetFields()
      this.form = {
        address: '',
        avatar: '',
        email: '',
        id: '',
        motto: '',
        name: '',
        password: '',
        phone: ''
      }
      this.dialogFormVisible = false
    },
    update(data) {
      return updateAttend(data).then(res => {
        console.log(res)
        this.loading = false
        this.$message.success('保存成功.')
        this.dialogFormVisible = false
        this.dialogRatingVisible = false
        this.getList()
      }).catch(e => {
        this.loading = false
        console.log(e)
        this.$message.error('保存失败.')
      })
    },
    handleSave() {
      this.loading = true
      if (this.isCreate) {
        // 不要传id属性
        const data = Object.assign({}, this.form)
        delete data.id
        createAttend(data).then(res => {
          console.log(res)
          this.loading = false
          this.$message.success('保存成功.')
          this.dialogFormVisible = false
          this.getList()
        }).catch(e => {
          this.loading = false
          console.log(e)
          this.$message.error('保存失败.')
        })
      } else {
        updateAttend(this.form).then(res => {
          console.log(res)
          this.loading = false
          this.$message.success('保存成功.')
          this.dialogFormVisible = false
          this.getList()
        }).catch(e => {
          this.loading = false
          console.log(e)
          this.$message.error('保存失败.')
        })
      }
    },
    handleAdd() {
      this.isCreate = true
      this.dialogFormVisible = true
    },
    handleEdit(index, row) {
      this.isCreate = false
      this.form = Object.assign({}, row)
      this.dialogFormVisible = true
    },
    handleDelete(index, row) {
      deleteAttendById(row.id).then(res => {
        this.$message.success(res.message)
        console.log(res)
        this.getList()
      }).catch(error => {
        console.log(error)
        this.$message.error('删除失败.')
      })
    },
    getList() {
      getAttendList().then(res => {
        this.list = res
      }).catch(error => {
        console.log(error)
        this.$message.error('获取用户列表失败.')
      })
    }
  }
}
</script>

<style scoped>
.score-btn:hover {
  cursor: pointer;
}

.search-container {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #606266;
}

.search-input {
  margin-right: 10px;
}

/deep/ .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

/deep/ .avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

</style>
