# Backups

We rely on Heroku backups for all our sites hosted on Heroku (Foundation, Donate).

Every production Heroku database should be configured:

- at a `standard` tier or above
- with Continuous Protection enabled
- with a backup schedule in place
    - Check for active schedules with: `heroku pg:backups:schedules -a [app-name]`
    - Create a scheduled backup with `heroku pg:backups:schedule DATABASE_URL --at '02:00 UTC' -a [app-name]`

Note that when database resources are removed from Heroku, backups are removed with them.
For this reason, when destroying resources, we aim to copy the most recent snapshot to an S3 bucket.

1. `heroku pg:backups:capture [db-identifier] -a [app-name]`
2. `heroku pg:backups:download [backup-identifier] -a [app-name]`
3. Upload the downloaded file to the `mozilla-foundation-archive` bucket in the `mofo-ops` AWS account - don't forget to rename the file to something more descriptive.
