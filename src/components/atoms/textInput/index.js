import React, {useState} from 'react';
import {StyleSheet, TextInput as RNTextInput} from 'react-native';
import theme from '../../../styles/theme';

export const TextInput = props => {
  const {borderRadi, border, onChangeText, placeholder} = props;

  const [text, setText] = useState('');

  const styles = getStyles(borderRadi, border);

  return (
    <RNTextInput
      style={styles.textInput}
      onChangeText={value => {
        setText(text);
        onChangeText(value);
      }}
      value={text}
      placeholder={placeholder}
      placeholderStyle={theme.typography.font.primaryFont}
    />
  );
};

const getStyles = (borderRadi, border) =>
  StyleSheet.create({
    textInput: {
      borderRadius: +borderRadi || 8,
      margin: 12,
      padding: 10,
      textAlign: 'center',
      height: 45,
      width: '93%',
      borderWidth: border ? 1 : 0,
      backgroundColor: theme.palette.neutral.white,
      borderColor: border,
    },
  });
