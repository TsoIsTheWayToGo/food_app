for icon list: https://expo.github.io/vector-icons/
for icon github: https://github.com/expo/vector-icons

React Navigation Fix
updated 2-9-2020

React Navigation has recently released a major update to v5 with breaking changes. We will not be using this version and will instead continue to use the current stable v4 release (As of now at v4.1.1)

Installation
1. Install React Navigation

npm install react-navigation

2. Install Dependencies

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

3. Install React Navigation Stack

npm install react-navigation-stack @react-native-community/masked-view

4. Start the app and clear cache with npm start -c

Errors?
If you are still seeing errors and complaints about packages, do the following:

1. rm -r node_modules

2. rm package-lock.json

3. expo upgrade

4. npm start -c

Update Imports
Our imports in the upcoming lecture will now look like this:

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



Create
Read
Update
Destroy