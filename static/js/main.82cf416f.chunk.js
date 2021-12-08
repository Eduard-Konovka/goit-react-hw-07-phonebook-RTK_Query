(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={section:"Section_section__1F-7t",title:"Section_title__1XUDD"}},11:function(t,e,n){t.exports={filter:"Filter_filter__dKLFL",input:"Filter_input__1Oqev"}},19:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__rnE7t",label:"ContactForm_label__23emk",title:"ContactForm_title__3tJTD",input:"ContactForm_input__yg3tm",btn:"ContactForm_btn__j3PnA"}},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),i=n.n(r),o=(n(19),n(14)),s=n(3),l=n(13),u=n.n(l),b=n(9),j=n.n(b),m=n(0);function d(t){var e=t.title,n=t.children;return Object(m.jsxs)("div",{className:j.a.container,children:[e&&Object(m.jsx)("h1",{className:j.a.title,children:e}),n]})}var f=n(10),_=n.n(f);function O(t){var e=t.title,n=t.children;return Object(m.jsxs)("section",{className:_.a.section,children:[e&&Object(m.jsx)("h2",{className:_.a.title,children:e}),n]})}var h=n(2),p=n.n(h);function x(t){var e=t.forSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),l=Object(s.a)(o,2),u=l[0],b=l[1],j=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":i(a);break;case"number":b(a);break;default:return}},d=function(){i(""),b("")};return Object(m.jsx)("form",{onSubmit:function(t){t.preventDefault(),e({name:r,number:u}),d()},className:p.a.form,children:Object(m.jsxs)("label",{className:p.a.label,children:[Object(m.jsx)("p",{className:p.a.title,children:"Name"}),Object(m.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:j,className:p.a.input}),Object(m.jsx)("p",{className:p.a.title,children:"Number"}),Object(m.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,onChange:j,className:p.a.input}),Object(m.jsx)("button",{className:p.a.btn,children:"Add contact"})]})})}var v=n(11),C=n.n(v);function N(t){var e=t.value,n=t.forChange;return Object(m.jsxs)("label",{className:C.a.filter,children:["Find contacts by name:",Object(m.jsx)("input",{type:"text",value:e,className:C.a.input,onChange:n})]})}var g=n(5),S=n.n(g);function w(t){var e=t.contacts,n=t.forDeleteContact;return Object(m.jsx)("ul",{className:S.a.list,children:e.map((function(t){return Object(m.jsxs)("li",{className:S.a.item,children:[Object(m.jsx)("p",{className:S.a.text,children:"".concat(t.name,": ").concat(t.number)}),Object(m.jsx)("button",{type:"button",className:S.a.btn,onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})}n(29);function k(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),i=Object(s.a)(r,2),l=i[0],b=i[1];Object(a.useEffect)((function(){var t;c(null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:[])}),[]),Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(m.jsxs)(d,{title:"Phonebook",children:[Object(m.jsx)(O,{children:Object(m.jsx)(x,{forSubmit:function(t){var e=t.name,a=t.number,r={id:u.a.generate(),name:e,number:a};n.map((function(t){return t.name})).includes(e)?alert("".concat(e," is already in contacts.")):c([].concat(Object(o.a)(n),[r]))}})}),Object(m.jsxs)(O,{title:"Contacts",children:[Object(m.jsx)(N,{value:l,forChange:function(t){return b(t.target.value)}}),Object(m.jsx)(w,{contacts:function(){var t=l.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),forDeleteContact:function(t){c(n.filter((function(e){return e.id!==t})))}})]})]})}i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root"))},5:function(t,e,n){t.exports={list:"ContactList_list__MlfzV",item:"ContactList_item__CTgCP",text:"ContactList_text__BzTpm",btn:"ContactList_btn__1uWkL"}},9:function(t,e,n){t.exports={container:"Container_container__2P1n4",title:"Container_title__Niqdx"}}},[[30,1,2]]]);
//# sourceMappingURL=main.82cf416f.chunk.js.map