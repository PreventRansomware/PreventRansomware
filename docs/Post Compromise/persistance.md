---
sidebar\_position: 2
---
# Persistence

The first point of entry for attackers is known as “the initial foothold” This term encompasses credentials or a computer system that hackers have managed to gain some form of control over. Once an attacker has this control they need to ensure they can keep hold of it and come back to it at a later time, this is known as persistence. 

Persistence tactics in ransomware attacks are fairly consistent, well understood and documented which means defenders have a good chance of detecting them. There are  of course an incalculable number of persistence mechanisms in the broad technology stacks of modern businesses so here we will focus on the popular flavours that we have seen in ransomware reports. 

### Scheduled tasks
If an initial foothold is running in memory on a Windows system it can easily be shaken by restarting the OS. To reload their beacon and persist after a reboot attackers[abuse Windows Scheduled Tasks][1]. Scheduled tasks allow users to run a set of programs or commands via a number of triggers including system start and user logon. Attackers can leverage this capability to schedule the execution of malicious code at system startup, user logon or even at a timed interval. [Ransomware gangs like Conti are known to use this persistence trick][2] to ensure they can come back to a victim network to continue their attacks. 

To detect the creation of scheduled tasks system administrators can monitor logs for **event id 4647.** [Logging for this event is not enabled by default so a group policy change might be needed][3].  Alerting every time this event is raised in a large, busy windows domain might overwhelm defenders. Reporting or in some way reviewing logs in aggregate is a good way to spot and remove suspicious tasks. Regardless of which format the reviews take you should comb each message to ensure there are no scheduled tasks that you do not recognise or are out of place. Often attackers will pick task names that blend in with background noise such as “WindowsUpdater” or “BackgroundService”.  Check the various fields of the log to look for suspicious indicators. The user who created the task, the command the task runs, the time they created the task and of course ask the identified user if they knowingly created the scheduled task. Be aware that some software installations create scheduled tasks so always check with the offending user if they recently made any system changes or installed software. 

INSERT SCREENSHOT OF SCHEDULED TASK HERE






[1]:	https://pentestlab.blog/2019/11/04/persistence-scheduled-tasks/
[2]:	https://thedfirreport.com/2021/11/15/exchange-exploit-leads-to-domain-wide-ransomware/
[3]:	Audit%20Other%20Object%20Access%20Events