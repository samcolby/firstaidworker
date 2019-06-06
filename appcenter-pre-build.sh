#!/usr/bin/env bash

# Generate env.json using App Center Environment variables
echo "$APPCENTER_SOURCE_DIRECTORY/env.json"
echo "$DEV_ENV_JSON" > $APPCENTER_SOURCE_DIRECTORY/env.json