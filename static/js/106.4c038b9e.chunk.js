"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[106],{687:function(n,t,e){e.d(t,{NA:function(){return u},SK:function(){return d},_k:function(){return s},oT:function(){return f},zK:function(){return p}});var r=e(861),a=e(757),i=e.n(a),c=e(294),o="1d18a145504f6d95230d64d5ffb9c58a";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(t,"&api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},8:function(n,t,e){e.d(t,{D:function(){return o}});var r,a=e(168),i=e(924).ZP.b(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  font-size: 22px;\n  color: #737373;\n  margin-top: 56px;\n  margin-bottom: 56px;\n"]))),c=e(184),o=function(n){var t=n.children;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i,{children:t})})}},245:function(n,t,e){e.d(t,{a:function(){return s}});var r,a=e(137),i=e(168),c=e(924).ZP.div(r||(r=(0,i.Z)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh;\n"]))),o=e(184),s=function(){return(0,o.jsx)(c,{children:(0,o.jsx)(a.VF,{visible:!0,height:"100",width:"100",color:"#ADD8E6",secondaryColor:"#ADD8E6",radius:"12.5",ariaLabel:"mutating-dots-loading",wrapperStyle:{},wrapperClass:""})})}},106:function(n,t,e){e.r(t),e.d(t,{default:function(){return U}});var r,a,i,c,o,s,u,p=e(439),d=e(8),f=e(861),l=e(757),x=e.n(l),h=e(687),v=e(245),m=e(791),g=e(689),Z=e(168),w=e(924),j=e(87),b=w.ZP.button(r||(r=(0,Z.Z)(["\n  width: 110px;\n  height: 40px;\n  margin-top: 14px;\n  margin-bottom: 18px;\n  margin-left: 60px;\n  font-weight: 700;\n  background-color: #ffec80;\n  border-color: #ffe866;\n  border-radius: 15px;\n  cursor: pointer;\n"]))),y=w.ZP.div(a||(a=(0,Z.Z)(["\n  padding: 10px;\n  padding-left: 80px;\n  display: flex;\n  justify-content: space-evenly;\n"]))),k=w.ZP.h1(i||(i=(0,Z.Z)(["\n  margin-bottom: 20px;\n"]))),_=w.ZP.p(c||(c=(0,Z.Z)(["\n  width: 700px;\n  font-size: 20px;\n  margin-bottom: 26px;\n"]))),P=w.ZP.h3(o||(o=(0,Z.Z)(["\n  margin-bottom: 12px;\n  font-size: 20px;\n"]))),z=w.ZP.div(s||(s=(0,Z.Z)(["\n  padding: 22px 70px;\n  text-align: center;\n"]))),D=(0,w.ZP)(j.rU)(u||(u=(0,Z.Z)(["\n  margin-left: 18px;\n  margin-right: 20px;\n  color: #111;\n  font-size: 22px;\n  font-weight: 500;\n  text-decoration: none;\n"]))),C=e(184),S=function(n){var t=n.setIsMovie,e=(0,m.useState)(!1),r=(0,p.Z)(e,2),a=r[0],i=r[1],c=(0,m.useState)(null),o=(0,p.Z)(c,2),s=o[0],u=o[1],d=(0,g.UO)();return(0,m.useEffect)((function(){var n=function(){var n=(0,f.Z)(x().mark((function n(){var e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i(!0),n.next=4,(0,h.zK)(d.movieId);case 4:e=n.sent,t(!0),u(e),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(0);case 11:return n.prev=11,i(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,9,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[d.movieId,t]),(0,C.jsxs)(C.Fragment,{children:[s&&(0,C.jsxs)(y,{children:[(0,C.jsx)("img",{src:s.poster_path?"https://image.tmdb.org/t/p/w500".concat(s.poster_path):"https://astatic.ccmbg.com/ccmcms_linternaute/dist/public/public-assets/img/default/cine-defaut-1.jpg",alt:"",width:240}),(0,C.jsxs)("div",{children:[(0,C.jsxs)(k,{children:[s.original_title," (",s.release_date.split("-")[0],")"]}),(0,C.jsxs)(_,{children:["User score: ",Math.round(10*Number(s.vote_average)),"%"]}),(0,C.jsx)(P,{children:"Overview"}),(0,C.jsx)(_,{children:s.overview}),(0,C.jsx)(P,{children:"Genres"}),(0,C.jsx)(_,{children:s.genres.map((function(n){return n.name})).join(" ")})]})]}),a&&(0,C.jsx)(v.a,{})]})};function U(){var n,t,e=(0,m.useState)(!1),r=(0,p.Z)(e,2),a=r[0],i=r[1],c=(0,g.TH)(),o=(0,m.useRef)(c);return(0,C.jsxs)("div",{children:[(0,C.jsx)(j.rU,{to:null!==(n=null===(t=o.current.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/",children:(0,C.jsx)(b,{children:"Go back"})}),(0,C.jsx)(S,{setIsMovie:i}),a?(0,C.jsxs)(z,{children:[(0,C.jsx)(D,{to:"cast",children:"Cast"}),(0,C.jsx)(D,{to:"reviews",children:"Reviews"})]}):(0,C.jsx)(d.D,{children:"Errors! Please try again!"}),(0,C.jsx)(g.j3,{})]})}}}]);
//# sourceMappingURL=106.4c038b9e.chunk.js.map