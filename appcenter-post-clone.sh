#!/usr/bin/env bash

# Generate env.json using App Center Environment variables

json="{\"api_uri\":\"$DEV_API_URI\","
json="$json\"api_access_key_header\":\"$DEV_API_ACCESS_KEY_HEADER\","
json="$json\"api_access_key\":\"$DEV_API_ACCESS_KEY\","
json="$json\"static_maps_key\":\"$DEV_STATIC_MAPS_KEY\","
json="$json\"android_maps_key\":\"$DEV_ANDROID_MAPS_KEY\"}"

echo $json > $APPCENTER_SOURCE_DIRECTORY/env.json

