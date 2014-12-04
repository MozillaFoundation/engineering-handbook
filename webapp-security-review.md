# Web App Security Review Process and Reference

## Note, this is not intended to yet be a GH page, I'm quite sure we'll have to move it around.  I'm just using it to capture content.

Mozilla Foundation typically utilizes node.js for development of our web applications.  This guide and checklist is based on best practices for security reviewing and testing of these apps.

## Checklist
### Authentication []()
* Usernames/userids are case insensitive.
* Password complexity ensures that passwords < 20 characters are not all lowercase alpha.
* All login and user information input pages must are forced https
* Application responds with a generic error message regardless of whether the user ID or password was incorrect. It gives no indication to the status of an existing account.








 * Authorization / Access Control
 * Session mgmnt
 * Input Validation
 * Cross Site Scripting & XSS
 * Command Injection Flaws
 * Buffer Overflow
 * Web Application Configuration Secrets

## Recommended Reading & References
[The Tangled Web: A Guide to Securing Web Applications](https://anawesomelink.com)


formatting examples, don't give me grief. :) :
```
sdlfjlasjdflaskdjf
asdfasdf
```

