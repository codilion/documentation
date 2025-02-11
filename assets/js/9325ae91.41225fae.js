"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[32],{6693:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"cli-tools/txs/validator","title":"Txs - Validator","description":"Control a Validator","source":"@site/docs/cli-tools/txs/validator.md","sourceDirName":"cli-tools/txs","slug":"/cli-tools/txs/validator","permalink":"/cli-tools/txs/validator","draft":false,"unlisted":false,"editUrl":"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/cli-tools/txs/validator.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"description":"Control a Validator"},"sidebar":"tutorialSidebar","previous":{"title":"Txs - Upgrade","permalink":"/cli-tools/txs/upgrade"},"next":{"title":"Community Wallet Activation","permalink":"/cli-tools/txs/communtiy-wallet-activation"}}');var r=i(4848),o=i(8453);const t={sidebar_position:3,description:"Control a Validator"},s="Txs - Validator",l={},d=[{value:"Description",id:"description",level:2},{value:"Validator Transactions",id:"validator-transactions",level:2},{value:"Proof of Fee (POF) Operations",id:"proof-of-fee-pof-operations",level:3},{value:"Register Validator",id:"register-validator",level:3},{value:"Update Network and Fullnode Addresses",id:"update-network-and-fullnode-addresses",level:3},{value:"Manage Vouching Operations",id:"manage-vouching-operations",level:3},{value:"Manage Jail Operations",id:"manage-jail-operations",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"txs---validator",children:"Txs - Validator"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"libra txs validator"}),"  subcommand includes a set of subcommands tailored for validator operations. These commands facilitate actions like managing validator-specific transactions such as bids for joining the validator set."]}),"\n",(0,r.jsx)(n.h2,{id:"validator-transactions",children:"Validator Transactions"}),"\n",(0,r.jsx)(n.h3,{id:"proof-of-fee-pof-operations",children:"Proof of Fee (POF) Operations"}),"\n",(0,r.jsxs)(n.p,{children:["OL Network uses the ",(0,r.jsx)(n.a,{href:"https://github.com/0LNetworkCommunity/libra-framework",children:"Libra Framework"})," that uses an experimental algorithm called Proof of Fee(PoF) to determine the validator selection. Libra Framework's consensus mechanism stands apart from the more commonly known frameworks like Proof of Stake (PoS), Delegated Proof of Stake (DPoS), and Proof of Work (PoW), which are prevalent in many other blockchain networks. Instead of following these established paradigms, 0L Network employs a unique auction-based system for validator selection."]}),"\n",(0,r.jsx)(n.p,{children:"In this system, validators are required to submit bids as part of a competitive auction process. The number of available seats for validators is dynamic, and these seats are allocated based on the bid amounts. The bids are evaluated in descending order, and the highest bidders are granted validator status until all the seats are filled. A critical aspect of this mechanism is that all participating validators, regardless of their individual bid amounts, will eventually pay the same fee \u2014 equal to the lowest accepted bid in the auction."}),"\n",(0,r.jsxs)(n.p,{children:["For a deeper understanding of this distinctive approach, you can delve into the conceptual and operational intricacies detailed in the following papers: ",(0,r.jsx)(n.a,{href:"https://0l.network/2022/10/15/proof-of-fee-part-1/",children:"Part 1"})," & ",(0,r.jsx)(n.a,{href:"https://0l.network/2022/10/20/proof-of-fee-part-2-a-proposal/",children:"Part 2"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Function"}),": Manages bids for joining the validator set."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Syntax"}),": ",(0,r.jsx)(n.code,{children:"libra txs validator pof --bid-pct <BID_PERCENTAGE>   --expiry <EXPIRY>"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"bid-pct"}),": Percentage of the nominal reward bid for validator set entry."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"expiry"}),": Set the expiry epoch that your bid expires on."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example"}),":","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"libra txs validator pof --bid-pct 123.4 --expiry 1000\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"register-validator",children:"Register Validator"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Make sure you have your config at ",(0,r.jsx)(n.code,{children:"~/.libra/libra.yaml"})," with ",(0,r.jsx)(n.code,{children:"libra config init"})]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Function"}),": Registers a new validator on the network."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Syntax"}),": ",(0,r.jsx)(n.code,{children:"libra txs validator register [--operator-file <OPERATOR_FILE_PATH>]"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"operator-file"}),": the file with a validators operator information. Usually found in ~/.libra/operator.yaml."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example"}),":","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"libra txs validator register --operator-file ~/.libra/operator.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"update-network-and-fullnode-addresses",children:"Update Network and Fullnode Addresses"}),"\n",(0,r.jsx)(n.p,{children:"Within the Libra framework, the validator's operational settings are managed through a configuration file named operator.yaml, typically located in the ~/.libra/ directory. This file encapsulates key configuration details for the validator. To update the validator's operational parameters, one can modify this configuration file and then submit a corresponding transaction to the Libra blockchain. This transaction ensures that the changes in the configuration file are acknowledged and implemented by the network."}),"\n",(0,r.jsx)(n.p,{children:"For your reference, the structure and content of the operator.yaml file are outlined below. It's important to note that the actual configuration may vary based on specific network requirements and validator setups:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'---\noperator_account_address: 00000000000000000000000000000000d1281de242839fc939745996882c5fc2\noperator_account_public_key: "0x264cb0b3463a61177bc2a33a1b81df55cf92177ab216a0460f6aba57b5b0d2f2"\nconsensus_public_key: "0xb99f4b268d6aac24e4ca47f08faa2cb8aead75d2f495982c736dce340edd8a5bcba2d052e23f135e0ccc13136be16e97"\nconsensus_proof_of_possession: "0xb382b44e9a115e044da4f9bcc1bd8f75d819a029644ff2221b019bc20dea08f7ebfc1ea47d3e1d4a0c44c4207865e972116ef75af121bb9baefed3fb8e71e98b540da60bbd0375e70dd8df24f9e85ed69bacac65a6b440dd476b27fdfdf5475fe"\nvalidator_network_public_key: "0x0a3cab5f2ecb29bdb4a9efe1dd4576feacefe4ec74ab7ef65d472bbb4461804d"\nvalidator_host:\n  host: 35.86.200.84\n  port: 6180\nfull_node_network_public_key: ~\nfull_node_host: ~\n\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Function"}),": Updates network addresses for a validator and associated full nodes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Syntax"}),": ",(0,r.jsx)(n.code,{children:"libra txs validator update --operator-file <OPERATOR_FILE_PATH>"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"operator-file"}),": the file with a validators operator information. Usually found in ~/.libra/operator.yaml."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example"}),":","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"libra txs validator update --operator-file ~/.libra/operator.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"manage-vouching-operations",children:"Manage Vouching Operations"}),"\n",(0,r.jsx)(n.p,{children:'In the Libra framework, the concept of "vouching" is implemented as a means to establish and assess trust among participants. Primarily applied in the context of validators, this mechanism requires each validator to secure vouches from two existing validators. These endorsing validators must belong to distinct ancestry trees; in other words, they should not be part of the same lineage or hierarchical chain of account creation.'}),"\n",(0,r.jsx)(n.p,{children:"Additionally, the vouching system is governed by certain predefined rules. Each vouch has a finite lifespan, set to expire after 90 epochs. There is also a financial aspect to vouching: obtaining a vouch incurs a cost of 1000 microlibra. This amount is not merely a fee but is burned, signifying a tangible commitment and adding a layer of economic deterrence against frivolous or inauthentic vouching."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Function"}),": Manages vouching for or revoking a vouch for other entities in the network."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Syntax"}),": ",(0,r.jsx)(n.code,{children:"libra txs validator vouch --vouch-for <VALIDATOR_ADDRESS> [--revoke]"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"vouch-for"}),": The account of the validator you would like to vouch for or remove your vouch for"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Vouch for a validator"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"libra txs validator vouch --vouch-for 0xC7394B8AF7BC3BDB9258C53DFFDA7F2B\t \n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Remove a vouch for a validator"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"libra txs validator vouch --vouch-for 0xC7394B8AF7BC3BDB9258C53DFFDA7F2B --revoke\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"manage-jail-operations",children:"Manage Jail Operations"}),"\n",(0,r.jsx)(n.p,{children:'In the Libra framework, validators failing to meet consensus rules, especially in performance, are "jailed" and removed from the validator set. They can only rejoin once a validator who previously vouched for them submits an "unjail" transaction. This jailing process, part of the Vouch system, impacts the reputations and responsibilities of both the jailed validator and their voucher, with consequences extending recursively to others in the vouching chain. Additionally, the voucher risks losing financial deposits, adding a significant stake to the maintenance of network standards and performance.'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Function"}),": Manages Jail functions within the network."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Syntax"}),": ",(0,r.jsx)(n.code,{children:"libra txs validator jail --unjail-acct <UNJAIL_ACCT>"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"unjail-acct"}),": The account of the validator a voucher would like to unjail"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example"}),":","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"libra txs validator  jail --unjail-acct 0xC7394B8AF7BC3BDB9258C53DFFDA7F2B\t \n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>s});var a=i(6540);const r={},o=a.createContext(r);function t(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);