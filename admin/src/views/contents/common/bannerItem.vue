<template>
  <div class="box">
    <el-image
      :src="RESOURCE_API + item.img"
      fit="fill"
      @click="isEdit = !isEdit"
    />
    <div class="mask">
      <h4 class="title">{{ item.title }}</h4>
      <p class="sub">{{ item.sub }}</p>
    </div>

    <div class="opration">
      <span class="el-icon-edit" @click="isEdit = !isEdit" />
      <span class="el-icon-delete" @click="$emit('delete')" />
    </div>
    <el-dialog :visible.sync="isEdit" title="编辑">
      <el-form v-model="item" label-position="left" label-width="100px">
        <el-form-item label="图片">
          <el-upload
            class="avatar-uploader"
            :action="BASE_API + 'contents/upload_img'"
            name="img"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"

          >
<!--            :before-upload="beforeAvatarUpload"-->
            <img v-if="item.img" :src="RESOURCE_API + item.img" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="item.title" />
        </el-form-item>
        <el-form-item label="副标题">
          <el-input v-model="item.sub" />
        </el-form-item>
        <el-form-item label="链接">
          <el-input v-model="item.link" />
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>

</template>

<script>
export default {
  name: 'BannerItem',
  props: {
    item: Object
  },
  data() {
    return {
      isEdit: false
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
  methods: {
    handleAvatarSuccess(res, file) {
      this.item.img = res
      // this.item.img = URL.createObjectURL(file.raw);
    },
    // beforeAvatarUpload(file) {
    //   const isJPG = file.type === 'image/jpeg'
    //   const isLt2M = file.size / 1024 / 1024 < 2
    //
    //   if (!isJPG) {
    //     this.$message.error('上传头像图片只能是 JPG 格式!')
    //   }
    //   if (!isLt2M) {
    //     this.$message.error('上传头像图片大小不能超过 2MB!')
    //   }
    //   return isJPG && isLt2M
    // }
  }
}
</script>

<style scoped>
.opration {
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  font-weight: bold;

}
.opration span{
  margin-right: 10px;
}
.opration:hover {
  cursor: pointer;
}
.box {
  width: auto;
  height: auto;
  position: relative;

}

.mask {
  pointer-events: none;
  position: absolute;
  width: 100%;
  //background-color: #0c63e4;
  bottom: 0;
  text-align: center;
}

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
  width: 585px;
  height: 178px;
  line-height: 178px;
  text-align: center;

}
/deep/ .avatar-uploader-icon:hover {
   border-color: #409EFF;
 }
.avatar {
  width: 585px;
  height: 178px;
  display: block;
}
/deep/ .el-image{
  height: 200px;
  width: 655px;
}
</style>
