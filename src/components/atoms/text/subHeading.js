import React from 'react';
import PropTypes from 'prop-types';
import {Text} from './text';

export const SubHeading = porps => {
  const {children, fontFamily, fontWeight, textColor, styles = {}} = porps;

  return (
    <Text
      fontFamily={fontFamily}
      font={'subHeadingFont'}
      fontWeight={fontWeight}
      styles={styles}
      textColor={textColor}>
      {children}
    </Text>
  );
};

SubHeading.propTypes = {
  fontFamily: PropTypes.oneOf(['regular', 'medium', 'bold']),
  textColor: PropTypes.string,
  fontWeight: PropTypes.oneOf(['normal', 'medium', 'bold']),
  styles: PropTypes.object,
};
