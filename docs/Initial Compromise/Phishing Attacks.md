---
sidebar_position: 4
---

Phishing attacks come in many flavours, almost all of them are enjoyed by ransomware operators and in fact phishing is one of the most common ways for ransomware to seep into a network either directly or indirectly. As an attack technique its popularity is probably fuelled by its success, relying on arguably the weakest link in cyber defences, people. 

Ransomware operators directly or indirectly compromise networks with phishing by either sending the emails themselves or purchasing pre-phished victims on the dark web from other hackers. In both cases one or more of the below tactics will be employed:


### Credential phishing

Credential phishing is probably the most popular type of phishing. It is the art of tricking users into clicking a link which eventually leads to a fake but convincing login page where the user wilfully hands over their username and password which the attackers use to login to the victim network. 

The true prevention for this format of phishing is of course enforcing 2FA on all user accounts without exception. Doing so will mean a stolen password alone cannot lead to a compromised account because 2FA is made up of something you know and something you are or have such as biometrics or a one time code generated on a smart phone app. Most idedntity privders like AzureAD and Google Workspace offer policies to enforce 2FA for all user accounts. Once you are done reading vist the "Vendor Speicifc" section of our documentation to find guides on enabling these policies.

Cloud identity providers also are very good at detecting and alerting on suspicious logon attempts such as those that pass the password gate but fail the second factor. Administrators should monitor these alerts closely because they could signal that a user has lost control of their password and thus they should be forced to change it.

It is quite simply impossible to block all link based phishing without majorly impacting business functions but it is possible to reduce the risk. URL filtering/rewriting and DNS filtering combats credential phishing by preventing a user from loading a malicious page, even if they do click a bad link. This is often achieved with threat intelligence or page structure scanning. Administrators should filter out known phishing pages alongside newly observed/registered domains. Most DNS, URL and eMail filtration software will offer this protection as standard and you should ask your sales rep how to impliment it. Research the specifics of the software you own and take advantage of it. 


