#!/usr/bin/env bash

# If CI is for an iOS build then sort out cocoapods-keys
# by running pod install to generate the keys
if [ $OS_TYPE = "iOS" ];
then
  echo "Running iOS pre-build to generate cocoapods-keys"
  gem install cocoapods-keys
  cd ios && pod install
else
  echo "Running Android pre-build script"
fi
