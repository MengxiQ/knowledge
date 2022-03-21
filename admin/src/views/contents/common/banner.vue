<template>
  <div class="" style="display: flex;flex-wrap: wrap;justify-content: space-between;align-items: center">
    <banner-item v-for="(ele, index) in banner" :key="index" div :item="ele" @delete="deleteItem(index)" />
    <div class="" style="width: 655px;text-align: center">
      <el-button
        icon="el-icon-plus"
        circle
        type="primary"
        style="height: 100px;width: 100px;font-size: 50px"
        @click="addItem"
      />
    </div>
  </div>
</template>

<script>
import BannerItem from './bannerItem'
export default {
  name: 'Banner',
  components: { BannerItem },

  props: {
    banner: Array
  },
  methods: {
    deleteItem(index) {
      this.banner.splice(index, 1)
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
