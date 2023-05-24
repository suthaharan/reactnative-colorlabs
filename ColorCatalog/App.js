import React, {useState} from "react";
import { StyleSheet, FlatList  } from 'react-native';
import ColorButton from "./components/ColorButton";
import ColorForm from "./components/ColorForm";
import { generate } from "shortid";

export default function App() {

  const [backgroundColor, setBackgroundColor] = useState("white");
  const [colors, setColors] = useState([]);

  const addColor = color => {
    const newColor = {id: generate(), color};
    setColors([newColor, ...colors]);
  }

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