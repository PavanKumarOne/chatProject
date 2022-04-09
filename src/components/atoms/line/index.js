import React from 'react';
import {View, StyleSheet} from 'react-native';
import theme from '../../../styles/theme';
import {ResponsiveSize} from '../../../utility';

export const Line = props => {
  const {style = {}} = props;

  return <View style={[styles.line, style]} />;
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: theme.palette.neutral.manatee,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
