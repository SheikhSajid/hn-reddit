(this["webpackJsonphn-reddit"]=this["webpackJsonphn-reddit"]||[]).push([[0],{25:function(e,t,n){e.exports=n(38)},30:function(e,t,n){},31:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),s=(n(30),n(7)),l=(n(31),n(6)),i=n.n(l),u=n(10),m=n(8);function d(e,t){return p.apply(this,arguments)}function p(){return(p=Object(u.a)(i.a.mark((function e(t,n){var a,r,c,o,s,l,u=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>2&&void 0!==u[2]?u[2]:0,r=t.slice(30*a,30*a+30),c=[],r.forEach((function(e){var t=fetch("https://hacker-news.firebaseio.com/v0/item/".concat(e,".json"));c.push(t)})),e.next=6,Promise.all(c);case 6:return o=e.sent,s=o.map((function(e){return e.json()})),e.next=10,Promise.all(s);case 10:return l=e.sent,e.abrupt("return",l);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return fetch("https://hacker-news.firebaseio.com/v0/topstories.json").then((function(e){return e.json()}))}function h(e,t){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://hacker-news.firebaseio.com/v0/item/".concat(n,".json"));case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=n(22),E=n(1),g=n(15);var w=function(e){var t=e.post,n=(e.fetched,t.by),c=t.descendants,o=t.id,s=t.score,l=t.time,i=t.title,u=t.text,m=t.url,d=Object(g.a)(new Date(1e3*l),{addSuffix:!0}),p="",f="",h="https://news.ycombinator.com/item?id=".concat(o);u&&u.length>900&&(f=u.slice(0,900)+"...",f+='<br />\n                      <a target="_blank" \n                         rel="noopener noreferrer"\n                         href=\''.concat(h,"'\n                      >\n                        Read more\n                      </a>"));Object(a.useCallback)((function(e){return function(e,t){e.stopPropagation(),window.open(t,"_blank").focus()}(e,m)}),[m]);var v=Object(a.useCallback)((function(e){e.stopPropagation(),navigator.clipboard.writeText(m).then((function(){return alert("URL copied: ".concat(m))})).catch((function(e){return console.error(e)}))}),[m]);return m&&("/"===(p=(p=(p=m.startsWith("https://")?m.slice(8,33):m.slice(0,25)).startsWith("http://")?p.slice(7,32):p.slice(0,25)).startsWith("www.")?p.slice(4):p.slice(0)).slice(-1)&&(p=p.slice(0,-1)),m.length>33&&(p+="...")),r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"like-count"},r.a.createElement("div",null,s),r.a.createElement("div",null,"Likes")),r.a.createElement("div",{className:"post-content"},r.a.createElement("div",{className:"post-metadata"},"Posted by ",n," ",d),r.a.createElement("h2",{className:"post-title"},i),r.a.createElement("div",{className:"post-body"},m&&r.a.createElement("a",{href:m,target:"_blanks",rel:"noopener noreferrer",className:"url-shortened"},p),u&&r.a.createElement("div",{className:"post-text",dangerouslySetInnerHTML:{__html:f}})),r.a.createElement("div",{className:"post-bottom"},r.a.createElement("div",null,c," Comments"),r.a.createElement("div",{onClick:v},"Copy Link"),r.a.createElement("div",null,"Save"),r.a.createElement("div",null,"Hide"))))},k=Object(a.memo)((function(e){var t=e.post,n=e.handleClick,c=Object(a.useCallback)((function(e){e.stopPropagation(),n(t)}),[]);return r.a.createElement("div",{onClick:c,className:"post postlist-entry"},r.a.createElement(w,{post:t}))})),y=Object(a.memo)((function(e){var t=e.posts,n=e.fetchPosts,c=Object(E.f)(),o=Object(a.useCallback)((function(e){c.push({pathname:"/post/".concat(e.id),state:{post:e}})}),[c]);return r.a.createElement(b.a,{dataLength:t.length,next:n,hasMore:t.length<=500,loader:r.a.createElement("h4",null,"Loading..."),style:{width:"640px"},endMessage:r.a.createElement("p",null,r.a.createElement("b",null,"Yay! You have seen it all"))},t.map((function(e){return r.a.createElement(k,{post:e,handleClick:o})})))})),j=function(e){var t=e.comment,n=t.created_at,c=t.author,o=t.text,l=t.children,i=Object(g.a)(new Date(n),{addSuffix:!0}),u=Object(a.useState)(!1),m=Object(s.a)(u,2),d=m[0],p=m[1],f=Object(a.useCallback)((function(){p(!d)}),[p]);return r.a.createElement("div",{className:"comment-container comment-container-outer"},!d&&r.a.createElement("div",{onClick:f,className:"threadline-container threadline-container-outer"},r.a.createElement("div",{className:"threadline"})),r.a.createElement("div",{className:"comment-content"},r.a.createElement("div",{onClick:function(){return p(!1)},className:"comment-metadata"},d&&"[+]",c," \xb7 ",i),!d&&r.a.createElement("div",{className:"comment-body",dangerouslySetInnerHTML:{__html:o}}),!d&&!!l.length&&r.a.createElement(O,{comments:l})))},O=function(e){var t=e.comments,n=e.style;return r.a.createElement("div",{style:n,className:"comments"},t.map((function(e){return r.a.createElement(j,{key:e.id,comment:e})})))},N=n(24);function x(e){var t=Object(a.useRef)([]),n=Object(m.c)(["postWithComments",e],(function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return C.apply(void 0,n.concat([t]))}),{staleTime:18e4});return[n.data,n.isLoading,function(n){var a;a="Default"===n?function(){return t.current}:function(e){return function(e,t){var n=Object(N.a)(t);switch(e){case"Newest":n.sort((function(e,t){return t.created_at_i-e.created_at_i}));break;case"Oldest":n.sort((function(e,t){return e.created_at_i-t.created_at_i}));break;default:return t}return n}(n,e)},m.a.setQueryData(["postWithComments",e],a)}]}function C(e,t,n){return _.apply(this,arguments)}function _(){return(_=Object(u.a)(i.a.mark((function e(t,n,a){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(n);case 2:return r=e.sent,c=r.children,a&&(a.current=c),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return P.apply(this,arguments)}function P(){return(P=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://hn.algolia.com/api/v1/items/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(e){var t=e.clickHandler,n=e.options,a=e.selectedOption;return r.a.createElement("div",{className:"dropdown-menu-container"},r.a.createElement("ul",{className:"dropdown-menu"},n.map((function(e){var n=e===a?{color:"var(--orange-accent)"}:void 0;return r.a.createElement("li",{style:n,key:e,onClick:function(){return t(e)}},e)}))))},M=function(e){var t=e.sortComments,n=Object(a.useState)("Default"),c=Object(s.a)(n,2),o=c[0],l=c[1],i=Object(a.useCallback)((function(e){l(e),t(e)}),[l,t]);return r.a.createElement("div",{className:"sort-comment-dropdown"},"Sort By",r.a.createElement("div",{className:"dropdown-container"},r.a.createElement("span",null,o),r.a.createElement(S,{clickHandler:i,options:["Default","Newest","Oldest"],selectedOption:o})))},T=function(e){var t=x(e.postId),n=Object(s.a)(t,3),c=n[0],o=n[1],l=n[2];return r.a.createElement(a.Fragment,null,!o&&r.a.createElement(M,{sortComments:l}),!o&&r.a.createElement(O,{style:{marginLeft:"-20px"},comments:c}),o&&r.a.createElement("h1",null,"Loading Comments..."))},W=function(e){var t=e.match.params.id,n=!(e.location.state&&e.location.state.post),a=Object(m.c)(["post",t],h,{enabled:n,staleTime:18e4}),c=a.data,o=a.isLoading;return n||c||(c=e.location.state.post),r.a.createElement("div",{style:{top:0,left:0,paddingLeft:"40px"},className:"post post-display"},n&&o&&r.a.createElement("h1",null,"Loading..."),c&&r.a.createElement(w,{post:c,fetched:n}),c&&r.a.createElement(T,{postId:c.id,fetched:n}))};var D=function(){var e=function(){var e=Object(m.c)("topPostIds",f,{staleTime:18e4}).data,t=Object(m.b)("topPosts",(function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return d.apply(void 0,[e||[]].concat(n))}),{getFetchMore:function(e,t){return t.length<500?t.length:void 0},enabled:e,staleTime:18e4}),n=t.data,a=t.isFetchingMore,r=t.fetchMore;return[n?n.flat():[],a,r]}(),t=Object(s.a)(e,3),n=t[0],a=(t[1],t[2]);return r.a.createElement("div",{className:"App"},r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/post/:id",component:W}),r.a.createElement(E.a,{path:"/"},r.a.createElement(y,{posts:n,fetchPosts:a}))))},I=n(13);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(I.a,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.e2929efa.chunk.js.map