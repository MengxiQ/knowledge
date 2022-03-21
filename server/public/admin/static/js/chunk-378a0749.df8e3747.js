(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-378a0749"],{"2dd4":function(e,t,a){"use strict";a("a709")},6355:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.handleAdd}},[e._v("添加 ")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list.filter((function(t){return!e.search||t.name.toLowerCase().includes(e.search.toLowerCase())}))}},[a("el-table-column",{attrs:{label:"id",prop:"id"}}),a("el-table-column",{attrs:{label:"用户名",prop:"nickname"}}),a("el-table-column",{attrs:{label:"真实姓名",prop:"name"}}),a("el-table-column",{attrs:{label:"密码",prop:"password"}}),a("el-table-column",{attrs:{label:"邮箱",prop:"email"}}),a("el-table-column",{attrs:{label:"电话",prop:"phone"}}),a("el-table-column",{attrs:{label:"地址",prop:"address"}}),a("el-table-column",{attrs:{label:"头像",prop:"avatar"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.avatar?a("img",{staticClass:"avatar",attrs:{src:e.RESOURCE_API+t.row.avatar}}):e._e()]}}])}),a("el-table-column",{attrs:{label:"个性签名",prop:"motto"}}),a("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"header",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"输入关键字搜索[用户名]"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]}},{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑 ")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除 ")])]}}])})],1),a("el-dialog",{attrs:{title:e.isCreate?"新建用户":"编辑用户信息",visible:e.dialogFormVisible,width:"35%","before-close":e.beforeClose},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"myForm",attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"用户名","label-width":e.formLabelWidth,prop:"name"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),a("el-form-item",{attrs:{label:"密码","label-width":e.formLabelWidth,prop:"password"}},[a("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("el-form-item",{attrs:{label:"邮箱","label-width":e.formLabelWidth,prop:"email"}},[a("el-input",{attrs:{type:"email",autocomplete:"off"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("el-form-item",{attrs:{label:"姓名","label-width":e.formLabelWidth,prop:"nickname"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"电话","label-width":e.formLabelWidth,prop:"phone"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),a("el-form-item",{attrs:{label:"地址","label-width":e.formLabelWidth,prop:"address"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),a("el-form-item",{attrs:{label:"头像","label-width":e.formLabelWidth,prop:"avatar"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/users/upload_avatar",name:"avatar","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.form.avatar?a("img",{staticClass:"avatar",attrs:{src:e.form.avatar}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"个性签名","label-width":e.formLabelWidth,prop:"motto"}},[a("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:e.form.motto,callback:function(t){e.$set(e.form,"motto",t)},expression:"form.motto"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.handleSave}},[e._v("保存")])],1)],1)],1)},l=[],r=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("c24f")),s={name:"Users",data:function(){return{loading:!1,isCreate:!0,formLabelWidth:"120px",dialogFormVisible:!1,temp:{address:"",avatar:"",email:"",id:"",motto:"",name:"",nickname:"",password:"",phone:""},form:{},search:"",list:[]}},computed:{RESOURCE_API:function(){return"http://localhost:8090/"}},mounted:function(){this.form=this.temp,this.getList()},methods:{beforeClose:function(){this.form=this.temp,this.dialogFormVisible=!1},handleSave:function(){var e=this;if(this.loading=!0,this.isCreate){var t=Object.assign({},this.form);delete t.id,Object(r["a"])(t).then((function(t){console.log(t),e.loading=!1,e.$message.success("保存成功."),e.dialogFormVisible=!1,e.getList()})).catch((function(t){e.loading=!1,console.log(t),e.$message.error("保存失败.")}))}else Object(r["g"])(this.form).then((function(t){console.log(t),e.loading=!1,e.$message.success("保存成功."),e.dialogFormVisible=!1,e.getList()})).catch((function(t){e.loading=!1,console.log(t),e.$message.error("保存失败.")}))},handleAdd:function(){this.isCreate=!0,this.dialogFormVisible=!0},handleEdit:function(e,t){this.isCreate=!1,this.form=Object.assign({},t),this.dialogFormVisible=!0},handleDelete:function(e,t){var a=this;Object(r["b"])(t.id).then((function(e){a.$message.success(e.message),console.log(e),a.getList()})).catch((function(e){console.log(e),a.$message.error("删除失败.")}))},getList:function(){var e=this;Object(r["d"])().then((function(t){e.list=t})).catch((function(t){console.log(t),e.$message.error("获取用户列表失败.")}))},handleAvatarSuccess:function(e,t){this.form.avatar=URL.createObjectURL(t.raw)},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&a}}},i=s,n=(a("2dd4"),a("2877")),c=Object(n["a"])(i,o,l,!1,null,"a36001d8",null);t["default"]=c.exports},a709:function(e,t,a){}}]);