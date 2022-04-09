import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Heading} from '../../components/atoms/text/heading';
import {Image} from '../../components/atoms/image';
import {Header} from '../../components/molecules/header';

export const TestingScreen = () => {
  return (
    <View style={styles.container}>
      <Header enableBack onBackPress={() => {}} title={'Testing screen'} />
      <Image imageSource={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
      <Heading fontWeight="bold">Testing screen</Heading>
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
