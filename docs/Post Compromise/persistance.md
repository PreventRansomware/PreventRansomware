---
sidebar_position: 1
---

# Persistence

Remote access tools like [CobaltStrike Beacons][1] avoid detection by living in RAM and never writing themselves into persistent storage; therefore, a system reboot might be enough to shake a successful implant. Attackers need their access to be persistent, so they can come back to the victim network and continue their operations day after day, or in some cases, [for the few short hours it takes them to deploy ransomware.][2]

There are many persistence tricks at the disposal of attackers. Explaining them all is beyond the scope of this documentation. Instead, we aim to arm you with a foundational knowledge of the most popular flavours used during ransomware attacks. PreventRansomware doesn't want nor expect you to become an expert in persistence tactics, but instead, be aware of them and ready to respond when an alert is raised. The format of your alerting depends on the tooling, amount of time, resources and technical skills your team has. Some teams will opt to comb incident response reports online to draw custom detections, whilst others will rely entirely on the prebaked rules in their security toolbox.
For most, the best option is to let tooling do the heaving lifting because it often isn't feasible to develop homegrown detections; adversary tactics are growing and constantly changing, so writing rules can become time-consuming and error-prone.

It is essential to check that your tools detect suspicious changes to persistence mechanisms and ensure that you respond correctly when an alert is raised. An EDR tool is your best bet for automatically detecting and alerting on suspicious persistence tricks, and later in our guide, we offer advice for selecting the right tool.

The [ATT&CK database][3] is a brilliant resource that will allow you to see and learn more persistence tricks than we have the room for here and, as such, is a great place to find tests that you could throw at your EDR vendor for testing.

### Scheduled tasks

 To ensure their payload can persist, attackers [abuse Windows Scheduled Tasks][4]. Scheduled tasks can execute scripts and commands via triggers such as system startup, a user log in and a timed schedule. Attackers can leverage this capability to schedule the execution of malicious commands so that every time a system starts, their payload does too. [Ransomware gangs and many other hacking groups][5] abuse this Windows feature to ensure they can maintain access to their victim's networks.
 Attackers run variations of the below command to set up their malicious scheduled tasks:
 ![][image-1]

 To detect the creation of scheduled tasks, system administrators can monitor logs for **event id 4647.**[Logging for this event is not enabled by default, so a group policy change might be needed.][6] You will need to enable: _audit Object Access - Other _.  

 ![][image-2]

 The above group policy change will start to create the below Windows security event whenever a scheduled task is created:

 ![][image-3]

 You should monitor these logs for the creation of any unexpected or suspicious scheduled tasks. Using the following criteria could assist with identifying suspicious tasks:  

- System administrators do not expect the user in question to have created a scheduled task and can find no reason for that user to have created one.
- Normal unprivileged users create tasks when not installing new software or making system changes.
- Names or strings in the logs do not match standard naming conventions which are familiar in the context of the business in question.
- The command in the "command" field is a complex string that includes many commas, back-ticks and other special characters, which could signify obfuscation.
- Any strange PowerShell commands you do not expect or have not set yourself, for example: `bypass -nop -c 'IEX ((new-object net.WebClient).downloadstring`

### Registry Run Keys and Startup Folder

Installing software or making configuration changes to Windows systems often requires a restart. Sometimes, these changes must resume after the restart has been completed; Windows can handle the resuming of tasks thanks to Registry Run Keys and Startup Folders.
 Any instruction an administrator places inside the RunOnce registry hive or the Startup Folder will execute the next time the system loads.

 The Run Once Registry keys by default are:

 HKEY\_CURRENT\_USER\Software\Microsoft\Windows\CurrentVersion\Run
 HKEY\_CURRENT\_USER\Software\Microsoft\Windows\CurrentVersion\RunOnce
 HKEY\_LOCAL\_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run
 HKEY\_LOCAL\_MACHINE\Software\Microsoft\Windows\CurrentVersion\RunOnce

 A typical startup path for all users is:

 C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp

These paths are ripe for abuse by attackers because adding a malicious instruction to the above paths could give an attacker persistence. What starts as a helpful Windows feature can quickly be twisted into an evil tool that ransomware can exploit and use against us. There is extensive data of attackers using this method for persistence which can be found in the helpful and well-organised AT&CK database. https://attack.mitre.org/techniques/T1547/001/

### Summary

- Attackers have a plethora of persistence techniques at their disposal, it would be inhumane to expect defenders to intimately understand all of them to enable the creation of good detection logic. Take advantage of the powerful pre-made detections baked into EDR products by deploying and maintaining an agent on every endpoint. 
- Its good practice to read about and maintain a surface level understanding of attackers favourite tactics but don’t beat yourself up about not having this entire field of hacking under wraps.




[1]:	https://web.archive.org/web/20220428110546/https://www.mandiant.com/resources/defining-cobalt-strike-components
[2]:	https://web.archive.org/web/20220512155125/https://thedfirreport.com/2022/04/25/quantum-ransomware/
[3]:	https://attack.mitre.org/tactics/TA0003/
[4]:	https://pentestlab.blog/2019/11/04/persistence-scheduled-tasks/
[5]:	https://attack.mitre.org/techniques/T1053/
[6]:	https://www.stigviewer.com/stig/windows_10/2017-12-01/finding/V-74409

[image-1]:	/img/DocImages/cobaltpersist.png
[image-2]:	/img/DocImages/auditgpo.png
[image-3]:	/img/DocImages/task.png