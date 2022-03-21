<template>
  <div class="container">
    <h4>{{ title }}</h4>
    <small>轮播图展示的图片.</small>
    <banner :banner="form.content.banner" />
    <el-button class="saveBtn" type="primary" @click="handleSave">保存</el-button>
  </div>
</template>

<script>
import { getContentsByPageName, updateContents } from '@/api/contents'
import Banner from '../common/banner'
export default {
  name: 'CompetitionsPage',
  components: { Banner },
  props: {
    title: String,
    pageName: String
  },
  data() {
    return {
      form: {
        // id: 3,
        page_name: '',
        content: {
          banner: [
            {
              title: '标题',
              sub: '副标题',
              img: ''
            }
          ]
        }
      }
    }
  },
  watch: {
    'pageName': {
      handler: function(val) {
        this.form.page_name = val
      },
      immediate: true
    }
  },
  created() {
    // this.getPageData()
  },
  methods: {
    handleSave() {
      const data = JSON.parse(JSON.stringify(this.form))
      data.content = JSON.stringify(data.content)
      updateContents(data).then(res => {
        console.log(res)
        this.$message.success('保存成功')
        this.getPageData()
      }).catch(e => {
        this.$message.error('保存失败')
      })
    },
    getPageData() {
      getContentsByPageName(this.pageName).then(res => {
        console.log(res)
        res.content = JSON.parse(res.content)
        this.form = res
      }).catch(e => {
        console.log(e)
        this.$message.error('获取页面信息失败')
      })
    }
  },
  mounted() {
    this.getPageData()
  }
}
</script>

<style scoped>
.container{
  position: relative;
}
.saveBtn {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
