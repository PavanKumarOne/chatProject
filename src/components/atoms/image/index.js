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
  );

  return (
    <View style={styles.container}>
      <RNImage style={styles.tinyLogo} source={imageSource} />
    </View>
  );
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
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      uri: uri,
      width: width,
      height: height,
      borderRadius: isRound ? width / 2 : borderRadius,
      resizeMode: resizeMode, //('cover', 'contain', 'stretch', 'repeat', 'center')
      backgroundColor: backgroundColor,
    },
  });
