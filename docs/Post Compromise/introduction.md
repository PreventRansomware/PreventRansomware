---
sidebar\_position: 1
---

# Introduction
Once a ransomware operator has gotten onto your network, they want to achieve predictable objectives. In most cases, the attacker will:

-** Persistence **- After gaining an initial foothold, the attacker will attempt to sink an anchor into the victim network that will enable them to come back and maintain access. This is commonly done by configuring the first infected machine to call back to the attacker even if it’s rebooted.  

-** Escalate privileges** - Unless the attackers get lucky, the account that initially fell victim to the intrusion will have insufficient privileges on the network. Attackers will seek to elevate themselves to a higher privilege level, which will help them access more systems and spread wider into the network in the next step…  

-** Lateral Movement** - Once the attacker has stolen access to higher privileges, they will begin to move around the network, infecting more machines and hoovering up data.  
  
 -**Exfiltration **- By this point in the kill chain, the bad guys might siphon some data out of the network, which will help extort the victim further down the line.  

-**Deployment **- Finally, attackers will deploy ransomware with creative techniques that ensure maximum damage and disruption.

In this section, we will discuss these steps to understand them, which in turn should help us derive detection and prevention opportunities.  

It is important to note that PreventRansomware does not expect, want or require you to become an expert in the following attack tactics. We instead wish to instil knowledge that you don't need to be a cyber security scientist. Merely knowing that these tactics exist and the basic mechanics of how they work should help you detect and defeat them.

We have purposefully refrained from diving deep into each tactic because we know that ransomware attacks are prevented by getting the basic, foundational security controls right. 

  
