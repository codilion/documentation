"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[6354],{4013:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=t(5893),i=t(1151);const o={},r=void 0,l={id:"cli-tools/testnet/genesis-instructions",title:"genesis-instructions",description:"Genesis Transaction Instructions",source:"@site/docs/cli-tools/testnet/genesis-instructions.md",sourceDirName:"cli-tools/testnet",slug:"/cli-tools/testnet/genesis-instructions",permalink:"/cli-tools/testnet/genesis-instructions",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/cli-tools/testnet/genesis-instructions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testnet",permalink:"/category/testnet"},next:{title:"Welcome Validators",permalink:"/cli-tools/testnet/validator-registration"}},c={},a=[{value:"Genesis Transaction Instructions",id:"genesis-transaction-instructions",level:2},{value:"Testnet",id:"testnet",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}];function d(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"genesis-transaction-instructions",children:"Genesis Transaction Instructions"}),"\n",(0,s.jsx)(n.p,{children:"(WIP)"}),"\n",(0,s.jsx)(n.h3,{id:"testnet",children:"Testnet"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:['You\'ll need an empty repo to be the "coordination" repo for all node registration data. See for example ',(0,s.jsx)(n.code,{children:"https://github.com/0o-de-lally/a-genesis"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"1a. You can copy the layout.yaml file. Later you will edit this file with the list of users participating in genesis."}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Configure the nodes"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["2a. Nodes will need to have a number of tools installed in order to compile. This script ",(0,s.jsx)(n.em,{children:"might"}),"  work for your distro ",(0,s.jsx)(n.code,{children:"https://github.com/0o-de-lally/libra/blob/main/ol/util/setup.sh"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# targeting ubuntu\nsudo apt update\nsudo apt install -y git tmux jq build-essential cmake clang llvm libgmp-dev pkg-config libssl-dev lld\n\ncurl https://sh.rustup.rs -sSf | sh -s -- --default-toolchain stable -y\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["checkout and build ",(0,s.jsx)(n.code,{children:"v7-genesis"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'You\'ll want to do "release" builds of everything. Grab a cup.'}),"\n",(0,s.jsx)(n.p,{children:"Pro tip: double check your system installs. If you missed any of the system installs above, you'll be waiting a long time to find out."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"git clone git@github.com:0o-de-lally/libra-v7.git\ncd libra-v7\ngit checkout release-0.6.9\n\ncargo build --release -p libra -p libra-genesis-tools\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Get your Github app api token"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["4a. Follow the github instructions: ",(0,s.jsx)(n.code,{children:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic"})]}),"\n",(0,s.jsxs)(n.p,{children:["You'll want to choose the ",(0,s.jsx)(n.code,{children:"repo permissions"})," setting."]}),"\n",(0,s.jsxs)(n.p,{children:["4b You'll need a directory at ",(0,s.jsx)(n.code,{children:"$HOME/.libra"}),". Place your github api token in ",(0,s.jsx)(n.code,{children:"github_token.txt"})," under that directory."]}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Do the genesis ceremony.\nYou'll use the wizard for both configuring, registering, and building the genesis transaction."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You'll input the name of the github repo (",(0,s.jsx)(n.code,{children:"--org-github"})," and ",(0,s.jsx)(n.code,{children:"--name-github "}),") being used to coordinate."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"./target/release/libra-genesis-tools  --org-github <ORG_GITHUB> --name-github <NAME_GITHUB> register\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"Coordinator: merge pull requests."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The owner of the coordinator repo should merge the pull requests the registrants made to the repo."}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsxs)(n.li,{children:["Run the genesis transaction builder with ",(0,s.jsx)(n.code,{children:"libra-genesis-tools genesis"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You'll use the same github arguments as above plus two more. You'll be using a local copy of the move framework (",(0,s.jsx)(n.code,{children:"--local-framework"}),"). Last, you'll tell the wizard which DB backup file to use to migrate state from the previous network (",(0,s.jsx)(n.code,{children:"--json-legacy"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["For the legacy JSON you can use the test example: ",(0,s.jsx)(n.code,{children:"tools/genesis/tests/fixtures/sample_export_recovery.json"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"./target/release/libra-genesis-tools  --org-github <ORG_GITHUB> --name-github <NAME_GITHUB> --local-framework --json-legacy <PATH_TO_JSON> genesis\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"8",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Check your files\nYou should have a ",(0,s.jsx)(n.code,{children:"genesis/genesis.blob"})," file now in ",(0,s.jsx)(n.code,{children:"$HOME/libra"})," plus a ",(0,s.jsx)(n.code,{children:"validator.yaml"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start your node!"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"libra node --config-path ~/.libra/validator.yaml\n"})}),"\n",(0,s.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"I made changes to a .move file"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You'll need to rebuild the framework and its generated code."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd framework/\ncargo r --release release\n# yes two releases in there.\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var s=t(7294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);