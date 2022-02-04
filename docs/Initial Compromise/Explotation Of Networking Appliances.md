---
sidebar\_position: 2
---

Networking appliances like VPNs and Citrix access gateways are often installed to grant roaming users access to internal resources like file shares and applications. These appliances straddle the gap between the internet and the internal network. This somewhat hazardous location makes them an attractive target for attackers because successful compromise will most likely lead directly to the soft squishy centre of a private network.


![alt text][image-1]


***If your network has edge appliances, they must be promptly patched when vulnerabilities are disclosed; the sooner, the better.***


It's possible to detect such vulnerabilities with vulnerability scanners like Tenable or Qualys, but these solutions can be costly as they require long term human and financial investment. Alternatively, you should sign up for a free notification service like [Secalerts.co ][1] , which will send you a notification whenever the technologies you are running become vulnerable, which in turn should trigger your internal workflow to patch your appliances.

Your internal patching workflow for these systems should be concise and accessible. Long documents tucked away in a dark corner of a SharePoint library are useless. Making something hard to read means people won't bother doing so. Help IT administrators make your patching documentation accessible and as close to a one-pager as possible. Drop legalese and versioning tables instead give way for the technical information the technical people require.



Your patching document one-pager should convey the following information: 



- An agreed time frame between detection and remediation of vulnerabilities. Most businesses aim for a 30-day turnaround; however, the less, the better. Recent CVEs come with sharp teeth that should be addressed as soon as possible.

- Who is responsible for receiving the alerts from the detection system (whether a vulnerability scanner or alerting service like Secalerts) and starting the process, perhaps raising change requests and booking technical resource time.


- Who is responsible for actioning this alert as the technical resource that will apply the updates.

- How the patches are installed (if it’s any more difficult than clicking “Install Updates.”

- A section or process for the above persons to sign off that they have completed their parts of the patching process and confirmed the patches had been installed.


In some cases, it's also possible to detect appliance attacks via their logs, although this varies by vendor and vulnerability. Knowing which records to look at isn't always understood until long after a vulnerability has been published. In most cases, the appliance will write a Syslog message or have a particular file in a specific location that indicates the system has been compromised. It's probably best not to count on this method for detecting networking appliance intrusions. Prevention is better than cure, and in this case, prevention lives in the form of prompt patching.

It is also essential to ensure that the administration console for these appliances is not directly exposed to the internet. In some cases, an exposed control panel on 443 with default credentials is as bad as a critical vulnerability. Attackers could log in with the credentials and attack the appliance directly by elevating privileges on the local OS. They could steal credentials or use the appliance as a stepping stone into your network. 



[1]:	https://secalerts.co

[image-1]:	/img/DocImages/VPNDiagram.png