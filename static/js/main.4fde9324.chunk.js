(this.webpackJsonpinvestimentos=this.webpackJsonpinvestimentos||[]).push([[0],{30:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/investimento.32f2c201.png"},39:function(e,t,n){},40:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(31),r=n.n(s),i=n(16),o=n(2),l=n(9),u=Object(a.createContext)({}),d=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),r=Object(l.a)(s,2),i=r[0],o=r[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("investimentos@user"),t=e&&JSON.parse(e);c(t),t||function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return-1!==n.map((function(t){return t===e})).indexOf(!0)}(window.location.pathname,"/investimentos/login","/investimentos/register")||o(!0)}),[window.location.href]),{user:n,redirect:i}},j=(n(39),n(8)),b=(n(40),n(0)),m=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:e.id,className:"sr-only",children:e.title}),Object(b.jsx)("input",Object(j.a)(Object(j.a)({},e),{},{className:"btn",placeholder:e.title}))]})},x=function(e){return Object(b.jsx)("div",{className:"text-sm",children:Object(b.jsx)(i.b,{to:e.to,className:"font-medium text-indigo-600 hover:text-indigo-500",children:e.title})})},f=n(11),h=function(){var e=Object(o.f)();return{login:Object(a.useCallback)((function(t){localStorage.setItem("investimentos@user",JSON.stringify(t)),e.replace("/")}),[e]),logout:Object(a.useCallback)((function(){localStorage.removeItem("investimentos@user"),e.replace("/login")}),[e])}},p=n(34),O={baseUrl:"https://meusinvestimentosapi.herokuapp.com"},g=n.n(p).a.create({baseURL:O.baseUrl}),v=function(){var e=function(){var e=h().login,t=Object(a.useState)({login:"",senha:""}),n=Object(l.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)({hasError:!1,message:""}),i=Object(l.a)(r,2),o=i[0],u=i[1];return{updateForm:Object(a.useCallback)((function(e){var t=e.target,n=Object(j.a)(Object(j.a)({},c),{},Object(f.a)({},t.name,t.value));s(n)}),[c]),submitLoginForm:Object(a.useCallback)((function(){g.post("/api/usuarios/auth",c).then((function(t){var n=t.data;e(n)})).catch((function(e){var t,n=(null===(t=e.response.data)||void 0===t?void 0:t.errors)||["500"];u({hasError:!0,message:n.join("\n")})}))}),[c]),error:o,formData:c}}(),t=e.updateForm,c=e.submitLoginForm,s=e.formData,r=e.error;return Object(b.jsx)("div",{className:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:Object(b.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:"mx-auto h-12 w-auto",src:n(30).default,alt:"Workflow"}),Object(b.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"})]}),Object(b.jsxs)("div",{className:"mt-8 space-y-6",children:[Object(b.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[Object(b.jsx)(m,{id:"login",name:"login",type:"username",required:!0,title:"Login",onChange:t,value:s.login}),Object(b.jsx)(m,{id:"senha",name:"senha",type:"password",required:!0,title:"Password",onChange:t,value:s.senha})]}),Object(b.jsx)("div",{hidden:!r.hasError,children:Object(b.jsx)("p",{className:"text-red-600",children:r.message})}),Object(b.jsx)("div",{children:Object(b.jsxs)("button",{type:"submit",onClick:c,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[Object(b.jsx)("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:Object(b.jsx)("i",{className:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400","aria-hidden":"true"})}),"Sign in"]})}),Object(b.jsx)("div",{className:"flex items-center justify-center",children:Object(b.jsx)(x,{title:"Don't have an account?",to:"/register"})})]}),Object(b.jsxs)("div",{children:["\xcdcones feitos por ",Object(b.jsx)("a",{href:"https://www.flaticon.com/br/autores/iconpro86",title:"Iconpro86",children:"Iconpro86"})," from ",Object(b.jsx)("a",{href:"https://www.flaticon.com/br/",title:"Flaticon",children:"www.flaticon.com"})]})]})})},w=Object(o.g)((function(){var e=function(){var e=h().login,t=Object(a.useState)({email:"",login:"",nome:"",senha:"",senhaConfirmacao:""}),n=Object(l.a)(t,2),c=n[0],s=n[1],r=Object(a.useCallback)((function(e){var t=e.target,n=Object(j.a)(Object(j.a)({},c),{},Object(f.a)({},t.name,t.value));s(n)}),[c]),i=Object(a.useCallback)((function(){g.post("/api/usuarios",c).then((function(t){var n=t.data;e(n)})).catch(console.log)}),[c]);return{formData:c,updateForm:r,submitRegisterForm:i}}(),t=e.formData,c=e.submitRegisterForm,s=e.updateForm;return Object(b.jsx)("div",{className:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:Object(b.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:"mx-auto h-12 w-auto",src:n(30).default,alt:"Workflow"}),Object(b.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"})]}),Object(b.jsxs)("div",{className:"mt-8 space-y-6",children:[Object(b.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[Object(b.jsx)(m,{id:"email",name:"email",type:"email",required:!0,title:"Email address",onChange:s,value:t.email}),Object(b.jsx)(m,{id:"login",name:"login",type:"username",required:!0,title:"Login name",onChange:s,value:t.login}),Object(b.jsx)(m,{id:"nome",name:"nome",required:!0,title:"Full Name",onChange:s,value:t.nome}),Object(b.jsx)(m,{id:"senha",name:"senha",type:"password",required:!0,title:"Password",onChange:s,value:t.senha}),Object(b.jsx)(m,{id:"senhaConfirmacao",name:"senhaConfirmacao",type:"password",required:!0,title:"Password confirm",onChange:s,value:t.senhaConfirmacao})]}),Object(b.jsx)("div",{children:Object(b.jsxs)("button",{type:"submit",onClick:c,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[Object(b.jsx)("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:Object(b.jsx)("i",{className:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400","aria-hidden":"true"})}),"Sign up"]})}),Object(b.jsx)("div",{className:"flex items-center justify-center",children:Object(b.jsx)(x,{title:"Already have an account?",to:"/login"})})]})]})})})),y=(n(65),function(e){var t=h().logout;return Object(b.jsxs)("div",{className:"min-h-screen",children:[Object(b.jsx)("header",{className:"bg-white shadow",children:Object(b.jsxs)("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between",children:[Object(b.jsx)("h1",{className:"text-3xl font-bold text-gray-900",children:"Carteiras"}),Object(b.jsx)("button",{className:"logout",onClick:t,children:"Logout"})]})}),Object(b.jsx)("main",{children:Object(b.jsx)("div",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8",children:e.children})})]})}),N=(n(66),function(e){var t=e.icon,n=e.title,a=e.value;return Object(b.jsxs)("div",{className:"bg-gray-50 py-5 pr-5 rounded-md flex hover:bg-gray-300 cursor-pointer",children:[Object(b.jsx)("div",{className:"left-bar"}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"flex space-x-5",children:[Object(b.jsx)("img",{height:32,width:32,src:t,alt:"Renda fixa icone"}),Object(b.jsx)("h3",{className:"text-3xl font-bold",children:n})]}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{className:"text-2xl font-medium",children:a})})]})]})}),C=n.p+"static/media/interest-rate.78adf9ed.png",F=function(){return Object(b.jsxs)("div",{className:"w-full flex justify-between border-t-2 p-4",children:[Object(b.jsx)("h4",{className:"font-semibold",children:"Tipo da transa\xe7\xe3o"}),Object(b.jsx)("p",{children:"Data"})]})},S=n(13),k=n.n(S),I=n(20),L=function(){var e=Object(a.useContext)(u).user,t=Object(a.useMemo)((function(){return function(e){return{getfixedInterest:function(){var t=Object(I.a)(k.a.mark((function t(){var n,a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.get("/api/rendafixa/".concat(e.id));case 3:return n=t.sent,a=n.data,t.abrupt("return",a.content);case 8:return t.prev=8,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",[]);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),createfixedInterest:function(){var t=Object(I.a)(k.a.mark((function t(n){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=Object(j.a)(Object(j.a)({},n),{},{usuario:e.id}),t.next=4,g.post("/api/rendafixa",a);case 4:t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",[]);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}}(e)}),[e]),n=Object(a.useState)([]),c=Object(l.a)(n,2),s=c[0],r=c[1];return Object(a.useEffect)((function(){e.id&&t.getfixedInterest().then(r)}),[t]),{totalFixedInterest:Object(a.useMemo)((function(){return s.reduce((function(e,t){return t.preco+e}),0).toLocaleString("pt-br",{currency:"BRL",style:"currency"})}),[s])}},R=Object(o.g)((function(){var e=L();return Object(b.jsxs)(y,{children:[Object(b.jsxs)("h2",{className:"text-3xl font-bold",children:[Object(b.jsx)("small",{className:"font-medium",children:"Total investido"}),Object(b.jsx)("br",{}),"R$ 1.000.000,00"]}),Object(b.jsxs)("div",{className:"mt-10 grid gap-5 grid-cols-2",children:[Object(b.jsx)(N,{icon:C,title:"Renda fixa",value:e.totalFixedInterest}),Object(b.jsx)(N,{icon:C,title:"Renda variavel",value:"R$ 1.000,00"})]}),Object(b.jsx)("div",{className:"mt-5",children:Object(b.jsxs)("div",{className:"sm:w-6/12",children:[Object(b.jsx)("h3",{className:"text-xl font-bold pb-5",children:"Transa\xe7\xf5es"}),Object(b.jsx)(F,{}),Object(b.jsx)(F,{}),Object(b.jsx)(F,{}),Object(b.jsx)(F,{})]})})]})})),q=function(){return Object(b.jsxs)("div",{className:"text-center p-10 bg-gray-200",children:["Icons made by",Object(b.jsx)("a",{href:"https://www.flaticon.com/authors/fzyn",title:"fzyn",children:"fzyn"})," and"," ",Object(b.jsx)("a",{href:"https://www.flaticon.com/br/autores/iconpro86",title:"Iconpro86",children:"Iconpro86"})," from",Object(b.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})};var D=function(){var e=d(),t=e.redirect,n=e.user;return Object(b.jsxs)(i.a,{basename:"/investimentos",children:[Object(b.jsxs)(u.Provider,{value:{user:n},children:[Object(b.jsx)(o.b,{path:"/",exact:!0,component:R}),Object(b.jsx)(o.b,{path:"/login",component:v}),Object(b.jsx)(o.b,{path:"/register",component:w}),t&&Object(b.jsx)(o.a,{to:"/login"})]}),Object(b.jsx)(q,{})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root")),E()}},[[68,1,2]]]);
//# sourceMappingURL=main.4fde9324.chunk.js.map