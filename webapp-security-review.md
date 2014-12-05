# Web App Security Review Process and Reference

## Note, this is not intended to yet be a GH page, I'm quite sure we'll have to move it around.  I'm just using it to capture content.

Mozilla Foundation typically utilizes node.js for development of our web applications.  This guide and checklist is based on best practices for security reviewing and testing of these apps.

## Checklists For Security Review


## Authentication
* Does the application support logins?
* TLS - Verify the site is entirely HTTPS
* TLS - Verify that requests for HTTP URLs redirect to the equivalent HTTPS URL
* TLS - Verify that the Http Strict Transport Security flag is set
* Error Message - Verify that the error message displayed for an invalid username is the same message displayed for * an invalid password
* Brute Force - Verify that a captcha is displayed after multiple (standard is 5) failed login attempts
* Does the application manage its own set of user credentials?
* Verify that the application enforces the appropriate password complexity
* Verify a password blacklist is implemented
* If possible, verify that passwords are adequately protected in storage (bcrypt+hmac)
* If possible, verify that old password hashes are removed from the system
* Does the application support administrative logins?
* Verify the admin login page is not publicly available
* Does the application require an email verification before the account is activated?
* Verify that no actions can be taken or stored against the account until the verification link is followed
* Verify that the link only verifies ownership of the email account and does not log the user into the system
* Verify the code within the verification link is random
* Verify that the code within the verification link can not be used for an alternate user id or user account
* Verify that the verification code is invalidated after a single use
* Verify that the verification code is invalided after 8 hours if it is not used
* Does the application provide a forgot password mechanism?
* Verify that no information is provided to indicate if a valid username or email address was entered
* Verify the code within the verification link is random
* Verify that the code within the verification link can not be used for an alternate user id or user account
* Verify that the verification code is invalidated after a single use
* Verify that the verification code is invalided after 24 hours if it is not used
* Session Management
* Does the application maintain state via a session identifier?
* Verify this session id is the default implementation and not a custom solution
* Verify the session identifier is 128-bit or larger
* Does the application use cookies for the session identifier?
* Verify the SECURE flag is set for the cookies
* Verify the HTTPOnly flag is set for the cookies
* Verify the PATH and DOMAIN are appropriately set for the cookies
* Does the application support logins?
* Verify a new session identifier is created for the user upon logging into the application
* Verify that upon logout the session id is expired on the client
* Verify that upon logout the session id is invalidated on the server
* Verify that critical applications enforce an inactivity timeout feature
* Is session timeout appropriate for this application?
* Verify that authenticated sessions time out after a determined period of inactivity (15 minutes is recommended)

## Access Control
* Does the application support multiple users?
* Verify that two users within the same role cannot execute functionality on behalf of the other account
* Verify that two users within the same role cannot access or edit data on behalf of the other account
* Does the application support multiple roles?
* Verify that a user within one role cannot view features or functionality not available to the user
* Verify that a user within one role cannot execute functionality reserved for a different role
* Verify that a user within one role cannot access or edit data reserved for a different role

## Input Validation
* Does the application accept user input?
* Verify a sampling of input locations to ensure that reasonable maximums are in place when accepting user data
* Verify a sampling of input locations to ensure that the application allows only a defined set of acceptable * characters
* Verify a sampling of input locations to ensure that the application is not relying solely on JavaScript validation
* Does the application accept user input that is later viewable or returned to the user within a HTTP response?
* Verify a sampling of input and output locations to ensure user supplied content is properly encoded in the * response
* Does the application accept rich user content?
* Is HTML Purifier / AntiSamy / Bleach / Equivalent being used?

## Input Encoding
* Verify that the application rejects invalid encoding (e.g. UTF-7 encoded content submitted in a UTF-8 request)
* Verify that the application rejects double encoded data, or properly decodes user input before applying * validation or sanitization code

## Output Encoding
Does the application send any untrusted data to the user's browser?
Verify that robust input validation is in place
Verify that all user controlled data is appropriately encoded; this is context dependent:
HTML element content - the data must be HTML encoded
HTML attributes - the data must be HTML attribute encoded
HTML style attributes:
data must only be placed into property values
the value must not contain 'expression'
the value must be CSS escaped
* URLs - the scheme must be whitelisted, the URL must be URL escaped
* Script - data must only be placed in quoted values and must be script encoded
* Verify that all escaping and encoding routines escape / encode by default and have a whitelist for 'allowed' * characters
* Does the application send any untrusted data to a SQL database?
* Verify robust input validation is in place
* Verify that, if available on the target platform, only parameterized SQL queries are used:
* Should parameterized queries not be available, ensure that database platform specific escaping is performed on * all untrusted data.
* Does the application invoke any OS commands?
* Verify that, where possible, user input is not sent to the OS at all
### If user data is sent to the OS:
* Verify that robust input validation is in place
* Verify that a robust escaping routine is in place to ensure special characters don't get to the command interpreter. Any escaping routine will need to be OS specific.

