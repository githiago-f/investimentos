(this.webpackJsonpinvestimentos=this.webpackJsonpinvestimentos||[]).push([[0],{28:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/investimento.32f2c201.png"},37:function(e,t,n){},38:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),i=n(29),c=n.n(i),r=(n(37),n(15)),o=n(2),l=n(8),d=(n(38),n(1)),u=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:e.id,className:"sr-only",children:e.title}),Object(d.jsx)("input",Object(l.a)(Object(l.a)({},e),{},{className:"btn",placeholder:e.title}))]})},j=function(e){return Object(d.jsx)("div",{className:"text-sm",children:Object(d.jsx)(r.b,{to:e.to,className:"font-medium text-indigo-600 hover:text-indigo-500",children:e.title})})},m=n(11),b=n(9),h=n(32),x=n.n(h).a.create({baseURL:"http://localhost:8080"}),f=function(){var e=function(){var e=Object(s.useState)({login:"",senha:""}),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)({hasError:!1,message:""}),c=Object(b.a)(i,2),r=c[0],o=c[1];return{updateForm:Object(s.useCallback)((function(e){var t=e.target,s=Object(l.a)(Object(l.a)({},n),{},Object(m.a)({},t.name,t.value));a(s)}),[n]),submitLoginForm:Object(s.useCallback)((function(){x.post("/api/usuarios/auth",n).then((function(e){var t=e.data;localStorage.setItem("investimentos@user",JSON.stringify(t))})).catch((function(e){o({hasError:!0,message:e.message})}))}),[n]),error:r,formData:n}}(),t=e.updateForm,a=e.submitLoginForm,i=e.formData,c=e.error;return Object(d.jsx)("div",{className:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:Object(d.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{className:"mx-auto h-12 w-auto",src:n(28).default,alt:"Workflow"}),Object(d.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"})]}),Object(d.jsxs)("div",{className:"mt-8 space-y-6",children:[Object(d.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[Object(d.jsx)(u,{id:"login",name:"login",type:"username",required:!0,title:"Login",onChange:t,value:i.login}),Object(d.jsx)(u,{id:"senha",name:"senha",type:"password",required:!0,title:"Password",onChange:t,value:i.senha})]}),Object(d.jsx)("div",{hidden:!c.hasError,children:Object(d.jsx)("p",{className:"text-red-600",children:c.message})}),Object(d.jsx)("div",{children:Object(d.jsxs)("button",{type:"submit",onClick:a,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[Object(d.jsx)("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:Object(d.jsx)("i",{className:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400","aria-hidden":"true"})}),"Sign in"]})}),Object(d.jsx)("div",{className:"flex items-center justify-center",children:Object(d.jsx)(j,{title:"Don't have an account?",to:"/register"})})]}),Object(d.jsxs)("div",{children:["\xcdcones feitos por ",Object(d.jsx)("a",{href:"https://www.flaticon.com/br/autores/iconpro86",title:"Iconpro86",children:"Iconpro86"})," from ",Object(d.jsx)("a",{href:"https://www.flaticon.com/br/",title:"Flaticon",children:"www.flaticon.com"})]})]})})},g=function(){var e=function(){var e=Object(s.useState)({email:"",login:"",nome:"",senha:"",senhaConfirmacao:""}),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(s.useCallback)((function(e){var t=e.target,s=Object(l.a)(Object(l.a)({},n),{},Object(m.a)({},t.name,t.value));a(s)}),[n]),c=Object(s.useCallback)((function(){x.post("/api/usuarios",n).then((function(e){var t=e.data;console.log(t)})).catch(console.log)}),[n]);return{formData:n,updateForm:i,submitRegisterForm:c}}(),t=e.formData,a=e.submitRegisterForm,i=e.updateForm;return Object(d.jsx)("div",{className:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:Object(d.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{className:"mx-auto h-12 w-auto",src:n(28).default,alt:"Workflow"}),Object(d.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"})]}),Object(d.jsxs)("div",{className:"mt-8 space-y-6",children:[Object(d.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[Object(d.jsx)(u,{id:"email",name:"email",type:"email",required:!0,title:"Email address",onChange:i,value:t.email}),Object(d.jsx)(u,{id:"login",name:"login",type:"username",required:!0,title:"Login name",onChange:i,value:t.login}),Object(d.jsx)(u,{id:"nome",name:"nome",required:!0,title:"Full Name",onChange:i,value:t.nome}),Object(d.jsx)(u,{id:"senha",name:"senha",type:"password",required:!0,title:"Password",onChange:i,value:t.senha}),Object(d.jsx)(u,{id:"senhaConfirmacao",name:"senhaConfirmacao",type:"password",required:!0,title:"Password confirm",onChange:i,value:t.senhaConfirmacao})]}),Object(d.jsx)("div",{children:Object(d.jsxs)("button",{type:"submit",onClick:a,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[Object(d.jsx)("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:Object(d.jsx)("i",{className:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400","aria-hidden":"true"})}),"Sign up"]})}),Object(d.jsx)("div",{className:"flex items-center justify-center",children:Object(d.jsx)(j,{title:"Already have an account?",to:"/"})})]}),Object(d.jsxs)("div",{children:["\xcdcones feitos por ",Object(d.jsx)("a",{href:"https://www.flaticon.com/br/autores/iconpro86",title:"Iconpro86",children:"Iconpro86"})," from ",Object(d.jsx)("a",{href:"https://www.flaticon.com/br/",title:"Flaticon",children:"www.flaticon.com"})]})]})})},p=Object(s.createContext)({});var O=function(){var e=function(){var e=Object(s.useState)({}),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(s.useEffect)((function(){var e=localStorage.getItem("investimentos@user"),t=JSON.parse(e||"{}");a(t)}),[]),{user:n}}();return Object(d.jsx)(p.Provider,{value:e,children:Object(d.jsxs)(r.a,{basename:"/investimentos",children:[Object(d.jsx)(o.a,{path:"/",exact:!0,children:Object(d.jsx)(f,{})}),Object(d.jsx)(o.a,{path:"/register",component:g})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),v()}},[[63,1,2]]]);
//# sourceMappingURL=main.08bec6f6.chunk.js.map