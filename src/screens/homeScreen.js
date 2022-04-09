import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Heading} from '../components/atoms/text/heading';
import {Header} from '../components/molecules/header';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header enableBack onBackPress={() => {}} title={'Add Health Data'} />
      <Heading fontWeight="bold">heading</Heading>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'red'},
  healthRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
