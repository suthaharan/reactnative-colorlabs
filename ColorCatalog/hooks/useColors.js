import React, {useState, useEffect} from "react";
import { generate } from "shortid";
import  AsyncStorage from "@react-native-async-storage/async-storage";

export const useColors = () => {

  const [colors, setColors] = useState([]);

    //Load colors
    useEffect(() => {
        if(colors.length) return;
        loadColors();
    }, []);

    //Save colors
    useEffect(() => {
        AsyncStorage.setItem("@ColorListStore:Colors", JSON.stringify(colors));
    }, [colors]);

    const loadColors = async() => {
        const colorData = await AsyncStorage.getItem("@ColorListStore:Colors");
        if(colorData){
            const colors = JSON.parse(colorData);
            setColors(colors);
        }
    }

    const addColor = color => {
        const newColor = {id: generate(), color};
        setColors([newColor, ...colors]);
    }

    return {colors, addColor}
}