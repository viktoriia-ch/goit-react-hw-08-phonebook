"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[922],{5922:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(9434),a=t(8724),u=t(1413),i=t(158),l=t(8239),o=t(4595),s=t(4905),c={name:"",email:"",password:""},d={name:{type:"text",name:"name",required:!0,label:"Name",placeholder:"enter name"},email:{type:"email",name:"email",required:!0,label:"Email",placeholder:"enter email"},password:{type:"password",name:"password",required:!0,label:"Password",placeholder:"enter password"}},m="register-form_form__R0LAM",f=t(3329),h=function(e){var n=e.onSubmit,t=(0,i.Z)({initialState:c,onSubmit:n}),r=t.state,a=t.handleChange,h=t.handleSubmit;return(0,f.jsxs)("form",{onSubmit:h,className:m,children:[(0,f.jsx)(l.Z,{text:"Register page"}),(0,f.jsx)(o.Z,(0,u.Z)({value:r.name,handleChange:a},d.name)),(0,f.jsx)(o.Z,(0,u.Z)({value:r.email,handleChange:a},d.email)),(0,f.jsx)(o.Z,(0,u.Z)({value:r.password,handleChange:a},d.password)),(0,f.jsx)(s.Z,{type:"submit",text:"Register"})]})},p=function(){var e=(0,r.I0)();return(0,f.jsx)("div",{children:(0,f.jsx)(h,{onSubmit:function(n){e((0,a.IU)(n))}})})}},4905:function(e,n,t){t.d(n,{Z:function(){return u}});var r="button_btn__uXPTj",a=t(3329),u=function(e){var n=e.text,t=e.type;return(0,a.jsx)("button",{type:t,className:r,children:n})}},4595:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(1413),a=t(4925),u=t(2791),i=t(5984),l={input:"text-field_input__YM8fs"},o=t(3329),s=["label","handleChange"],c=function(e){var n=e.label,t=e.handleChange,c=(0,a.Z)(e,s),d=(0,u.useMemo)((function(){return(0,i.x0)()}),[]);return(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{className:l.label,htmlFor:d,children:n}),(0,o.jsx)("input",(0,r.Z)({className:l.input,id:d,onChange:t},c))]})}},8239:function(e,n,t){t.d(n,{Z:function(){return u}});var r="title_title__T6+0F",a=t(3329),u=function(e){var n=e.text;return(0,a.jsx)("h1",{className:r,children:n})}},158:function(e,n,t){var r=t(4942),a=t(1413),u=t(9439),i=t(2791);n.Z=function(e){var n=e.initialState,t=e.onSubmit,l=(0,i.useState)((0,a.Z)({},n)),o=(0,u.Z)(l,2),s=o[0],c=o[1],d=(0,i.useCallback)((function(e){var n=e.target,t=n.name,u=n.value;c((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},t,u))}))}),[c]);return{state:s,setState:c,handleChange:d,handleSubmit:function(e){e.preventDefault(),t((0,a.Z)({},s))}}}},4925:function(e,n,t){function r(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,{Z:function(){return r}})},5984:function(e,n,t){t.d(n,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=922.c5761d52.chunk.js.map