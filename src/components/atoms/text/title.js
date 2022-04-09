import React from 'react';
import PropTypes from 'prop-types';
import {Text} from './text';

export const Title = porps => {
  const {children, fontFamily, fontWeight, textColor, styles} = porps;

  return (
    <Text
      fontFamily={fontFamily}
      font={'titleFont'}
      fontWeight={fontWeight}
      styles={styles}
      textColor={textColor}>
      {children}
    </Text>
  );
};

Title.propTypes = {
  fontFamily: PropTypes.oneOf(['regular', 'medium', 'bold']),
  textColor: PropTypes.string,
  fontWeight: PropTypes.oneOf(['normal', 'medium', 'bold']),
  styles: PropTypes.object,
};
