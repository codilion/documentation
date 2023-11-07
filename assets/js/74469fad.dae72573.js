"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[6597],{8220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(5893),o=n(1151);const i={sidebar_position:3,sidebar_label:"Restore",description:"Restore and sync the OL Network database to the current state"},s="Restore",a={id:"validators/restore",title:"Restore",description:"Restore and sync the OL Network database to the current state",source:"@site/docs/validators/restore.md",sourceDirName:"validators",slug:"/validators/restore",permalink:"/validators/restore",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/validators/restore.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Restore",description:"Restore and sync the OL Network database to the current state"},sidebar:"tutorialSidebar",previous:{title:"Running a Validator",permalink:"/validators/running-a-validator"},next:{title:"Register",permalink:"/validators/register"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setup",id:"setup",level:3},{value:"Restoring to the latest version of the 0L Network public backup",id:"restoring-to-the-latest-version-of-the-0l-network-public-backup",level:3},{value:"Sync as a Full Node",id:"sync-as-a-full-node",level:3},{value:"Start",id:"start",level:3},{value:"Verify",id:"verify",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"restore",children:"Restore"}),"\n",(0,r.jsxs)(t.p,{children:["Restore the Database to be up to date with the current state of the Network. Repository is located ",(0,r.jsx)(t.a,{href:"https://github.com/0LNetworkCommunity/epoch-archive-testnet",children:"here"})," and contains other useful commands out this scope."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["This guide is referencing the REX testnet as we develop the ",(0,r.jsx)(t.code,{children:"libra-framework"})," software for v6.9.x (soon v7)"]})}),"\n",(0,r.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"You will need an account and libra configuration to use this tool"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"# Create account\nlibra wallet keygen\n\n#Initialize configuration\nlibra config init\n"})})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The Makefile is designed for libra-framework v6.9.x (soon v7) Ensure you are using the correct version."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(t.p,{children:"Clone the repo and prepare the binary:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"cd ~\ngit clone https://github.com/0LNetworkCommunity/epoch-archive-testnet\ncd ~/epoch-archive-testnet\nmake bins\n"})}),"\n",(0,r.jsx)(t.h3,{id:"restoring-to-the-latest-version-of-the-0l-network-public-backup",children:"Restoring to the latest version of the 0L Network public backup"}),"\n",(0,r.jsx)(t.p,{children:"This is most likely all you will need to restore and start/resume syncing:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"  cd ~/epoch-archive-testnet\n  make wipe-db && make restore-all\n"})}),"\n",(0,r.jsx)(t.h3,{id:"sync-as-a-full-node",children:"Sync as a Full Node"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["You will need to open port ",(0,r.jsx)(t.code,{children:"6182"})," and also verify your seed peers in the yaml"]})}),"\n",(0,r.jsxs)(t.p,{children:["Currently you need to sync as a full node. To do that you need to add the contents of ",(0,r.jsx)(t.a,{href:"/validators/yaml-templates/fullnode-yaml",children:"fullnode.yaml"})," in ",(0,r.jsx)(t.code,{children:"~/.libra/fullnode.yaml"})]}),"\n",(0,r.jsxs)(t.p,{children:["You will need to change the file to point at the correct locations for your database and genesis blob. By default these will be ",(0,r.jsx)(t.code,{children:"~/.libra/db"})," and ",(0,r.jsx)(t.code,{children:"~/.libra/genesis/genesis.blog"})," respectfully."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"data_dir: /change/to/your/db/dir\n\ngenesis_file_location: /path/to/your/genesis/blob\n\n\n"})}),"\n",(0,r.jsx)(t.h3,{id:"start",children:"Start"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"libra node --config-path ~/.libra/fullnode.yaml"})}),"\n",(0,r.jsx)(t.h3,{id:"verify",children:"Verify"}),"\n",(0,r.jsxs)(t.p,{children:["You can check that you are syncing by checking that your ",(0,r.jsx)(t.code,{children:"ledger_version"})," and ",(0,r.jsx)(t.code,{children:"block_height"})," are increasing via the API endpoint ",(0,r.jsx)(t.code,{children:"curl localhost:8080/v1/ | jq"})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Response"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{\n  "chain_id": 2,\n  "epoch": "700",\n  "ledger_version": "3322278",\n  "oldest_ledger_version": "3316234",\n  "ledger_timestamp": "1699327458805056",\n  "node_role": "full_node",\n  "oldest_block_height": "1581950",\n  "block_height": "1584970",\n  "git_hash": "bafac94d6edd39d972729db21156d47758eb8969"\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(7294);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);