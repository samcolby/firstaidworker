#!/usr/bin/env bash

# Generate env.json using App Center Environment variables
echo "{\"uri\":\"$DEV_ENV_GRAPHQL_URI\",\"hasura_access_key\":\"$DEV_ENV_ACCESS_SECRET\"}" > $APPCENTER_SOURCE_DIRECTORY/env.json
