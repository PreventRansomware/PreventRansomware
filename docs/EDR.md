---
sidebar\_position: 6
---

# Endpoint Detection and Response (EDR)
    
Throughout this documentation you will notice somewhat repetitive advice to deploy and maintain an EDR agent. Although in some cases deploying an agent is an expensive investment it certainly will pay dividends. 

Leading EDR tools come with pre-made, powerful detection logic baked in which regularly update with the latest threat actor tactics. All of this means your team wont need to be threat detection experts, spend time combing threat intel reports or learn how to write custom detections, freeing them up to get on with their jobs. Of course, alerts from an EDR platform still need to be monitored and the agent needs to be deployed, and consistently deployed to new machines but all of this work is marginal when compared to the complexities of understanding and trying to stay ahead of the ever changing attacker tactics. In summary, EDR, once deployed, is a gigantic leap forward in detection and protection. 

 
With that said, the rewards of installing and deploying an EDR tool can only be reaped if good foundations are laid first. 

## Agent deployment
Agents are often a simple service installed with a package such as a EXE or MSI which come with mass deployment instructions, in most cases vendors will assist you with the planning, testing and initial deployment however, ensuring this agent is consistently deployed is a challenge of its own and a very common missed best practice. You must ensure your agent deployment mechanism is working, when new systems are brought online they must get the agent promptly installed.

## Alerting Monitoring 
Once the agent is throughly deployed, you must ensure the alerts it generates are monitored, even if just by email. The 2021 Conti cyber attack on the HSE report from PWC highlights: 
> There was no security monitoring capability that was able to effectively detect, investigate and respond to security alerts across HSE’s IT environment or the wider NHN.