## Cross-Domain
* Does every state change require a CSRF Token?
* Verify that the same request without token will not succeed
* Verify that changing the HTTP method verb will be rejected
* Verify that CSRF tokens are unique per user random contain enough entropy to be unpredictable in a hidden field for form-elements

## Cross-Framing / Clickjacking
* Verify that X-Frame-Options is set to DENY or SAMEDOMAIN

## Third-Pary Scripts
* Verify that JavaScript from third party is locally hosted
* Verify that this script is reviewed
* Third-Party Code Snippets (Tweet this, Like This etc.)
* Verify that the whole communication is using HTTPS
* Verify that authenticated content is only presented using HTTPS
* Verify that simply loading said snippets does not perform requests to the third party (Privacy)

## OAUTH
* Verify that the initial form and further traffic is sent only via HTTPS

## Secure Transmission
* Does the web application support authenticated sessions?
* Verify all points from the login page to logout are served over HTTPS
* If the application handles its own logins:
* Verify that any login pages are served over HTTPS
* Verify that any login pages POST login data HTTPS
* Verify that all resources for HTTPS pages are also served over HTTPS
* Verify for all pages served over HTTPS (detailed above) that the resource is not also accessible over HTTP
* Verify the application uses STS headers
* Does the application use a thick client for access instead of a client browser?
* Verify that invalid certificates are appropriately rejected
* Verify that user supplied credentials are not insecurely stored on the client device.
### Verify the following, see [this SSL guide for more info](https://www.owasp.org/index.php/Testing_for_SSL-TLS_(OWASP-CM-001) )
* SSLv3 or TLS only - no SSLv2
* Check for SSL renegotiation bug
* Verify that no connections <128 bit are allowed
* Verify that no Export-strength algorithms are enabled on the server

## Content-Security Policy
### If the website is already using CSP
* Verify that the policy is appropriately scoped and restrictive
* Verify that the policy is present and working
* Verify that not everything is whitelisted
* Verify that CSP violations will lead to a report in staging/development mode and that these reports will be * reviewed
* Verfiy that CSP violations will lead to a block in production mode
* Verfiy that the whitelisted sites for static content (like JavaScript, CSS, Images, Fonts) do not generate * dynamic content, which might be subject to misuse.  If the website is not, but plans to do so verify that * contents like CSS and JavaScript are not inline
* Verify that CSS, JavaScript, Images, Fonts are hosted on a specific domain which gives out static content only

## Log Injection
* Verify that no string formatting functions are invoked after integration of user controlled data
* Verify that user controlled data is sanitized or passed through an explicit whitelist
* Verify that binary data is encoded in a text format such as Base64

## Verify that these events are logged
* Access Denied
* Admin Account Password Reset Request
* Admin Account Password change
* New admin account created

## Admin login pages
Bruteforcing the authentication parameters is blocked by one of the following methods
Admin login only accessible via SSL-VPN

## Account lockout
* acccess to admin login restricted to a whitelisted IP
* verify that 5 failed logins requires the user to solve a captcha
* Verify that web pages for login and admin are accessible only via HTTPS
* Verify that the Session cookie set to httponly and secure

## Uploads
### General uploads
* Verify that filenames are generated randomly via a process that will not result in path control characters, and * do not contain any user input
* Make sure all OS calls are made in a command-safe way, such as the following:
* Avoids the use of the interpreter entirely, or provides a parameterized interface
* Verify that APIs which appear parameterized don't allow injection under the hood

### White-list input
* Least preferable - escape input. Ref implementation: http://owasp-esapi-java.googlecode.* com/svn/trunk_doc/latest/org/owasp/esapi/Encoder.html
* Verify maximum file size is limited
* Verify that only the expected file types are working
* Verify that only a white list of known extensions are accepted
* Verify that a library such as libmagic is used to analyze the contents of files to match binary file formats with * approved file formats
* Verify that the files are served from a different domain
* Verify that platform sensitive formats (such as Python pickle) are not processed using unsafe API that could * result in the file being processed
* Verify that files uploaded cannot be invoked as scripts on the server (e.g. python, php, javascript, etc)

### Verify that images are
* Read
* Validated
* Test with oversized images, overly large dimensions, or bogus files
* Filename/minetype should be tested to verify matching file content
* Stripped of metadata (i.e. EXIF, XMP, IIM, etc - see http://en.wikipedia.org/wiki/Metadata#Photographs)
* Written back to disk

### Archives
* Verify that decompressed maximum size is limited
* Verify that file extension and detected filetype match
* For structural requirements (e.g. AddOns): Verify file hierarchy
* Verify that password protected or encrypted archives are rejected
* Verify that nested archives are rejected

## Error handling
* Verify that error pages (e.g. 404 and 500) do not contain sensitive information (path, system status or setup * information, debug messages)
* Verify that global debug mode is disabled
* Verify that user input in error messages is correctly encoded (XSS) and newlines are not written to text files as is.


## Recommended Reading & References
[The Tangled Web: A Guide to Securing Web Applications](https://anawesomelink.com)
Mozilla: ](https://wiki.mozilla.org/WebAppSec/Web_Security_Verification)
