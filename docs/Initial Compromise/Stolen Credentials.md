---
sidebar\_position: 4
---

Consumers of security tools are led to believe that Ransomware is a complex threat but in the real world this could not be further from the truth. 
It's common for ransomware gangs to break into organisations simply by logging into a network with stolen, guessed or purchased credentials. Yes, that's right, hackers are just literally just logging in. 


### Updating your approach to passwords.

Traditional password policies such as: _Eight characters, one special character, one uppercase character and forced expiry_ are no longer in favour because requirements like these force users to set weak and easy to guess passwords, this is known as a _password anti-pattern_. Examples of these patterns are:

- **Regular password expiry** - Forcing a user to rotate their password on a timed interval means that user will naturally select passwords which are easy to remember and will most likely be nothing more than iterations of a previous password. For example if James has to set a complex password which rotates every 90 days he will want to make that password as memorable as possible because he has to type it hundreds of times per week. James's password might currently be: "IL0v3work21" and then changed to "IL0ve3work22" after the forced expiry.

- **Character Composition Requirements ** - Forcing user passwords to contain a certain number of special or uppercase characters has a similar effect to password expiry, weaker passwords are selected.   


They say there is an xkdc for everything, here’s one for this exact topic:  

![PasswordImage][1]


Traditional password policies encourage or even create pass**words **that are easy for attackers to guess, brute force or crack. You should help staff by setting a more modern password policy with length and longevity in mind, which means long and rarely expiring pass**pharses.** This concept sounds alien but is inline with guidance from leading cyber security experts from [government bodies][2] and [Microsoft:][3]

- **Maintain an 8-character or more minimum length requirement.** - Ransomware.io recommends 16-characters which isnt as bad as it sounds, using song lyrics or quotes from books form strong passphrases.  

- **Don't enforce character composition requirements.** - For example, \*&(^%$ or a particular number of uppercase or lowercase letters.  

- **Don't require mandatory periodic password resets for user accounts.** - Ransomware.io recommends a once yearly password rotation.  

- **Ban common passwords** - Ban the use of common words like the names of seasons, celebrities and top passwords like: passwordpasswordpassword.   

- **Enforce 2FA for all users.** - All user accounts must require two factor authentication so that even if a password is compromised, the account wont be.

Thanks to its lack of expiry and long, non-complex requirements, this policy encourages strong passphrases (instead of passwords) like song lyrics or passages from books, such as:

- Welcome to the jungle
- Hello my old friend
- Cheetos are the only way!

By changing to the above passphrase methodology you will protect your organisation in multiple ways:

- Make it harder for attackers to get lucky when brute forcing logins to o365, Citrix, RDP and VPNs  

- If an attacker does get into the network longer passwords make lateral movement harder because offline password cracking because exponentially more time consuming. The more time an attacker lingers on a network the better.   

- Surprisingly improves your user experience by allowing them to use easy to type and easy to remember passwords which they don’t have to rotate every few months. When a new user starts you can just tell them to use song lyrics. They will be pleasantly surprised when you explain that they don’t need special characters! 








[1]:	https://imgs.xkcd.com/comics/password_strength.png
[2]:	https://www.ncsc.gov.uk/blog-post/the-logic-behind-three-random-words
[3]:	https://docs.microsoft.com/en-us/microsoft-365/admin/misc/password-policy-recommendations?view=o365-worldwide#password-guidelines-for-administrators