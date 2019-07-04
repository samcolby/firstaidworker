#!/usr/bin/env bash

# echo "GoogleMapsiOSKey=$GoogleMapsiOSKey" > $APPCENTER_SOURCE_DIRECTORY/ios/.env

gem install cocoapods-keys

cd ios && pod keys generate

echo "The react native package is $APPCENTER_REACTNATIVE_PACKAGE"