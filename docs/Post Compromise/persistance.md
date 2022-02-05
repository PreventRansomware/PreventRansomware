---
sidebar\_position: 2
---
# Persistence

The first point of entry for attackers is “the initial foothold” This term encompasses credentials or a computer system that hackers have managed to gain some form of control over. Once an attacker has this control, they need to ensure they can keep hold of it and come back to it later; this is known as persistence. 

Persistence tactics in ransomware attacks are relatively consistent, well understood and documented, which means defenders have a good chance of detecting them. There are, of course, an incalculable number of persistence mechanisms in the broad technology stacks of modern businesses, so here we will focus on the popular flavours that we have seen in ransomware reports. 

### Scheduled tasks

If a system is comprised remotely, an attacker has gained an “initial foothold”, which usually runs in memory; it can easily be shaken by restarting the OS. To ensure their payload can persist, attackers [abuse Windows Scheduled Tasks][1]. Scheduled tasks can execute scripts and commands via triggers such as system startup, user logon and particular times. Attackers can leverage this capability to schedule the execution of malicious commands so that every time a system starts, their payload does too.  [Ransomware gangs like Conti are known to use this persistence trick][2] to ensure they can come back to a victim network to continue their attacks.
Attackers run variations of the below command to set up their malicious scheduled tasks:
![][image-1]

To detect the creation of scheduled tasks, system administrators can monitor logs for **event id 4647.** [Logging for this event is not enabled by default, so a group policy change might be needed][3] You will need to enable: _audit Object Access - Other _.  

![][image-2]

The above group policy change will start to create the below Windows security event whenever a scheduled task is created:

![][image-3]

Defenders should monitor these logs for the creation of any unexpected or suspicious scheduled tasks. The following criteria should assist with identifying suspicious tasks:  

- Normal users create tasks when not installing new software or making system machines.
- Names or strings in the log do not match standard naming conventions.
- The command in the “command” field is a complex string that includes many commas, back-ticks and other complex special characters, which could be a sign of obfuscation.
- Any strange PowerShell commands you do not expect or have not set yourself, for example: `bypass -nop -c 'IEX ((new-object net.webclient).downloadstring`






[1]:	https://pentestlab.blog/2019/11/04/persistence-scheduled-tasks/
[2]:	https://thedfirreport.com/2021/11/15/exchange-exploit-leads-to-domain-wide-ransomware/
[3]:	https://www.stigviewer.com/stig/windows_10/2017-12-01/finding/V-74409

[image-1]:	/static/img/DocImages/cobaltpersist.png
[image-2]:	/img/DocImages/auditgpo.png
[image-3]:	/static/img/DocImages/task.png