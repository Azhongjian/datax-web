(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40c25403"],{"1c64":function(e,t,a){},"1cc6":function(e,t,a){"use strict";var n=a("1c64"),i=a.n(n);i.a},"1cf5":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"数据源名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.datasourceName,callback:function(t){e.$set(e.listQuery,"datasourceName",t)},expression:"listQuery.datasourceName"}}),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.fetchData}},[e._v("\n      Search\n    ")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n      Add\n    ")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"数据源名称",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.datasourceName))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"数据源分组",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.datasourceGroup)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"用户名",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.jdbcUsername))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"密码",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.jdbcPassword))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"jdbc url",width:"110",align:"center","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.jdbcUrl))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"jdbc驱动类",width:"110",align:"center","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.jdbcDriverClass))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"comments",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.comments))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Actions",align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleUpdate(n)}}},[e._v("\n          Edit\n        ")]),e._v(" "),"deleted"!=n.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(n)}}},[e._v("\n          Delete\n        ")]):e._e()]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.current,limit:e.listQuery.size},on:{"update:page":function(t){return e.$set(e.listQuery,"current",t)},"update:limit":function(t){return e.$set(e.listQuery,"size",t)},pagination:e.fetchData}}),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",attrs:{rules:e.rules,model:e.temp,"label-position":"left"}},[a("el-form-item",{attrs:{label:"数据源名称",prop:"datasourceName"}},[a("el-input",{attrs:{placeholder:"数据源名称"},model:{value:e.temp.datasourceName,callback:function(t){e.$set(e.temp,"datasourceName",t)},expression:"temp.datasourceName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"数据源分组",prop:"datasourceGroup"}},[a("el-input",{attrs:{placeholder:"数据源分组"},model:{value:e.temp.datasourceGroup,callback:function(t){e.$set(e.temp,"datasourceGroup",t)},expression:"temp.datasourceGroup"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户名",prop:"jdbcUsername"}},[a("el-input",{attrs:{placeholder:"用户名"},model:{value:e.temp.jdbcUsername,callback:function(t){e.$set(e.temp,"jdbcUsername",t)},expression:"temp.jdbcUsername"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码",prop:"jdbcPassword"}},[a("el-input",{attrs:{placeholder:"密码"},model:{value:e.temp.jdbcPassword,callback:function(t){e.$set(e.temp,"jdbcPassword",t)},expression:"temp.jdbcPassword"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"jdbc url",prop:"jdbcUrl"}},[a("el-input",{attrs:{autosize:{minRows:3,maxRows:6},type:"textarea",placeholder:"jdbc url"},model:{value:e.temp.jdbcUrl,callback:function(t){e.$set(e.temp,"jdbcUrl",t)},expression:"temp.jdbcUrl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"jdbc驱动类",prop:"jdbcDriverClass"}},[a("el-input",{attrs:{placeholder:"jdbc驱动类"},model:{value:e.temp.jdbcDriverClass,callback:function(t){e.$set(e.temp,"jdbcDriverClass",t)},expression:"temp.jdbcDriverClass"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"注释"}},[a("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Please input"},model:{value:e.temp.comments,callback:function(t){e.$set(e.temp,"comments",t)},expression:"temp.comments"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        Cancel\n      ")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("\n        Confirm\n      ")])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogPluginVisible,title:"Reading statistics"},on:{"update:visible":function(t){e.dialogPluginVisible=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pluginData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v("Confirm")])],1)],1)],1)},i=[],r=a("7e39"),o=a("6724"),l=a("ed08"),s=a("333d"),c={name:"DataxJdbcDatasource",components:{Pagination:s["a"]},directives:{waves:o["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){return{list:null,listLoading:!0,total:0,listQuery:{current:1,size:10},pluginTypeOptions:["reader","writer"],dialogPluginVisible:!1,pluginData:[],dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},rules:{datasourceName:[{required:!0,message:"this is required",trigger:"blur"}],jdbcUsername:[{required:!0,message:"this is required",trigger:"blur"}],jdbcPassword:[{required:!0,message:"this is required",trigger:"blur"}],jdbcUrl:[{required:!0,message:"this is required",trigger:"blur"}],jdbcDriverClass:[{required:!0,message:"this is required",trigger:"blur"}]},temp:{id:void 0,datasourceName:"",datasourceGroup:"Default",jdbcUsername:"",jdbcPassword:"",jdbcUrl:"",jdbcDriverClass:"",comments:""}}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,r["d"](this.listQuery).then(function(t){var a=t.records,n=t.total;e.total=n,e.list=a,e.listLoading=!1})},resetTemp:function(){this.temp={id:void 0,datasourceName:"",datasourceGroup:"Default",jdbcUsername:"",jdbcPassword:"",jdbcUrl:"",jdbcDriverClass:"",comments:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs["dataForm"].clearValidate()})},createData:function(){var e=this;this.$refs["dataForm"].validate(function(t){t&&r["a"](e.temp).then(function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})})})},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs["dataForm"].clearValidate()})},updateData:function(){var e=this;this.$refs["dataForm"].validate(function(t){if(t){var a=Object.assign({},e.temp);r["e"](a).then(function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})})}})},handleDelete:function(e){var t=this;console.log("删除");var a=[];a.push(e.id),r["b"]({idList:e.id}).then(function(e){t.fetchData(),t.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3})})},handleFetchPv:function(e){var t=this;r["c"](e).then(function(e){t.pluginData=e,t.dialogPvVisible=!0})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?Object(l["e"])(t[e]):t[e]})})}}},u=c,d=a("2877"),p=Object(d["a"])(u,n,i,!1,null,null,null);t["default"]=p.exports},"333d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[];a("c5f6");Math.easeInOutQuad=function(e,t,a,n){return e/=n/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function o(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(e,t,a){var n=l(),i=e-n,s=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=s;var l=Math.easeInOutQuad(c,n,i,t);o(l),c<t?r(e):a&&"function"===typeof a&&a()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&s(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},u=c,d=(a("1cc6"),a("2877")),p=Object(d["a"])(u,n,i,!1,null,"f3b72548",null);t["a"]=p.exports},6724:function(e,t,a){"use strict";a("8d41");var n="@@wavesContext";function i(e,t){function a(a){var n=Object.assign({},t.value),i=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),r=i.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var o=r.getBoundingClientRect(),l=r.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(o.width,o.height)+"px",r.appendChild(l)),i.type){case"center":l.style.top=o.height/2-l.offsetHeight/2+"px",l.style.left=o.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(a.pageY-o.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(a.pageX-o.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=i.color,l.className="waves-ripple z-active",!1}}return e[n]?e[n].removeHandle=a:e[n]={removeHandle:a},a}var r={bind:function(e,t){e.addEventListener("click",i(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[n].removeHandle,!1),e.addEventListener("click",i(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[n].removeHandle,!1),e[n]=null,delete e[n]}},o=function(e){e.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(o)),r.install=o;t["a"]=r},"7e39":function(e,t,a){"use strict";a.d(t,"d",function(){return i}),a.d(t,"c",function(){return r}),a.d(t,"e",function(){return o}),a.d(t,"a",function(){return l}),a.d(t,"b",function(){return s});var n=a("b775");function i(e){return Object(n["a"])({url:"/api/jobJdbcDatasource",method:"get",params:e})}function r(e){return Object(n["a"])({url:"/api/jobJdbcDatasource/"+e,method:"get"})}function o(e){return Object(n["a"])({url:"/api/jobJdbcDatasource/",method:"put",data:e})}function l(e){return Object(n["a"])({url:"/api/jobJdbcDatasource/",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/api/jobJdbcDatasource/",method:"delete",params:e})}},"8d41":function(e,t,a){}}]);