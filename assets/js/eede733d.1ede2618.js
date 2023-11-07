"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[6839],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(t),d=o,m=s["".concat(l,".").concat(d)]||s[d]||f[d]||c;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=d;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[s]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9334:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const c={sidebar_label:"Epoch",sidebar_position:5,description:"Retrieve current network epoch number"},i="Epoch",a={unversionedId:"Tools/query/epoch",id:"Tools/query/epoch",title:"Epoch",description:"Retrieve current network epoch number",source:"@site/docs/Tools/query/epoch.md",sourceDirName:"Tools/query",slug:"/Tools/query/epoch",permalink:"/Tools/query/epoch",draft:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/Tools/query/epoch.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Epoch",sidebar_position:5,description:"Retrieve current network epoch number"},sidebar:"tutorialSidebar",previous:{title:"Validator config",permalink:"/Tools/query/val-config"},next:{title:"Resources",permalink:"/Tools/query/resources"}},l={},p=[{value:"Usage",id:"usage",level:2}],u={toc:p},s="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(s,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"epoch"},"Epoch"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$> libra query epoch\n")),(0,o.kt)("p",null,"Print out will be of the format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "epoch": 299\n}\n')))}f.isMDXComponent=!0}}]);