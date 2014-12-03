# Development Environment

## Environment variables
* non-sensitive configuration should be committed to github
* default configuration should reflect local dev environment
* use environment matrix on travis to test/deploy different builds
* configuration should be documented in docs

## How do we manage external dependencies?

* All major services should be deployed on staging with CORS enabled/all origins enabled
* Front end apps should be run without running any dependencies
* Services that depend on other services should be able to use staging/dev instances: how do we generate access keys?

## Build system
* use NPM for dependencies (front end and back end)
* Gulp

## Database
* schema changes - can we use migrations?
* can we automate this with build system?

## Docs
* baseline?
