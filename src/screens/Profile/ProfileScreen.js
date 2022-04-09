import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Heading} from '../../components/atoms/text/heading';

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Heading fontWeight="bold">ProfileScreen</Heading>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  healthRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
