import React, {useState, useRef} from 'react';
import {StyleSheet, View, TextInput, Button} from "react-native";

function ColorForm({onNewColor = f => f}) {
    const [inputValue, setValue ] = useState("");
    const input = useRef();

    //console.log(" -> ", inputValue);
    return (
        <View style={styles.container}>
            <TextInput 
                ref={input}
                style={styles.txtInput} 
                value={inputValue}
                autoCapitalize="none"
                onChangeText={setValue}
                placeholder='Enter a color ...'
                />
            <Button 
                title="Add" 
                onPress={ () => {
                    input.current.blur();
                    console.log(`Add value ${inputValue}`);
                    onNewColor(inputValue);
                    setValue("");
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white"
    },
    txtInput:{
        flex: 1,
        borderWidth: 2,
        fontSize: 20,
        margin: 4,
        borderRadius: 5,
        padding: 4
    }
  });

  export default ColorForm;