# Development Environment

## Environment variables
* non-sensitive configuration should be committed to github
* default configuration should reflect local dev environment
* configuration should be documented in docs
* interactive prompt? is that overkill?
* AWS: automate testing of credentials
* format standards:
    * types?
    * `EXPORT`
    * error reporting

## How do we manage external dependencies?
* All major services should be deployed on staging with CORS enabled/all origins enabled
* Front end apps should be run without running any dependencies
* Services that depend on other services should be able to use staging/dev instances: how do we generate access keys?

## Front end environment
* use environment matrix on travis to test/deploy different builds

## Database
* schema changes - can we use migrations?
* can we automate this with build system?

## Docs
* baseline?

## Docker
* when we move to gulp, we can use https://www.docker.com/
* stable/unstable tests
