---
sidebar_position: 2
---

Networking appliances like VPNs and Citrix access gateways are often installed to grant roaming users access to internal resources like file shares and applications. These appliances straddle the gap between the internet and the internal network. This rather precarious location makes them an attractive target for attackers because successful compromise will most likely lead directly to the soft squishy center of a private network.


![alt text](/img/DocImages/VPNDiagram.png)


***If your network has edge appliances they must be promptly patched when vulnerabilities are disclosed, the sooner the better.***


It's possible to detect such vulnerabilities with vulnerability scanners like Tenable or Qualys, but these solutions can be costly as they require long term human and financial investment. Alternatively, you could sign up for a free notification service like [Secalerts.co ](https://secalerts.co) Secalerts will send you a notification whenever the technologies you are running become vulnerable which should trigger your internal workflow to patch your appliances.

Your patching process for these systems should be succinct and accessible because long documents which are tucked away in a dark corner of a SharePoint library are useless. Making something hard to read means people won't bother doing so. Help IT administrators by making your documentation for patching accessible and as close to a one-pager as possible. Drop legalese and versioning tables to instead give way for the technical information the technical people require.



Your patching document one-pager should achieve the following simple goals:



- An agreed time frame between detection and remediation of vulnerabilities. Most businesses aim for a 30 day tun around however the less, the better. Recent CVEs come with sharp teeth that should be addressed as soon as possible. 

- Who is responsible for receiving the alerts from the detection system (whether a vulnerability scanner or alerting service like Secalerts) and starting the process, perhaps raising change requests and booking technical resource time.


- Who is responsible for actioning this alert as the technical resource that will apply the updates.


- A section or process for the above persons to sign off that they have completed their parts of the patching process and confirmed the patches have installed.


In some cases, it's also possible to detect appliance attacks via their logs although this varies by vendor and vulnerability. Knowing which logs to look at isn't always understood until long after a vulnerability has been published. In most cases, the appliance will write a syslog message or have a particular file in a particular location that indicates the system has been compromised. It's probably best not to count on this method for detecting networking appliance intrusions. Prevention is better than cure and in this case prevention lives in the form of prompt patching.


