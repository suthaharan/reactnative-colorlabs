import React, {useState} from "react";
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Alert, Dimensions, Platform, Image, Button  } from 'react-native';
import * as Progress from 'react-native-progress';
import picPenguin from "./assets/penguin.png"
const {height, width} = Dimensions.get('window');

export default function App() {

  const [backgroundColor, setBackgroundColor] = useState("white");

  const handlePress=()=>{
    console.log(`Hello! Time now is ${new Date().toLocaleTimeString()}`);
    Alert.alert(`Hello! Time now is ${new Date().toLocaleTimeString()}`)
  }
  return (
    <View style={[styles.container, {backgroundColor}]}>
      {Platform.OS==="android" && <Progress.Bar progress={0.3} width={200} />}
      {Platform.OS==="ios" && <Progress.Bar progress={0.3} color="black"/>}
      <ActivityIndicator size="large" color="#fff"/>
      <Text style={styles.heading}>Hello World!</Text>
      
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Say Hello!</Text>
      </TouchableOpacity>
      <Text style={[styles.buttonText, styles.selectedText]}>Vanakkam</Text>
      <Text style={[styles.button, styles.buttonText]} onPress={() => setBackgroundColor("grey")}>Grey</Text>
      <Text style={[styles.button, styles.buttonText]} onPress={() => setBackgroundColor("red")} >Red</Text>
      <Text>OS: {Platform.OS}, Height: {height}, Width: {width}</Text>
      <Image style={styles.image} source={picPenguin} />
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
    paddingTop: 150
  },
  button:{
    marginTop:50,
    borderRadius:10,
    padding:10,
    backgroundColor: 'green',
    color: 'black',
    width:120,
  },
  buttonText:{
    color:'white',
    fontSize:20,
    alignSelf:'center',
    fontWeight:'500'
  },
  selectedText:{
    backgroundColor: 'white',
    color: 'green'
  },
  image:{
    resizeMode: "center",
    width: Dimensions.get("window").width-200,
    height: Dimensions.get("window").height-100
  }
});