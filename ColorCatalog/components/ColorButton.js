import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight  } from 'react-native';



function ColorButton({backgroundColor, onPress = f => f}) {
  return (
    <TouchableHighlight style={styles.button} underlayColor="orange" onPress={() => onPress(backgroundColor)}>
        <View style={styles.row}>
          <View style={[styles.sample, {backgroundColor}]}/>
          <Text style={styles.buttonText}>{backgroundColor}</Text>
        </View>
    </TouchableHighlight>
  )
}


const styles = StyleSheet.create({
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

export default ColorButton