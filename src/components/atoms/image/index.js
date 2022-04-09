import React from 'react';
import {View, Image as RNImage, StyleSheet} from 'react-native';
import {ResponsiveSize} from '../../../utility';

export const Image = props => {
  const {
    imageSource,
    width = ResponsiveSize(65),
    height = ResponsiveSize(65),
    resizeMode,
    borderRadius,
    backgroundColor,
    loadingIndicatorSource,
    isRound = false,
    style = [],
    split,
  } = props;

  const styles = getStyles(
    isRound,
    imageSource,
    width,
    height,
    resizeMode,
    borderRadius,
    backgroundColor,
    loadingIndicatorSource,
    split,
  );

  return <RNImage style={[styles.image, style]} source={imageSource} />;
};

const getStyles = (
  isRound,
  uri,
  width,
  height,
  resizeMode,
  borderRadius,
  backgroundColor,
) =>
  StyleSheet.create({
    image: {
      uri: uri,
      width: width,
      height: height,
      borderRadius: isRound ? width / 2 : borderRadius,
      resizeMode: resizeMode, //('cover', 'contain', 'stretch', 'repeat', 'center')
      backgroundColor: backgroundColor,
    },
  });
