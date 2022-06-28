"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Foreword",s={unversionedId:"Post Compromise/Foreword",id:"Post Compromise/Foreword",title:"Foreword",description:"Once a ransomware operator has gotten onto your network, they want to achieve predictable objectives. In most cases, the attacker seeks:",source:"@site/docs/Post Compromise/Foreword.md",sourceDirName:"Post Compromise",slug:"/Post Compromise/Foreword",permalink:"/docs/Post Compromise/Foreword",draft:!1,editUrl:"https://github.com/PreventRansomware/PreventRansomware/docs/Post Compromise/Foreword.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Permissive Firewall Rules",permalink:"/docs/Initial Compromise/Permissive Firewall Rules"},next:{title:"Privilege Escalation and Credential Theft",permalink:"/docs/Post Compromise/Privilege Escalation"}},l={},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"foreword"},"Foreword"),(0,o.kt)("p",null,"Once a ransomware operator has gotten onto your network, they want to achieve predictable objectives. In most cases, the attacker seeks:"),(0,o.kt)("p",null,"-",(0,o.kt)("strong",{parentName:"p"},"\xa0Persistence\xa0"),"- After gaining an initial foothold, the attacker will attempt to sink an anchor into the victim network that will enable them to come back and maintain access. This is commonly done by configuring the first infected machine to call back to the attacker even if it\u2019s rebooted.  "),(0,o.kt)("p",null,"-",(0,o.kt)("strong",{parentName:"p"},"\xa0Escalate privileges")," - Unless the attackers get lucky, the account that initially fell victim to the intrusion will have insufficient privileges on the network. Attackers will seek to elevate themselves to a higher privilege level, which will help them access more systems and spread wider into the target in the next step\u2026  "),(0,o.kt)("p",null,"-",(0,o.kt)("strong",{parentName:"p"},"\xa0Lateral Movement")," - Once the attacker has stolen access to higher privileges, they will begin to move around the network, infecting more machines and hoovering up data.  "),(0,o.kt)("p",null," -",(0,o.kt)("strong",{parentName:"p"},"Exfiltration\xa0"),"- By this point in the kill chain, the bad guys might siphon some data out of the network, which will help extort the victim further down the line.  "),(0,o.kt)("p",null,"-",(0,o.kt)("strong",{parentName:"p"},"Deployment\xa0"),"- Finally, attackers will deploy ransomware with creative techniques that ensure maximum damage and disruption."),(0,o.kt)("p",null,"It is important to note that PreventRansomware does not expect, want or require you to become an expert in the following attack tactics. We instead wish to instil knowledge that you don't need to be a cyber security scientist to win at defending. Getting the basics right and understanding the mechanics of each category of tactic will go a ",(0,o.kt)("em",{parentName:"p"},"very, very")," long way. "),(0,o.kt)("p",null,"Fortunately for us defenders, most tactics leave indicators in their wake that we can monitor and alert on but ingesting, parsing and writing alert logic for log data at scale can be a taxing task because there are many relentlessly changing methods and security tooling can be complex, especially in a Windows environment. PreventRansomware continues to stress that it may not be suitable for all teams to build out bespoke detection capabilities, and that\u2019s OK. If you have the budget to deploy some form of EDR tool with pre-baked prevention, it is most likely worthwhile, but please don\u2019t despair if not; as previously mentioned, good security best practices go a long way and are often implementable without cost because most of the gains can be achieved by tweaking settings in existing technologies as we saw in the previous chapters."))}m.isMDXComponent=!0}}]);