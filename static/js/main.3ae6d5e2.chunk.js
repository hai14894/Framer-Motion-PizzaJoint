(this.webpackJsonppizzajoint=this.webpackJsonppizzajoint||[]).push([[0],{22:function(e,a,t){e.exports=t(33)},27:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(18),o=t.n(r),l=(t(27),t(20)),s=t(11),c=t(21),p=t(1),m=t(2),u=t(7),v=function(){return i.a.createElement(u.b,{to:"/"},i.a.createElement("header",null,i.a.createElement("div",{className:"logo"},i.a.createElement("svg",{className:"pizza-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},i.a.createElement("path",{fill:"none",d:"M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"}),i.a.createElement("path",{fill:"none",d:"M50 30 L50 -10 C50 -10 90 -10 90 30 Z"}))),i.a.createElement(m.a.div,{className:"title",initial:{y:-150},animate:{y:-10},transition:{delay:.5,type:"spring",stiffness:110}},i.a.createElement("h1",null,"Pizza Joint"))))},d={hover:{scale:1.1,textShadow:"0px 0px 8px rgb(125, 121, 121)",boxShadow:"0px 0px 8px rgb(125, 121, 121)",transition:{yoyo:1/0}}},h=function(){return i.a.createElement(m.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:1},className:"home container"},i.a.createElement(m.a.h2,{animate:{fontSize:50,color:"#202421"}},"Welcome to Pizza Joint"),i.a.createElement(u.b,{to:"/base"},i.a.createElement(m.a.button,{variants:d,whileHover:"hover"},"Create Your Pizza")))},E={init:{x:"100vw"},visible:{x:0,transition:{type:"spring",stiffness:50,delay:.5}}},b={hover:{scale:1.1,textShadow:"0px 0px 8px rgb(125, 121, 121)",boxShadow:"0px 0px 8px rgb(125, 121, 121)",transition:{yoyo:1/0}}},g={init:{x:"-100vw"},visible:{x:0,transition:{type:"spring",stiffness:120}}},x=function(e){var a=e.addBase,t=e.pizza;return i.a.createElement(m.a.div,{className:"base container",variants:E,initial:"init",animate:"visible"},i.a.createElement("h3",null,"Step 1: Choose Your Base"),i.a.createElement("ul",null,["Classic","Thin & Crispy","Thick Crust"].map((function(e){var n=t.base===e?"active":"";return i.a.createElement(m.a.li,{whileHover:{scale:1.2,fontWeight:"bold",originX:0},key:e,onClick:function(){return a(e)}},i.a.createElement("span",{className:n},e))}))),t.base&&i.a.createElement(m.a.div,{variants:g,initial:"init",animate:"visible",className:"next"},i.a.createElement(u.b,{to:"/toppings"},i.a.createElement(m.a.button,{variants:b,whileHover:"hover"},"Next"))))},f={init:{x:"100vw"},visible:{x:0,transition:{type:"spring",stiffness:120}}},y={hover:{scale:1.1,textShadow:"0px 0px 8px rgb(125, 121, 121)",boxShadow:"0px 0px 8px rgb(125, 121, 121)",transition:{yoyo:1/0}}},z=function(e){var a=e.addTopping,t=e.pizza;return i.a.createElement("div",{className:"toppings container"},i.a.createElement("h3",null,"Step 2: Choose Toppings"),i.a.createElement(m.a.ul,{variants:f,initial:"init",animate:"visible"},["mushrooms","peppers","onions","olives","extra cheese","tomatoes"].map((function(e){var n=t.toppings.includes(e)?"active":"";return i.a.createElement(m.a.li,{key:e,onClick:function(){return a(e)},whileHover:{scale:1.2,fontWeight:"bold",originX:0}},i.a.createElement("span",{className:n},e))}))),i.a.createElement(u.b,{to:"/order"},i.a.createElement(m.a.button,{variants:y,whileHover:"hover"},"Order")))},w={hidden:{x:"100vw"},visible:{x:0,transition:{type:"spring",stiffness:120,mass:.4,damping:9,when:"beforeChildren",staggerChildren:.3}}},C={hidden:{opacity:0},visible:{opacity:1}},N=function(e){var a=e.pizza;return i.a.createElement(m.a.div,{className:"container order",variants:w,initial:"hidden",animate:"visible"},i.a.createElement("h2",null,"Thank you for your order :)"),i.a.createElement(m.a.p,{variants:C},"You ordered a ",a.base," pizza with:"),i.a.createElement(m.a.div,{variants:C},a.toppings.map((function(e){return i.a.createElement(m.a.div,{key:e},e)}))))};var S=function(){var e=Object(n.useState)({base:"",toppings:[]}),a=Object(c.a)(e,2),t=a[0],r=a[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(v,null),i.a.createElement(p.c,null,i.a.createElement(p.a,{path:"/base"},i.a.createElement(x,{addBase:function(e){r(Object(s.a)(Object(s.a)({},t),{},{base:e}))},pizza:t})),i.a.createElement(p.a,{path:"/toppings"},i.a.createElement(z,{addTopping:function(e){var a;a=t.toppings.includes(e)?t.toppings.filter((function(a){return a!==e})):[].concat(Object(l.a)(t.toppings),[e]),r(Object(s.a)(Object(s.a)({},t),{},{toppings:a}))},pizza:t})),i.a.createElement(p.a,{path:"/order"},i.a.createElement(N,{pizza:t})),i.a.createElement(p.a,{path:"/"},i.a.createElement(h,null))))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(u.a,null,i.a.createElement(S,null))),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.3ae6d5e2.chunk.js.map