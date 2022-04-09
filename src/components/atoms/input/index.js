import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import theme from "../../../styles/theme";

export const  InputBox= (prop) => {

    const [text,setText]=useState("")

  return (
      <TextInput
        style={[styles.input,{borderColor:prop.border}]}
        onChangeText={(text)=>{
            setText(text);
            prop.onChangeText(text)
        }}
        value={text}
        placeholder={prop.placeholder} 
        placeholderStyle={theme.typography.font.primaryFont}
      />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderRadius:8,
    margin: 12,
    padding: 10,
    textAlign: 'center',
    height: 45,
    width: '93%',
    borderWidth:1,
    backgroundColor:theme.palette.neutral.white,
  },
  
});