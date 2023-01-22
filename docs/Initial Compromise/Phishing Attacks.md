---
sidebar_position: 5
---

Phishing attacks come in many flavours. Almost all of them are enjoyed by ransomware operators. Phishing is one of the most common ways ransomware seep into a network directly or indirectly. As an attack technique, its popularity is fuelled by its success which relies on social engineering.

Ransomware operators directly or indirectly compromise networks with phishing by either sending the emails themselves or purchasing pre-phished victims ([known as access for sale][1]) from other hackers. In both cases, one or more of the below tactics will be employed:


#### Credential phishing

Credential phishing is the most popular type of phishing. It is the art of tricking users into [clicking a link][2], which eventually leads to a fake but convincing login page where users willfully hand over their username and password combination, which attackers use to log in to a victim's network or service. 

The proper prevention (or at least speed bump) for this phishing format is enforcing 2FA on all user accounts without exception. 

Enforcing 2FA makes it hard (but not impossible) for a stolen password alone to allow accounts to be compromised because 2FA is made up of something you know and something you have. The "something you know" is a password, and "something you have" is often a code generated on a smartphone app. The "something you have" part of 2FA lets us confidently confirm that the person authenticating is who they say they are.  
  
As with all security solutions, 2FA isn't a silver bullet that stops account takeovers entirely. Modern phishing campaigns can intercept 2FA authentication traffic via Man In The Middle Phishing. This works by putting a transparent proxy between the victim and the service or system they are authenticating to. The proxy steals 2FA tokens and replays them to the target service before they rotate, then passes the authenticated session cookie back to the attacker, who can then control the now logged-in session under their victim's account. 

