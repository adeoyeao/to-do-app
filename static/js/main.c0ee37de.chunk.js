(this["webpackJsonptodo-test"]=this["webpackJsonptodo-test"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(1),i=n.n(o),s=n(6),u=n.n(s),a=(n(13),n(7)),r=n(2),l=(n(14),n(15),function(t){return Object(c.jsxs)("form",{className:"AddItem",onSubmit:function(e){return t.handleSubmit(e)},children:[Object(c.jsx)("input",{type:"text",name:"newItem",value:t.input,placeholder:"Next Item",autoComplete:"off",onChange:function(e){return t.handleChange(e)}}),Object(c.jsx)("button",{type:"submit",className:"Button___submit",children:"Add"})]})}),d=(n(16),function(t){var e=Object(o.useState)("pending"),n=Object(r.a)(e,2),i=n[0],s=n[1],u={};u.backgroundColor="pending"===i?"yellow":"green";var a=Object(o.useState)(!1),l=Object(r.a)(a,2),d=l[0],j=l[1];return Object(c.jsxs)("div",{className:"TodoItem",children:[Object(c.jsx)("p",{children:t.todo}),Object(c.jsx)("button",{className:"Button___status",style:u,onClick:function(){s("pending"===i?"complete":"pending")},onMouseOver:function(){j(!0)},onMouseOut:function(){j(!1)}}),d&&Object(c.jsx)("span",{children:i}),Object(c.jsx)("button",{className:"Button___delete",onClick:function(){return t.deleteItem(t.index)}})]})});var j=function(){var t=Object(o.useState)("100vh"),e=Object(r.a)(t,2),n=e[0],i=e[1],s=function(){i("".concat(window.innerHeight,"px"))};Object(o.useEffect)((function(){return s(),window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}));var u={height:n},j=Object(o.useState)([]),b=Object(r.a)(j,2),f=b[0],m=b[1],O=Object(o.useState)(""),h=Object(r.a)(O,2),p=h[0],g=h[1],x=function(t){m(f.filter((function(e,n){return n!==t})))};return Object(o.useEffect)((function(){localStorage.getItem("items")&&m(localStorage.getItem("items").split(","))}),[]),Object(o.useEffect)((function(){localStorage.setItem("items",f)}),[f]),Object(c.jsx)("div",{className:"App",style:u,children:Object(c.jsxs)("div",{className:"List",children:[Object(c.jsx)("h1",{children:"To Do List"}),Object(c.jsx)("div",{className:"List_items",children:f.map((function(t,e){return Object(c.jsx)(d,{todo:t,deleteItem:x,index:e},"".concat(t).concat(e))}))}),Object(c.jsx)(l,{handleChange:function(t){g(t.target.value)},handleSubmit:function(t){t.preventDefault(),""===p||f.includes(p)||(m((function(t){return[].concat(Object(a.a)(t),[p])})),g(""))},input:p})]})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),o(t),i(t),s(t)}))};u.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root")),b()}],[[17,1,2]]]);
//# sourceMappingURL=main.c0ee37de.chunk.js.map