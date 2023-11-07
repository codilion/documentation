"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[2961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,y=m["".concat(c,".").concat(u)]||m[u]||p[u]||l;return n?a.createElement(y,o(o({ref:t},s),{},{components:n})):a.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={title:"Fullnode yaml example",id:"fullnode-yaml"},o=void 0,i={unversionedId:"validators/yaml-templates/fullnode-yaml",id:"validators/yaml-templates/fullnode-yaml",title:"Fullnode yaml example",description:"node.yaml",source:"@site/docs/validators/yaml-templates/fullnode-yaml.md",sourceDirName:"validators/yaml-templates",slug:"/validators/yaml-templates/fullnode-yaml",permalink:"/validators/yaml-templates/fullnode-yaml",draft:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/validators/yaml-templates/fullnode-yaml.md",tags:[],version:"current",frontMatter:{title:"Fullnode yaml example",id:"fullnode-yaml"},sidebar:"tutorialSidebar",previous:{title:"YAML Templates",permalink:"/category/yaml-templates"},next:{title:"Validator yaml example",permalink:"/validators/yaml-templates/validator-yaml"}},c={},d=[{value:"node.yaml",id:"nodeyaml",level:3},{value:"Fullnode yaml",id:"fullnode-yaml",level:3}],s={toc:d},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"nodeyaml"},"node.yaml"),(0,r.kt)("h3",{id:"fullnode-yaml"},"Fullnode yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"base:\n  role: 'full_node'\n  data_dir: '/home/test_0L/.libra/data'\n  waypoint:\n     from_config: 0:95023f4d6a7e24cac3e52cad29697184db260214210b57aef3f1031ad4d8c02c\n\nstate_sync:\n     state_sync_driver:\n        # do a fast sync with DownloadLatestStates\n        # bootstrapping_mode: ExecuteOrApplyFromGenesis\n        bootstrapping_mode: DownloadLatestStates\n        continuous_syncing_mode: ExecuteTransactionsOrApplyOutputs\n\nexecution:\n  genesis_file_location: '/home/test_0L/.libra/genesis/genesis.blob'\n\nfull_node_networks:\n- network_id: 'public'\n  # discovery_method: 'onchain'\n  listen_address: '/ip4/0.0.0.0/tcp/6182'\n  seed_addrs:\n      3c37c7d6a5122a6b9ef07a11cc40e445874eb0841ae028d6326bf67768cce235:\n        - \"/ip4/204.186.74.42/tcp/6182/noise-ik/0x3c37c7d6a5122a6b9ef07a11cc40e445874eb0841ae028d6326bf67768cce235/handshake/0\"\n\napi:\n  enabled: true\n  address: '0.0.0.0:8080'\n")))}p.isMDXComponent=!0}}]);