---
 sidebar\_position: 2
---

# Persistence

 The first point of entry for attackers is known as "initial foothold" This term encompasses credentials or a computer system that hackers have managed to gain some form of control over. Once an attacker has this control, they need to ensure they can keep hold of it and come back to it later; this stage of the attack is known as persistence. 

There are many persistence mechanisms which means it isn't feasible for defenders to understand and design detections for all of them, nor is it within the scope of this documentation to explain every method in detail, so this part of the guide aims to give you a foundational understanding of them. Almost all cyberattacks entail some form of persistence, so it's essential to know they exist and recognise them if a detection is raised.


 You can find more examples in the [ATT&CK database][1] , where budding analysts can find more detection opportunities.   

### Scheduled tasks

 To evade detection by anti-virus, most modern remote access tools like [CobaltStrike Beacons][2] exist primarily in RAM and avoid touching persistent storage. This means a simple reboot might be enough to shake a successful implant. To ensure their payload can persist, attackers [abuse Windows Scheduled Tasks][3]. Scheduled tasks can execute scripts and commands via triggers such as system startup, user logon and a timed schedule. Attackers can leverage this capability to schedule the execution of malicious commands so that every time a system starts, their payload does too. [Ransomware gangs and many other hacking groups][4] abuse this Windows feature to ensure they can maintain access to their victim's networks.
 Attackers run variations of the below command to set up their malicious scheduled tasks:
 ![][image-1]

 To detect the creation of scheduled tasks, system administrators can monitor logs for **event id 4647.**[Logging for this event is not enabled by default, so a group policy change might be needed.][5] You will need to enable: _audit Object Access - Other _.  

 ![][image-2]

 The above group policy change will start to create the below Windows security event whenever a scheduled task is created:

 ![][image-3]

 You should monitor these logs for the creation of any unexpected or suspicious scheduled tasks. Using the following criteria could assist with identifying suspicious tasks:  

- System administrators do not expect the user in question to have created a scheduled task and can find no reason for that user to have created one.
- Normal unprivileged users create tasks when not installing new software or making system changes.
- Names or strings in the log do not match standard naming conventions.
- The command in the "command" field is a complex string that includes many commas, back-ticks and other complex special characters, which could be a sign of obfuscation.
- Any strange PowerShell commands you do not expect or have not set yourself, for example: `bypass -nop -c 'IEX ((new-object net.WebClient).downloadstring`

[1]:    https://attack.mitre.org/tactics/TA0003/
[2]:    https://web.archive.org/web/20220428110546/https://www.mandiant.com/resources/defining-cobalt-strike-components
[3]:    https://pentestlab.blog/2019/11/04/persistence-scheduled-tasks/
[4]:    https://attack.mitre.org/techniques/T1053/
[5]:    https://www.stigviewer.com/stig/windows_10/2017-12-01/finding/V-74409

[image-1]:    /img/DocImages/cobaltpersist.png
[image-2]:    /img/DocImages/auditgpo.png
[image-3]:    /img/DocImages/task.png

### Registry Run Keys and Startup Folder

 Installing software or making configuration changes to Windows systems often requires a restart. Sometimes these changes must resume after the restart has been completed; Windows can handle the resuming of tasks thanks to a feature known as Registry Run Keys and Startup Folders. 

 Any instruction an administrator places inside the RunOnce registry hive or the Startup Folder will execute the next time the system loads.

 The Run Once Registry keys by default are:

 HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run
 HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunOnce
 HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run
 HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\RunOnce

 A typical startup path for all users is:

 C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp

These paths are ripe for abuse by attackers because adding a malicious instruction to the above paths could give an attacker persistence. What starts as a helpful Windows feature can quickly be twisted into an evil tool that ransomware can exploit and use against us. There is extensive data of attackers using this method for persistence. The AT&CK website provides clean examples of the registry and startup folder tactic: https://attack.mitre.org/techniques/T1547/001/

Both of the above persistence techniques can be detected by monitoring the Windows event logs for specific event IDs. (Registry modifications are ID 13, and file modifications are ID 11) but doing so could be cumbersome and expensive for most defenders. Firstly, Symon will need to be deployed, and secondly, the logs need to be ingested into a SIEM where rules can detect suspicious behaviour. Although not impossible, it isn't a simple undertaking. 






