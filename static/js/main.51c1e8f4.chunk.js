(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),o=n(14),i=n.n(o),a=(n(20),n(2)),l=n(4),s=(n(21),n(22),n(0));var j=function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("img",{src:e.employee.image})}),Object(s.jsx)("td",{children:Object(s.jsx)("p",{children:e.employee.name})}),Object(s.jsx)("td",{children:Object(s.jsx)("p",{children:e.employee.phone})}),Object(s.jsx)("td",{children:Object(s.jsx)("p",{children:e.employee.email})}),Object(s.jsx)("td",{children:Object(s.jsx)("p",{children:e.employee.dob})})]})};n(24);var u=function(){return Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("h1",{children:"Employee Directory"}),Object(s.jsx)("p",{children:"Click on name, phone, email, or DOB to sort or enter in the search field to filter by name."})]})};n(25);var h=function(e){var t=e.handleChange,n=Object(c.useState)(""),r=Object(l.a)(n,2),o=(r[0],r[1]);return Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("label",{htmlFor:"employeeSearch",className:"form-label",children:"Search Employees"}),Object(s.jsx)("input",{className:"form-control",id:"employeeSearch",placeholder:"Type to search...",onChange:function(e){e.preventDefault();var n=e.target.value;o(n),t(n)}})]})},b=n(15),m=n.n(b),d=["JavaScript","Python","C","Ruby","Java","PHP","C#"],p=function(e){return new Promise((function(e,t){m.a.get("https://randomuser.me/api/?results=15").then((function(t){var n=t.data.results.map((function(e){return{name:e.name.first+" "+e.name.last,phone:e.phone,email:e.email,image:e.picture.large,dob:e.dob.date,last:e.name.last}}));e(n)})).catch((function(e){return t(e)}))}))},f=function(){return new Promise((function(e){e(d)}))};var O=function(){var e=Object(c.useState)({employeeList:[],search:""}),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){f().then((function(e){p(e[0]).then((function(e){r(Object(a.a)(Object(a.a)({},n),{},{employeeList:e}))}))})).catch((function(e){return console.log(e)}))}),[]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(u,{}),Object(s.jsx)(h,{handleChange:function(e){r(Object(a.a)(Object(a.a)({},n),{},{search:e}))}}),Object(s.jsxs)("table",{children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Image"}),Object(s.jsx)("th",{onClick:function(e){e.preventDefault(),function(){var e=n.employeeList;e.sort((function(e,t){return e.name>t.name?1:-1})),r(Object(a.a)(Object(a.a)({},n),{},{employeeList:e}))}()},children:"Name"}),Object(s.jsx)("th",{onClick:function(e){e.preventDefault(),function(){var e=n.employeeList;e.sort((function(e,t){return e.phone>t.phone?1:-1})),r(Object(a.a)(Object(a.a)({},n),{},{employeeList:e}))}()},children:"Phone"}),Object(s.jsx)("th",{onClick:function(e){e.preventDefault(),function(){var e=n.employeeList;e.sort((function(e,t){return e.email>t.email?1:-1})),r(Object(a.a)(Object(a.a)({},n),{},{employeeList:e}))}()},children:"Email"}),Object(s.jsx)("th",{onClick:function(e){e.preventDefault(),function(){var e=n.employeeList;e.sort((function(e,t){return e.dob>t.dob?1:-1})),r(Object(a.a)(Object(a.a)({},n),{},{employeeList:e}))}()},children:"DOB"})]})}),Object(s.jsx)("tbody",{children:n.employeeList.filter((function(e){return!!e.name.toLowerCase().includes(n.search.toLowerCase())})).map((function(e){return Object(s.jsx)(j,{employee:e},e.id)}))})]})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),x()}},[[44,1,2]]]);
//# sourceMappingURL=main.51c1e8f4.chunk.js.map