(this["webpackJsonpfe-x"]=this["webpackJsonpfe-x"]||[]).push([[0],{291:function(e,t,n){},309:function(e,t,n){},315:function(e,t,n){},316:function(e,t,n){},317:function(e,t,n){},318:function(e,t,n){},320:function(e,t,n){},323:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(29),i=n.n(r),o=n(78),l=n(330),s=n(31),u=n(10),d=o.a.SubMenu,j=function(){var e=Object(s.f)();return Object(u.jsx)(o.a,{onClick:function(t){e.push("/".concat(t.key))},style:{width:256,height:"100%",flexBasis:"256px",flexGrow:0,flexShrink:0,background:"rgba(81, 47, 124, 0.1)"},defaultSelectedKeys:["find"],defaultOpenKeys:["sub1"],mode:"inline",children:Object(u.jsxs)(d,{icon:Object(u.jsx)(l.a,{}),title:"\u64cd\u4f5c\u4e2d\u5fc3",children:[Object(u.jsx)(o.a.Item,{children:"\u62bd\u53d6\u9898\u76ee"},"find"),Object(u.jsx)(o.a.Item,{children:"\u5f55\u5165\u9898\u76ee"},"add"),Object(u.jsx)(o.a.Item,{children:"\u9898\u5e93"},"all")]},"sub1")})},b=function(){return Object(u.jsx)(j,{})},x=(n(291),n(30)),p=n.n(x),f=n(58),m=n(14),O=n(180),h=n(40),g=n(326),v=n(74),y=n(93),w=n.n(y);function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,a){w.a.get(e,{params:t}).then((function(e){n(e)})).catch((function(e){a(e)}))}))}function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(a,c){w.a.post(e,t,n).then((function(e){a(e)})).catch((function(e){c(e)}))}))}w.a.defaults.baseURL="http://101.132.132.215:3000";var k,C,T=n(54),F=n.n(T),N=Object(v.b)({key:"framework",default:void 0}),A=Object(v.b)({key:"topic",default:void 0}),z=(n(309),[{title:"\u4e66\u7c4d\u540d\u79f0",dataIndex:"name",render:function(e){return Object(u.jsx)("span",{style:{width:"200px",display:"flex",marginRight:"-180px"},children:e})}},{title:"\u6846\u67b6\u7ae0\u8282",dataIndex:"content",render:function(e){return Object(u.jsx)("span",{style:{width:"200px",display:"flex",marginRight:"-180px"},children:e})}}]),M=[{title:"\u540d\u79f0",dataIndex:"name",render:function(e){return Object(u.jsx)("span",{style:{width:"200px",display:"flex",marginRight:"-180px"},children:e})}},{title:"\u9898\u76ee\u7c7b\u578b",dataIndex:"category"},{title:"\u63cf\u8ff0",dataIndex:"content",render:function(e){return Object(u.jsx)("span",{style:{width:"200px",display:"flex",marginRight:"-180px"},children:e})}},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"create_time",render:function(e){return F()(e).format("YYYY-MM-DD")}}],R=function(){var e=Object(v.c)(N)||[],t=Object(m.a)(e,2),n=t[0],c=t[1],r=Object(v.c)(A)||[],i=Object(m.a)(r,2),o=i[0],l=i[1],s=Object(a.useState)(!1),d=Object(m.a)(s,2),j=d[0],b=d[1],x=Object(a.useState)(!1),y=Object(m.a)(x,2),w=y[0],I=y[1],k=function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,S("/getFramework");case 3:t=e.sent,b(!1),(!t.data||t.data.length<1)&&O.b.info("\u672a\u5f55\u5165\u6846\u67b6"),c(t.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.next=3,S("/getTopic");case 3:(!(t=e.sent).data||t.data.length<1)&&O.b.info("\u672a\u67e5\u8be2\u5230\u6570\u636e"),I(!1),l(t.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"find",children:[Object(u.jsx)("div",{style:{fontSize:"20px",fontWeight:800,width:"100%",marginBottom:"16px"},children:"\u6846\u67b6\u9ed8\u5199"}),Object(u.jsx)(h.a,{type:"primary",size:"large",onClick:k,loading:j,children:"\u67e5\u8be2\u6846\u67b6"}),Object(u.jsx)(g.a,{columns:z,dataSource:n,className:"table1",pagination:!1}),Object(u.jsx)("div",{style:{fontSize:"20px",fontWeight:800,width:"100%",marginBottom:"16px"},children:"\u6a21\u62df\u7ec3\u9898"}),Object(u.jsx)(h.a,{type:"primary",size:"large",onClick:C,loading:w,children:"\u83b7\u53d6\u6a21\u62df\u7ec3\u9898"}),Object(u.jsx)(g.a,{columns:M,dataSource:o,className:"table2",pagination:!1})]})},Y=n(56),q=n(27),D=n(26),B=n(38),$=(n(315),B.c.TextArea),E=Object(q.a)(),J=Object(D.c)({components:(k={FormItem:B.b,Input:B.c,Select:B.d},Object(Y.a)(k,"Input",B.c),Object(Y.a)(k,"TextArea",$),k)}),K=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],c=t[1];return Object(u.jsx)("div",{className:"add",children:Object(u.jsxs)(B.a,{form:E,onAutoSubmit:function(e){var t=new FormData;t.append("name",e.name),t.append("category",e.category||"\u6846\u67b6"),t.append("content",e.content);c(!0),I("/addTopic",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(){c(!1),O.b.success("\u521b\u5efa\u6210\u529f");var t={name:"",category:"\u7b80\u7b54\u9898",content:""};e.category||(t.category=""),E.setValues(t)})).catch((function(e){return console.log(e)}))},children:[Object(u.jsxs)(J,{children:[Object(u.jsx)(J.String,{required:!0,name:"select",title:"\u5f55\u5165\u7c7b\u578b",default:"v2",enum:[{label:"\u6846\u67b6",value:"v1"},{label:"\u771f\u9898\u9898\u76ee",value:"v2"}],"x-component":"Select","x-decorator":"FormItem","x-reactions":[{target:"name",fulfill:{schema:{title:'{{$self.value === "v1"?"\u4e66\u7c4d\u540d\u79f0" :"\u771f\u9898\u9898\u76ee"}}'}}},{target:"content",fulfill:{schema:{title:'{{$self.value === "v1"?"\u6846\u67b6\u7ae0\u8282" :"\u9898\u76ee\u5185\u5bb9"}}',"x-component":'{{$self.value === "v1"?"Input" :"TextArea"}}'}}},{target:"category",fulfill:{state:{visible:'{{$self.value === "v2"}}'}}}]}),Object(u.jsx)(J.String,{name:"name",title:"\u771f\u9898\u9898\u76ee","x-component":"Input","x-decorator":"FormItem",required:!0}),Object(u.jsx)(J.String,{name:"category",title:"\u9898\u76ee\u7c7b\u522b","x-component":"Select","x-decorator":"FormItem",default:"\u540d\u8bcd\u89e3\u91ca",required:!0,enum:[{label:"\u540d\u8bcd\u89e3\u91ca",value:"\u540d\u8bcd\u89e3\u91ca"},{label:"\u7b80\u7b54\u9898",value:"\u7b80\u7b54\u9898"},{label:"\u8bba\u8ff0\u9898",value:"\u8bba\u8ff0\u9898"},{label:"\u7efc\u5408\u9898",value:"\u7efc\u5408\u9898"}]}),Object(u.jsx)(J.String,{name:"content",title:"\u9898\u76ee\u5185\u5bb9","x-component":"TextArea","x-decorator":"FormItem",required:!0})]}),Object(u.jsx)("div",{className:"btn",children:Object(u.jsx)(B.e,{block:!0,size:"large",loading:n,children:"\u5f55\u5165"})})]})})},P=n(327),V=n(328),W=n(136),_=n(329),G=(n(316),B.c.TextArea),L=Object(q.a)(),U=Object(D.c)({components:(C={FormItem:B.b,Input:B.c,Select:B.d},Object(Y.a)(C,"Input",B.c),Object(Y.a)(C,"TextArea",G),C)}),H=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),i=Object(m.a)(r,2),o=i[0],l=i[1],s=Object(a.useState)(!1),d=Object(m.a)(s,2),j=d[0],b=d[1],x=Object(a.useState)(1),O=Object(m.a)(x,2),v=O[0],y=O[1],w=Object(a.useState)(10),k=Object(m.a)(w,2),C=k[0],T=k[1],N=Object(a.useState)(""),A=Object(m.a)(N,2),z=A[0],M=A[1],R=Object(a.useState)(""),Y=Object(m.a)(R,2),q=Y[0],D=Y[1],$=Object(a.useState)({}),E=Object(m.a)($,2),J=E[0],K=E[1],G=Object(a.useState)(""),H=Object(m.a)(G,2),Q=H[0],X=H[1],Z=function(){var e=Object(f.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,S("/getAll?current=".concat(v,"&&search=").concat(z));case 3:t=e.sent,l(!1),c(t.data.data),T(t.data.total),(n=C/10>Math.floor(C/10)?Math.floor(C/10)+1:Math.floor(C/10))<v&&y(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){Z()}),[v,z]);var ee=Object(_.a)(function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(1),M(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{wait:500}).run,te=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),(n=new FormData).append("id",t),a={headers:{"Content-Type":"multipart/form-data"}},e.next=6,I("/delete",n,a);case 6:return e.next=8,Z();case 8:l(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(f.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),b(!1),t=L.values,console.log(t),(n=new FormData).append("id",Q),n.append("name",t.name),n.append("category",t.category),n.append("content",t.content),a={headers:{"Content-Type":"multipart/form-data"}},e.next=12,I("/update",n,a);case 12:return e.next=14,Z();case 14:l(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=[{title:"\u540d\u79f0",dataIndex:"name",render:function(e){return Object(u.jsx)("span",{style:{width:"200px",display:"flex",marginRight:"-180px"},children:e})}},{title:"\u9898\u76ee\u7c7b\u578b",dataIndex:"category",width:200},{title:"\u63cf\u8ff0",dataIndex:"content",render:function(e){return Object(u.jsx)("span",{style:{width:"200px",display:"flex",marginRight:"-180px"},children:e})}},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"create_time",width:200,render:function(e){return F()(e).format("YYYY-MM-DD")}},{title:"\u64cd\u4f5c",width:200,render:function(e){return Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(u.jsx)(h.a,{type:"primary",onClick:function(){return function(e){K({name:e.name,category:e.category,content:e.content}),console.log(e,J,{name:e.name,category:e.category,content:e.content}),L.setInitialValues({name:e.name,category:e.category,content:e.content}),X(e.id),b(!0)}(e)},style:{marginRight:"8px"},children:"\u7f16\u8f91"}),Object(u.jsx)(h.a,{danger:!0,onClick:function(){te(e.id)},children:"\u5220\u9664"})]})}}];return Object(u.jsxs)("div",{className:"find",children:[Object(u.jsx)(P.a,{placeholder:"\u8bf7\u8f93\u5165\u9898\u76ee\u540d\u5b57",allowClear:!0,prefix:Object(u.jsx)(W.a,{}),size:"large",onChange:function(e){var t=e.target.value;D(t),ee(t)},value:q}),Object(u.jsx)(g.a,{loading:o,columns:ae,dataSource:n,className:"table2",title:function(){return"\u9898\u5e93"},pagination:{current:v,total:C,pageSize:10},onChange:function(e){y(e.current)}}),Object(u.jsx)(V.a,{visible:j,destroyOnClose:!0,onOk:ne,onCancel:function(){return b(!1)},okText:"\u63d0\u4ea4",cancelText:"\u53d6\u6d88",width:"60%",children:Object(u.jsx)(B.a,{form:L,className:"form-box",children:Object(u.jsxs)(U,{children:[Object(u.jsx)(U.String,{name:"name",title:"\u771f\u9898\u9898\u76ee","x-component":"Input","x-decorator":"FormItem",required:!0}),Object(u.jsx)(U.String,{name:"category",title:"\u9898\u76ee\u7c7b\u522b","x-component":"Select","x-decorator":"FormItem",default:"\u540d\u8bcd\u89e3\u91ca",required:!0,enum:[{label:"\u540d\u8bcd\u89e3\u91ca",value:"\u540d\u8bcd\u89e3\u91ca"},{label:"\u7b80\u7b54\u9898",value:"\u7b80\u7b54\u9898"},{label:"\u8bba\u8ff0\u9898",value:"\u8bba\u8ff0\u9898"},{label:"\u7efc\u5408\u9898",value:"\u7efc\u5408\u9898"}]}),Object(u.jsx)(U.String,{name:"content",title:"\u9898\u76ee\u5185\u5bb9","x-component":"TextArea","x-decorator":"FormItem",required:!0})]})})})]})},Q=(n(317),function(){return Object(u.jsxs)("div",{className:"router",children:[Object(u.jsx)(s.a,{path:"/",to:"/find"}),Object(u.jsx)(s.b,{exact:!0,path:"/find",component:R}),Object(u.jsx)(s.b,{exact:!0,path:"/add",component:K}),Object(u.jsx)(s.b,{exact:!0,path:"/all",component:H})]})}),X=function(){return console.log("fick"),Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)(b,{}),Object(u.jsx)(Q,{})]})},Z=c.a.memo(X),ee=(n(318),n(113));var te=function(){return Object(u.jsx)(v.a,{children:Object(u.jsx)(ee.a,{children:Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(Z,{})})})})};n(319),n(320),n(321),n(322);F.a.locale("zh-cn"),i.a.render(Object(u.jsx)(te,{}),document.getElementById("root"))}},[[323,1,2]]]);
//# sourceMappingURL=main.aba3e620.chunk.js.map