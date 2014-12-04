# Development Environment

## Environment variables
* start all apps with `npm start`; test all apps with `npm test`
* use habitat
* non-sensitive configuration should be committed to github
* default configuration should reflect local dev environment and work out of the box
* databases should be configured to connect to default ports/localhost
* instructions must be included for native dependencies
    * try to reduce native dependencies: always be aware of the cost to contributors
* configuration should be documented in docs
* format standards:
    * AWS bucket names, secrets, ids, etc.
    * types
    * `EXPORT` v.s.
    * error reporting

## How do we manage external dependencies?
* All major services should be deployed on staging with CORS enabled/all origins enabled/anyone can generate access keys
    * stable version
    * bleeding-edge version (master)
* Front end apps should run without running any service dependencies
* Services that depend on other services should not be tightly coupled. We should be able to integrate with other remote staging/dev instances via access keys
    * **What is our interim solution to the cookie/same-origin problem?**

## Front end environment
* use environment matrix on travis to test/deploy different builds

## Database
* schema changes - include migrations. include instructions
* can we automate this with build system?

## Docker
* when we can bundle a docker file with services that need to be run locally or installed easily on remove servers https://www.docker.com
