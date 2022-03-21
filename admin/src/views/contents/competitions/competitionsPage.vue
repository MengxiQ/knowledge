<template>
  <div>
    <h4>最新竞赛</h4>
    <banner :banner="form.content.banner" />
  </div>
</template>

<script>
import { getContentsByPageName, updateContents } from '@/api/contents'
import Banner from '../common/banner'
export default {
  name: 'CompetitionsNews',
  components: { Banner },
  props: {
    pageName: String
  },
  data() {
    return {
      form: {
        id: 2,
        page_name: 'competitions_news',
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
  }
}
</script>

<style scoped>

</style>
