import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ResponsiveSize} from '../../../utility';
import {Heading} from '../text/heading';
import {SubHeading} from '../text/subHeading';
import {Label} from '../text/label';

export const UserInfoRow = props => {
  const {heading, value, subHeading} = props;

  return (
    <View style={styles.container}>
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
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: ResponsiveSize(16),
  },
});
