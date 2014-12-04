# Engineering Discussions

## Dependencies:
- Ruby 2.1.0 (probably managed by [rbenv](https://github.com/sstephenson/rbenv)
or rvm)
- Node > 0.10.0
- [Bundler](http://bundler.io)

## Install:

```bash
npm install
```

## Run:

```bash
npm start
```

## Test: (there are no tests yet)

```bash
grunt check
```

## Deploy:

As long as the build is passing, travis is deploying [![build](https://travis-ci.org/MozillaFoundation/MoFo-Engineering-Handbook.svg)](https://travis-ci.org/MozillaFoundation/MoFo-Engineering-Handbook)

## To add a chapter

Just make sure you have "handbook" in your array of categories in your yaml front matter. (see _posts/mobile-first for an example)

## Todo:

- [ ] Set up Travis so this works: [![build](https://travis-ci.org/MozillaFoundation/MoFo-Engineering-Handbook.svg)](https://travis-ci.org/MozillaFoundation/MoFo-Engineering-Handbook)
- [ ] Fix livereload so that works
