# strategy

Strategy app

by Tim Steele

## Development

Must have installed locally:

 - PostgreSQL
 - npm
 - ruby 2.0.0 (ideally with rvm)
 - git
 - JDK 1.7
 - cf (CloudFoundry command-line tools)

Initial set up:

```bash
./gradlew    # Install gradle
npm install  # Install node modules (karma, jasmine, bower, less, phantomjs)
bower install# Download jquery, angular...
bundle       # Install ruby tools (ciborg and hologram)
./scripts/reset_local_databases.sh  # Create PostgreSQL databases for dev and test
```

## Deployment

Deployment will be to an app called "Strategy" in a CloudFoundry space (a different space for each deployment environment).

Required env: see the manifest files.

Require services:

  - A PSQL instance called "strategy-psql"

### Staging Deployment

https://strategy-staging.cfapps.io

Deploys to the "staging" space in the "tbd" org on CloudFoundry.

Run `./scripts/deploy-staging.sh`

## Testing with IE9

 - Download VirtualBox https://www.virtualbox.org/wiki/Downloads
 - Download official IE9 test images
   ```bash
   curl -O -L "http://www.modern.ie/vmdownload?platform=mac&virtPlatform=virtualbox&browserOS=IE9-Win7&filename=VirtualBox/IE9_Win7/Mac/IE9.Win7.For.MacVirtualBox.part{1.sfx,2.rar,3.rar,4.rar}"
   ```
