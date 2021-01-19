# How we plan large projects

projects that take 2 or more sprints require:

- setting up a dedicated slack channel for all participants to join, to ensure common knowledge
- the project is tracked by way of an initial [spkie](https://en.wikipedia.org/wiki/Spike_(software_development)) to determine all the work involved,
- this is turned into concrete tasks, with issues filed for each task, and each issue's load estimated in terms of rough hours required to do the work.
- we set up a feature branch for the work so that development doesn't hold up, or potentially break, the live site, with a dedicated heroku app so that we auto-deploy feature branch work.
- three deadlines are established:
  1. a go-live deadline, for when the work is done and made live
  2. a deliverables deadline, corresponding to a soft-luanch date, by which all the work is done
  3. a confidence deadline, which is used to guage whether the deliverables deadline can be met. There should always be enough time between the confidence deadline and deliverables deadline that a decision to postpone can safely be made.
- ... more text goes here...
