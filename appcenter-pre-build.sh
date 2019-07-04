#!/usr/bin/env bash

# echo "GoogleMapsiOSKey=$GoogleMapsiOSKey" > $APPCENTER_SOURCE_DIRECTORY/ios/.env

# If CI is for an iOS build then sort out cocoapods-keys
# by running pod install to generate the keys
if [ "$OS_TYPE" != "iOS" ];
then
  gem install cocoapods-keys
  cd ios && pod install
fi
