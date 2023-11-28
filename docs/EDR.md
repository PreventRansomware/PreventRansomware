---
sidebar\_position: 6
---

# Endpoint Detection and Response (EDR)
    
Throughout this documentation you will notice somewhat repetitive advice to deploy and maintain an EDR agent. Although in some cases deploying an agent is an expensive investment it certainly will pay dividends. 

Fortunately for us defenders, most attacker tactics leave indicators in their wake that we can monitor and alert on but ingesting, parsing and writing alert logic for log data at scale can be a taxing task because there are many relentlessly changing attack methods and security tooling can be complex, especially in a Windows environment. 
PreventRansomware continues to stress that it may not be suitable for all teams to build out bespoke detection capabilities, and that’s OK. If you have the budget to deploy some form of EDR tool with pre-baked prevention, it is certainly worthwhile to do so. Having EDR allows you to tap into the detection output of worldclass threat intel teams at the big tech companies like Microsoft and CrowdStrike who are constantly fighting to ensure their detection logic is up to date with the latest tactics and procedures which in turn frees your team up to focus on other areas whilst the EDR platform monitors your endpoints silently in the background.

With all that said, the rewards of installing and deploying an EDR tool can only be reaped if good foundations are laid first. 

## Agent deployment
Agents are often a simple service installed with a package such as a EXE or MSI which come with mass deployment instructions, in most cases vendors will assist you with the planning, testing and initial deployment however, ensuring this agent is consistently deployed is a challenge of its own and a very common missed best practice. You must ensure your agent deployment mechanism is working, when new systems are brought online they must get the agent promptly installed.

## Alerting Monitoring 
Once the agent is throughly deployed, you must ensure the alerts it generates are monitored, even if just by email. The 2021 Conti cyber attack on the HSE report from PWC highlights: 
> There was no security monitoring capability that was able to effectively detect, investigate and respond to security alerts across HSE’s IT environment or the wider NHN.

Please don’t despair if there isn't budget for purchasing an EDR; as previously mentioned, good security best practices go a long way and are often implementable without cost because most of the gains can be achieved by tweaking settings in existing technologies as we saw in the previous chapters.



