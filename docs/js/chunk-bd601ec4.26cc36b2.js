(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd601ec4"],{5040:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return i});var a=n("b775"),r=n("9fb0"),o=r["l"];function s(t){return Object(a["b"])({url:o+"/content/delete/"+t,method:"get"})}function c(t){return Object(a["b"])({url:o+"/content/down/"+t,method:"get"})}function i(t,e){return Object(a["b"])({url:o+"/content/recommend/"+t+"/"+e,method:"get"})}},"61ee":function(t,e,n){"use strict";var a=n("c6b9"),r=n.n(a);r.a},7951:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-card",{attrs:{bordered:!1}},[n("div",{staticClass:"table-page-search-wrapper"},[n("a-form",{attrs:{form:t.form,layout:"inline"}},[n("a-row",{attrs:{type:"flex"}},[n("a-col",{staticClass:"search-item-col",attrs:{lg:{span:8},md:{span:8}}},[n("a-form-item",{staticClass:"search-item",attrs:{label:"文章类型",labelCol:t.searchCol.labelCol,wrapperCol:t.searchCol.wrapperCol}},[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type"],expression:"['type']"}],attrs:{placeholder:"全部"}},[n("a-select-option",{attrs:{value:"",selected:""}},[t._v("全部")]),n("a-select-option",{attrs:{value:"0"}},[t._v("视频类")]),n("a-select-option",{attrs:{value:"1"}},[t._v("非视频类")]),n("a-select-option",{attrs:{value:"2"}},[t._v("外链类")])],1)],1)],1),n("a-col",{staticClass:"search-item-col",attrs:{lg:{span:8},md:{span:8}}},[n("a-form-item",{staticClass:"search-item",attrs:{label:"资讯标题",labelCol:t.searchCol.labelCol,wrapperCol:t.searchCol.wrapperCol}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title"],expression:"['title']"}]})],1)],1),n("a-col",{staticClass:"search-item-col",attrs:{lg:{span:8},md:{span:8}}},[n("a-form-item",{staticClass:"search-item",attrs:{label:"文章状态",labelCol:t.searchCol.labelCol,wrapperCol:t.searchCol.wrapperCol}},[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["status"],expression:"['status']"}],attrs:{placeholder:"全部"}},[n("a-select-option",{attrs:{value:"",selected:""}},[t._v("全部")]),n("a-select-option",{attrs:{value:"0"}},[t._v("已发布")]),n("a-select-option",{attrs:{value:"1"}},[t._v("草稿")]),n("a-select-option",{attrs:{value:"2"}},[t._v("即将发布")]),n("a-select-option",{attrs:{value:"3"}},[t._v("下架")])],1)],1)],1),n("a-col",{staticClass:"search-item-col",attrs:{lg:{span:8},md:{span:8}}},[n("a-form-item",{staticClass:"search-item",attrs:{label:"发布时间",labelCol:t.searchCol.labelCol,wrapperCol:t.searchCol.wrapperCol}},[n("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["timer"],expression:"['timer']"}],staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD",placeholder:["开始时间","结束时间"]}})],1)],1),n("a-col",{staticClass:"search-item-col",attrs:{lg:{span:8},md:{span:8}}},[n("span",{staticClass:"table-page-search-submitButtons"},[n("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.search()}}},[t._v("查询")]),n("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.reset()}}},[t._v("重置")])],1)])],1)],1)],1),n("a-row",{attrs:{gutter:8}},[n("a-col",[n("div",{staticClass:"add-btn"},[n("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.addConsulation}},[t._v("新增")])],1),n("s-table",{ref:"table",attrs:{size:"default",columns:t.columns,data:t.loadData},scopedSlots:t._u([{key:"title1",fn:function(e,a){return n("span",{},[a.title&&a.title.replace(/[\u0391-\uFFE5]/g,"aa").length>16?n("a-tooltip",{key:a.title,attrs:{title:a.title,placement:"topLeft",autoAdjustOverflow:!0}},[t._v(t._s(a.title.slice(0,16)+"..."))]):n("span",[t._v(t._s(a.title))])],1)}},{key:"action",fn:function(e,a){return n("span",{},[n("a",{on:{click:function(e){return t.edit(a)}}},[t._v("查看")]),n("a-divider",{attrs:{type:"vertical"}}),1===a.recommend?n("a",{on:{click:function(e){return t.cancelRecommend(a)}}},[t._v("取消推荐")]):n("a",{on:{click:function(e){return t.setRecommend(a)}}},[t._v("推荐")]),n("a-divider",{attrs:{type:"vertical"}}),n("a-dropdown",[n("a",{staticClass:"ant-dropdown-link"},[t._v("\n              更多 "),n("a-icon",{attrs:{type:"down"}})],1),n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[3!==a.status?n("a-menu-item",[n("a",{on:{click:function(e){t.withDraw(a)}}},[t._v("下架")])]):t._e(),n("a-menu-item",[n("a",{on:{click:function(e){return t.onDelete(a)}}},[t._v("删除")])])],1)],1)],1)}}])})],1)],1)],1)},r=[],o=n("e814"),s=n.n(o),c=n("5176"),i=n.n(c),l=n("e8c4"),u=n("a026"),d=n("b9cf"),m=n("5040"),f=n("af85"),p=new u["a"],h={name:"ConsulationListPage",components:{STable:l["a"]},data:function(){var t=this;return{searchCol:f["b"],form:this.$form.createForm(this),searchData:{},columns:[{title:"标题",dataIndex:"title",width:"230px",align:"center",scopedSlots:{customRender:"title1"}},{title:"类型",dataIndex:"type",align:"center",customRender:function(e){return t.judegType(e)}},{title:"状态",dataIndex:"status",align:"center",customRender:function(e){return t.judegStatus(e)},sorter:function(t,e){return t.status-e.status}},{title:"浏览人数",dataIndex:"pv",align:"center",sorter:function(t,e){return t.pv-e.pv}},{title:"是否推荐",dataIndex:"recommend",align:"center",customRender:function(e){return t.judegRecommend(e)}},{title:"发布时间",dataIndex:"releaseTime",align:"center",sorter:function(t,e){return new Date(t.releaseTime).getTime()-new Date(e.releaseTime)}},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],loadData:function(e){return e.orderDirection&&("ascend"===e.orderDirection?e.orderDirection="ASC":e.orderDirection="DESC"),e.orderField&&"releaseTime"===e.orderField&&(e.orderField="release_time"),Object(d["d"])(i()(t.searchData,e)).then(function(e){if(e.result)return e.object;t.$message.error(e.message);var n={size:100,current:1,pages:1,total:5,records:[]};return n})}}},created:function(){var t=this;p.$on("success",function(){t.$refs.table.refresh(!0),t.$message.success("操作成功")}),p.$on("error",function(e){t.$message.error(e)}),this.visible=!0},methods:{judegStatus:function(t){return 0===t?"暂存":1===t?"未发布":2===t?"已发布":3===t?"下架":void 0},judegRecommend:function(t){return 0===t?"否":1===t?"是":void 0},judegType:function(t){return 0===t?"视频类":1===t?"非视频类":2===t?"外链":void 0},edit:function(t){var e=this.$router.resolve("/consulation/add?id="+t.contentId);window.open(e.href,"_blank")},addConsulation:function(){var t=this.$router.resolve("/consulation/add");window.open(t.href,"_blank")},onDelete:function(t){this.$confirm({title:"是否确认删除?",style:"top: 270px;",onOk:function(){Object(m["a"])(t.contentId).then(function(t){t.result?p.$emit("success"):p.$emit("error",t.message)}).catch(function(t){p.$emit("error","操作失败"+t)})},onCancel:function(){}})},search:function(){var t=this;this.form.validateFields(function(e,n){e||(t.searchData.releaseStartTime=(n.timer&&n.timer.length)>0?n.timer[0].format("YYYY-MM-DD"):null,t.searchData.releaseEndTime=(n.timer&&n.timer.length)>0?n.timer[1].format("YYYY-MM-DD"):null,t.searchData.type=n.type?s()(n.type):null,t.searchData.title=n.title?n.title:null,t.searchData.status=n.status?s()(n.status):null,console.info(t.searchData),t.$refs.table.refresh(!0))})},reset:function(){this.form.resetFields()},withDraw:function(t){this.$confirm({title:"是否确认下架?",style:"top: 270px;",onOk:function(){Object(m["b"])(t.contentId).then(function(t){t.result?p.$emit("success"):p.$emit("error",t.message)}).catch(function(t){p.$emit("error","操作失败"+t)})},onCancel:function(){}})},cancelRecommend:function(t){this.$confirm({title:"是否确认取消推荐?",style:"top: 270px;",onOk:function(){Object(m["c"])(t.contentId,0).then(function(){p.$emit("success")}).catch(function(t){p.$emit("error","操作失败"+t)})},onCancel:function(){}})},setRecommend:function(t){this.$confirm({title:"是否确认推荐?",style:"top: 270px;",onOk:function(){Object(m["c"])(t.contentId,1).then(function(){p.$emit("success")}).catch(function(t){p.$emit("error","操作失败"+t)})},onCancel:function(){}})},handleSaveOk:function(){},handleSaveClose:function(){}}},v=h,b=(n("61ee"),n("2877"));n.d(e,"ref",function(){return p});var C=Object(b["a"])(v,a,r,!1,null,"8a1347e6",null);e["default"]=C.exports},af85:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"b",function(){return o});var a={xs:{span:6},sm:{span:6}},r={xs:{span:15},sm:{span:15}},o={labelCol:{xs:{span:6},sm:{span:12},lg:{span:3}},wrapperCol:{xs:{span:6},sm:{span:12},lg:{span:4}}}},b9cf:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"d",function(){return c}),n.d(e,"b",function(){return i}),n.d(e,"e",function(){return l}),n.d(e,"c",function(){return u});var a=n("b775"),r=n("9fb0"),o=r["l"];function s(t){return Object(a["b"])({url:o+"/inforArticle/add",method:"post",data:t})}function c(t){return Object(a["b"])({url:o+"/inforArticle/page",method:"post",data:t})}function i(t){return Object(a["b"])({url:o+"/survey/save",method:"post",data:t})}function l(t){return Object(a["b"])({url:o+"/survey/getById/"+t,method:"get"})}function u(t){return Object(a["b"])({url:o+"/inforArticle/detail?id="+t,method:"post"})}},c6b9:function(t,e,n){}}]);