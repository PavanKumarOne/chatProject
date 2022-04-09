import React from 'react';
import {ActivityIndicator} from 'react-native';
import theme from '../../../styles/theme';
import PropTypes from 'prop-types';

export const Loader = props => {
  const {size = 'small', styles} = props;

  return (
    <ActivityIndicator
      style={styles}
      size={size}
      color={theme.palette.primary.primary01}
    />
  );
};

Loader.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  styles: PropTypes.object,
};
