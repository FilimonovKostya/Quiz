(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(1),c=n.n(s),a=n(5),r=n.n(a),j=(n(11),n(3)),u=n(2),o=function(e){return Object(i.jsx)("div",{className:"answerContainer",children:Object(i.jsx)("ul",{className:"answers",children:e.answer[e.questionsID].map((function(t,n){return Object(i.jsxs)("li",{className:t.isRight?e.right:"",onClick:function(){t.isRight?(e.changeAnswerAndQuestion(e.questionsID,t.id),e.setRight("right")):(e.changeAnswerAndQuestion(e.questionsID,t.id),e.setWrong("wrong"))},children:[" ",t.answer," "]},n)}))})})},d=(n(12),function(e){return Object(i.jsxs)("div",{className:"questionContainer",children:[Object(i.jsx)("h1",{children:"Question"}),Object(i.jsxs)("h2",{children:[e.question," ? "]})]})}),b=n(15);var h=function(){var e,t=Object(b.a)(),n=Object(b.a)(),a=Object(b.a)(),r=Object(s.useState)(""),h=Object(u.a)(r,2),O=h[0],g=h[1],l=Object(s.useState)(""),w=Object(u.a)(l,2),f=w[0],m=w[1],R=Object(s.useState)(0),x=Object(u.a)(R,2),S=x[0],p=x[1],v=Object(s.useState)(0),q=Object(u.a)(v,2),D=q[0],C=q[1],A=Object(s.useState)([{id:t,title:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 React"},{id:n,title:"\u041f\u043e\u0447\u0435\u043c\u0443 \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c React"},{id:a,title:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 Virtual Dom"}]),I=Object(u.a)(A,2),N=I[0],F=(I[1],Object(s.useState)((e={},Object(j.a)(e,t,[{id:t,answer:"\u042d\u0442\u043e \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f, \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0438 \u0433\u0438\u0431\u043a\u0430\u044f JavaScript \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432.",isRight:!0},{id:Object(b.a)(),answer:"\u042d\u0442\u043e \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u044b\u0439 \u0444\u0440\u0435\u0439\u043c\u043e\u0440\u043a",isRight:!1},{id:Object(b.a)(),answer:"\u042d\u0442\u043e \u0432\u043e\u043e\u0431\u0449\u0435 \u044f\u0437\u044b\u043a \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f ",isRight:!1}]),Object(j.a)(e,n,[{id:Object(b.a)(),answer:"\u0422\u0430\u043a \u043a\u0430\u043a \u043d\u0435\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u0432\u0430\u0440\u0438\u043d\u0430\u0442\u043e\u0432",isRight:!1},{id:n,answer:"\u0418\u0437-\u0437\u0430 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u044b ,\u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f Virtual Dom",isRight:!0},{id:Object(b.a)(),answer:"\u0411\u043e\u043b\u044c\u0448\u0435 \u043f\u043b\u0430\u0442\u044f\u0442 \u0438 \u043e\u043d \u043d\u0430 \u0445\u0430\u0439\u043f\u0435",isRight:!1}]),Object(j.a)(e,a,[{id:Object(b.a)(),answer:"\u0410\u043d\u0430\u043b\u043e\u0433 \u043d\u0430 Shadow DOM",isRight:!1},{id:Object(b.a)(),answer:"\u044d\u0442\u043e \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043d\u0430\u044f \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f, \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u0430\u044f \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0438 CSS \u0432 \u0432\u0435\u0431-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u0445.",isRight:!1},{id:a,answer:"\u044d\u0442\u043e \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u0438 \u043d\u0430\u0431\u043e\u0440 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a / \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u043d\u0430\u043c \u0443\u043b\u0443\u0447\u0448\u0438\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u0435",isRight:!0}]),e))),Q=Object(u.a)(F,2),k=Q[0],J=(Q[1],N.map((function(e){return e.title}))),T=N.map((function(e){return e.id}));return console.log(D),Object(i.jsx)("div",{className:"wrapper",children:Object(i.jsx)("div",{className:"container",children:N.length>S?Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsx)(d,{question:J[S]}),Object(i.jsx)(o,{answer:k,questionsID:T[S],changeAnswerAndQuestion:function(e,t){var n=k[e].find((function(e){return e.id===t}));setTimeout((function(){n&&n.id===e?(p(S+1),C(D+1),g("")):(p(S+1),m(""))}),1500)},setRight:g,setWrong:m,right:O,wrong:f})]}):Object(i.jsx)("div",{children:D})})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),c(e),a(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root")),O()}},[[13,1,2]]]);
//# sourceMappingURL=main.e513167d.chunk.js.map