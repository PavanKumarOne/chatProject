import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {SubHeading} from '../../atoms/text/subHeading';
import {Paragraph} from '../../atoms/text/paragraph';
import {Flag} from '../../atoms/flag';
import VectorImage from 'react-native-vector-image';
import {ImagePath, ResponsiveSize} from '../../../utility';
import theme from '../../../styles/theme';
import {Image} from '../../atoms/image';

const doctypeConfig = {
  image: {icon: ImagePath.camera, description: 'Photo'},
  file: {icon: ImagePath.camera, description: 'Document'},
};

export const UserInfoRow = props => {
  const {
    heading,
    subHeading,
    headingRightText,
    flag,
    doctype,
    onPress = null,
  } = props;

  const Container = onPress ? TouchableOpacity : View;
  const containerProps = onPress ? {onPress: onPress} : {};

  return (
    <Container style={styles.rowContainer} {...containerProps}>
      <Image
        style={styles.image}
        imageSource={ImagePath.groupImage}
        width={52}
        height={52}
      />
      <View style={styles.midContent}>
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
          <View style={styles.rowContainer}>
            {doctype && (
              <VectorImage
                source={doctypeConfig[doctype].icon}
                resizeMode={'contain'}
                style={styles.rightIcon}
              />
            )}
            <Paragraph textColor={theme.palette.neutral.manatee}>
              {doctype ? doctypeConfig[doctype].description : subHeading}
            </Paragraph>
          </View>
          {flag && <Flag value={flag} />}
        </View>
      </View>
      <VectorImage
        source={ImagePath.rightArrow}
        resizeMode={'contain'}
        style={styles.rightIcon}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    marginRight: ResponsiveSize(12),
  },
  rightIcon: {
    marginLeft: ResponsiveSize(12),
  },
  midContent: {
    flex: 1,
  },
});
