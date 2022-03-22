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
        label="时间"
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
          <el-button size="mini" type="primary" @click.native="handleAudit(scope.row)">审核</el-button>
        </template>
      </el-table-column>
      <el-table-column
        align="right"
      >
        <template slot="header" slot-scope="scope">
          操作
        </template>
        <template slot-scope="scope">
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
          <el-button type="danger" size="small" @click="handleRefuse">拒绝</el-button>
        </template>
        <el-descriptions-item label="用户名">{{ formCache.nickname }}</el-descriptions-item>
        <el-descriptions-item label="姓名">{{ formCache.name }}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{ formCache.phone }}</el-descriptions-item>
        <el-descriptions-item label="邮箱">{{ formCache.email }}</el-descriptions-item>
        <el-descriptions-item label="学历">{{ formCache.xueli }}</el-descriptions-item>
        <el-descriptions-item label="学校">{{ formCache.school }}</el-descriptions-item>
        <el-descriptions-item label="联系地址">{{ formCache.address }}</el-descriptions-item>
      </el-descriptions>
    </el-dialog>
  </div>
</template>

<script>
import { createAttend, deleteAttendById, getAttendList, updateAttend } from '@/api/attend'

export default {
  name: 'Attend',
  data() {
    return {
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
      search: {
        nickname: '',
        competition_title: ''
      },
      list: []
    }
  },
  computed: {
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
      this.update(this.activeAttend)
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
      updateAttend(data).then(res => {
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
.search-container{
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #606266;
}
.search-input{
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
