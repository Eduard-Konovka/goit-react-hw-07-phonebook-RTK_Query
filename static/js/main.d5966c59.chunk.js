(this["webpackJsonpgoit-react-hw-07-phonebook-create_async_thunk"]=this["webpackJsonpgoit-react-hw-07-phonebook-create_async_thunk"]||[]).push([[0],{11:function(t,e,n){t.exports={list:"ContactList_list__3vA8k",item:"ContactList_item__3mzwu",text:"ContactList_text__3ZKoM",btn:"ContactList_btn__1hhsP"}},19:function(t,e,n){t.exports={container:"Container_container__3fSkp",title:"Container_title__18drt"}},20:function(t,e,n){t.exports={section:"Section_section__xMFCd",title:"Section_title__3QQNp"}},21:function(t,e,n){t.exports={filter:"Filter_filter__3E8L9",input:"Filter_input__1i57Z"}},22:function(t,e,n){t.exports={box:"Spinner_box__J1QeX",spinner:"Spinner_spinner__t1SPX"}},67:function(t,e,n){},68:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(14),o=n.n(r),i=n(3),u=n(5),s=n(33),l=n.n(s),b=n(35),d=n(2),j=n(6),f=Object(u.b)("contacts/changeFilter"),p=n(8),O=n.n(p),h=n(16),m=n(10),_=n.n(m);_.a.defaults.baseURL="https://61bea5632a1dd4001708a355.mockapi.io";var x,C,v,N=Object(u.c)("contacts/fetchContacts",function(){var t=Object(h.a)(O.a.mark((function t(e,n){var c,a,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,_.a.get("/contacts");case 4:return a=t.sent,r=a.data,t.abrupt("return",r);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),g=Object(u.c)("contacts/addContact",function(){var t=Object(h.a)(O.a.mark((function t(e,n){var c,a,r,o,i;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.name,a=e.number,r=n.rejectWithValue,t.prev=2,t.next=5,_.a.post("/contacts",{name:c,number:a});case 5:return o=t.sent,i=o.data,t.abrupt("return",i);case 10:return t.prev=10,t.t0=t.catch(2),t.abrupt("return",r(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,n){return t.apply(this,arguments)}}()),k=Object(u.c)("contacts/deleteContact",function(){var t=Object(h.a)(O.a.mark((function t(e,n){var c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,_.a.delete("/contacts/".concat(e));case 4:return t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),y={fetchContacts:N,addContact:g,deleteContact:k},w=Object(u.d)(!1,(x={},Object(d.a)(x,y.fetchContacts.pending,(function(){return!0})),Object(d.a)(x,y.fetchContacts.fulfilled,(function(){return!1})),Object(d.a)(x,y.fetchContacts.rejected,(function(){return!1})),Object(d.a)(x,y.addContact.pending,(function(){return!0})),Object(d.a)(x,y.addContact.fulfilled,(function(){return!1})),Object(d.a)(x,y.addContact.rejected,(function(){return!1})),Object(d.a)(x,y.deleteContact.pending,(function(){return!0})),Object(d.a)(x,y.deleteContact.fulfilled,(function(){return!1})),Object(d.a)(x,y.deleteContact.rejected,(function(){return!1})),x)),F=Object(u.d)([],(C={},Object(d.a)(C,y.fetchContacts.fulfilled,(function(t,e){return e.payload})),Object(d.a)(C,y.addContact.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(b.a)(t),[n])})),Object(d.a)(C,y.deleteContact.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),C)),S=Object(u.d)("",Object(d.a)({},f,(function(t,e){return e.payload}))),z=Object(u.d)(null,(v={},Object(d.a)(v,y.fetchContacts.rejected,(function(t){return console.log(t)})),Object(d.a)(v,y.fetchContacts.pending,(function(){return null})),Object(d.a)(v,y.addContact.rejected,(function(t){return console.log(t)})),Object(d.a)(v,y.addContact.pending,(function(){return null})),Object(d.a)(v,y.deleteContact.rejected,(function(t){return console.log(t)})),Object(d.a)(v,y.deleteContact.pending,(function(){return null})),v)),L=Object(j.b)({loading:w,items:F,filter:S,error:z}),A=Object(u.a)({reducer:{contacts:L},middleware:function(t){return t({serializableCheck:!1}).concat(l.a)},devTools:!1}),M=function(t){return t.contacts.loading},J=function(t){return t.contacts.items},Z=function(t){return t.contacts.filter},E=function(t){var e=J(t),n=Z(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},q=n(19),P=n.n(q),Q=n(1);function V(t){var e=t.title,n=t.children;return Object(Q.jsxs)("div",{className:P.a.container,children:[e&&Object(Q.jsx)("h1",{className:P.a.title,children:e}),n]})}var W=n(20),X=n.n(W);function B(t){var e=t.title,n=t.children;return Object(Q.jsxs)("section",{className:X.a.section,children:[e&&Object(Q.jsx)("h2",{className:X.a.title,children:e}),n]})}var D=n(23),I=n(7),K=n.n(I);function R(){var t=Object(c.useState)(""),e=Object(D.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(D.a)(r,2),u=o[0],s=o[1],l=Object(i.c)(J),b=Object(i.b)(),d=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":s(c);break;default:return}},j=function(){a(""),s("")};return Object(Q.jsx)("form",{onSubmit:function(t){t.preventDefault(),l.map((function(t){return t.name})).includes(n)?alert("".concat(n," is already in contacts.")):b(y.addContact({name:n,number:u})),j()},className:K.a.form,children:Object(Q.jsxs)("label",{className:K.a.label,children:[Object(Q.jsx)("p",{className:K.a.title,children:"Name"}),Object(Q.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:d,className:K.a.input}),Object(Q.jsx)("p",{className:K.a.title,children:"Number"}),Object(Q.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,onChange:d,className:K.a.input}),Object(Q.jsx)("button",{className:K.a.btn,children:"Add contact"})]})})}var T=n(21),U=n.n(T);function $(){var t=Object(i.c)(Z),e=Object(i.b)();return Object(Q.jsxs)("label",{className:U.a.filter,children:["Find contacts by name:",Object(Q.jsx)("input",{type:"text",value:t,className:U.a.input,onChange:function(t){return e(f(t.target.value))}})]})}var G=n(11),H=n.n(G);function Y(){var t=Object(i.c)(E),e=Object(i.b)();return Object(Q.jsx)("ul",{className:H.a.list,children:t.map((function(t){return Object(Q.jsxs)("li",{className:H.a.item,children:[Object(Q.jsx)("p",{className:H.a.text,children:"".concat(t.name,": ").concat(t.number)}),Object(Q.jsx)("button",{type:"button",className:H.a.btn,onClick:function(){return n=t.id,e(y.deleteContact(n));var n},children:"Delete"})]},t.id)}))})}var tt=n(34),et=n(22),nt=n.n(et);function ct(t){var e=t.size;return Object(Q.jsx)("div",{className:nt.a.box,children:Object(Q.jsx)(tt.a,{size:e,className:nt.a.spinner})})}n(67);function at(){var t=Object(i.b)(),e=Object(i.c)(M);return Object(c.useEffect)((function(){t(y.fetchContacts())}),[t]),Object(Q.jsxs)(V,{title:"Phonebook",children:[Object(Q.jsx)(B,{children:Object(Q.jsx)(R,{})}),e&&Object(Q.jsx)(ct,{size:100}),!e&&Object(Q.jsxs)(B,{title:"Contacts",children:[Object(Q.jsx)($,{}),Object(Q.jsx)(Y,{})]})]})}n(68);o.a.render(Object(Q.jsx)(a.a.StrictMode,{children:Object(Q.jsx)(i.a,{store:A,children:Object(Q.jsx)(at,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"ContactForm_form__2cqbM",label:"ContactForm_label__1M-ky",title:"ContactForm_title__16NJE",input:"ContactForm_input__10uh3",btn:"ContactForm_btn__1vXnp"}}},[[69,1,2]]]);
//# sourceMappingURL=main.d5966c59.chunk.js.map