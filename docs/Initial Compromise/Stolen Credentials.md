---
sidebar_position: 4
---

It's common for ransomware gangs to break into organisations simply by logging into a network with stolen, guessed or purchased credentials. Yes, that's right, **hackers are just literally just logging in to your network to deploy ransomware.** 


### Updating your approach to passwords.

Traditional password policies such as: _Eight characters, one special character, one uppercase character and forced expiry_ are no longer in favour because in reality they force users to set weak and easy to guess passwords. In fact old password policies like this are now considered _password anti-patterns._ Examples of these patterns are:

- **Regular password expiry** - Forcing a user to rotate their password on a timed interval means that user will naturally select passwords which are easy to remember and will most likely be nothing more than iterations of a previous password. For example if James has to set a complex password which rotates every 90 days he will want to make that password as memorable as possible because he has to type it hundreds of times per week. James's password might currently be: “Summer69!” and then changed to “Summer420!” after the forced expiry. An organisation might block James from reusing an old password which further forces James to make his password more complex, instead opting for something like “Summ3r420!”

- **Character Composition Requirements ** - Forcing user passwords to contain a certain number of special or uppercase characters has a similar effect to password expiry, weaker passwords are selected because the user is being forced to create a complex password (“Summ3r420!”) which is also easy to remember. Its a catch 22. 


They say there is an xkdc for everything, here’s one for this exact topic:  

![PasswordImage][image-1]


Traditional password policies encourage  pass**words **that are easy for attackers to guess, brute force or crack. Create a modern password policy with length and longevity in mind, which means long and rarely expiring pass**pharses.** This concept sounds alien but is inline with guidance from leading cyber security experts at [government bodies][1] and [Microsoft:][2]

- **Maintain an 8-character or more minimum length requirement.** - **PreventRansomware recommends 16-characters** which isn’t as bad as it sounds, using song lyrics or quotes from books forms long easy to remember passphrase’s.

- **Don't enforce character composition requirements.** - For example, \*&(^%$ or a particular number of uppercase or lowercase letters.

- **Don't require mandatory periodic password resets for user accounts.** - PreventRansomware recommends a once yearly password rotation.

- **Ban common passwords** - Ban the use of common words like the names of seasons, celebrities and top common passwords like: passwordpasswordpassword.

- **Enforce 2FA for all users.** - All user accounts must require two factor authentication so that even if a password is compromised, the account wont be.

Thanks to its lack of expiry and long, non-complex requirements, this policy encourages strong pass**phrases** (instead of passwords) like song lyrics or passages from books, such as:

- Welcome to the jungle
- Hello my old friend
- Cheetos are the only way!

By changing to the above passphrase methodology you will protect your organisation in multiple ways:

- Make it harder for attackers to get lucky when brute forcing logins to o365, Citrix, RDP and VPNs

- If an attacker does get into the network longer passwords make lateral movement harder because offline password cracking because exponentially more time consuming. The more time an attacker lingers on a network the better.

- **Added Bonus:** Improves your user experience by allowing them to use easy to type and easy to remember passwords which they don’t have to rotate regularly. When a new user starts you can just tell them to use song lyrics. They will be pleasantly surprised when you explain that they don’t need special characters. The number of password reset tickets coming to the Helpdesk will also be reduced.








[1]:	https://www.ncsc.gov.uk/blog-post/the-logic-behind-three-random-words
[2]:	https://docs.microsoft.com/en-us/microsoft-365/admin/misc/password-policy-recommendations?view=o365-worldwide#password-guidelines-for-administrators

[image-1]:	https://imgs.xkcd.com/comics/password_strength.png