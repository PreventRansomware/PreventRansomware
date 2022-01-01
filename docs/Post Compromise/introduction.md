---
sidebar\_position: 1
---

# Introduction
Once a ransomware operator has gotten onto your network they want to achieve fairly predictable objectives. In most cases the attacker will:

-** Persistence **- After gaining an initial foothold the attacker will attempt to sink an anchor into the victim network that will enable them to come back and maintain access. This is commonly done by configuring the first infected machine to call back to the attacker even if its rebooted.  

-** Escalate privileges** - Unless the attackers get lucky the account that initially fell victim to to the intrusion will have low privileges on the network. Attackers will seek to elevate themselves to a higher privilege level which in turn will help them access more systems and spread wider into the network in the next step…  

-** Lateral Movement** - Once the attacker has stolen access to higher privileges they will begin to move around the network, infecting more machines and hoovering up data.  
  
 -**Exfiltration **- By this point in the kill chain the bad guys might siphon some data out of the network which will help extort the victim further down the line.   

-**Deployment **- Finally attackers will deploy ransomware with creative techniques that ensure maximum damage and disruption.

In this section we will be discussing these steps with the goal of understanding them  which in turn should help us derive detection and prevention opportunities.   
  
