---
sidebar\_position: 2
---
# Persistence

The first point of entry for attackers is known as “initial foothold” This term encompasses credentials or a computer system that hackers have managed to gain some form of control over. Once an attacker has this control, they need to ensure they can keep hold of it and come back to it later; this is known as persistence. 

Persistence tactics in ransomware attacks are relatively consistent, well understood and documented. There are, of course, a vast number of persistence mechanisms in the broad technology stacks of modern businesses, which means it isn’t feasible for defenders to intimately understand and build detections for all of them, nor is it within the scope of this documentation to explain every method in great detail so here we will focus on the popular flavours that we have seen in ransomware reports. It would be wise for defenders to ensure they can detect the below methods at the bare minimum, but this alone could be a big undertaking as group policy changes and large scale log collection is required. Try to augment your detection capabilities with the technology available at your disposal. Does the EDR tool you have selected have a suspicious persistence detection or prevention capability? It’s always worth checking the capabilities of your existing tooling before setting off to build complex log correlation rules and infrastructure. 

 More examples can be found in the [ATT&CK database][1] , which can be picked for more detection opportunities.   



### Scheduled tasks

To evade detection by anti-virus, most modern remote access tools like [CobaltStrike Beacons][2] exist primarily in RAM and avoid touching persistent storage. This means a simple reboot might be enough to shake a successful implant. To ensure their payload can persist, attackers [abuse Windows Scheduled Tasks][3]. Scheduled tasks can execute scripts and commands via triggers such as system startup, user logon and a timed schedule. Attackers can leverage this capability to schedule the execution of malicious commands so that every time a system starts, their payload does too.  [Ransomware gangs and many other hacking groups][4] abuse this Windows feature to ensure they can maintain access to their victim’s networks.
Attackers run variations of the below command to set up their malicious scheduled tasks:
![][image-1]

To detect the creation of scheduled tasks, system administrators can monitor logs for **event id 4647.** [Logging for this event is not enabled by default, so a group policy change might be needed.][5] You will need to enable: _audit Object Access - Other _.  

![][image-2]

The above group policy change will start to create the below Windows security event whenever a scheduled task is created:

![][image-3]

You should monitor these logs for the creation of any unexpected or suspicious scheduled tasks. Using the following criteria could assist with identifying suspicious tasks:  

- System administrators do not expect the user in question to have created a scheduled task and can find no reason for that user to have created one.
- Normal unprivileged users create tasks when not installing new software or making system changes.
- Names or strings in the log do not match standard naming conventions.
- The command in the “command” field is a complex string that includes many commas, back-ticks and other complex special characters, which could be a sign of obfuscation.
- Any strange PowerShell commands you do not expect or have not set yourself, for example: `bypass -nop -c 'IEX ((new-object net.webclient).downloadstring`






[1]:	https://attack.mitre.org/tactics/TA0003/
[2]:	https://web.archive.org/web/20220428110546/https://www.mandiant.com/resources/defining-cobalt-strike-components
[3]:	https://pentestlab.blog/2019/11/04/persistence-scheduled-tasks/
[4]:	https://attack.mitre.org/techniques/T1053/
[5]:	https://www.stigviewer.com/stig/windows_10/2017-12-01/finding/V-74409

[image-1]:	img/DocImages/cobaltpersist.png
[image-2]:	/img/DocImages/auditgpo.png
[image-3]:	img/DocImages/task.png