---
sidebar\_position: 6
---

# Endpoint Detection and Response (EDR)
    
Throughout this documentation you will notice somewhat repetitive advice to deploy and maintain an EDR agent. Although in some cases deploying an agent is an expensive investment it certainly will pay dividends. 

Fortunately for us defenders, most attacker tactics leave indicators in their wake that we can monitor and alert on but ingesting, parsing and writing alert logic for log data at scale can be a taxing task because there are many relentlessly changing attack methods and security tooling can be complex, especially in a Windows environment. 

PreventRansomware continues to stress that it may not be suitable for all teams to build out complex, bespoke detection capabilities, and that’s OK. If you have the budget to deploy some form of EDR tool with pre-baked prevention, it is certainly worthwhile to do so. Having EDR allows you to tap into the detection output of world class threat intel teams at the big tech companies like Microsoft and CrowdStrike who are constantly fighting to ensure their detection logic is up to date with the latest tactics and procedures which in turn frees your team up to focus on other areas whilst the EDR platform monitors your endpoints silently in the background. 

With all that said, the rewards of installing and deploying an EDR tool can only be reaped if good foundations are laid first. 

## Agent deployment
Agents are often a simple service installed with a package such as a EXE or MSI which come with mass deployment instructions, in some cases vendors will assist you with the planning, testing and initial deployment however, ensuring this agent is consistently deployed is a challenge of its own and a very common missed best practice. You must ensure your EDR agent deployment mechanism is working at all times and when new workstations or servers are brought online they must get the agent promptly installed, preferably automatically via policy. This sounds simple but in practice can be a challenge. In fact, a whole new technology category has arisen to help solve this problem. Many vendors have brought security focused inventory tools to market to help ensure blue teams have consistent deployments across their fleet.

Failing to install and enable EDR agents on new or existing endpoints could create a gap just wide enough for malware and later, ransomware to seep in.

You should aim to automatically onboard an EDR agent via some form of remote management tool like inTune, SCCM, GPO, anything that can get the agent installed as soon as possible after system is provisioned. Vendors should have stacks of documentation and instructions for doing so. Never assume your deployment mechanism is always working! Test it frequently by checking new systems are appearing in the EDR console. 


## Alerting Monitoring 
Once the agent is throughly deployed, you must ensure the alerts it generates are monitored, even if just by email. The 2021 "Conti cyber attack on the HSE" report from PWC highlights: 
> There was no security monitoring capability that was able to effectively detect, investigate and respond to security alerts across HSE’s IT environment or the wider NHN.

Calling out the fact that you need to monitor alerts from EDR systems is obvious to most, but perhaps not everybody. As highlighted in the HSE case, stricter monitoring of EDR alerts could have helped apprehend the attackers much sooner before they had time to deploy their cryptographic nightmare. 

Please don’t despair if there isn't budget for purchasing an EDR; as previously mentioned, good security best practices go a long way and are often implementable without cost because most of the gains can be achieved by tweaking settings in existing technologies as we saw in the previous chapters. There are of course open source EDR tools out there which can be run for the cost of hosting them, on prem or cloud. 

In summary, a consistently deployed and monitored EDR platform will bring any blue team along absolute leaps and bounds in detection and prevention capability thanks to the premade detection logic brewed by leading security technology companies. Therefore, if finically viable deploy an EDR. If you already have one, make sure its deployed properly. 

