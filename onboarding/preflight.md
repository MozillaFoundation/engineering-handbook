# Preflight

*or "how I learned to stop worrying and love the landing approach"*

Part of preflight is automated testing, but this cannot catch everything, and cannot catch policy. As such, this preflight documentation explains what preflight checks are to happen, with notes on which parts can be taken care of by automation.

## Prior to Starting Your Patch Work

Make sure you don't do more work than you need to. That doesn't necessarily mean "write as little code as possible": more important than that if you have a patch you think is going to be big, split it up into a few small patches that can land one after another instead of as one giant patch. Small patches are easier to write, test, and review, and lets us move faster than by being blocked on a single patch for days, then handing it off for hours or an entire day of review! Filing patches that lay the groundwork for the final functionality is perfectly acceptable, as long as you track the splitting up through the appropriate issue tracking system. Something that's a lot of work is also prone to compound mistakes; patch early, patch often, catch mistakes, book steady progress.

## Prior to Filing a Pull Request

### Automated Testing and Validation

Prior to filing a PR, make sure you know your code works, and conforms to our style guide. Don't like our style? Go nuts and modify your editor to display your preferred style using whatever plugins to your editor allow for this! But be aware that all code must be project-profile-conformant, and our

- code style (jsprofile etc)
- code linting
- code can get into a persistent running state without errors
- unit tests pass
- mocha/phantom/slimer/etc. tests pass

Essentially, all of this should run through an `npm test` (this command may change in the future)

### Manual Testing

In addition to automated testing and validation, your patches may involve code changes that require additional manual testing. You should make sure that:

- code runs without
	- server errors during use
	- browser console errors during use
- code comes with
	- unit tests for code written (note: real unit tests, not "one test per function")
		- **note**: these can also be curl/etc test for API endpoints
	- user testing script if UI/UX changed in any way
- if there are test failures due to changed code:
	- update tests to reflect the new code
- If you've made UI changes, *check with a Designer*. We want to make sure that all patches that touch the UI/UX are aligned with the work the design team does. Run through your idea with a designer so you can quickly spot easy UI fixes before you make your PR, or if you file your PR as a "work in progress" PR.

This is the bare minimum expected in terms of due diligence before filing your patch.

## Additional Tests That Your Reviewer Will Also Be Checking

When you file a patch, the following things have ideally already been checked by you prior to filing your PR. However, even if you have, your reviewer will be checking these things too, because that's what review is for:

- there are no hardcoded user-facing strings in the code. Instead, they're all localised strings.
- updated environment values work
- README.md has been updated to reflect any changes
- CHANGELOG has been updated when:
	- dependencies have changed
	- a provided API changed
	- UI or UX changed
	- environment settings changed
- Check if any of the items in the [Mozilla Security Checklist](https://wiki.mozilla.org/WebAppSec/Secure_Coding_QA_Checklist) apply

### If Infrastructure, Dependencies or API Endpoints Change...

If your patches change how we interact with our infrastructure, or we use updated/changed dependencies, or we change public-facing API endpoints (these include endpoints only we end up using!), these changes need to be tested. Some of these tests aren't just to ensure things work on your production server(s) but also on the devices that our contributors use.

- verify it works on the various operating systems we target
	- ideally, we have automated testing that targets *n*x, OSX, as well as Windows
	- Be particularly careful with updating dependencies or using scripting commands that are OS-specific, or assume they can be easily built form source.
- verify the app doesn't stop working when newly introduced API service endpoints are unavailable.

(ideally this can be automated)

# Big Patches are a Team Effort

The best patches are small, but sometimes you have to write a big patch. Rather than simply dumping a large set of changes or a fundamental change in code on someone and expecting them to understand what you changed, we recommend doing the review as a pair programming exercise. This can be 1-on-1, through video conference, etc. But it should be interactive and real time.

As rough guideline, if your patch is over 500 lines of codes changed, contact your reviewer and schedule a cooperative review. The number is loose: if you have 499 or 400 or even 300 lines of modified or new code, it's probably a good idea to reach out and ask whether cooperative review is desired or whether your reviewer is up to speed on your code enough to not feel that's warranted.

## Post-merge Testing

- run through any and all QA scripts on the test server
	- **note**: Things without scripts should ideally get one
- If this passes, "tag it" as a deployable release

## Stage Testing

- Build and verify staging works.
	- verify all environment variables are set in accordance with what the CHANGELOG states changed
	- verify all dependencies build
- If it does, push to prod.

## Production Push

- Verify all environment variables are set in accordance with what the CHANGELOG states changed
- This is it. This is where real people find bugs we missed.

# Hotfixing

TODO: https://github.com/MozillaFoundation/MoFo-Engineering-Handbook/issues/45
