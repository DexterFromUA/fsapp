(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e){e.exports={translation:{Cart:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Filters:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b","Amount items at one page":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043d\u0438\u0433 \u043d\u0430 \u043e\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435",Set:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c","Filter by Date":"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0434\u0430\u0442\u0435",Filter:"\u0424\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c","Clear Filter":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440",Add:"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443","have no items":"\u041f\u0443\u0441\u0442\u043e",Language:"\u042f\u0437\u044b\u043a",Title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",Amount:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",Price:"\u0426\u0435\u043d\u0430 (\u043e\u0431\u0449\u0430\u044f)","Clean Up":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c","Total amount of your order":"\u041e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430",Order:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"}}},122:function(e){e.exports={translation:{Cart:"Cart",Filters:"Filters","Amount items at one page":"Amount items at one page",Set:"Set","Filter by Date":"Filter by Date",Filter:"Filter","Clear Filter":"Clear Filter",Add:"Add","have no items":"Have no items",Language:"Language",Title:"Title",Amount:"Amount",Price:"Price","Clean Up":"Clean Up","Total amount of your order":"Total amount of your order",Order:"Order"}}},125:function(e,t,a){e.exports=a(198)},198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=a(44),i=a(36),u=a(69),m=a(103),s=a(104),d=a.n(s),f=(a(137),a(138),a(26)),p=a(85),E=a(105),g=a.n(E),h=a(106),y=a(107),b=a(123),v=Object(f.combineReducers)({hasErrored:function(e,t){switch(void 0===e&&(e=""),t.type){case"HAS_ERRORED":return t.payload;default:return e}},items:function(e,t){switch(void 0===e&&(e={}),t.type){case"FETCH_DATA":return t.payload;default:return e}},isLoading:function(e,t){switch(void 0===e&&(e=!0),t.type){case"IS_LOADING":return t.payload;default:return e}},amount:function(e,t){switch(void 0===e&&(e=12),t.type){case"SET_AMOUNT":return t.payload;default:return e}},page:function(e,t){switch(void 0===e&&(e=1),t.type){case"CHANGE_PAGE":return t.payload;default:return e}},filter:function(e,t){switch(void 0===e&&(e={status:!1,date:[]}),t.type){case"FILTERED":return Object.assign({},e,{status:t.payload.status,date:t.payload.date});default:return e}},cart:function(e,t){switch(void 0===e&&(e=[]),t.type){case"INC":return e.map(function(e){if(e.id===t.payload){e.count+=1;var a=e.price*e.count;return e.fullPrice=+a.toFixed(2),e}return e});case"DEC":return e.map(function(e){if(e.id===t.payload){if(e.count>1){e.count-=1;var a=e.price*e.count;e.fullPrice=+a.toFixed(2)}return e}return e});case"ADD_TO_CART":return[].concat(Object(b.a)(e),[t.payload]);case"DELETE_FROM_CART":return e.filter(function(e){return e.id!==t.payload});case"CLEAN_UP":return[];default:return e}}}),C={key:"user",storage:g.a,whitelist:["amount"]},w=Object(p.a)(C,v),F=Object(f.createStore)(w,{hasErrored:!1,isLoading:!0,items:{},amount:12,user:{},cart:[],page:1,filter:{status:!1,date:[]}},Object(y.composeWithDevTools)(Object(f.applyMiddleware)(h.a))),O=Object(p.b)(F),T=a(234),k=a(235),A=a(116),j=a(22),N=a(241),D=a(242),S=a(243),P=a(244),I=a(238),L=a(228),x=a(237),U=a(251),_=a(245),R=a(246),G=a(252),M=a(254),B=a(240),z=a(200),H=a(117),J=a.n(H),$=a(34),W=a(229),V=a(230),q=a(199),K=a(109),Q=a.n(K),X=a(231),Y=a(114),Z=a(232),ee=function(e){var t=r.a.useState([new Date,new Date]),a=Object(j.a)(t,2),n=a[0],l=a[1],c=r.a.useState(e.amount),o=Object(j.a)(c,2),i=o[0],u=o[1],m=Object($.b)().t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{variant:"h5",className:"ml-4 mt-4"},m("Filters"),":"),r.a.createElement(W.a,null),r.a.createElement(V.a,null,r.a.createElement(q.a,null,r.a.createElement(L.a,null,m("Amount items at one page"),":")),r.a.createElement(q.a,null,r.a.createElement(X.a,{className:"mb-2"},r.a.createElement(Y.a,{type:"number",placeholder:i,"aria-label":"Item count","aria-describedby":"basic-addon2",onChange:function(e){return u(e.target.value)}}),r.a.createElement(X.a.Append,null,r.a.createElement(Z.a,{onClick:function(t){return function(t){t.preventDefault(),e.setAmount(i)}(t)},variant:"outline-secondary"},m("Set"))))),r.a.createElement(W.a,null),r.a.createElement(q.a,null,r.a.createElement(L.a,null,m("Filter by Date"),":")),r.a.createElement(q.a,{className:"mt-2"},r.a.createElement(Q.a,{className:"ml-4",onChange:function(e){l(e)},value:n,clearIcon:null})),r.a.createElement(q.a,null,r.a.createElement(Z.a,{variant:"outline-secondary",size:"sm",block:!0,onClick:function(t){return function(t){t.preventDefault();var a=[];n.map(function(e){return a.push(e.toISOString())}),e.setFilter(!0,a)}(t)}},m("Filter"))),r.a.createElement(q.a,null,r.a.createElement(Z.a,{variant:"outline-secondary",size:"sm",block:!0,onClick:function(t){return function(t){t.preventDefault(),e.setFilter(!1,[])}(t)}},m("Clear Filter")))))},te=a(82),ae=a(236),ne=a(201),re=a(239),le=a(115),ce=a.n(le),oe=a(233),ie=a(72),ue=a(6),me=Object(z.a)(function(e){return{root:{padding:e.spacing(3,2)},wrapper:{margin:e.spacing(1),position:"relative"},buttonSuccess:{backgroundColor:oe.a[500],"&:hover":{backgroundColor:oe.a[700]}},buttonError:{backgroundColor:ie.a[500],"&:hover":{backgroundColor:ie.a[700]}},buttonProgress:{color:oe.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}}),se=function(e){var t,a=r.a.useState(0),n=Object(j.a)(a,2),l=n[0],c=n[1],o=r.a.useState(!1),i=Object(j.a)(o,2),u=i[0],m=i[1],s=r.a.useState(!1),d=Object(j.a)(s,2),f=d[0],p=d[1],E=r.a.useState(!1),g=Object(j.a)(E,2),h=g[0],y=g[1],b=Object($.b)().t,v=me(),C=Object(ue.a)((t={},Object(te.a)(t,v.buttonSuccess,f),Object(te.a)(t,v.buttonError,h),t));r.a.useEffect(function(){var t=e.cart.map(function(e){return e.fullPrice});if(t.length){var a=t.reduce(function(e,t){return e+t});c(a.toFixed(2))}},[e.cart]);return e.cart.length<=0?r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,null,r.a.createElement(k.a,{className:"justify-content-center mt-5 pt-5"},r.a.createElement("h3",null,b("have no items"))))):r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,null,r.a.createElement(k.a,{className:"justify-content-center"},r.a.createElement(ae.a,{responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,b("Title")),r.a.createElement("th",null,b("Amount")),r.a.createElement("th",null,b("Price")),r.a.createElement("th",null,r.a.createElement(x.a,{variant:"outlined",color:"secondary",size:"small",onClick:function(t){return function(t){t.preventDefault(),e.cleanUp()}(t)}},b("Clean Up"))))),r.a.createElement("tbody",null,e.cart.map(function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.title),r.a.createElement("td",null,r.a.createElement(x.a,{size:"small","aria-label":"dec",onClick:function(a){return function(t,a){t.preventDefault(),e.dec(a)}(a,t.id)}},"-"),t.count,r.a.createElement(x.a,{size:"small","aria-label":"inc",onClick:function(a){return function(t,a){t.preventDefault(),e.inc(a)}(a,t.id)}},"+")),r.a.createElement("td",null,"$",t.fullPrice),r.a.createElement("td",null,r.a.createElement(I.a,{size:"small","aria-label":"Delete",onClick:function(a){return function(t,a){t.preventDefault(),e.deleteFromCart(a)}(a,t.id)}},r.a.createElement(ce.a,null))))})))),r.a.createElement(k.a,null,r.a.createElement(A.a,{md:8,className:"align-content-center"},r.a.createElement("div",{className:"m-2"},r.a.createElement(ne.a,{className:v.root},r.a.createElement(L.a,null,b("Total amount of your order")," - $",l)))),r.a.createElement(A.a,{md:4,className:"text-right align-self-center"},r.a.createElement("div",{className:v.wrapper},r.a.createElement(x.a,{variant:"contained",color:"primary",className:C,disabled:u,onClick:function(t){return function(t){if(t.preventDefault(),!u){m(!0),p(!1),y(!1);var a=e.cart.map(function(e){return[e.id,e.count]}),n={headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(a)};fetch("/api/order",n).then(function(t){if(!t.ok)throw new Error("error while sending order");return p(!0),m(!1),setTimeout(function(){e.toggleCart(!1),e.cleanUp()},2e3),t}).catch(function(e){y(!0),m(!1),console.error(e)}).finally(function(){return m(!1)})}}(t)}},b("Order")),u&&r.a.createElement(re.a,{size:24,className:v.buttonProgress}))))))},de=Object(z.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},list:{width:300},listRight:{width:600}}});function fe(e){var t=e.children,a=e.window,n=Object(B.a)({target:a});return r.a.createElement(N.a,{appear:!1,direction:"down",in:!n},t)}var pe=Object(o.d)(function(e){var t=r.a.useState(!1),a=Object(j.a)(t,2),n=a[0],l=a[1],c=r.a.useState(!1),o=Object(j.a)(c,2),i=o[0],u=o[1],m=r.a.useState(null),s=Object(j.a)(m,2),d=s[0],f=s[1],p=Object($.b)(),E=p.t,g=p.i18n,h=de();function y(){f(null)}function b(e,t){e.preventDefault(),g.changeLanguage(t),y()}var v=function(e,t){return function(a){if("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)if("left"===e)l(t);else{if("right"!==e)return null;u(t)}}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,null),r.a.createElement(fe,e,r.a.createElement(S.a,null,r.a.createElement(P.a,null,r.a.createElement(I.a,{onClick:v("left",!0),className:h.menuButton,edge:"start",color:"inherit","aria-label":"Menu"},r.a.createElement(J.a,null)),r.a.createElement(L.a,{variant:"h6",className:h.title},"Book Shop"),r.a.createElement("div",null,r.a.createElement(x.a,{color:"inherit","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){f(e.currentTarget)}},E("Language")),r.a.createElement(U.a,{id:"simple-menu",anchorEl:d,keepMounted:!0,open:Boolean(d),onClose:y},r.a.createElement(_.a,{onClick:function(e){return b(e,"en")}},"English"),r.a.createElement(_.a,{onClick:function(e){return b(e,"ru")}},"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"))),r.a.createElement(x.a,{color:"inherit",onClick:v("right",!0)},r.a.createElement(R.a,{color:"secondary",badgeContent:e.cart.length},r.a.createElement(M.a,null)))))),r.a.createElement(P.a,null),e.children,r.a.createElement(G.a,{open:n,onClose:v("left",!1)},r.a.createElement("div",{className:h.list,role:"presentation"},r.a.createElement(ee,{amount:e.amount,setAmount:e.setAmount,setFilter:e.setFilter,getFilteredItems:e.getFilteredItems}))),r.a.createElement(G.a,{open:i,anchor:"right",onClose:v("right",!1)},r.a.createElement("div",{className:h.listRight,role:"presentation"},r.a.createElement(se,{toggleCart:u,cart:e.cart,inc:e.inc,dec:e.dec,deleteFromCart:e.deleteFromCart,cleanUp:e.cleanUp}))))}),Ee=a(247),ge=function(){return r.a.createElement(T.a,null,r.a.createElement(k.a,{className:"text-center"},r.a.createElement(A.a,null,r.a.createElement(Ee.a,{animation:"grow",variant:"primary"}),r.a.createElement(Ee.a,{animation:"grow",variant:"secondary"}),r.a.createElement(Ee.a,{animation:"grow",variant:"success"}),r.a.createElement(Ee.a,{animation:"grow",variant:"danger"}),r.a.createElement(Ee.a,{animation:"grow",variant:"warning"}),r.a.createElement(Ee.a,{animation:"grow",variant:"info"}),r.a.createElement(Ee.a,{animation:"grow",variant:"dark"}))))},he=a(250),ye=a(248),be=function(e){var t=Object($.b)().t;return e.items.length?e.items.map(function(a){return r.a.createElement(A.a,{lg:3},r.a.createElement(he.a,{className:"text-center mb-3"},null!==a.fileUrl&&void 0!==a.fileUrl&&""!==a.fileUrl?r.a.createElement(he.a.Img,{variant:"top",height:"350px",src:"/uploads/"+a.fileUrl}):"",r.a.createElement(he.a.Body,null,r.a.createElement(he.a.Title,null,a.title),r.a.createElement(he.a.Text,null,a.author," ",a.author&&a.bookyear?"-":""," ",a.bookyear)),r.a.createElement(he.a.Footer,null,r.a.createElement(Z.a,{variant:"outline-primary",onClick:function(t){return function(t,a){t.preventDefault(),e.cart.map(function(e){return e.id}).includes(a.id)?e.cart.map(function(t){t.id===a.id&&e.inc(a.id)}):e.addToCart(a)}(t,a)}},t("Add")," - $",a.price),r.a.createElement(ye.a.Text,{className:"text-muted"},a.createdAt))))}):r.a.createElement("h1",null,t("have no items"))},ve=a(253),Ce=function(e){for(var t=[],a=1;a<=Math.ceil(e.items.count/e.amount);a++)t.push(a);var n=t[t.length-1],l=function(a){if(a>t.length||a<t[0])return!1;e.changePage(a)};return r.a.createElement(ve.a,null,r.a.createElement(ve.a.First,{onClick:function(){return l(1)}}),r.a.createElement(ve.a.Prev,{onClick:function(){return l(e.page-1)}}),t.map(function(t){return r.a.createElement(ve.a.Item,{active:e.page===t,key:t,onClick:function(){return l(t)}},t)}),r.a.createElement(ve.a.Next,{onClick:function(){return l(e.page+1)}}),r.a.createElement(ve.a.Last,{onClick:function(){return l(n)}}))},we=function(e){return r.a.createElement(T.a,null,r.a.createElement(k.a,null,r.a.createElement(be,{items:e.items.rows,addToCart:e.addToCart,cart:e.cart,inc:e.inc})),r.a.createElement(k.a,{className:"justify-content-center"},r.a.createElement(Ce,{items:e.items,amount:e.amount,changePage:e.changePage,page:e.page})))},Fe=function(e){return r.a.useEffect(function(){e.filter.status?e.getFilteredItems(e.amount,e.page,e.filter.date[0],e.filter.date[1]):e.getItems(e.amount,e.page)},[e.page,e.filter,e.amount,e.lng]),e.isLoading?r.a.createElement(pe,{amount:e.amount,setAmount:e.setAmount,setFilter:e.setFilter,cart:e.cart,inc:e.inc,dec:e.dec,deleteFromCart:e.deleteFromCart,cleanUp:e.cleanUp},r.a.createElement(ge,null)):r.a.createElement(pe,{amount:e.amount,setAmount:e.setAmount,setFilter:e.setFilter,cart:e.cart,inc:e.inc,dec:e.dec,deleteFromCart:e.deleteFromCart,cleanUp:e.cleanUp},r.a.createElement(T.a,{className:"mt-4"},r.a.createElement(k.a,null,r.a.createElement(A.a,null,r.a.createElement(we,{items:e.items,amount:e.amount,changePage:e.changePage,page:e.page,addToCart:e.addToCart,cart:e.cart,inc:e.inc})))))},Oe=function(e){return{type:"FETCH_DATA",payload:{rows:e.rows,count:e.count}}},Te=function(e){return{type:"HAS_ERRORED",payload:e}},ke=function(e){return{type:"IS_LOADING",payload:e}};function Ae(e,t){return function(a){a(ke(!0)),fetch("/api/all/".concat(e,"/").concat(t),{method:"GET"}).then(function(e){if(!e.ok)throw new Error("error while getting items: "+e.statusText);return e.json()}).then(function(e){return a(Oe(e))}).catch(function(e){return a(Te(e))}).finally(function(){return a(ke(!1))})}}function je(e,t,a,n){return function(r){r(ke(!0)),fetch("/api/filtered/".concat(e,"/").concat(t,"/").concat(a,"/").concat(n),{method:"GET"}).then(function(e){if(!e.ok)throw new Error("error while getting filtered items"+e.statusText);return e.json()}).then(function(e){return r(Oe(e))}).catch(function(e){return r(Te(e.toString()))}).finally(function(){return r(ke(!1))})}}var Ne=function(e){return{type:"CHANGE_PAGE",payload:e}},De=function(e,t){return{type:"FILTERED",payload:{status:e,date:t}}},Se=function(e){return{type:"SET_AMOUNT",payload:e}};function Pe(e){return{type:"INC",payload:e}}function Ie(e){return{type:"DEC",payload:e}}function Le(e){return{type:"ADD_TO_CART",payload:{id:e.id,title:e.title,count:1,price:e.price,fullPrice:e.price}}}function xe(e){return{type:"DELETE_FROM_CART",payload:e}}function Ue(){return{type:"CLEAN_UP"}}var _e=[{path:"/",component:Object(u.b)(function(e){return{hasErrored:e.hasErrored,isLoading:e.isLoading,items:e.items,amount:e.amount,user:e.user,cart:e.cart,page:e.page,filter:e.filter}},function(e){return Object(f.bindActionCreators)({getItems:Ae,getFilteredItems:je,setAmount:Se,changePage:Ne,setFilter:De,addToCart:Le,inc:Pe,deleteFromCart:xe,dec:Ie,cleanUp:Ue},e)})(Fe)},{path:"/login",component:function(){var e=r.a.useState(""),t=Object(j.a)(e,2),a=t[0],n=t[1],l=r.a.useState(""),c=Object(j.a)(l,2),o=c[0],i=c[1],u=function(e){e.preventDefault();var t=new FormData;t.append("email",a),t.append("password",o),fetch("/signin",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"email=".concat(a,"&password=").concat(o)}).then(function(e){if(!e.ok)throw new Error("error while logging in");console.log(e)}).catch(function(e){return console.log(e)}),n(""),i("")};return r.a.createElement(T.a,{fluid:!0},r.a.createElement(ye.a,{className:"p-5"},r.a.createElement(ye.a.Group,{controlId:"formBasicEmail"},r.a.createElement(ye.a.Label,null,"Email address"),r.a.createElement(ye.a.Control,{type:"email",name:"email",placeholder:"Enter email",value:a,onChange:function(e){return n(e.target.value)}}),r.a.createElement(ye.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(ye.a.Group,{controlId:"formBasicPassword"},r.a.createElement(ye.a.Label,null,"Password"),r.a.createElement(ye.a.Control,{type:"password",name:"password",placeholder:"Password",value:o,onChange:function(e){return i(e.target.value)}})),r.a.createElement(Z.a,{className:"float-right ml-2",variant:"primary",onClick:function(e){return u(e)}},"Sign In"),r.a.createElement(Z.a,{className:"float-right",variant:"outline-primary",onSubmit:function(e){return u(e)}},"Sign Up")))}}],Re=function(){var e=_e.map(function(e,t){return r.a.createElement(o.a,{key:t,exact:!0,path:e.path,component:function(t){return r.a.createElement(e.component,t)}})});return r.a.createElement(o.c,null,e)},Ge=a(84),Me=a(120),Be=a.n(Me),ze=a(121),He={en:a(122),ru:ze};Ge.a.use(Be.a).use($.a).init({resources:He,lng:"en",fallbackLng:"en",saveMissing:!0,keySeparator:!1,interpolation:{escapeValue:!1}});Ge.a;var Je=Object(i.a)();c.a.render(r.a.createElement(u.a,{store:F},r.a.createElement(m.PersistGate,{loading:ge,persistor:O},r.a.createElement(o.b,{history:Je},r.a.createElement(Re,null),r.a.createElement(d.a,{stack:{limit:3},effect:"jelly",position:"bottom-right"})))),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.50813b39.chunk.js.map