#!/usr/bin/env bash

if [ -e $APPCENTER_SOURCE_DIRECTORY/babel.config.js ]; then
  echo "This is the correct directory"
else
  echo "Oh where am I then?"
fi

# Generate env.json using App Center Environment variables
echo "$APPCENTER_SOURCE_DIRECTORY/env.json"
echo $DEV_ENV_JSON > $APPCENTER_SOURCE_DIRECTORY/env.json