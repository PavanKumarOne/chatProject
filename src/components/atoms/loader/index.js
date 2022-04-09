import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import theme from '../../../styles/theme';
import PropTypes from 'prop-types';
import {ResponsiveSize} from '../../../utility';
import {screenDimension} from '../../../utility/dimensionUtils';

export const Loader = props => {
  const {size = 'small'} = props;

  return (
    <ActivityIndicator
      style={styles.loader}
      size={size}
      color={theme.palette.primary.primary01}
    />
  );
};

Loader.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  styles: PropTypes.object,
};

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    alignSelf: 'center',
    top: ResponsiveSize(screenDimension.height / 2 - 10),
  },
});
