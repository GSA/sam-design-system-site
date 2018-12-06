#!/bin/sh
# changes sam-ui-elements entry from:
# "@gsa-sam/sam-ui-elements": "0.3.0" to
# "@gsa-sam/sam-ui-elements": "https://artifactory.helix.gsa.gov/artifactory/api/npm/ART-001-GP-SFE-npm/@gsa-sam/sam-ui-elements/-/@gsa-sam/sam-ui-elements-0.3.0.tgz\""


echo "update sam-ui-elements entry for build"

# output to view in build
sed "s#\"@gsa-sam/sam-ui-elements\"\: \"\([[:digit:]\+]*.[[:digit:]\+]*.[[:digit:]\+]*\)\"#\"@gsa-sam/sam-ui-elements\"\: \"https://artifactory.helix.gsa.gov/artifactory/api/npm/ART-001-GP-SFE-npm/@gsa-sam/sam-ui-elements/-/@gsa-sam/sam-ui-elements-\1.tgz\"#g" ./package.json

# update package.json
sed -i "s#\"@gsa-sam/sam-ui-elements\"\: \"\([[:digit:]\+]*.[[:digit:]\+]*.[[:digit:]\+]*\)\"#\"@gsa-sam/sam-ui-elements\"\: \"https://artifactory.helix.gsa.gov/artifactory/api/npm/ART-001-GP-SFE-npm/@gsa-sam/sam-ui-elements/-/@gsa-sam/sam-ui-elements-\1.tgz\"#g" ./package.json