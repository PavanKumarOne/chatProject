import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Heading} from '../../components/atoms/text/heading';
import {Header} from '../../components/molecules/header';

export const AllPatientsScreen = () => {
  return (
    <View style={styles.container}>
      <Header onBackPress={() => {}} title={'All Patients'} />
      <Heading fontWeight="bold">AllPatientsScreen</Heading>
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
