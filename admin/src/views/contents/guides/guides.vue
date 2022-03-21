<template>
  <div class="app-container">
    <el-button
      size="mini"
      type="primary"
      @click="handleAdd"
    >添加
    </el-button>
    <el-table
      :data="list.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column
        label="id"
        prop="id"
      />
      <el-table-column
        label="标题"
        prop="title"
      />
      <el-table-column
        label="发布时间"
        prop="date"
      >
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="right"
      >
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索[标题]"
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
      :title="isCreate ? '新建文章' : '编辑文章'"
      :visible.sync="dialogFormVisible"
      fullscreen
      :before-close="beforeClose"
    >
      <el-form ref="myForm" :model="form">
        <el-form-item label="标题" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.title" autocomplete="off" />
        </el-form-item>
        <el-form-item label="正文" :label-width="formLabelWidth" prop="password">
          <template>
            <editor :content.sync="form.content" />
          </template>
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

import Editor from '../../../components/editor/editor'
import { createGuides, deleteGuidesById, getGuidesList, updateGuides } from '@/api/guides'
export default {
  name: 'Users',
  components: { Editor },
  data() {
    return {
      loading: false,
      isCreate: true, // 是否是新建
      formLabelWidth: '120px',
      dialogFormVisible: false,
      temp: {
        title: '',
        date: new Date().toLocaleString(),
        content: ''
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
        createGuides(data).then(res => {
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
        updateGuides(this.form).then(res => {
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
      deleteGuidesById(row.id).then(res => {
        this.$message.success(res.message)
        console.log(res)
        this.getList()
      }).catch(error => {
        console.log(error)
        this.$message.error('删除失败.')
      })
    },
    getList() {
      getGuidesList().then(res => {
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
