"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[553],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8555:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2},o=void 0,s={unversionedId:"Initial Compromise/Explotation Of Networking Appliances",id:"Initial Compromise/Explotation Of Networking Appliances",title:"Explotation Of Networking Appliances",description:"Edge of network appliances like VPNs and Citrix access gateways are often installed to grant roaming users access to internal resources like files and applications or, in the case of Exchange servers, eMail. These appliances straddle the gap between the internet and the internal network, their somewhat precarious location (known as the DMZ or just edge) makes them an attractive target for attackers because successful compromise could create a pathway from the attacker\u2019s computer directly into the victim\u2019s internal network.",source:"@site/docs/Initial Compromise/Explotation Of Networking Appliances.md",sourceDirName:"Initial Compromise",slug:"/Initial Compromise/Explotation Of Networking Appliances",permalink:"/docs/Initial Compromise/Explotation Of Networking Appliances",draft:!1,editUrl:"https://github.com/PreventRansomware/PreventRansomware/docs/Initial Compromise/Explotation Of Networking Appliances.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Summary",permalink:"/docs/Initial Compromise/Summary"},next:{title:"Stolen Credentials",permalink:"/docs/Initial Compromise/Stolen Credentials"}},l={},c=[],p={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Edge of network appliances like VPNs and Citrix access gateways are often installed to grant roaming users access to internal resources like files and applications or, in the case of Exchange servers, eMail. These appliances straddle the gap between the internet and the internal network, their somewhat precarious location (known as the DMZ or just edge) makes them an attractive target for attackers because successful compromise could create a pathway from the attacker\u2019s computer directly into the victim\u2019s internal network. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"/img/DocImages/VPNDiagram.png",alt:"alt text"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"If your network has edge appliances, they must be promptly patched when vulnerabilities are disclosed; the sooner, the better."))),(0,r.kt)("p",null,"It's possible to detect such vulnerabilities with vulnerability scanners like Tenable or Qualys, but these solutions can be costly as they require long term human and financial investment. Alternatively, system administrators should sign up for a free notification service like ",(0,r.kt)("a",{parentName:"p",href:"https://secalerts.co"},"Secalerts.co\xa0")," , which will send a notification whenever the technologies you are running become vulnerable, which in turn should trigger internal workflows to patch appliances."),(0,r.kt)("p",null,"Internal patching workflow for these systems should be concise and accessible. Long documents tucked away in a dark corner of a SharePoint library are useless. Making something hard to read means people won't bother doing so. Help IT administrators make patching documentation accessible and as close to a one-pager as possible. Drop legalese and versioning tables to instead give way for technical information that technical people require."),(0,r.kt)("p",null,"A patching document one-pager should convey the following information: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An agreed time frame between detection and remediation of vulnerabilities. Most businesses aim for a 30-day turnaround; however, the less, the better. Recent CVEs come with sharp teeth that should be addressed as soon as possible.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Who is responsible for receiving the alerts from the detection system (whether a vulnerability scanner or alerting service like Secalerts) and starting the process, perhaps raising change requests and booking technical resource time."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Who is responsible for actioning this alert as the technical resource that will apply the updates.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"How the patches are installed (if it\u2019s any more difficult than clicking \u201cInstall Updates.\u201d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A section or process for the above persons to sign off that they have completed their parts of the patching process and confirmed the patches had been installed."))),(0,r.kt)("p",null,"In some cases, it's also possible to detect appliance attacks via their logs, although this varies by vendor and vulnerability. Knowing which logs to look at isn't always understood until long after a vulnerability and corresponding exploit have been published. In most cases, the appliance will write a Syslog message or have a particular file in a specific location that indicates the system has been compromised. It's probably best not to count on this method for detecting networking appliance intrusions. Prevention is better than cure, and in this case, prevention comes in the form of prompt patching."),(0,r.kt)("p",null,"It is essential to ensure that administration consoles for networking appliances are not directly exposed to the internet. In some cases, an exposed control panel on 443 with default credentials is as bad as a critical vulnerability. Attackers can log in and attack the appliance directly by elevating privileges on the local OS. They could steal credentials or use the appliance as a stepping stone into a victim network. "),(0,r.kt)("p",null,"If your management team need some encouragement to install patches, here are some real-world examples of network edge appliances leading to breaches:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.zdnet.com/article/hackers-target-unpatched-citrix-servers-to-deploy-ransomware/"},"Citrix Application Gateway Remote Code Execution\xa0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.cisa.gov/uscert/ncas/current-activity/2021/07/21/malware-targeting-pulse-secure-devices"},"Pulse Secure VPN Appliance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://thedfirreport.com/2021/11/15/exchange-exploit-leads-to-domain-wide-ransomware/"},"\xa0Unpatched exchanged leads to domain-wide ransomware")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://threatpost.com/critical-sonicwall-vpn-bugs-appliance-takeover/176869/"},"- Sonicwall Remote Code Execution\xa0"))))}m.isMDXComponent=!0}}]);