import React, {useState} from 'react';
import {StyleSheet, TextInput as RNTextInput} from 'react-native';
import theme from '../../../styles/theme';

export const TextInput = prop => {
  const [text, setText] = useState('');
  const {style = {}} = prop;

  return (
    <RNTextInput
      style={[styles.input, style]}
      onChangeText={value => {
        setText(value);
        prop.onChangeText(value);
      }}
      value={text}
      placeholder={prop.placeholder}
      placeholderStyle={theme.typography.font.primaryFont}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderRadius: 8,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
    width: '93%',
    backgroundColor: theme.palette.neutral.white,
    borderColor: theme.palette.neutral.white,
  },
});
