### React Native with Expo

##### References
* React - https://reactnative.dev/docs/getting-started
* Expo - https://docs.expo.dev/
* Snack tool - https://snack.expo.dev/?platform=android


##### React Native
* React is declarative
* React Native uses React for Android and iOS devices
* React components are javascript functions
* React Native has ton of UI components
* React Native bridge enables asynchronous communication between Javascript thread and Native thread. Android bridge/iOS bridge facilitates multiple devices.
* React Native doesn't work like other hybrid javascript frameworks
  * Web apps were built with 100% javascript and webviews
  * Webview is a component that works like a mini web browser right within your application. Webkit needs to be installed along with code base.
  * Javascript and html cannot keep up with user interaction and the code might be jumpy.
  * RN dynamically updates the application. RN applications can update themselves when user loads and reloads them. Rapidly enables fixing bugs.
  * RN uses native components (no webkit)
  * RN is multi-threaded
  * Native components run on their own thread. Bridge enables asynchronous communication.
* Expo
  * With React Native, the app building process is made simpler
  * RN applications are native applications.
  * Expo platform runs on Lime with worker processes ready to build the apps. Consists of 4 primary dev tools
    * Client - Client application on the device to debug application
    * CLI - command line to create project, create code, test, publish projects, send build to expo servers
    * Snack - in-browser IDE to prototype, develop, sharing react native code
    * SDK - entire kit of components for use with RN
  * Expo provides flexibility. You can eject expo and get RN code with CLI.
* Installing expo client on the phone
  * Install from https://expo.io
  * You need to create an account
* Creating an app using expo snack
  * Open expo snack on expo.io
  * When choosing snack, you get default code
  * In preview menu, you can the app getting rendered
  * You can also view the app on ios/android emulator
```
import React from "react";
import { Text, View, StyleSheet } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.paragraph, styles.text]}>
        Hello World!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#fe1'
  },
  text:{
    fontSize: 28
  }
});

```
* React native project locally using expo cli
```
$ npx expo 
$ npx create-expo-app ColorCatalog
$ cd ColorCatalog
$ npm start (starts expo application in port 19000 in local environment)

```
* Scan the QR code from. Expo gives a DNS name to the application via a tunnel and you can view the app in the mobile phone.
* The metro bundler UI has been deprecated and not even bundled with expo-cli@6.0.0 onwards.
* To enable web based view of the app, the following libraries need to be installed. Then you can press "w" to open in web view (or issue the command npm run web)
```
npm install react-native-web@~0.18.10, react-dom@18.2.0, @expo/webpack-config@^18.0.1
```
* Simple say hello app to write console.log messages (edit App.js)
```
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const handlePress=()=>{
    console.log('Hello!')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello World!</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Say Hello!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  heading:{
    fontSize:28,
    fontWeight:"700"
  },  
  container: {
    flex: 1,
    backgroundColor: '#fe1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    marginTop:50,
    borderRadius:10,
    padding:10,
    backgroundColor: 'crimson',
    textColor: 'white',
    width:120,
  },
  buttonText:{
    color:'white',
    fontSize:20,
    alignSelf:'center',
    fontWeight:'500'
  }
});
```

##### Components and API's
* Native components
  * Comes with set of UI components
  * We were using View, Text components
  * Use ActivityIndicator
* Native API's
  * API's is an acronymn giving access to underlying features of the application/phone
  * ActivityIndicator, Button, ProgressBar, Alert, 
* Layouts
  * Flex influences the layout in RN
  * Default direction is column and you will use flexDirection: "row"
  * "flex" attributes tells the flex element how to fill up the space. Flex 1 evenly distributes the element across the row
* Image component
