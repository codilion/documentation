"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[5397],{9361:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"cli-tools/txs/communtiy-wallet-activation","title":"Community Wallet Activation","description":"Community Wallet is a qualification an account can receive if it is composed of certain properties. Those properties are:","source":"@site/docs/cli-tools/txs/communtiy-wallet-activation.md","sourceDirName":"cli-tools/txs","slug":"/cli-tools/txs/communtiy-wallet-activation","permalink":"/cli-tools/txs/communtiy-wallet-activation","draft":false,"unlisted":false,"editUrl":"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/cli-tools/txs/communtiy-wallet-activation.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Txs - Validator","permalink":"/cli-tools/txs/validator"},"next":{"title":"Key Rotation","permalink":"/cli-tools/txs/key-rotation"}}');var o=i(4848),s=i(8453);const a={},r="Community Wallet Activation",l={},c=[{value:"Steps",id:"steps",level:2},{value:"Using TXS Tool",id:"using-txs-tool",level:2},{value:"Step #1:",id:"step-1",level:3},{value:"Step #2:",id:"step-2",level:3},{value:"Step #3:",id:"step-3",level:3},{value:"Intermediate Optional Step: Updating the Authority Offer",id:"intermediate-optional-step-updating-the-authority-offer",level:2}];function h(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"community-wallet-activation",children:"Community Wallet Activation"})}),"\n",(0,o.jsx)(t.p,{children:"Community Wallet is a qualification an account can receive if it is composed of certain properties. Those properties are:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Donor Voice, makes payments with a policy where the donors have observability over the transactions."}),"\n",(0,o.jsx)(t.li,{children:"Multisig, accounts can only be manipulated with a multisig policy."}),"\n",(0,o.jsx)(t.li,{children:"Ancestry limits, multisig authorities must be a minimum of 3 addresses which are not related by Ancestry."}),"\n",(0,o.jsx)(t.li,{children:"Caged, the original authentication key is rotated; similar to resource accounts, but further restricted since they cannot sign arbitrary scripts."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,o.jsx)(t.p,{children:"There are three steps in creating a community wallet account:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Make it a Donor Voice account and propose the offer to the authorities."})}),"\n",(0,o.jsxs)(t.p,{children:["This step is atomic. If the proposed authorities do not qualify, the account will not be initialized with Donor Voice features, and the authority offer will not be made. This ensures the community wallet has the expected authorities before proceeding. ",(0,o.jsx)(t.em,{children:"Note: The authority offer expires in 7 epochs after this step is executed."})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"The authorities claim the offer over the account."})}),"\n",(0,o.jsx)(t.p,{children:"This step ensures that the proposed authorities acknowledge and accept their roles in managing the community wallet, reinforcing the multisig setup security."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Finalize the account, making it a multisig with the authorities claimed above."})}),"\n",(0,o.jsx)(t.p,{children:"This step is irreversible. The current mnemonic will no longer work going forward. The only governance possible is that of the multisig, and any features added (Donor Voice)."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"using-txs-tool",children:"Using TXS Tool"}),"\n",(0,o.jsx)(t.p,{children:"To exemplify the usage of the TXS Tool, we will consider Alice (0x1000a), Bob (0x1000b), and Carol (0x1000c) as the ones invited to be the multisig authorities on Dave's (0x1000d) account, which will become the community wallet."}),"\n",(0,o.jsx)(t.h3,{id:"step-1",children:"Step #1:"}),"\n",(0,o.jsx)(t.p,{children:"Dave simply provides the list of addresses and the signature threshold. The transaction will be rejected if the proposed accounts do not qualify in the simple sybil resistance ancestry check."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Note: this step does not commit the accounts as the authorities, it proposes the authority offer to the address list."})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"libra txs community gov-init -a 0x1000a -a 0x1000b -a 0x1000c -n 2\n"})}),"\n",(0,o.jsx)(t.h3,{id:"step-2",children:"Step #2:"}),"\n",(0,o.jsx)(t.p,{children:"Each address owner invited to be an authority in the community wallet must claim the offer by executing this command."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Note: this will not make the address a multisig authority yet. After enough addresses claim the offer, the invited authorities need to wait for the donor's final action."})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"libra txs community gov-claim -a 0x1000d\n"})}),"\n",(0,o.jsx)(t.h3,{id:"step-3",children:"Step #3:"}),"\n",(0,o.jsx)(t.p,{children:"After enough addresses claim the offer, Dave can finalize and cages the account by providing the threshold number."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"libra txs community gov-cage -n 2\n"})}),"\n",(0,o.jsx)(t.p,{children:"If the transaction succeeds, Dave's account will finally become a community wallet and a multisig account. Action proposals and votes on the community wallet can then be initiated by the authorities."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Note: If an invited authority does not claim the offer and the account is finalized, they will no longer be able to claim the offer. To become an authority after finalization, their addition must be voted on by the existing authorities of the new community wallet."})}),"\n",(0,o.jsx)(t.h2,{id:"intermediate-optional-step-updating-the-authority-offer",children:"Intermediate Optional Step: Updating the Authority Offer"}),"\n",(0,o.jsxs)(t.p,{children:["After initializing the community wallet with ",(0,o.jsx)(t.code,{children:"gov-init"})," and before finalizing it with ",(0,o.jsx)(t.code,{children:"gov-cage"}),", the owner has the option to update the authority offer. This allows the owner to change the initial list of proposed authorities if necessary."]}),"\n",(0,o.jsxs)(t.p,{children:["This step also performs the same authority verification as ",(0,o.jsx)(t.code,{children:"gov-init"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"To update the authority offer, the owner can use the following command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"libra txs community gov-offer -a 0x1000b -a 0x1000c -a 0x1000d -a 0x1000e -n 3\n"})}),"\n",(0,o.jsx)(t.p,{children:"In this example, Dave is opting to extend the offer to include Eve (0x1000e) as well."}),"\n",(0,o.jsx)(t.p,{children:"If any authority already claimed the offer and remains on the updated list, they do not need to claim again. However, if any authority is removed from the list, even if they had previously claimed, they will not be part of the community wallet authorities when the account is caged by the donor."}),"\n",(0,o.jsx)(t.p,{children:"Additionally, this command can be used by the account owner to renew the offer's deadline if it has expired, and the authorities have not yet made their claims."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var n=i(6540);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);