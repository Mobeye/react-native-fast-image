# Development

For now this uses a modified cli to work around issues with symlinked packages.

This is how to start the example app so you can test code with it.

```bash
# In the repo root folder.
# You may want to comment the react and react-native dependencies in package.json

# Install dependencies.
yarn

# Build the package.
yarn build
tsc --declaration --jsx react-native

# Link module.
yarn link

# Move to example folder.
cd ReactNativeFastImageExample

# Install dependencies.
yarn
cd ios && pod install && cd -

# Link module.
yarn link react-native-fast-image

# Start packager.
yarn start

# Start the iOS app.
yarn react-native run-ios
# Start the android app.
yarn react-native run-android
# You will need to re-run those commands to re-compile native code.
```