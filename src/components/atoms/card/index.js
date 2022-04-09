import React from 'react';
import {View, StyleSheet} from 'react-native';
import theme from '../../../styles/theme';
import PropTypes from 'prop-types';
import {ResponsiveSize} from '../../../utility';

export const Card = props => {
  return (
    <View style={[styles.progressContainer, props.styles]}>
      {props.children}
    </View>
  );
};

Card.propTypes = {
  styles: PropTypes.object,
};

const styles = StyleSheet.create({
  progressContainer: {
    backgroundColor: theme.palette.background,
    shadowColor: theme.palette.neutral.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,
    elevation: 4,
    padding: ResponsiveSize(12),
    borderRadius: 8,
  },
});
