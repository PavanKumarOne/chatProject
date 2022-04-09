import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {SubHeading} from '../../atoms/text/subHeading';
import {Paragraph} from '../../atoms/text/paragraph';
import {Flag} from '../../atoms/flag';
import VectorImage from 'react-native-vector-image';
import {ImagePath, ResponsiveSize} from '../../../utility';
import theme from '../../../styles/theme';

export const UserInfoRow = props => {
  const {heading, subHeading, image, headingRightText, flag} = props;

  return (
    <View style={styles.rowContainer}>
      <Image source={image} style={styles.image} />
      <View style={{flex: 1}}>
        <View style={styles.rowContainer}>
          <SubHeading textColor={theme.palette.neutral.black}>
            {heading}
          </SubHeading>
          {headingRightText && (
            <Paragraph textColor={theme.palette.neutral.manatee}>
              {headingRightText}
            </Paragraph>
          )}
        </View>
        <View style={styles.rowContainer}>
          <Paragraph textColor={theme.palette.neutral.manatee}>
            {subHeading}
          </Paragraph>
          {flag && <Flag value={flag} />}
        </View>
      </View>
      <VectorImage
        source={ImagePath.rightArrow}
        resizeMode={'contain'}
        style={styles.rightIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: ResponsiveSize(52),
    height: ResponsiveSize(52),
    backgroundColor: 'red',
    marginRight: ResponsiveSize(12),
  },
  rightIcon: {
    marginLeft: ResponsiveSize(12),
  },
});
