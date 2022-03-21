<template>
  <el-transfer
    v-model="content.recommend"
    filterable
    :filter-method="filterMethod"
    filter-placeholder="搜索赛事名称"
    :titles="['赛事列表', '已经选择']"
    :button-texts="['到左边', '到右边']"
    :data="data"
  />

</template>

<script>
import { getCompetitionsList } from '@/api/competitions'

export default {
  name: 'Recommend',
  props: {
    content: Object
  },
  data() {
    return {
      data: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    filterMethod() {
      return this.data
    },
    getData() {
      getCompetitionsList().then(res => {
        this.data = res.map(ele => {
          return {
            key: ele.id,
            label: ele.title
          }
        })
      })
    }
  }
}
</script>

<style scoped>
/deep/ .el-transfer-panel{
  width: 400px;
}
</style>
