---
sidebar\_position: 4
---

Phishing attacks come in many flavours, almost all of them are enjoyed by ransomware operators and in fact phishing is one of the most common ways for ransomware to seep into a network either directly or indirectly. As an attack technique its popularity is probably fuelled by its success, relying on arguably the weakest link in cyber defences, people. 

Ransomware operators directly or indirectly compromise networks with phishing by either sending the emails themselves or purchasing pre-phished victims on the dark web from other hackers. In both cases one or more of the below tactics will be employed:


#### Credential phishing

Credential phishing is probably the most popular type of phishing. It is the art of tricking users into clicking a link which eventually leads to a fake but convincing login page where the user wilfully hands over their username and password which the attackers use to login to the victim network. 

#### 2FA
The true prevention for this format of phishing is of course enforcing 2FA on all user accounts without exception. 

Enforcing 2FA will mean a stolen password alone cannot lead to a compromised account because 2FA is made up of something you know and something you have. In most cases "something you know" is a password and "something you have" is a code generated on a smart phone app. This form of 2FA isn’t perfect because the codes can be intercepted by attackers who spend a little bit of time creating a phishing landing page which can quickly redirect and reuse the 2FA code before it expires. To combat this most identity providers like AzureAD, Google Workspace and Okta offer a push notification service to prove the “something you have” portion of the authentication challenge.   
  
All identity providers have policies to enforce 2FA for all user accounts. Once you are done reading visit the "Vendor Specific" section of our documentation to find guides on enabling these policies in your particular vendors settings. _If you don’t find the flavour you are looking for please consider contributing! 

#### URL Filtration/Rewriting  

It is quite simply impossible to block all link based phishing  but it is possible to reduce the risk. URL filtering/rewriting and DNS filtering combats credential phishing by preventing a user from loading a malicious page, even if they do click a bad link. This is often achieved with threat intelligence feeds, page scanning or reputation checks which run once a user clicks a link. Administrators should filter out known phishing pages alongside newly observed/registered domains. Most DNS, URL and eMail filtration software will offer this protection as standard. Tools like Mimecast, ProofPoint and Cisco Umbrella are very good at preventing malicious links from loading. If your business does not have the appetite for new technology and the associated bills then instead look for browser extensions or other free tools which you can deploy to user endpoints. [Malwarebytes browser guard][1] is a brilliant free protection add-on which can easily be rolled out to endpoints via group policy. The protection that free tools like Malwarebytes offer are simply not as effective as their enterprise grade brothers and probably lack key features like centralised logging.

#### Attachment Protection
Modern attackers are still successfully breaching targets by sending malicious attachments directly to their victims. In most cases the payload is hidden inside a Microsoft Office document which is disguised as legitimate business mail, when opened a malicious attachment will sometimes need further user interaction before being able to execute code but in some rare cases where a zero day or unpatched vulnerability is involved no user interaction is required. 

Attachment protection seems rather daunting but in reality there are plenty of tools at the defenders disposal. Firstly defenders should consider outright blocking a list of known bad and unwanted file extensions because some files just have no business coming through your eMail gateway. PreventRansomware has complied a list on GitHub here. Some examples: .PS1, .BAT, .LNK, .HTA, .RFT, .X  
  
Attackers love Office documents because they can contain Macro code which can  make calls and execute code of all different kinds. Macros are a dangerous weapon and should be controlled at the eMail gateway and user endpoint. If your business docent use macros or never receives them via eMail its a great idea to disable them all together. Block the file type .XLSM from being delivered at all and disable macros via group policy. If users do indeed use macros legitimately then defenders can control which types of macros can be enabled via Microsoft group policy. The [Disable Internet Macros][2] group policy prevents users from enabling a macro that was delivered to them over the internet or email. 

Don’t worry about remembering this all right now, its on our checklist at the end of this documentation.




[1]:	https://www.malwarebytes.com/browserguard
[2]:	https://www.cisecurity.org/white-papers/intel-insight-how-to-disable-macros/