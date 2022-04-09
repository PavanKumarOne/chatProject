import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import theme from '../../../styles/theme';
import {ResponsiveSize} from '../../../utility';

export const Text = porps => {
  const {
    children,
    fontFamily = 'regular',
    font,
    fontWeight = 'normal',
    textColor = theme.palette.textColors.titleTextColor,
    styles: OverrideStyles,
  } = porps;

  const {typography} = theme;

  const styles = getStyles(
    typography.fontFamily[fontFamily],
    typography.font[font],
    typography.fontWeight[fontWeight],
    textColor,
  );

  return <RNText style={[styles.text, OverrideStyles]}>{children}</RNText>;
};

const getStyles = (fontFamily, font, fontWeight, textColor) =>
  StyleSheet.create({
    text: {
      fontFamily: fontFamily,
      fontSize: ResponsiveSize(font.fontSize),
      lineHeight: ResponsiveSize(font.lineHeight),
      fontWeight: fontWeight,
      color: textColor,
    },
  });

Text.propTypes = {
  fontFamily: PropTypes.oneOf(['regular', 'medium', 'bold']),
  textColor: PropTypes.string,
  fontWeight: PropTypes.oneOf(['normal', 'medium', 'bold']),
  font: PropTypes.oneOf([
    'titleFont',
    'headingFont',
    'subHeadingFont',
    'primaryFont',
    'secondaryFont',
  ]),
  styles: PropTypes.object,
};
