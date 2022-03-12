<template>
  <div class="app-container">
    <el-button
      size="mini"
      type="primary"
      @click="handleAdd"
    >添加
    </el-button>
    <el-table
      :data="list.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column
        label="id"
        prop="id"
      />
      <el-table-column
        label="类型"
        prop="type"
      >
        <template slot-scope="scope">
          {{mapType(scope.row.type)}}
        </template>
      </el-table-column>
      <el-table-column
        label="标题"
        prop="title"
      />
      <el-table-column
        label="描述"
        prop="desc"
      >
        <template slot-scope="scope">
          <el-button size="mini" @click.native="showArticle(scope.row.desc)">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="主办方"
        prop="organizer"
      >
        <template slot-scope="scope">
          {{ scope.row.organizer.join() }}
        </template>
      </el-table-column>
      <el-table-column
        label="开始时间"
        prop="start_date"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span style="margin-left: 10px">{{ scope.row.start_date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="结束时间"
        prop="start_date"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span style="margin-left: 10px">{{ scope.row.end_date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="报名开始"
        prop="register_start_date"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />

          <span style="margin-left: 10px">{{ scope.row.register_start_date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="报名结束"
        prop="register_end_date"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span style="margin-left: 10px">{{ scope.row.register_end_date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="竞赛介绍"
        prop="introduce"
      >
        <template slot-scope="scope">
          <el-button size="mini" @click.native="showArticle(scope.row.introduce)">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="竞赛规则"
        prop="rules"
      >
        <template slot-scope="scope">
          <el-button size="mini" @click.native="showArticle(scope.row.rules)">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="奖项设置"
        prop="awards"
      >
        <template slot-scope="scope">
          <el-button size="mini" @click.native="showArticle(scope.row.awards)">查看</el-button>
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
        align="right"
      >
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索[用户名]"
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
      v-if="form"
      :title="isCreate ? '新建竞赛项目' : '编辑竞赛信息'"
      :visible.sync="dialogFormVisible"
      width="80%"
      :before-close="beforeClose"
    >
      <el-form ref="myForm" :model="form">
        <el-form-item label="竞赛类别" :label-width="formLabelWidth" prop="type">
          <el-select v-model="form.type" placeholder="请竞赛类型">
            <el-option
              v-for="item in competitionTypeList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="标题" :label-width="formLabelWidth" prop="title">
          <el-input v-model="form.title" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="竞赛描述" :label-width="formLabelWidth" prop="desc">
          <el-input v-model="form.desc" type="textarea" autocomplete="off" />
        </el-form-item>
        <el-form-item label="主办方列表" :label-width="formLabelWidth" prop="organizer">
          <el-select
            v-model="form.organizer"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="输入并回车可创建条目"
          >
            <!--            <el-option-->
            <!--              v-for="item in options"-->
            <!--              :key="item.value"-->
            <!--              :label="item.label"-->
            <!--              :value="item.value">-->
            <!--            </el-option>-->
          </el-select>
        </el-form-item>
        <el-form-item label="报名时间" :label-width="formLabelWidth" prop="">
          <el-date-picker
            v-model="registerStartEndRange"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
        </el-form-item>
        <el-form-item label="竞赛时间" :label-width="formLabelWidth" prop="">
          <el-date-picker
            v-model="competitionStartEndRange"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
        </el-form-item>
        <el-form-item label="竞赛介绍" :label-width="formLabelWidth" prop="motto">
          <editor :content.sync="form.introduce" />
          <!--          <el-input v-model="form.introduce" type="textarea" autocomplete="off"/>-->
        </el-form-item>
        <el-form-item label="竞赛规则" :label-width="formLabelWidth" prop="rules">
          <editor :content.sync="form.rules" />
          <!--          <el-input v-model="form.rules" type="textarea" autocomplete="off"/>-->
        </el-form-item>
        <el-form-item label="奖项设置" :label-width="formLabelWidth" prop="awards">
          <editor :content.sync="form.awards" />
          <!--          <el-input v-model="form.awards" type="textarea" autocomplete="off"/>-->
        </el-form-item>
        <el-form-item label="项目状态" :label-width="formLabelWidth" prop="status">
          <el-select v-model="form.status" placeholder="请选择">
            <el-option :key="0" label="预告" value="preview" />
            <el-option :key="1" label="报名中" value="register" />
            <el-option :key="2" label="进行中" value="begin" />
            <el-option :key="3" label="已结束" value="end" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" :loading="loading" @click="handleSave">保存</el-button>
      </div>
    </el-dialog>
    <el-dialog
      :title="'预览'"
      :visible.sync="showArticleVisible"
    >
      <div v-html="showArticleCache" />
    </el-dialog>
  </div>
</template>

<script>
import { createCompetitions, deleteCompetitionsById, getCompetitionsList, updateCompetitions } from '@/api/competitions'
import editor from '@/components/editor/editor'
import { getCompetitionTypeList } from '@/api/competitionType'

export default {
  name: 'CompetitionsList',
  components: { editor },
  data() {
    return {
      competitionStartEndRange: [], // 竞赛的起止时间
      registerStartEndRange: [], // 竞赛报名的起止时间
      loading: false,
      isCreate: true, // 是否是新建
      formLabelWidth: '120px',
      dialogFormVisible: false,
      temp: {
        awards: '',
        desc: '',
        id: null,
        introduce: '',
        organizer: '',
        register_start_date: '',
        register_end_date: '',
        rules: '',
        start_date: '',
        end_date: '',
        status: '',
        title: '',
        type: null
      },
      form: {},
      search: '',
      list: [],
      competitionTypeList: [],
      showArticleCache: '',
      showArticleVisible: false
    }
  },
  watch: {
    registerStartEndRange(newVal) {
      this.form.register_start_date = newVal[0]
      this.form.register_end_date = newVal[1]
    },
    competitionStartEndRange(newVal) {
      this.form.start_date = newVal[0]
      this.form.end_date = newVal[1]
    }
  },
  created() {
    this.form = this.temp
  },
  methods: {
    mapType(typeId) {
      return this.competitionTypeList.find(ele => ele.id === Number(typeId)).name;
    },
    showArticle(article) {
      this.showArticleCache = article
      this.showArticleVisible = true
    },
    showTagStatusName(type) {
      let temp = ''
      switch (type) {
        case 'register': {
          temp = '报名中'
          break
        }
        case 'end': {
          temp = '已结束'
          break
        }
        case 'begin': {
          temp = '进行中'
          break
        }
        case 'preview': {
          temp = '预告'
          break
        }
      }
      return temp
    },
    showTagType(type) {
      let temp = ''
      switch (type) {
        case 'register': {
          temp = 'success'
          break
        }
        case 'end': {
          temp = 'danger'
          break
        }
        case 'preview': {
          temp = 'info'
          break
        }
      }
      return temp
    },
    beforeClose() {
      // this.$refs['myForm'].resetFields()
      this.form = this.temp
      this.dialogFormVisible = false
    },
    handleSave() {
      this.loading = true

      const data = Object.assign({}, this.form)
      data.organizer = JSON.stringify(this.form.organizer)

      if (this.isCreate) {
        // 不要传id属性
        delete data.id
        createCompetitions(data).then(res => {
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
        updateCompetitions(data).then(res => {
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
      this.registerStartEndRange = [row.register_start_date, row.register_end_date]
      this.competitionStartEndRange = [row.start_date, row.end_date]
      this.dialogFormVisible = true
    },
    handleDelete(index, row) {
      deleteCompetitionsById(row.id).then(res => {
        this.$message.success(res.message)
        console.log(res)
        this.getList()
      }).catch(error => {
        console.log(error)
        this.$message.error('删除失败.')
      })
    },
    getList() {
      getCompetitionsList().then(res => {
        this.list = res
        this.list.forEach(ele => {
          ele.organizer = JSON.parse(ele.organizer)// 数据库存的json类型
        })
      }).catch(error => {
        console.log(error)
        this.$message.error('获取列表失败.')
      })
    },
    getTypes() {
      getCompetitionTypeList().then(res => {
        this.competitionTypeList = res
      }).catch(error => {
        console.log(error)
        this.$message.error('获取列表失败.')
      })
    }
  },
  mounted() {
    this.getList()
    this.getTypes()
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
