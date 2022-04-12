import React, {useState} from 'react';
import {StyleSheet, TextInput as RNTextInput} from 'react-native';
import theme from '../../../styles/theme';

export const TextInput = props => {
  const {borderRadi, border, onChangeText, placeholder, onSubmitEditing} =
    props;

  const [text, setText] = useState('');

  const styles = getStyles(borderRadi, border);

  return (
    <RNTextInput
      style={styles.textInput}
      onChangeText={value => {
        setText(value);
        onChangeText(value);
      }}
      value={text}
      placeholder={placeholder}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

const getStyles = (borderRadi, border) =>
  StyleSheet.create({
    textInput: {
      borderRadius: +borderRadi || 8,
      margin: 12,
      padding: 10,
      height: 45,
      width: '93%',
      borderWidth: border ? 1 : 0,
      backgroundColor: theme.palette.neutral.white,
      borderColor: border,
    },
  });
