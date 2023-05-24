import React from "react";
import { StyleSheet, View, Text  } from 'react-native';
import Color from "color";


export default function ColorDetails({route}) {

    const {color: name} = route.params;
    const color = Color(name);
    const textColor = {fontSize: 30, color: color.negate().toString()};

  return (
   <View style={[styles.container, {backgroundColor: name }]}>
        <Text style={textColor}>Color Details: {name}</Text>
        <Text>{color.rgb().toString()}</Text>
        <Text>{color.hsl().toString()}</Text>
        <Text>{color.luminosity()}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
});