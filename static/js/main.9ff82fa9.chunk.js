(this.webpackJsonpnews=this.webpackJsonpnews||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(4),r=n.n(s),a=(n(9),n(10),n(3)),o=n(0),j=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)("microsoft"),r=Object(a.a)(s,2),j=r[0],l=r[1];return Object(c.useEffect)((function(){var e="https://newsapi.org/v2/everything?q=".concat(j,"&apiKey=36872bfff8994108be70c46b512e7ec2");fetch(e).then((function(e){return e.json()})).then((function(e){i(e.articles)}))}),[]),Object(c.useEffect)((function(){var e="https://newsapi.org/v2/everything?q=".concat(j,"&apiKey=36872bfff8994108be70c46b512e7ec2");fetch(e).then((function(e){return e.json()})).then((function(e){i(e.articles)}))}),[j]),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"padd ",children:[Object(o.jsxs)("div",{className:"filter",children:[Object(o.jsx)("input",{type:"search",onChange:function(e){var t;t=e.target.value,l(t)},placeholder:" Enter a topic to search"}),Object(o.jsx)("button",{className:"btn1",onClick:function(){var e="https://newsapi.org/v2/everything?q=".concat(j,"&apiKey=36872bfff8994108be70c46b512e7ec2");fetch(e).then((function(e){return e.json()})).then((function(e){i(e.articles)}))},children:"Search News"})]}),Object(o.jsx)("h1",{children:"All News"}),0===n.length?Object(o.jsx)("h2",{children:"No Data Found"}):n.map((function(e,t){return Object(o.jsx)("div",{className:"article container",children:Object(o.jsxs)("div",{className:"padd-article container",children:[Object(o.jsx)("div",{className:"news-img container",children:Object(o.jsx)("img",{src:e.urlToImage})}),Object(o.jsxs)("div",{className:"news-detail container",children:[Object(o.jsx)("h4",{children:e.title}),Object(o.jsx)("p",{children:e.author}),Object(o.jsx)("p",{children:e.description}),Object(o.jsx)("p",{children:Object(o.jsx)("a",{href:e.url,target:"_blank",children:Object(o.jsx)("button",{class:"btn",children:"Read Full Article"})})})]})]})},t)}))]})})};var l=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(j,{})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root")),h()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.9ff82fa9.chunk.js.map