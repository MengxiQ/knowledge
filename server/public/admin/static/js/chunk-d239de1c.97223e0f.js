(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d239de1c"],{"0c6d":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("competitions-page",{attrs:{title:"最新竞赛","page-name":"competitions_news"}}),n("competitions-page",{attrs:{title:"竞赛类别","page-name":"competitions_category"}})],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h4",[t._v(t._s(t.title))]),n("banner",{attrs:{banner:t.form.content.banner}}),n("el-button",{staticClass:"saveBtn",attrs:{type:"primary"},on:{click:t.handleSave}},[t._v("保存")])],1)},r=[],c=(n("e9c4"),n("7561")),o=n("d690"),l={name:"CompetitionsPage",components:{Banner:o["a"]},props:{title:String,pageName:String},data:function(){return{form:{page_name:"",content:{banner:[{title:"标题",sub:"副标题",img:""}]}}}},watch:{pageName:{handler:function(t){this.form.page_name=t},immediate:!0}},created:function(){},methods:{handleSave:function(){var t=this,e=JSON.parse(JSON.stringify(this.form));e.content=JSON.stringify(e.content),Object(c["b"])(e).then((function(e){console.log(e),t.$message.success("保存成功"),t.getPageData()})).catch((function(e){t.$message.error("保存失败")}))},getPageData:function(){var t=this;Object(c["a"])(this.pageName).then((function(e){console.log(e),e.content=JSON.parse(e.content),t.form=e})).catch((function(e){console.log(e),t.$message.error("获取页面信息失败")}))}},mounted:function(){this.getPageData()}},u=l,m=(n("16f4"),n("2877")),f=Object(m["a"])(u,s,r,!1,null,"4aaf3c26",null),d=f.exports,p={name:"Competitions",components:{CompetitionsPage:d}},g=p,h=Object(m["a"])(g,i,a,!1,null,"68f143e2",null);e["default"]=h.exports},"16f4":function(t,e,n){"use strict";n("2b89")},"2b89":function(t,e,n){},7561:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));var i=n("b775");function a(t){return Object(i["a"])({url:"/contents/"+t,method:"get"})}function s(t){return Object(i["a"])({url:"/contents/"+t.id,method:"put",data:t})}},a434:function(t,e,n){"use strict";var i=n("23e7"),a=n("23cb"),s=n("a691"),r=n("50c4"),c=n("7b0b"),o=n("65f0"),l=n("8418"),u=n("1dde"),m=n("ae40"),f=u("splice"),d=m("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,g=Math.min,h=9007199254740991,b="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!f||!d},{splice:function(t,e){var n,i,u,m,f,d,v=c(this),_=r(v.length),S=a(t,_),C=arguments.length;if(0===C?n=i=0:1===C?(n=0,i=_-S):(n=C-2,i=g(p(s(e),0),_-S)),_+n-i>h)throw TypeError(b);for(u=o(v,i),m=0;m<i;m++)f=S+m,f in v&&l(u,m,v[f]);if(u.length=i,n<i){for(m=S;m<_-i;m++)f=m+i,d=m+n,f in v?v[d]=v[f]:delete v[d];for(m=_;m>_-i+n;m--)delete v[m-1]}else if(n>i)for(m=_-i;m>S;m--)f=m+i-1,d=m+n-1,f in v?v[d]=v[f]:delete v[d];for(m=0;m<n;m++)v[m+S]=arguments[m+2];return v.length=_-i+n,u}})},c4c2:function(t,e,n){"use strict";n("fa69")},d690:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","flex-wrap":"wrap","justify-content":"space-between","align-items":"center"}},[t._l(t.banner,(function(e,i){return n("banner-item",{key:i,attrs:{div:"",item:e},on:{delete:function(e){return t.deleteItem(i)}}})})),n("div",{staticStyle:{width:"655px","text-align":"center"}},[n("el-button",{staticStyle:{height:"100px",width:"100px","font-size":"50px"},attrs:{icon:"el-icon-plus",circle:"",type:"primary"},on:{click:t.addItem}})],1)],2)},a=[],s=(n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("el-image",{attrs:{src:t.RESOURCE_API+t.item.img,fit:"fill"},on:{click:function(e){t.isEdit=!t.isEdit}}}),n("div",{staticClass:"mask"},[n("h4",{staticClass:"title"},[t._v(t._s(t.item.title))]),n("p",{staticClass:"sub"},[t._v(t._s(t.item.sub))])]),n("div",{staticClass:"opration"},[n("span",{staticClass:"el-icon-edit",on:{click:function(e){t.isEdit=!t.isEdit}}}),n("span",{staticClass:"el-icon-delete",on:{click:function(e){return t.$emit("delete")}}})]),n("el-dialog",{attrs:{visible:t.isEdit,title:"编辑"},on:{"update:visible":function(e){t.isEdit=e}}},[n("el-form",{attrs:{"label-position":"left","label-width":"100px"},model:{value:t.item,callback:function(e){t.item=e},expression:"item"}},[n("el-form-item",{attrs:{label:"图片"}},[n("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.BASE_API+"contents/upload_img",name:"img","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.item.img?n("img",{staticClass:"avatar",attrs:{src:t.RESOURCE_API+t.item.img}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),n("el-form-item",{attrs:{label:"标题"}},[n("el-input",{model:{value:t.item.title,callback:function(e){t.$set(t.item,"title",e)},expression:"item.title"}})],1),n("el-form-item",{attrs:{label:"副标题"}},[n("el-input",{model:{value:t.item.sub,callback:function(e){t.$set(t.item,"sub",e)},expression:"item.sub"}})],1)],1)],1)],1)}),r=[],c={name:"BannerItem",props:{item:Object},data:function(){return{isEdit:!1}},computed:{BASE_API:function(){return""},RESOURCE_API:function(){return""}},methods:{handleAvatarSuccess:function(t,e){this.item.img=t},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type,n=t.size/1024/1024<2;return e||this.$message.error("上传头像图片只能是 JPG 格式!"),n||this.$message.error("上传头像图片大小不能超过 2MB!"),e&&n}}},o=c,l=(n("c4c2"),n("2877")),u=Object(l["a"])(o,s,r,!1,null,"3c45f54a",null),m=u.exports,f={name:"Banner",components:{BannerItem:m},props:{banner:Array},methods:{deleteItem:function(t){this.banner.splice(t,1)},addItem:function(){this.banner.push({title:"标题",sub:"副标题",img:""})}}},d=f,p=Object(l["a"])(d,i,a,!1,null,"40e60903",null);e["a"]=p.exports},e9c4:function(t,e,n){var i=n("23e7"),a=n("d066"),s=n("d039"),r=a("JSON","stringify"),c=/[\uD800-\uDFFF]/g,o=/^[\uD800-\uDBFF]$/,l=/^[\uDC00-\uDFFF]$/,u=function(t,e,n){var i=n.charAt(e-1),a=n.charAt(e+1);return o.test(t)&&!l.test(a)||l.test(t)&&!o.test(i)?"\\u"+t.charCodeAt(0).toString(16):t},m=s((function(){return'"\\udf06\\ud834"'!==r("\udf06\ud834")||'"\\udead"'!==r("\udead")}));r&&i({target:"JSON",stat:!0,forced:m},{stringify:function(t,e,n){var i=r.apply(null,arguments);return"string"==typeof i?i.replace(c,u):i}})},fa69:function(t,e,n){}}]);