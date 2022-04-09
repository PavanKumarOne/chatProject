import React from 'react';
import {View, StyleSheet} from 'react-native';
import theme from '../../../styles/theme';
import {ResponsiveSize} from '../../../utility';
import {Label} from '../text/label';

export const Flag = props => {
  const {value} = props;

  return (
    <View style={styles.container}>
      <Label styles={styles.flagValue} textColor={theme.palette.neutral.white}>
        {value}
      </Label>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: ResponsiveSize(22),
    height: ResponsiveSize(22),
    borderRadius: ResponsiveSize(22 / 2),
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: theme.palette.neutral.doggerBlue,
  },
  flagValue: {
    textAlign: 'center',
  },
});
