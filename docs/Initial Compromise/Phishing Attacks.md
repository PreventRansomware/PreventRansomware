---
sidebar\_position: 5
---

Phishing attacks come in many flavours. Almost all of them are enjoyed by ransomware operators. Phishing is one of the most common ways for ransomware to seep into a network directly or indirectly. As an attack technique, its popularity is probably fuelled by its success which relies on social engineering.

Ransomware operators directly or indirectly compromise networks with phishing by either sending the emails themselves or purchasing pre-phished victims ([known as access for sale][1]) from other hackers. In both cases, one or more of the below tactics will be employed:


#### Credential phishing

Credential phishing is probably the most popular type of phishing. It is the art of tricking users into [clicking a link][2] which eventually leads to a fake but convincing login page where users willfully hand over their username and password combination, which attackers use to log in to a victim’s network or service. 

The proper prevention (or at least speed bump) for this phishing format is enforcing 2FA on all user accounts without exception. 

Enforcing 2FA makes it hard (but not impossible) for a stolen password alone to allow accounts to be compromised because 2FA is made up of something you know and something you have. The "something you know" is a password, and "something you have" is often a code generated on a smartphone app. The “something you have” part of 2FA lets us confidently confirm that the person authenticating is who they say they are.  
  
As with all security solutions, 2FA isn’t a silver bullet that stops account takeovers. Modern phishing campaigns can intercept 2FA authentication traffic via Man In The Middle Phishing, which works by putting a transparent proxy between the victim and the service or system they are trying to authenticate. The proxy steals 2FA tokens and replays them to the target service before they rotate, then passes the authenticated session cookie back to the attacker, who can then control the now logged-in session under their victim’s account. 

![Credit: https://catching-transparent-phish.github.io][image-1]
> Image credit: [https://catching-transparent-phish.github.io][3]

The current solution for man in the middle phishing attacks is to provide users with physical security keys that are FIDO2 compliant. The FIDO standard ties the key cryptographically with the service domain, which means the key will never release a key unless the user visits the actual domain they are supposed to be. For example: 

![][image-2]

All identity providers have policies to enforce 2FA; once you are done reading, visit the "Vendor Specific" section of our documentation to find guides on enabling these policies in your particular vendor’s settings. 
If you don’t find the flavour you are looking for, please consider contributing! 

#### Malicious Links  

It is simply impossible to block all link based phishing, but it is possible to reduce the risk. DNS filtering and URL rewriting combat credential phishing by preventing users from loading a malicious page even if they click a bad link. This is often achieved with threat intelligence feeds, page scanning or reputation checks, which run once a user clicks a link.  

You should aim would help if you aimed to install some form of filter that can block known phishing pages alongside newly observed/registered domains.   
  
Most DNS, URL and eMail filtration software will offer this protection as standard. Tools like Mimecast, ProofPoint and Cisco Umbrella are very good at preventing malicious links from loading.   
If your business does not have a good email security gateway or the appetite for new technology and the associated bills, you can look for cheap or even free alternatives.  Browser extensions like [Malwarebytes browser guard][4]  are a decent and free option that can be deployed quickly. The protection that free tools like Malwarebytes offer is not as adequate as their enterprise-grade cousins, but they shouldn’t be discounted. 

DNS filtering is favoured amongst the security community because it can be done passively and, in some cases, for cheap or free. Passing all DNS queries through a paid service like Cisco Umbrella is a powerful way to prevent users from landing on suspicious and malicious websites. Even more straightforward is simply switching to a DNS provider that blocks malicious domains upstream. The [OpenDNS project][5] is simple to implement and free. Changing your upstream provider to OpenDNS could help block phishing or other scams. If you have a fixed IP address, you can even customise the categories of websites you’d like to block. 


#### Malicious Attachments
Modern attackers are still successfully breaching targets by sending malicious attachments directly to their victims. In most cases, the payload is hidden inside a Microsoft Office document which is disguised as legitimate business mail when opened; a malicious attachment will sometimes need further user interaction before being able to execute code, but in some rare cases where a zero-day or unpatched vulnerability is involved no user interaction is required. 

Attachment protection seems rather daunting, but there are plenty of tools at the defender’s disposal in reality. Firstly you should consider blocking a list of known bad and unwanted file extensions because some files have no business coming through the eMail gateway. PreventRansomware has compiled a list on GitHub here. Some examples:PS1, .BAT, .LNK, .HTA, .RFT, XLSM  
  
Attackers love Office documents because they can contain Macro code that can make calls and execute commands of all different kinds. Macros are a dangerous weapon and should be controlled at the eMail gateway and user endpoint. If your business isn’t using macros or never receives them via email, it’s a great idea to [disable them altogether.][6] Block the file type.XLSM from being delivered at all and disable macros via group policy. If users use macros legitimately, you can control which macros can be used via Microsoft group policy. The [Disable Internet Macros][7] group policy prevents users from allowing a macro that was delivered to them over the internet or via email from executing. If you do anything from this entire body of information, do this. Disable Macros. [Cyber security professionals want you to.][8] No, really, [we do][9].

Macro-based infections have become such a problem that [Microsoft is disabling external macros by default][10] , but users are still able tocan still bypass this warning, although they must go out of their way to do so. If your business doesn’t need macros, block them from executing entirely. 

Regardless of being able to turn macro protection on, all defenders should consider having some form of modern EDR software installed on their endpoints. Despite their marketing material, no tool will ever give you 100% protection, but EDR will provide you with dramatically better protection than standard antivirus.   
Oldschool anti-virus looks for file hashes that act similarly to a policeman looking for fingerprints; if the anti-virus doesn’t recognise the fingerprints of a piece of malware, it can’t detect it. EDR, on the other hand, looks for suspicious _behaviour_ which means it can detect malware regardless of how it looks and feels. For example, if a brand new piece of malware makes it into your network from a malicious document, your EDR tool should be able to detect the attack by the process parent-child relationship.:

![][image-3]




Don’t worry about remembering all of this right now; it’s on our checklist at the end of this documentation.




[1]:	https://www.techrepublic.com/article/for-sale-access-to-your-company-network-price-less-than-youd-think/
[2]:	https://i.ytimg.com/vi/vheFIrl1LAs/maxresdefault.jpg
[3]:	https://catching-transparent-phish.github.io
[4]:	https://www.malwarebytes.com/browserguard
[5]:	https://www.opendns.com
[6]:	https://4sysops.com/archives/restricting-or-blocking-office-2016-2019-macros-with-group-policy/
[7]:	https://www.cisecurity.org/white-papers/intel-insight-how-to-disable-macros/
[8]:	https://twitter.com/Hexacorn/status/1418634009060458500?s=20
[9]:	https://twitter.com/GovCERT_CH/status/1464148274823282697?s=20
[10]:	https://docs.microsoft.com/en-us/deployoffice/security/internet-macros-blocked

[image-1]:	https://catching-transparent-phish.github.io/img/mitmToolkitOverview.png
[image-2]:	/img/DocImages/2fakey.png
[image-3]:	/img/DocImages/process.png