import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ImagePath, ResponsiveSize} from '../../../utility';
import {Heading} from '../text/heading';
import {SubHeading} from '../text/subHeading';
import {Label} from '../text/label';
import theme from '../../../styles/theme';
import VectorImage from 'react-native-vector-image';

export const ProfileRow = props => {
  const {heading, value, subHeading, icon = false, style = {}} = props;

  return (
    <View style={[styles.container, style]}>
      {icon && (
        <VectorImage
          source={icon ?? ImagePath.backArrow}
          resizeMode={'contain'}
          style={styles.icon}
        />
      )}
      <View>
        <Heading>{heading}</Heading>
        {subHeading && <Label>{subHeading}</Label>}
      </View>
      {value && <SubHeading>{value}</SubHeading>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.neutral.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: ResponsiveSize(16),
  },
  icon: {
    marginRight: ResponsiveSize(16),
  },
});
