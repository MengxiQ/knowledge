(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38d1e90d"],{"0f27":function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){return o})),r.d(e,"d",(function(){return i})),r.d(e,"b",(function(){return l}));var a=r("b775");function n(){return Object(a["a"])({url:"/competition_type",method:"get"})}function o(t){return Object(a["a"])({url:"/competition_type",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/competition_type/"+t.id,method:"put",data:t})}function l(t){return Object(a["a"])({url:"/competition_type/"+t,method:"delete"})}},1094:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.handleAdd}},[t._v("添加 ")]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list.filter((function(e){return!t.search||e.title.toLowerCase().includes(t.search.toLowerCase())}))}},[r("el-table-column",{attrs:{label:"id",prop:"id"}}),r("el-table-column",{attrs:{label:"类型",prop:"type"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.mapType(e.row.type))+" ")]}}])}),r("el-table-column",{attrs:{label:"封面",prop:"cover",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-image",{staticStyle:{width:"200px",height:"100px"},attrs:{src:t.RESOURCE_API+e.row.cover,"preview-src-list":[t.RESOURCE_API+e.row.cover]}})]}}])}),r("el-table-column",{attrs:{label:"标题",prop:"title"}}),r("el-table-column",{attrs:{label:"描述",prop:"desc"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{size:"mini"},nativeOn:{click:function(r){return t.showArticle(e.row.desc)}}},[t._v("查看")])]}}])}),r("el-table-column",{attrs:{label:"主办方",prop:"organizer"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.organizer.join())+" ")]}}])}),r("el-table-column",{attrs:{label:"开始时间",prop:"start_date"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("i",{staticClass:"el-icon-time"}),r("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.start_date))])]}}])}),r("el-table-column",{attrs:{label:"结束时间",prop:"start_date"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("i",{staticClass:"el-icon-time"}),r("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.end_date))])]}}])}),r("el-table-column",{attrs:{label:"报名开始",prop:"register_start_date"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("i",{staticClass:"el-icon-time"}),r("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.register_start_date))])]}}])}),r("el-table-column",{attrs:{label:"报名结束",prop:"register_end_date"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("i",{staticClass:"el-icon-time"}),r("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.register_end_date))])]}}])}),r("el-table-column",{attrs:{label:"竞赛介绍",prop:"introduce"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{size:"mini"},nativeOn:{click:function(r){return t.showArticle(e.row.introduce)}}},[t._v("查看")])]}}])}),r("el-table-column",{attrs:{label:"竞赛规则",prop:"rules"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{size:"mini"},nativeOn:{click:function(r){return t.showArticle(e.row.rules)}}},[t._v("查看")])]}}])}),r("el-table-column",{attrs:{label:"奖项设置",prop:"awards"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{size:"mini"},nativeOn:{click:function(r){return t.showArticle(e.row.awards)}}},[t._v("查看")])]}}])}),r("el-table-column",{attrs:{label:"状态",prop:"status"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-tag",{attrs:{type:t.showTagType(e.row.status)}},[t._v(t._s(t.showTagStatusName(e.row.status)))])]}}])}),r("el-table-column",{attrs:{align:"right"},scopedSlots:t._u([{key:"header",fn:function(e){return[r("el-input",{attrs:{size:"mini",placeholder:"输入关键字搜索[用户名]"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]}},{key:"default",fn:function(e){return[r("el-button",{attrs:{size:"mini"},on:{click:function(r){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑 ")]),r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(r){return t.handleDelete(e.$index,e.row)}}},[t._v("删除 ")])]}}])})],1),t.form?r("el-dialog",{attrs:{title:t.isCreate?"新建竞赛项目":"编辑竞赛信息",visible:t.dialogFormVisible,width:"80%","before-close":t.beforeClose},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[r("el-form",{ref:"myForm",attrs:{model:t.form}},[r("el-form-item",{attrs:{label:"竞赛类别","label-width":t.formLabelWidth,prop:"type"}},[r("el-select",{attrs:{placeholder:"请竞赛类型"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},t._l(t.competitionTypeList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),r("el-form-item",{attrs:{label:"封面","label-width":t.formLabelWidth,prop:"title"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.BASE_API+"competitions/upload_cover",name:"img","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.form.cover?r("img",{staticClass:"avatar",attrs:{src:t.RESOURCE_API+t.form.cover}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"标题","label-width":t.formLabelWidth,prop:"title"}},[r("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),r("el-form-item",{attrs:{label:"竞赛描述","label-width":t.formLabelWidth,prop:"desc"}},[r("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),r("el-form-item",{attrs:{label:"主办方列表","label-width":t.formLabelWidth,prop:"organizer"}},[r("el-select",{attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"输入并回车可创建条目"},model:{value:t.form.organizer,callback:function(e){t.$set(t.form,"organizer",e)},expression:"form.organizer"}})],1),r("el-form-item",{attrs:{label:"报名时间","label-width":t.formLabelWidth,prop:""}},[r("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.registerStartEndRange,callback:function(e){t.registerStartEndRange=e},expression:"registerStartEndRange"}})],1),r("el-form-item",{attrs:{label:"竞赛时间","label-width":t.formLabelWidth,prop:""}},[r("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.competitionStartEndRange,callback:function(e){t.competitionStartEndRange=e},expression:"competitionStartEndRange"}})],1),r("el-form-item",{attrs:{label:"竞赛介绍","label-width":t.formLabelWidth,prop:"motto"}},[r("editor",{attrs:{content:t.form.introduce},on:{"update:content":function(e){return t.$set(t.form,"introduce",e)}}})],1),r("el-form-item",{attrs:{label:"竞赛规则","label-width":t.formLabelWidth,prop:"rules"}},[r("editor",{attrs:{content:t.form.rules},on:{"update:content":function(e){return t.$set(t.form,"rules",e)}}})],1),r("el-form-item",{attrs:{label:"奖项设置","label-width":t.formLabelWidth,prop:"awards"}},[r("editor",{attrs:{content:t.form.awards},on:{"update:content":function(e){return t.$set(t.form,"awards",e)}}})],1),r("el-form-item",{attrs:{label:"项目状态","label-width":t.formLabelWidth,prop:"status"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[r("el-option",{key:0,attrs:{label:"预告",value:"preview"}}),r("el-option",{key:1,attrs:{label:"报名中",value:"register"}}),r("el-option",{key:2,attrs:{label:"进行中",value:"begin"}}),r("el-option",{key:3,attrs:{label:"已结束",value:"end"}})],1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.handleSave}},[t._v("保存")])],1)],1):t._e(),r("el-dialog",{attrs:{title:"预览",visible:t.showArticleVisible},on:{"update:visible":function(e){t.showArticleVisible=e}}},[r("div",{domProps:{innerHTML:t._s(t.showArticleCache)}})])],1)},n=[],o=(r("b0c0"),r("7db0"),r("d3b7"),r("a9e3"),r("e9c4"),r("159b"),r("2906")),i=r("dac0"),l=r("0f27"),s={name:"CompetitionsList",components:{editor:i["a"]},data:function(){return{competitionStartEndRange:[],registerStartEndRange:[],loading:!1,isCreate:!0,formLabelWidth:"120px",dialogFormVisible:!1,temp:{awards:"",desc:"",id:null,introduce:"",organizer:"",register_start_date:"",register_end_date:"",rules:"",start_date:"",end_date:"",status:"",title:"",type:null,cover:null},form:{},search:"",list:[],competitionTypeList:[],showArticleCache:"",showArticleVisible:!1}},computed:{BASE_API:function(){return""},RESOURCE_API:function(){return""}},watch:{registerStartEndRange:function(t){this.form.register_start_date=t[0],this.form.register_end_date=t[1]},competitionStartEndRange:function(t){this.form.start_date=t[0],this.form.end_date=t[1]}},created:function(){this.form=this.temp},mounted:function(){this.getList(),this.getTypes()},methods:{handleAvatarSuccess:function(t,e){this.form.cover=t},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type,r=t.size/1024/1024<2;return e||this.$message.error("上传头像图片只能是 JPG 格式!"),r||this.$message.error("上传头像图片大小不能超过 2MB!"),e&&r},mapType:function(t){return 0===this.competitionTypeList.length?"":this.competitionTypeList.find((function(e){return e.id===Number(t)})).name},showArticle:function(t){this.showArticleCache=t,this.showArticleVisible=!0},showTagStatusName:function(t){var e="";switch(t){case"register":e="报名中";break;case"end":e="已结束";break;case"begin":e="进行中";break;case"preview":e="预告";break}return e},showTagType:function(t){var e="";switch(t){case"register":e="success";break;case"end":e="danger";break;case"preview":e="info";break}return e},beforeClose:function(){this.form=this.temp,this.dialogFormVisible=!1},handleSave:function(){var t=this;this.loading=!0;var e=Object.assign({},this.form);e.organizer=JSON.stringify(this.form.organizer),this.isCreate?(delete e.id,Object(o["a"])(e).then((function(e){console.log(e),t.loading=!1,t.$message.success("保存成功."),t.dialogFormVisible=!1,t.getList()})).catch((function(e){t.loading=!1,console.log(e),t.$message.error("保存失败.")}))):Object(o["d"])(e).then((function(e){console.log(e),t.loading=!1,t.$message.success("保存成功."),t.dialogFormVisible=!1,t.getList()})).catch((function(e){t.loading=!1,console.log(e),t.$message.error("保存失败.")}))},handleAdd:function(){this.isCreate=!0,this.dialogFormVisible=!0},handleEdit:function(t,e){this.isCreate=!1,this.form=Object.assign({},e),this.registerStartEndRange=[e.register_start_date,e.register_end_date],this.competitionStartEndRange=[e.start_date,e.end_date],this.dialogFormVisible=!0},handleDelete:function(t,e){var r=this;Object(o["b"])(e.id).then((function(t){r.$message.success(t.message),console.log(t),r.getList()})).catch((function(t){console.log(t),r.$message.error("删除失败.")}))},getList:function(){var t=this;Object(o["c"])().then((function(e){t.list=e,t.list.forEach((function(t){t.organizer=JSON.parse(t.organizer)}))})).catch((function(e){console.log(e),t.$message.error("获取列表失败.")}))},getTypes:function(){var t=this;Object(l["c"])().then((function(e){t.competitionTypeList=e})).catch((function(e){console.log(e),t.$message.error("获取列表失败.")}))}}},c=s,u=(r("ad46"),r("2877")),d=Object(u["a"])(c,a,n,!1,null,"39d86969",null);e["default"]=d.exports},2906:function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){return o})),r.d(e,"d",(function(){return i})),r.d(e,"b",(function(){return l}));var a=r("b775");function n(){return Object(a["a"])({url:"/competitions",method:"get"})}function o(t){return Object(a["a"])({url:"/competitions",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/competitions/"+t.id,method:"put",data:t})}function l(t){return Object(a["a"])({url:"/competitions/"+t,method:"delete"})}},"36fb":function(t,e,r){},"7db0":function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").find,o=r("44d2"),i=r("ae40"),l="find",s=!0,c=i(l);l in[]&&Array(1)[l]((function(){s=!1})),a({target:"Array",proto:!0,forced:s||!c},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o(l)},a9e3:function(t,e,r){"use strict";var a=r("83ab"),n=r("da84"),o=r("94ca"),i=r("6eeb"),l=r("5135"),s=r("c6b6"),c=r("7156"),u=r("c04e"),d=r("d039"),f=r("7c73"),p=r("241c").f,m=r("06cf").f,b=r("9bf2").f,h=r("58a8").trim,g="Number",_=n[g],v=_.prototype,w=s(f(v))==g,y=function(t){var e,r,a,n,o,i,l,s,c=u(t,!1);if("string"==typeof c&&c.length>2)if(c=h(c),e=c.charCodeAt(0),43===e||45===e){if(r=c.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+c}for(o=c.slice(2),i=o.length,l=0;l<i;l++)if(s=o.charCodeAt(l),s<48||s>n)return NaN;return parseInt(o,a)}return+c};if(o(g,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var S,k=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof k&&(w?d((function(){v.valueOf.call(r)})):s(r)!=g)?c(new _(y(e)),r,k):y(e)},A=a?p(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;A.length>E;E++)l(_,S=A[E])&&!l(k,S)&&b(k,S,m(_,S));k.prototype=v,v.constructor=k,i(n,g,k)}},ad46:function(t,e,r){"use strict";r("36fb")},dac0:function(t,e,r){"use strict";var a,n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ArticleDetail"},[r("div",{ref:"editor",staticStyle:{"text-align":"left"}})])},o=[],i=(r("bc3a"),r("5c96"),r("6fad")),l=r.n(i),s={name:"Edit",props:{content:String},data:function(){return{Title:""}},mounted:function(){var t=this;a=new l.a(this.$refs.editor),a.customConfig={onchange:function(t){console.log(t)},uploadImgServer:"/api/UploadImg",uploadFileName:"Content",uploadImgMaxLength:1},a.create(),a.txt.html(this.content),a.config.onchange=function(e){t.$emit("update:content",e)},a.config.onchangeTimeout=500}},c=s,u=r("2877"),d=Object(u["a"])(c,n,o,!1,null,"d6d73186",null);e["a"]=d.exports},e9c4:function(t,e,r){var a=r("23e7"),n=r("d066"),o=r("d039"),i=n("JSON","stringify"),l=/[\uD800-\uDFFF]/g,s=/^[\uD800-\uDBFF]$/,c=/^[\uDC00-\uDFFF]$/,u=function(t,e,r){var a=r.charAt(e-1),n=r.charAt(e+1);return s.test(t)&&!c.test(n)||c.test(t)&&!s.test(a)?"\\u"+t.charCodeAt(0).toString(16):t},d=o((function(){return'"\\udf06\\ud834"'!==i("\udf06\ud834")||'"\\udead"'!==i("\udead")}));i&&a({target:"JSON",stat:!0,forced:d},{stringify:function(t,e,r){var a=i.apply(null,arguments);return"string"==typeof a?a.replace(l,u):a}})}}]);