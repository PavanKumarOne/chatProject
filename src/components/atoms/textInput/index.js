import React, {useState} from 'react';
import {View, StyleSheet, TextInput as RNTextInput} from 'react-native';
import theme from '../../../styles/theme';

export const TextInput = prop => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <RNTextInput
        style={styles.input}
        onChangeText={text => {
          setText(text);
          prop.onChangeText(text);
        }}
        value={text}
        placeholder={prop.placeholder}
        placeholderStyle={theme.typography.font.primaryFont}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderRadius: 8,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
    height: 45,
    width: '93%',
    backgroundColor: theme.palette.neutral.white,
    borderColor: theme.palette.neutral.white,
  },
  container: {
    backgroundColor: theme.palette.borderColors.border01,
  },
});
