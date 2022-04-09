import React from 'react';
import PropTypes from 'prop-types';
import {Text} from './text';

export const Heading = porps => {
  const {children, fontFamily, fontWeight, textColor, styles} = porps;

  return (
    <Text
      fontFamily={fontFamily}
      font={'headingFont'}
      fontWeight={fontWeight}
      styles={styles}
      textColor={textColor}>
      {children}
    </Text>
  );
};

Heading.propTypes = {
  fontFamily: PropTypes.oneOf(['regular', 'medium', 'bold']),
  textColor: PropTypes.string,
  fontWeight: PropTypes.oneOf(['normal', 'medium', 'bold']),
  styles: PropTypes.object,
};
