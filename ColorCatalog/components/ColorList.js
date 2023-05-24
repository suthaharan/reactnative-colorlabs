import React, {useState} from "react";
import { Text, StyleSheet, FlatList  } from 'react-native';
import ColorButton from "./ColorButton";
import ColorForm from "./ColorForm";
import {useColors} from "../hooks/useColors";

export default function ColorList({navigation}) {

  const [backgroundColor, setBackgroundColor] = useState("white");
  const {colors, addColor} = useColors();

  return (
    <>
      <Text onPress={() => navigation.navigate("Users")}>Users</Text>
      <ColorForm onNewColor={addColor}/>
      <FlatList style={[styles.container]} 
        data={colors}
        renderItem={({item}) => {
          return (
            <ColorButton 
                key={item.id} 
                backgroundColor={item.color} 
                onPress={() => navigation.navigate("Details", {color: item.color})} />
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