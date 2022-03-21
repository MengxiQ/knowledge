<template>
  <div class="" style="display: flex;flex-wrap: wrap;justify-content: space-between;align-items: center">
      <banner-item div v-for="(ele, index) in banner" :key="index"  :item="ele" @delete="deleteItem(index)"></banner-item>
    <div class="" style="width: 655px;text-align: center">
      <el-button @click="addItem" icon="el-icon-plus" circle type="primary"
                 style="height: 100px;width: 100px;font-size: 50px"></el-button>
    </div>
  </div>
</template>

<script>
import BannerItem from './bannerItem'
export default {
  name: "banner",
  components: {BannerItem},

  props: {
    banner: Array
  },
  methods: {
    deleteItem(index){
      this.banner.splice(index,1)
    },
    addItem() {
      this.banner.push(
        {
          title: '标题',
          sub: '副标题',
          img: ''
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
