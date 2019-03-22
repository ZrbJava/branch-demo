
Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@ZrbJava Sign out
35
3,000 307 conventional-changelog/conventional-changelog
 Code  Issues 75  Pull requests 14  Insights
conventional-changelog/packages/conventional-changelog-cli/
@bcoe
bcoe Publish  …
Latest commit 97ad96f  on 15 Feb
Type	Name	Latest commit message	Commit time
..		
test	fix: Upgrade to Lerna 3, fix Node.js v11 error (#385)	5 months ago
CHANGELOG.md	Publish	a month ago
LICENSE	feat(init): extract cli from conventional-changelog	2 years ago
README.md	docs(README): fix typo	7 months ago
cli.js	fix(cli): pass `--tag-prefix` option to core (#345)	7 months ago
package.json	Publish	a month ago
 README.md
conventional-changelog-cli
NPM version Build Status Dependency Status Coverage percentage

Generate a changelog from git metadata

Changelog?

Note You don't have to use the angular commit convention. For the best result of the tool to tokenize you commit and produce flexible output, it's recommended to use a commit convention.

Quick start
$ npm install -g conventional-changelog-cli
$ cd my-project
$ conventional-changelog -p angular -i CHANGELOG.md -s
This will not overwrite any previous changelog. The above generates a changelog based on commits since the last semver tag that match the pattern of a "Feature", "Fix", "Performance Improvement" or "Breaking Changes".

If you first time use this tool and want to generate all previous changelog, you could do

$ conventional-changelog -p angular -i CHANGELOG.md -s -r 0
This will overwrite any previous changelog if exist.

All available command line parameters can be listed using CLI: conventional-changelog --help.

Hint: You can alias your command or add it to your package.json. EG: "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0".

To fully customize the tool, please checkout conventional-changelog and conventional-changelog-core docs. You can find more details there. Note: config here can work with preset, which is different than options.config in conventional-changelog.

Example output
https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog/CHANGELOG.md
https://github.com/karma-runner/karma/blob/master/CHANGELOG.md
https://github.com/btford/grunt-conventional-changelog/blob/master/CHANGELOG.md
Recommended workflow
Make changes
Commit those changes
Make sure Travis turns green
Bump version in package.json
conventionalChangelog
Commit package.json and CHANGELOG.md files
Tag
Push
The reason why you should commit and tag after conventionalChangelog is that the CHANGELOG should be included in the new release, hence gitRawCommitsOpts.from defaults to the latest semver tag.

With npm version
Using the npm scripts to our advantage with the following hooks:

{
  "scripts": {
    "version": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0 && git add CHANGELOG.md"
  }
}
You could follow the following workflow

Make changes
Commit those changes
Pull all the tags
Run the npm version [patch|minor|major] command
Push
You could optionally add a preversion script to package your project or running a full suit of test. And a postversion script to clean your system and push your release and tags.

By adding a .npmrc you could also automate your commit message and set your tag prefix as such:

tag-version-prefix=""
message="chore(release): %s :tada:"
Why
Used by AngularJS, JSHint and related projects.
Easy fully automate changelog generation. You could still add more points on top of it.
Ignoring reverted commits, templating with handlebars.js and links to references, etc. Open an issue if you want more reasonable features.
Intelligently setup defaults but yet fully configurable with presets of popular projects.
Everything internally or externally is pluggable.
A lot of tests and actively maintained.
Problems with github-changelog-generator or similar projects
Opinionated on how to write commits, issues or PRs.
No or partially support reference links.
Not system agnostic. Only support GitHub.
No template support. The output is mostly certain format of markdown.
No presets of popular commit message conventions.
Not modularized. Over the years modularization is proven to be the best practice.
No tests or coverage is too low. Program might be buggy.
Do not read your project's environment.
No or few task runner or build tool integrations.
Related
conventional-changelog - API of this module
standard-changelog - Similar to this module but only with angular convention
conventional-github-releaser - Make a new GitHub release from git metadata
conventional-recommended-bump - Get a recommended version bump based on conventional commits
conventional-commits-detector - Detect what commit message convention your repository is using
commitizen - Simple commit conventions for internet citizens.
angular-precommit - Pre commit with angular conventions
commitlint - Lint commit messages
License
MIT © Steve Mao

© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
