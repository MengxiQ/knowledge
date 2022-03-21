<template>
  <div class="ArticleDetail">
    <el-upload
      class="upload-demo"
      :action="BASE_API + '/storage/image'"
      name="image"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      list-type="picture"
    >
      <div slot="file" slot-scope="{file}">
        <img
          :src="file.url"
          alt=""
          class="el-upload-list__item-thumbnail"
        ><a class="el-upload-list__item-name"><i class="el-icon-document" />
          <small>图片地址：</small><span class="el-icon-document-copy" title="单击或者双击复制内容" @click="copy" @dblclick="copy">{{ RESOURCE_API }}{{ file.response }}</span>
        </a>

      </div>
      <el-button size="small" type="primary">上传图片</el-button>
      <!--      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
    </el-upload>
    <div ref="editor" class="editor" style="text-align:left" />
  </div>
</template>

<script>
import E from 'wangeditor'

var editor

export default {
  name: 'Edit',
  props: {
    content: String
  },
  data: function() {
    return {
      Title: '',
      fileList: []
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
  mounted: function() {
    var That = this
    editor = new E(this.$refs.editor)
    editor.config.height = 'auto'
    // editor.config.uploadImgServer = this.BASE_API + '/content/image'
    editor.customConfig = {
      onchange: function(html) {
        // That.Content = html
      }
      // uploadImgServer: '/api/UploadImg', // 上传图片到服务器
      // uploadFileName: 'Content', // 后端使用这个字段获取图片信息
      // uploadImgMaxLength: 1 // 限制一次最多上传 1 张图片
    }
    editor.create()
    editor.txt.html(this.content)

    // 配置 onchange 回调函数
    editor.config.onchange = function(newHtml) {
      That.$emit('update:content', newHtml)
    }
    // 配置触发 onchange 的时间频率，默认为 200ms
    editor.config.onchangeTimeout = 500 // 修改为 500ms
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    copy(e) {
      const value = e.srcElement.innerText
      const textareaC = document.createElement('textarea')
      textareaC.setAttribute('readonly', 'readonly') // 设置只读属性防止手机上弹出软键盘
      textareaC.value = value // 上面selectText函数返回值赋给textarea的value
      document.body.appendChild(textareaC) // 将textarea添加为body子元素
      textareaC.select()
      const res = document.execCommand('copy')
      document.body.removeChild(textareaC)// 移除DOM元素
      this.$message.success('复制成功')
      console.log('复制成功')
      console.log(res)// res为复制结果，是一个布尔值
    }
  }
}
</script>

<style scoped>
.editor {
  /*height: 500px;*/
}
</style>
