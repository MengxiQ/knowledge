<template>
  <div class="ArticleDetail">
    <div ref="editor" style="text-align:left"/>
  </div>
</template>

<script>
import axios from 'axios'
import { Loading } from 'element-ui'
import E from 'wangeditor'

var editor

export default {
  name: 'Edit',
  props: {
    content: String
  },
  data: function() {
    return {
      Title: ''
    }
  },
  mounted: function() {
    var That = this
    editor = new E(this.$refs.editor)
    editor.customConfig = {
      onchange: function(html) {
        console.log(html)

        // That.Content = html
      },
      uploadImgServer: '/api/UploadImg', // 上传图片到服务器
      uploadFileName: 'Content', // 后端使用这个字段获取图片信息
      uploadImgMaxLength: 1 // 限制一次最多上传 1 张图片
    }
    editor.create()
    editor.txt.html(this.content)

    // 配置 onchange 回调函数
    editor.config.onchange = function(newHtml) {
      That.$emit('update:content', newHtml)
    }
    // 配置触发 onchange 的时间频率，默认为 200ms
    editor.config.onchangeTimeout = 500 // 修改为 500ms
  }
}
</script>

<style scoped>

</style>
