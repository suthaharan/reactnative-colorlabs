import React, {useState} from "react";
import { StyleSheet, View  } from 'react-native';
import Color from "./components/ColorButton";

export default function App() {

  const [backgroundColor, setBackgroundColor] = useState("white");

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Color backgroundColor="red" onPress={setBackgroundColor}/>
      <Color backgroundColor="green" onPress={setBackgroundColor}/>
      <Color backgroundColor="blue" onPress={setBackgroundColor}/>
      <Color backgroundColor="purple" onPress={setBackgroundColor}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  button:{
    margin:10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "stretch",
    backgroundColor: "rgba(255, 255, 255, .8)"
  },
  buttonText:{
    fontSize: 30,
    textAlign: "center"
  },
  sample:{
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 5,
  },
  row:{
    flexDirection: "row",
    alignItems: "center"
  }
});