<template>
  <div class="app-container">
    <h2>轮播图</h2>
    <p style="color: #2c3034;font-size: small">轮播图展示的图片.</p>
    <banner :banner="form.content.banner" />
    <el-button class="saveBtn" type="primary" @click="handleSave">保存</el-button>
    <el-divider />
    <h2>推荐列表</h2>
    <p style="color: #2c3034;font-size: small">选择首页推荐的比赛列表.</p>
    <recommend :content="form.content" />
    <div style="height: 200px;width: 100%" />
  </div>
</template>

<script>
import Banner from '../common/banner'
import Recommend from './recommend'
import { getContentsByPageName, updateContents } from '@/api/contents'

export default {
  name: 'Home',
  components: { Banner, Recommend },
  data() {
    return {
      form: {
        id: 1,
        page_name: 'index',
        content: {
          banner: [
            {
              title: '标题',
              sub: '副标题',
              img: '',
              link: '#'
            }
          ],
          recommend: []
        }
      }
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
  created() {
    this.getHomePage()
  },
  methods: {
    handleSave() {
      const data = JSON.parse(JSON.stringify(this.form))
      data.content = JSON.stringify(data.content)
      updateContents(data).then(res => {
        console.log(res)
        this.$message.success('保存成功')
        this.getHomePage()
      }).catch(e => {
        this.$message.error('保存失败')
      })
    },
    getHomePage() {
      getContentsByPageName('index').then(res => {
        console.log(res)
        res.content = JSON.parse(res.content)
        this.form = res
      }).catch(e => {
        console.log(e)
        this.$message.error('获取页面信息失败')
      })
    }
  }

}
</script>

<style scoped>
.saveBtn {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
