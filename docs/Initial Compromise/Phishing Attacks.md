---
sidebar\_position: 5
---

Phishing attacks come in many flavours. Almost all of them are enjoyed by ransomware operators. Phishing is one of the most common ways for ransomware to seep into a network directly or indirectly. As an attack technique, its popularity is probably fuelled by its success which relies on the weakest link in cyber defences, people. 

Ransomware operators directly or indirectly compromise networks with phishing by either sending the emails themselves or purchasing pre-phished victims ([known as access for sale][1]) from other hackers. In both cases, one or more of the below tactics will be employed:


#### Credential phishing

Credential phishing is probably the most popular type of phishing. It is the art of tricking users into [clicking a link][2] which eventually leads to a fake but convincing login page. The user wilfully hands over their username and password, which the attackers use to log in to the victim network. 

The proper prevention (or at least speed bump) for this phishing format is, of course, enforcing 2FA on all user accounts without exception. 

Enforcing 2FA makes it harder for a stolen password alone to allow accounts to be compromised because 2FA is made up of something you know and something you have. In most cases, the "something you know" is a password and "something you have" is a code generated on a smartphone app. This form of 2FA isn’t perfect because the codes can be intercepted by attackers and quickly redirected before it expires without the victim noticing. To combat this attack vector, most identity providers like AzureAD, Google Workspace and Okta eliminate the need for a rotating six-digit code by offering [push notifications][3] as the second factor to prove the “something you have” portion of the authentication challenge.  
  
All identity providers have policies to enforce 2FA for all user accounts; once you are done reading, visit the "Vendor Specific" section of our documentation to find guides on enabling these policies in your particular vendor’s settings. 
If you don’t find the flavour you are looking for, please consider contributing! 

#### Malicious Links  

It is simply impossible to block all link based phishing, but it is possible to reduce the risk. URL filtering/rewriting and DNS filtering combat credential phishing by preventing users from loading a malicious page even if they click a bad link. This is often achieved with threat intelligence feeds, page scanning or reputation checks, which run once a user clicks a link.  

Administrators should filter out known phishing pages alongside newly observed/registered domains. Most DNS, URL and eMail filtration software will offer this protection as standard. Tools like Mimecast, ProofPoint and Cisco Umbrella are very good at preventing malicious links from loading. If your business does not have a good email security gateway or the appetite for new technology and the associated bills, you can instead look for cheaper or even free alternatives.  Browser extensions like [Malwarebytes browser guard][4]  are a decent and free option that can be deployed quickly. The protection that free tools like Malwarebytes offer is not as adequate as their enterprise-grade brothers and probably lacks vital centralised logging features, but they shouldn’t be discounted. 

DNS filtering is favoured amongst the security community because it can be done passively and in some cases for cheap or free. Passing all DNS queries through a [piHole][5] that is pulling down block lists of malicious domains is a great way to protect endpoints and users. Even more straightforward than a piHole is switching to a DNS provider that blocks malicious domains upstream. The [OpenDNS project][6] is simple to implement and free. Changing your upstream provider to OpenDNS could help block phishing or other scams. If you have a fixed IP address, you can even customise the categories of websites you’d like to block. 


#### Malicious Attachments
Modern attackers are still successfully breaching targets by sending malicious attachments directly to their victims. In most cases, the payload is hidden inside a Microsoft Office document which is disguised as legitimate business mail when opened; a malicious attachment will sometimes need further user interaction before being able to execute code, but in some rare cases where a zero-day or unpatched vulnerability is involved no user interaction is required. 

Attachment protection seems rather daunting, but there are plenty of tools at the defender’s disposal in reality. Firstly defenders should consider outright blocking a list of known bad and unwanted file extensions because some files have no business coming through your eMail gateway. PreventRansomware has compiled a list on GitHub here. Some examples:PS1, .BAT, .LNK, .HTA, .RFT, XLSM  
  
Attackers love Office documents because they can contain Macro code that can make calls and execute code of all different kinds. Macros are a dangerous weapon and should be controlled at the eMail gateway and user endpoint. If your business isn’t using macros or never receives them via email, it’s a great idea to [disable them altogether.][7] Block the file type.XLSM from being delivered at all and disable macros via group policy. If users use macros legitimately, then defenders can control which macros can be enabled via Microsoft group policy. The [Disable Internet Macros][8] group policy prevents users from allowing a macro that was delivered to them over the internet or email. If you do anything from this entire body of information, do this. Disable Macros. [Cyber security professionals want you to.][9] No, really, [we do][10].

Don’t worry about remembering all of this right now; it’s on our checklist at the end of this documentation.




[1]:	https://www.techrepublic.com/article/for-sale-access-to-your-company-network-price-less-than-youd-think/
[2]:	https://i.ytimg.com/vi/vheFIrl1LAs/maxresdefault.jpg
[3]:	https://doubleoctopus.com/security-wiki/authentication/push-notification-authentication/
[4]:	https://www.malwarebytes.com/browserguard
[5]:	https://pi-hole.net
[6]:	https://www.opendns.com
[7]:	https://4sysops.com/archives/restricting-or-blocking-office-2016-2019-macros-with-group-policy/
[8]:	https://www.cisecurity.org/white-papers/intel-insight-how-to-disable-macros/
[9]:	https://twitter.com/Hexacorn/status/1418634009060458500?s=20
[10]:	https://twitter.com/GovCERT_CH/status/1464148274823282697?s=20