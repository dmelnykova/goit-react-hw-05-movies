"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[824],{687:function(n,t,e){e.d(t,{NA:function(){return s},SK:function(){return f},_k:function(){return o},oT:function(){return d},zK:function(){return p}});var r=e(861),a=e(757),i=e.n(a),c=e(294),u="1d18a145504f6d95230d64d5ffb9c58a";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(t,"&api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},8:function(n,t,e){e.d(t,{D:function(){return u}});var r,a=e(168),i=e(924).ZP.b(r||(r=(0,a.Z)(["\n  margin-left: 64px;\n  font-size: 24px;\n  color: red;\n"]))),c=e(184),u=function(n){var t=n.children;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i,{children:t})})}},522:function(n,t,e){e.d(t,{M:function(){return v}});var r,a,i,c,u,o=e(168),s=e(924),p=e(87),f=s.ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n  font-size: 18px;\n  margin-top: 30px;\n"]))),d=s.ZP.li(a||(a=(0,o.Z)(["\n  max-width: 250px;\n  margin-bottom: 18px;\n"]))),l=s.ZP.p(i||(i=(0,o.Z)(["\n  text-decoration: none;\n  font-size: 16px;\n  margin-top: 12px;\n  color: #111;\n  font-weight: 500;\n  text-align: center;\n"]))),x=s.ZP.img(c||(c=(0,o.Z)(["\n  max-width: 100%;\n"]))),h=(0,s.ZP)(p.rU)(u||(u=(0,o.Z)(["\n  text-decoration: none;\n  max-width: 250px;\n"]))),m=e(184),v=function(n){var t=n.movies,e=n.location;return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(f,{children:t.map((function(n){return(0,m.jsx)(d,{children:(0,m.jsxs)(h,{to:"/movies/".concat(n.id),state:{from:e},children:[(0,m.jsx)(x,{src:n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):"https://astatic.ccmbg.com/ccmcms_linternaute/dist/public/public-assets/img/default/cine-defaut-1.jpg",alt:"",width:160}),(0,m.jsx)(l,{children:n.title})]})},n.id)}))})})}},245:function(n,t,e){e.d(t,{a:function(){return o}});var r,a=e(137),i=e(168),c=e(924).ZP.div(r||(r=(0,i.Z)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh;\n"]))),u=e(184),o=function(){return(0,u.jsx)(c,{children:(0,u.jsx)(a.VF,{visible:!0,height:"100",width:"100",color:"#ADD8E6",secondaryColor:"#ADD8E6",radius:"12.5",ariaLabel:"mutating-dots-loading",wrapperStyle:{},wrapperClass:""})})}},824:function(n,t,e){e.r(t),e.d(t,{default:function(){return P}});var r,a,i,c=e(861),u=e(439),o=e(757),s=e.n(o),p=e(687),f=e(8),d=e(522),l=e(245),x=e(218),h=e(87),m=e(168),v=e(924),g=v.ZP.form(r||(r=(0,m.Z)(["\n  margin-left: 60px;\n  padding: 10px;\n  display: flex;\n  gap: 24px;\n"]))),Z=v.ZP.input(a||(a=(0,m.Z)(["\n  height: 40px;\n  width: 240px;\n  font-size: 18px;\n  font-weight: 500;\n  padding-left: 10px;\n  border: 1px solid gray;\n  border-radius: 8px;\n"]))),w=v.ZP.button(i||(i=(0,m.Z)(["\n  width: 84px;\n  background-color: transparent;\n  border: 1px solid gray;\n  border-radius: 8px;\n  font-size: 18px;\n  font-weight: 500;\n  cursor: pointer;\n"]))),y=e(184),b=function(n){var t=n.query,e=(0,h.lr)(),r=(0,u.Z)(e,2),a=r[0],i=r[1];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(g,{onSubmit:function(n){n.preventDefault();var t=n.target.elements.query.value.trim();if(!t)return x.ZP.error("Can not be empty");a.set("query",t),i(a)},children:[(0,y.jsx)(Z,{name:"query",type:"text",defaultValue:t}),(0,y.jsx)(w,{type:"submit",children:"Search"})]}),(0,y.jsx)(x.x7,{})]})},j=e(791),k=e(689);function P(){var n,t=(0,j.useState)(!1),e=(0,u.Z)(t,2),r=e[0],a=e[1],i=(0,j.useState)(!1),o=(0,u.Z)(i,2),m=o[0],v=o[1],g=(0,j.useState)([]),Z=(0,u.Z)(g,2),w=Z[0],P=Z[1],_=(0,h.lr)(),q=(0,u.Z)(_,1)[0],D=(0,k.TH)(),S=null!==(n=q.get("query"))&&void 0!==n?n:"";return(0,j.useEffect)((function(){if(""!==S){var n=function(){var n=(0,c.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(!0),n.next=4,(0,p.NA)(S);case 4:if(0!==(t=n.sent).results.length){n.next=8;break}return P([]),n.abrupt("return",x.ZP.error("Movies not found"));case 8:P(t.results),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),v(!0);case 14:return n.prev=14,a(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[0,11,14,17]])})));return function(){return n.apply(this,arguments)}}();n()}}),[S]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(b,{query:S}),w.length>0?(0,y.jsx)(d.M,{movies:w,location:D}):(0,y.jsx)(x.x7,{}),m&&(0,y.jsx)(f.D,{children:"Errors! Please try again!"}),r&&(0,y.jsx)(l.a,{})]})}}}]);
//# sourceMappingURL=824.47db1894.chunk.js.map