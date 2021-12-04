---
sidebar\_position: 6
---

Firewalls filter traffic that travels in and out of a network. In an ideal world your firewall should allow nothing in and only the bare minimum out. Unfortunately this isn’t how the real world works. System administrators need to open ports for an array of business reasons, attackers know this and scour the internet for open ports that they can breach a network with.

 Remote Desktop (RDP for short) runs on port 3389, its used for remote system administration and user access which has increased during the COVID-19 outbreak. Thanks to this increase and plain bad firewall administration, many networks have exposed RDP directly to the open internet. At the time of writing there are over [three million RDP ports open as per Shodan][1].
  
This is bad because it means an attack could exploit a [vulnerability in Microsofts RDP protocol][2] or guess a working username and password combination to have instant, persistent access to a victim network. The latter has become popular with [ransomware gangs.][3]

Having RDP open to the internet is akin to leaving your front door wide open. You should work to ensure **administrative ports like 3389 are not allowed inbound.** If for some reason the business does require RDP or SSH inbound, traffic should be restricted to a particular source IP address and if possible only allowed when needed such as during working hours. Ideally these management type ports should be closed and stay closed.

Often great security progress can be made only to be undone by someone else trying to fix a problem. Its very possible that after reading this guide a system administrator will go and close or restrict inbound RDP only to find (once its too late) that somebody else reopened the port thus re-exposing the network to attack. [Shodan Monitor][4] allows administrators to receive alerts when ports are open which shouldn’t be. Adding an IP address to a Shodan account and configuring notifications is a simple and cost effective way of monitoring for unexpected changes. Singing up for the basic freelancer package is sufficient. 








[1]:	https://www.shodan.io/search?query=Remote+desktop+port%3A%223389%22
[2]:	https://nvd.nist.gov/vuln/detail/CVE-2019-0708
[3]:	https://www.varonis.com/blog/darkside-ransomware/
[4]:	https://monitor.shodan.io