![Credit: https://catching-transparent-phish.github.io][image-1]
> Image credit: [https://catching-transparent-phish.github.io][3]

The best and most current solution for man-in-the-middle phishing attacks is to provide users with physical security keys that are FIDO2 compliant. The FIDO standard stores a certificate inside a small physical USB device. The certificate inside these keys is tied to a particular domain, meaning it will only enable login if the user has landed on the domain they are supposed to be logging into. For example: 

![][image-2]

Unfortunately, deploying FIDO keys is relatively expensive and time-consuming, so adoption has been slow. 
Big tech is working towards standardisation and ease of use which should accelerate the adoption of physical security keys in the future. Over the next few years, we should see the barrier to entry lower thanks to standards like Passkeys and Webauthn, which enable our smartphones to themselves become physical FIDO keys. Until then, all administrators must enable some form of two-factor authentication, FIDO or not. 

All major vendors offer 2FA for their services but not all second factors are created equally!
Administrators should ideally avoid all one-time code-based systems (which include SMS, Apps that generate codes and automated phone calls) because these, just like passwords, can be phished.
We must use second factors, which involve challenge and response. Azure and Google Workspace offer modern solutions which require users to approve a push notification on their smartphone. Although once again, these push notifications can be beaten with attacks like MFA Fatigue which spam a user constantly with login authorisation notifications until they give in and approve access. 

In Microsoft Azure/O365, administrators should ensure "number matching 2FA" is enabled for all user logins. Number matching adds a choice of three numbers to each login 2FA prompt, making it very difficult for an attacker to perform a fatigue attack successfully. 

Whatever path you decide to take, ensure 2FA is enabled for authentication and avoid one-time pins. Also, be sure to make your user experience comfortable, don't make them constantly authenticate throughout the day, and ensure your maximum session time is reasonable. 

#### Malicious Links  

Access brokers and ransomware operators enjoy delivering malicious links to users via email. Most of the time, the attacker will try to link the user to a website that downloads a malicious file, but more advanced actors will try to exploit vulnerabilities in browsers or operating systems. 

DNS filtering and URL rewriting combat phishing by preventing users from loading a malicious page even if they click a bad link. It is impossible to block all link-based phishing, but it is possible to reduce the risk. Link filtering is often achieved with threat intelligence feeds, page scanning or reputation checks, which run once a link is delivered via email or when a user clicks a link.  
  
Most DNS, URL and email filtration software will offer protection as standard. Tools like Mimecast, Proofpoint, Microsoft E5 and Cisco Umbrella are very good at preventing malicious links from loading.   
If your business does not have a good email security gateway or the appetite for new technology and the associated bills, you can look for cheap or free alternatives. 

Browser extensions like [Malwarebytes browser guard][4]  are a decent and free option that can be deployed quickly. Addis-like browser guards help prevent your users from opening known malicious pages. 
The protection that free tools offer is not as adequate as their enterprise-grade cousins, but that doesn't mean they shouldn't be used. If you haven't got a budget for enterprise tools, then installing something is better than nothing. 

DNS filtering is favoured amongst the security community because it can be done passively and, in some cases, for cheap or free. Passing all DNS queries through a service like Cisco Umbrella is a powerful way to prevent users from landing on suspicious and malicious websites. Even more straightforward is simply switching to a DNS provider that blocks malicious domains upstream. The [OpenDNS project][5] is simple to implement and free. Changing your upstream provider to OpenDNS could help block phishing or other scams. If you have a fixed IP address, you can even customise the categories of websites you'd like to block. For example, you could prevent users from loading adult and known malicious domains entirely.

In an ideal world, your email gateway should scan links in the body of incoming emails and block anything it deems malicious. Allowing users to interact with unchecked links is extraordinarily risky and leaves protection down to the user endpoint, and whatever agent is running there. 


#### Malicious Attachments
Modern attackers successfully breach targets by sending malicious attachments directly to their victims. In most cases, the payload is hidden inside a Microsoft Office document disguised as legitimate business mail. A malicious attachment will sometimes need further user interaction before being able to execute code. Still, in some rare cases where a zero-day or unpatched vulnerability is involved, no user interaction is required.   
  
Attackers love Office documents because they can contain Macro code that can make calls and execute commands of all different kinds. Macros are a dangerous weapon and should be controlled at the email gateway and user endpoint. If your business isn't using macros or never receives them via email, it's a great idea to [disable them altogether.][6] Block the file type.XLSM from being delivered at all and disable macros via group policy. If you need macros, you can control which types can be used via Microsoft group policy. The [Disable Internet Macros][7] group policy prevents users from allowing a macro that was delivered to them over the internet or via email from executing. If you do anything from this entire body of information, do this. Disable Macros. [Cyber security professionals want you to.][8] No, really, [we do][9].

Macro-based infections have become such a problem that [Microsoft is disabling external macros by default][10], but users can still bypass the block, although they must go out of their way. Again, if your business doesn't need macros, block them from executing entirely but bear in mind; security policy should work with a business and not against them, do not force a macroblock on staff that have a legitimate business reason for using them, you should be enabling your business to function securely not locking them down unnecessarily. 

Regardless of your macro-control policy, you should consider having some form of modern EDR software installed on your endpoints. Despite marketing material, no tool will ever give you 100% protection, but EDR will provide you with dramatically better protection than standard antivirus.  
Traditional antivirus looks for file hashes that act similarly to a policeman looking for fingerprints; if the antivirus doesn't recognise the fingerprints of a piece of malware, it can't detect it. On the other hand, EDR looks for suspicious _behaviour_ which means it can detect malware regardless of how it looks and feels or if it's seeing a piece of malware for the first time. For example, if a brand new piece of malware makes it into your network from a malicious document, your EDR tool should be able to detect the attack by the process of a parent-child relationship. In the below-simplified example, we see Winword.exe as the parent of Powershell.exe, which is a strong indicator of malicious _behaviour_.

![][image-3]

EDR tools are a good final layer against phishing attacks which have made it through your other walls of defence, although they can be costly and time-consuming to deploy. 


[1]:    https://www.techrepublic.com/article/for-sale-access-to-your-company-network-price-less-than-youd-think/
[2]:    https://i.ytimg.com/vi/vheFIrl1LAs/maxresdefault.jpg
[3]:    https://catching-transparent-phish.github.io
[4]:    https://www.malwarebytes.com/browserguard
[5]:    https://www.opendns.com
[6]:    https://4sysops.com/archives/restricting-or-blocking-office-2016-2019-macros-with-group-policy/
[7]:    https://www.cisecurity.org/white-papers/intel-insight-how-to-disable-macros/
[8]:    https://twitter.com/Hexacorn/status/1418634009060458500?s=20
[9]:    https://twitter.com/GovCERT_CH/status/1464148274823282697?s=20
[10]:   https://docs.microsoft.com/en-us/deployoffice/security/internet-macros-blocked

[image-1]:  https://catching-transparent-phish.github.io/img/mitmToolkitOverview.png
[image-2]:  /img/DocImages/2fakey.png
[image-3]:  /img/DocImages/process.png