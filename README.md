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

##### Custom hook
* React hooks isolates presentation from functionality
```
import React, {useState} from "react";
import { StyleSheet, FlatList  } from 'react-native';
import ColorButton from "./components/ColorButton";
import ColorForm from "./components/ColorForm";
import { generate } from "shortid";

const useColors = () => {
  const [colors, setColors] = useState([]);

  const addColor = color => {
    const newColor = {id: generate(), color};
    setColors([newColor, ...colors]);
  }

  return {colors, addColor}
}

export default function App() {

  const [backgroundColor, setBackgroundColor] = useState("white");
  const {colors, addColor} = useColors();

  return (
    <>
      <ColorForm onNewColor={addColor}/>
      <FlatList style={[styles.container, {backgroundColor}]} 
        data={colors}
        renderItem={({item}) => {
          return (
            <ColorButton key={item.id} backgroundColor={item.color} onPress={setBackgroundColor} />
          );
        }}
        />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
});

```

##### Async Storage
* Allows data storage in local phone
* Async storage has been removed from react native core. Needs import from @react-native-async-storage/async-storage
```
npx expo install @react-native-async-storage/async-storage@1.17.11
```

##### React Navigation
* Visit https://reactnavigation.org/docs/getting-started/

```
$ npm install @react-navigation/native @react-navigation/stack
$ npx expo install react-native-screens react-native-safe-area-context

```
* To get color details, install npm package color
```
$ npm install -S color
```


##### Publishing app
* Reference: https://pagepro.co/blog/publishing-expo-react-native-app-to-ios-and-android/
* Most of the application information is there in the javascript bundle
* Modifying icon and splash in the app.json which has important configuration details
* To publish to expo, stop  the app and restart the app to see the changes
```
$ npm install -g expo-cli
$ expo build
$ expo publish

This will give a URL where the files are published. The URL will have QR code which you can scan to run the app
```


* Open the URL from the build so you can test the app.
* When publishing for iOS devices
```
Edit app.json to add in bundleIdentifier, buildNumber

$ expo build:ios (to build the app in their own servers)
$ expo build:status

Download the application as a zip file and then extract it (tar -xvzf ColorCatalog.app). 

$ xcrun simctl install booted ColorCatalog.app (booted tells the app to run in the simulator that is currently running)

Now you can distribute this app.
```

* Building the APP in ANDROID
```
$ expo build:android

You can monitor the progress of the build using the URL given

To play the app, drag and drop the apk file in the simulator.
```

* Ejecting the Expo app (to gthe ios and android source files)
```
$ expo eject
```