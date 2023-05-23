import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableHighlight  } from 'react-native';


export default function App() {

  const [backgroundColor, setBackgroundColor] = useState("blue");

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <TouchableHighlight style={styles.button} onPress={() => setBackgroundColor("yellow")} underlayColor="orange">
        <View style={styles.row}>
          <View style={[styles.sample, {backgroundColor: "yellow"}]}/>
          <Text style={styles.buttonText}>Yellow</Text>
        </View>
      </TouchableHighlight>
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