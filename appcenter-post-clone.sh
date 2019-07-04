#!/usr/bin/env bash

# Generate env.json using App Center Environment variables
echo "{\"api_uri\":\"$DEV_API_URI\",\"api_access_key_header\":\"$DEV_API_ACCESS_KEY_HEADER\",\"api_access_key\":\"$DEV_API_ACCESS_KEY\",\"static_maps_key\":\"$DEV_STATIC_MAPS_KEY\",\"android_maps_key\":\"$DEV_ANDROID_MAPS_KEY\"}" > $APPCENTER_SOURCE_DIRECTORY/env.json
