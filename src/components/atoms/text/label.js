import React from 'react';
import PropTypes from 'prop-types';
import {Text} from './text';

export const Label = porps => {
  const {children, fontFamily, fontWeight, textColor, styles} = porps;

  return (
    <Text
      fontFamily={fontFamily}
      font={'secondaryFont'}
      fontWeight={fontWeight}
      styles={styles}
      textColor={textColor}>
      {children}
    </Text>
  );
};

Label.propTypes = {
  fontFamily: PropTypes.oneOf(['regular', 'medium', 'bold']),
  textColor: PropTypes.string,
  fontWeight: PropTypes.oneOf(['normal', 'medium', 'bold']),
  styles: PropTypes.object,
};
