(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(e,t,n){e.exports={form:"ContactForm_form__1jaJ_"}},22:function(e,t,n){},28:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(7),o=n.n(a),i=(n(22),n(13)),u=n(14),b=n.n(u),j=n(1);var s=function(e){var t=e.onSubmit,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],o=r[1],u=Object(c.useState)(""),s=Object(i.a)(u,2),d=s[0],l=s[1];return Object(j.jsxs)("form",{className:b.a.form,style:{marginBottom:"32px"},onSubmit:function(e){e.preventDefault(),t(a,d),o(""),l("")},children:[Object(j.jsx)("p",{children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name",value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(e){o(e.currentTarget.value)}}),Object(j.jsx)("p",{children:"Number"}),Object(j.jsx)("input",{type:"tel",value:d,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:function(e){l(e.currentTarget.value)}}),Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})]})};var d=function(e){var t=e.onChange;return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Find contacts by name"}),Object(j.jsx)("input",{type:"text",onChange:function(e){t(e.currentTarget.value)}})]})},l=n(3);var O=Object(l.b)()((function(e){var t=e.onDelete,n=Object(l.d)((function(e){return e.contacts})),c=Object(l.d)((function(e){return e.filter}));return Object(j.jsx)("ul",{children:n.filter((function(e){return function(e,t){return e.toLowerCase().includes(t.toLowerCase())}(e.name,c)})).map((function(e){return Object(j.jsxs)("li",{children:[e.name," ",e.number,Object(j.jsx)("button",{type:"button",onClick:function(){t(e.id)},children:"Delete"})]},e.id)}))})})),f=(n(28),n(33)),h=n(4),m="ADD_CONTACT",p="DELETE_CONTACT",x="CHANGE_FILTER",v=Object(h.b)(m),g=Object(h.b)(p),C=Object(h.b)(x);var y,A=Object(l.b)()((function(){var e=Object(l.d)((function(e){return e.contacts})),t=Object(l.c)();return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(s,{onSubmit:function(n,c){e.filter((function(e){return e.name===n})).length>0?alert(n+" is already in contacts"):t(v({id:Object(f.a)(),name:n,number:c}))}}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(d,{onChange:function(e){t(C(e))}}),Object(j.jsx)(O,{onDelete:function(e){t(g(e))}})]})})),T=n(5),k=n(15),w=n.n(k),D=n(9),_=n(17),E=n(2),N=Object(h.c)([],(y={},Object(D.a)(y,v,(function(e,t){return[].concat(Object(_.a)(e),[t.payload])})),Object(D.a)(y,g,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),y)),S=Object(h.c)("",Object(D.a)({},C,(function(e,t){return t.payload}))),z=Object(E.b)({contacts:N,filter:S}),J={key:"root",version:1,storage:w.a},L=Object(T.g)(J,z),B=Object(h.a)({reducer:L,middleware:function(e){return e({serializableCheck:{ignoredActions:[T.a,T.f,T.b,T.c,T.d,T.e]}})}}),F=Object(T.h)(B),Z=n(16);o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(l.a,{store:B,children:Object(j.jsx)(Z.a,{loading:null,persistor:F,children:Object(j.jsx)(A,{})})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.52bdff46.chunk.js.map