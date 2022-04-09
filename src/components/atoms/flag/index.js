import React from 'react';
import {View, StyleSheet} from 'react-native';
import theme from '../../../styles/theme';
import {ResponsiveSize} from '../../../utility';
import {Paragraph} from '../text/paragraph';

export const Flag = props => {
  const {value} = props;

  return (
    <View style={styles.container}>
      <Paragraph styles={styles.flagValue}>{value}</Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: ResponsiveSize(20),
    height: ResponsiveSize(20),
    // borderRadius: ResponsiveSize(20 / 2),
    backgroundColor: theme.palette.neutral.doggerBlue,
  },
  flagValue: {
    textAlign: 'center',
  },
});
