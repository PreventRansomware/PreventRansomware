---
sidebar_position: 4
---

Phishing attacks come in many flavours, almost all of them are enjoyed by ransomware operators and in fact phishing is one of the most common ways for ransomware to seep into a network either directly or indirectly. As an attack technique its popularity is probably fuelled by its success, relying on arguably the weakest link in cyber defences, people. 

Ransomware operators directly or indirectly compromise networks with phishing by either sending the emails themselves or purchasing pre-phished victims on the dark web from other hackers. In both cases one or more of the below tactics will be employed:


### Credential phishing

The art of tricking users into clicking a link which eventually leads to a fake but convincing login page where the user wilfully hands over their username and password which the attackers use to login to the victim network. 

The true prevention for this format of phishing is of course enforcing 2FA on all user accounts without exception. Doing so will mean a stolen password alone cannot lead to a compromised account because 2FA is made up of something you know and something you are or have such as biometrics or a one time code generated on a smart phone app. Cloud identity providers such as AzureAD are very good at detecting and alerting on suspicious logon attempts such as those that pass the password gate but fail the second factor. Administrators should monitor these alerts closely because they could signal that a user has lost control of their password and thus it should be forced to expire.

URL filtering/rewriting and DNS filtering combats credential phishing by preventing a user from loading a malicious page, even if they do click a bad link. This is often achieved with threat intelligence or page structure scanning. Administrators should filter out known phishing pages alongside newly observed/registered domains. Most DNS, URL and eMail filtration software will offer this protection. Research the specifics of the software you own and take advantage of it. 


