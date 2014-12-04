# Development Environment

## Environment variables
* npm start / npm test all apps
* non-sensitive configuration should be committed to github
* default configuration should reflect local dev environment +
   * attempt to connect to database
* configuration should be documented in docs
* AWS: standard naming conventions
* format standards:
    * types?
    * linting?
    * error reporting

## How do we manage external dependencies?
* All major services should be deployed on staging with CORS enabled/all origins enabled
* Front end apps should be run without running any dependencies
* Services that depend on other services should be able to use staging/dev instances: how do we generate access keys?
* justify native dependencies - contributor cost

## Front end environment
* use environment matrix on travis to test/deploy different builds

## Database
* schema changes - can we use migrations?
* can we automate this with build system?

## Docs
* baseline?

## Docker
* use https://www.docker.com to run services locally
* stable/unstable tests
