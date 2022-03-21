<template>
  <div class="app-container">
    <competitions-page title="最新竞赛" page-name="competitions_news" />
    <el-divider/>
    <competitions-page title="竞赛类别" page-name="competitions_category" />
  </div>
</template>

<script>
import CompetitionsPage from '@/views/contents/competitions/competitionsPage'

export default {
  name: 'Competitions',
  components: { CompetitionsPage }

}
</script>

<style scoped>

</style>
