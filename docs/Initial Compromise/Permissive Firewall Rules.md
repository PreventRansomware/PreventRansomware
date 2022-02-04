---
sidebar\_position: 6
---

Firewalls filter traffic that travels in and out of a network. Your firewall should allow nothing in and only the bare minimum out in an ideal world. Unfortunately, this isn’t how the real world works. System administrators need to open ports for various business reasons; attackers know this and scour the internet for open ports with which they can breach a network.

 Remote Desktop (RDP for short) runs on port 3389; it’s used for remote system administration and user access, which increased during the COVID-19 outbreak. Thanks to this increase and plain bad firewall administration, many networks have exposed RDP directly to the open internet. At the time of writing, over ￼three million RDP ports are.
  
This is bad because it means an attacker could exploit a [vulnerability in Microsofts RDP protocol][1] or guess a working username and password combination to have instant, persistent access to a victim network. The latter has become popular with [ransomware operators.][2]

Having RDP open to the internet is akin to leaving your front door wide open. You should ensure that **administrative ports like 3389 are not allowed inbound.** If for some reason the business does require RDP or SSH inbound, traffic should be restricted to a particular source IP address and, if possible, only allowed when needed, such as during working hours. Ideally, these management type ports should be closed and stay closed.

Often significant security progress can be made only to be undone by someone else trying to fix a problem. It’s possible that after reading this guide, a system administrator will go and close or restrict inbound RDP only to find (once it’s too late) that somebody else reopened the port, thus re-exposing the network to attack. [Shodan Monitor][3] allows administrators to receive alerts when ports are open, which shouldn’t be. Adding an IP address to a Shodan account and configuring notifications is a simple and cost-effective way of monitoring for unexpected changes. Signing up for the basic freelancer package is sufficient. 








[1]:	https://nvd.nist.gov/vuln/detail/CVE-2019-0708
[2]:	https://www.varonis.com/blog/darkside-ransomware/
[3]:	https://monitor.shodan.io