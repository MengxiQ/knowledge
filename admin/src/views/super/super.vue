<template>
  <div class="app-container">
    <el-button
      size="mini"
      type="primary"
      @click="handleAdd"
    >添加
    </el-button>
    <div><small style="color: #75797e">管理员用户.</small></div>
    <el-table
      :data="list.filter(data => !search || data.nickname.toLowerCase().includes(search.toLowerCase()))"
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
        label="真实姓名"
        prop="name"
      />
      <el-table-column
        label="密码"
        prop="password"
      >
        <template slot-scope="scope">
          <el-input size="small" type="password" :value="scope.row.password" show-password/>
        </template>
      </el-table-column>
      <el-table-column
        label="邮箱"
        prop="email"
      />
      <el-table-column
        label="电话"
        prop="phone"
      />
      <el-table-column
        label="地址"
        prop="address"
      />
      <el-table-column
        label="头像"
        prop="avatar"
      >
        <template slot-scope="scope">
          <el-image
            class="avatar"
            style="width: 100px; height: 100px"
            :src="RESOURCE_API + scope.row.avatar"
            :preview-src-list="[RESOURCE_API + scope.row.avatar]"
            fit="fill"></el-image>
          <!--          <img v-if="scope.row.avatar" :src="scope.row.avatar" class="avatar">-->
        </template>
      </el-table-column>
      <el-table-column
        label="个性签名"
        prop="motto"
      />
      <el-table-column
        align="right"
      >
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="搜索[用户名]"
          />
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :title="isCreate ? '新建用户' : '编辑用户信息'"
      :visible.sync="dialogFormVisible"
      width=""
      :before-close="beforeClose"
    >
      <el-form ref="myForm" :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.nickname" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
          <el-input v-model="form.password" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
          <el-input v-model="form.email" type="email" autocomplete="off" />
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="nickname">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="form.phone" autocomplete="off" />
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth" prop="address">
          <el-input v-model="form.address" autocomplete="off" />
        </el-form-item>
        <el-form-item label="头像" :label-width="formLabelWidth" prop="avatar">
          <el-upload
            class="avatar-uploader"
            :action="BASE_API + '/users/upload_avatar'"
            name="avatar"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="form.avatar" :src="RESOURCE_API + form.avatar" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
        </el-form-item>
        <el-form-item label="个性签名" :label-width="formLabelWidth" prop="motto">
          <el-input v-model="form.motto" type="textarea" autocomplete="off" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" :loading="loading" @click="handleSave">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { createUser, deleteUserById, getUsersList, updateUser } from '@/api/super'

export default {
  name: 'Super',
  data() {
    return {
      loading: false,
      isCreate: true, // 是否是新建
      formLabelWidth: '120px',
      dialogFormVisible: false,
      temp: {
        address: '',
        avatar: '',
        email: '',
        id: '',
        motto: '',
        name: '',
        nickname: '',
        password: '',
        phone: ''
      },
      form: {},
      search: '',
      list: []
    }
  },
  computed: {
    BASE_API() {
      return process.env.VUE_APP_BASE_API
    },
    RESOURCE_API() {
      return process.env.VUE_APP_RESOURCE_API
    }
  },
  mounted() {
    this.form = this.temp
    this.getList()
  },
  methods: {
    beforeClose() {
      // this.$refs['myForm'].resetFields()
      this.form = this.temp
      this.dialogFormVisible = false
    },
    handleSave() {
      this.loading = true
      if (this.isCreate) {
        // 不要传id属性
        const data = Object.assign({}, this.form)
        delete data.id
        createUser(data).then(res => {
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
        updateUser(this.form).then(res => {
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
      deleteUserById(row.id).then(res => {
        this.$message.success(res.message)
        console.log(res)
        this.getList()
      }).catch(error => {
        console.log(error)
        this.$message.error('删除失败.')
      })
    },
    getList() {
      getUsersList().then(res => {
        this.list = res
      }).catch(error => {
        console.log(error)
        this.$message.error('获取用户列表失败.')
      })
    },
    // 上传头像
    handleAvatarSuccess(res, file) {
      // this.form.avatar = URL.createObjectURL(file.raw)
      this.form.avatar = res
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style scoped>
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
