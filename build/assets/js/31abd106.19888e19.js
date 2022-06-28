"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[644],{3905:(e,t,i)=>{i.d(t,{Zo:()=>h,kt:()=>m});var o=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(i),m=n,d=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return i?o.createElement(d,r(r({ref:t},h),{},{components:i})):o.createElement(d,r({ref:t},h))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<a;c++)r[c]=i[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}u.displayName="MDXCreateElement"},5574:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=i(7462),n=(i(7294),i(3905));const a={sidebar_position:5},r=void 0,s={unversionedId:"Initial Compromise/Phishing Attacks",id:"Initial Compromise/Phishing Attacks",title:"Phishing Attacks",description:"Phishing attacks come in many flavours. Almost all of them are enjoyed by ransomware operators. Phishing is one of the most common ways for ransomware to seep into a network directly or indirectly. As an attack technique, its popularity is probably fuelled by its success which relies on social engineering.",source:"@site/docs/Initial Compromise/Phishing Attacks.md",sourceDirName:"Initial Compromise",slug:"/Initial Compromise/Phishing Attacks",permalink:"/docs/Initial Compromise/Phishing Attacks",draft:!1,editUrl:"https://github.com/PreventRansomware/PreventRansomware/docs/Initial Compromise/Phishing Attacks.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Stolen Credentials",permalink:"/docs/Initial Compromise/Stolen Credentials"},next:{title:"Permissive Firewall Rules",permalink:"/docs/Initial Compromise/Permissive Firewall Rules"}},l={},c=[{value:"Credential phishing",id:"credential-phishing",level:4},{value:"Malicious Links",id:"malicious-links",level:4},{value:"Malicious Attachments",id:"malicious-attachments",level:4}],h={toc:c};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Phishing attacks come in many flavours. Almost all of them are enjoyed by ransomware operators. Phishing is one of the most common ways for ransomware to seep into a network directly or indirectly. As an attack technique, its popularity is probably fuelled by its success which relies on social engineering."),(0,n.kt)("p",null,"Ransomware operators directly or indirectly compromise networks with phishing by either sending the emails themselves or purchasing pre-phished victims (",(0,n.kt)("a",{parentName:"p",href:"https://www.techrepublic.com/article/for-sale-access-to-your-company-network-price-less-than-youd-think/"},"known as access for sale"),") from other hackers. In both cases, one or more of the below tactics will be employed:"),(0,n.kt)("h4",{id:"credential-phishing"},"Credential phishing"),(0,n.kt)("p",null,"Credential phishing is probably the most popular type of phishing. It is the art of tricking users into ",(0,n.kt)("a",{parentName:"p",href:"https://i.ytimg.com/vi/vheFIrl1LAs/maxresdefault.jpg"},"clicking a link")," which eventually leads to a fake but convincing login page where users willfully hand over their username and password combination, which attackers use to log in to a victim\u2019s network or service. "),(0,n.kt)("p",null,"The proper prevention (or at least speed bump) for this phishing format is enforcing 2FA on all user accounts without exception. "),(0,n.kt)("p",null,'Enforcing 2FA makes it hard (but not impossible) for a stolen password alone to allow accounts to be compromised because 2FA is made up of something you know and something you have. The "something you know" is a password, and "something you have" is often a code generated on a smartphone app. The \u201csomething you have\u201d part of 2FA lets us confidently confirm that the person authenticating is who they say they are.  '),(0,n.kt)("p",null,"As with all security solutions, 2FA isn\u2019t a silver bullet that stops account takeovers. Modern phishing campaigns can intercept 2FA authentication traffic via Man In The Middle Phishing, which works by putting a transparent proxy between the victim and the service or system they are trying to authenticate. The proxy steals 2FA tokens and replays them to the target service before they rotate, then passes the authenticated session cookie back to the attacker, who can then control the now logged-in session under their victim\u2019s account. "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://catching-transparent-phish.github.io/img/mitmToolkitOverview.png",alt:"Credit: https://catching-transparent-phish.github.io"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Image credit: ",(0,n.kt)("a",{parentName:"p",href:"https://catching-transparent-phish.github.io"},"https://catching-transparent-phish.github.io"))),(0,n.kt)("p",null,"The current solution for man in the middle phishing attacks is to provide users with physical security keys that are FIDO2 compliant. The FIDO standard ties the key cryptographically with the service domain, which means the key will never release a key unless the user visits the actual domain they are supposed to be. For example: "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/img/DocImages/2fakey.png",alt:null})),(0,n.kt)("p",null,'All identity providers have policies to enforce 2FA; once you are done reading, visit the "Vendor Specific" section of our documentation to find guides on enabling these policies in your particular vendor\u2019s settings.\nIf you don\u2019t find the flavour you are looking for, please consider contributing! '),(0,n.kt)("h4",{id:"malicious-links"},"Malicious Links"),(0,n.kt)("p",null,"It is simply impossible to block all link based phishing, but it is possible to reduce the risk. DNS filtering and URL rewriting combat phishing by preventing users from loading a malicious page even if they click a bad link.  Link filtering is often achieved with threat intelligence feeds, page scanning or reputation checks, which run once a user clicks a link.  "),(0,n.kt)("p",null,"You should aim to configure some form of filter that can help filter out phishing links.  "),(0,n.kt)("p",null,"Most DNS, URL and eMail filtration software will offer protection as standard. Tools like Mimecast, ProofPoint and Cisco Umbrella are very good at preventing malicious links from loading.",(0,n.kt)("br",{parentName:"p"}),"\n","If your business does not have a good email security gateway or the appetite for new technology and the associated bills, you can look for cheap or even free alternatives.  Browser extensions like ",(0,n.kt)("a",{parentName:"p",href:"https://www.malwarebytes.com/browserguard"},"Malwarebytes browser guard"),"  are a decent and free option that can be deployed quickly. Addnis-like browser guard help prevent your users from opening known malicious pages.\nThe protection that free tools offer is not as adequate as their enterprise-grade cousins, but they shouldn\u2019t be discounted. If you haven\u2019t got budget for enterprise tools then installing something is better than nothing. "),(0,n.kt)("p",null,"DNS filtering is favoured amongst the security community because it can be done passively and, in some cases, for cheap or free. Passing all DNS queries through a service like Cisco Umbrella is a powerful way to prevent users from landing on suspicious and malicious websites. Even more straightforward is simply switching to a DNS provider that blocks malicious domains upstream. The ",(0,n.kt)("a",{parentName:"p",href:"https://www.opendns.com"},"OpenDNS project")," is simple to implement and free. Changing your upstream provider to OpenDNS could help block phishing or other scams. If you have a fixed IP address, you can even customise the categories of websites you\u2019d like to block for example you could prevent users from loading adult and known malicious domains entirely."),(0,n.kt)("h4",{id:"malicious-attachments"},"Malicious Attachments"),(0,n.kt)("p",null,"Modern attackers are successfully breaching targets by sending malicious attachments directly to their victims. In most cases, the payload is hidden inside a Microsoft Office document that is disguised as legitimate business mail. A malicious attachment will sometimes need further user interaction before being able to execute code, but in some rare cases where a zero-day or unpatched vulnerability is involved no user interaction is required.   "),(0,n.kt)("p",null,"Attackers love Office documents because they can contain Macro code that can make calls and execute commands of all different kinds. Macros are a dangerous weapon and should be controlled at the eMail gateway and user endpoint. If your business isn\u2019t using macros or never receives them via email, it\u2019s a great idea to ",(0,n.kt)("a",{parentName:"p",href:"https://4sysops.com/archives/restricting-or-blocking-office-2016-2019-macros-with-group-policy/"},"disable them altogether.")," Block the file type.XLSM from being delivered at all and disable macros via group policy. If you do need to use macros you can control which types can be used via Microsoft group policy. The ",(0,n.kt)("a",{parentName:"p",href:"https://www.cisecurity.org/white-papers/intel-insight-how-to-disable-macros/"},"Disable Internet Macros")," group policy prevents users from allowing a macro that was delivered to them over the internet or via email from executing. If you do anything from this entire body of information, do this. Disable Macros. ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/Hexacorn/status/1418634009060458500?s=20"},"Cyber security professionals want you to.")," No, really, ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/GovCERT_CH/status/1464148274823282697?s=20"},"we do"),"."),(0,n.kt)("p",null,"Macro-based infections have become such a problem that ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/deployoffice/security/internet-macros-blocked"},"Microsoft is disabling external macros by default")," , but users are still able to bypass the block, although they must go out of their way to do so. Again, if your business doesn\u2019t need macros, block them from executing entirely but bear in mind; security policy should work with a business and not against them, do not force a macro block on staff that have a legitimate business reason for using them, you should be enabling your business to function securely not locking them down unnecessarily. "),(0,n.kt)("p",null,"Regardless of your macro-control policy, you should consider having some form of modern EDR software installed on your endpoints. Despite marketing material, no tool will ever give you 100% protection, but EDR will provide you with dramatically better protection than standard antivirus.",(0,n.kt)("br",{parentName:"p"}),"\n","Traditional anti-virus looks for file hashes that act similarly to a policeman looking for fingerprints; if the anti-virus doesn\u2019t recognise the fingerprints of a piece of malware, it can\u2019t detect it. On the other hand EDR, looks for suspicious ",(0,n.kt)("em",{parentName:"p"},"behaviour")," which means it can detect malware regardless of how it looks and feels or if it\u2019s seeing a piece of malware for the first time ever. For example, if a brand new piece of malware makes it into your network from a malicious document, your EDR tool should be able to detect the attack by the process parent-child relationship. In the below-simplified example, we see Winword.exe as the parent of Powershell.exe which is a strong indicator of malicious behaviour."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/img/DocImages/process.png",alt:null})),(0,n.kt)("p",null,"Don\u2019t worry about remembering all of this right now; it\u2019s on our checklist at the end of this documentation."))}p.isMDXComponent=!0}}]);