#!/usr/bin/env bash

if [ -e $APPCENTER_SOURCE_DIRECTORY/index.js ]; then
  echo "This is the correct directory"
else
  echo "Oh where am I then?"
fi

# Generate env.json using App Center Environment variables
echo "{\"uri\":\"$DEV_ENV_GRAPHQL_URI\",\"hasura_access_key\":\"$DEV_ENV_ACCESS_SECRET\"}" > $APPCENTER_SOURCE_DIRECTORY/env.json

cat $APPCENTER_SOURCE_DIRECTORY/env.json