import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Heading} from '../../components/atoms/text/heading';
import {Header} from '../../components/molecules/header';

export const AssignedChatsScreen = () => {
  return (
    <View style={styles.container}>
      <Header onBackPress={() => {}} title={'Assigned Chats'} />
      <Heading fontWeight="bold">Assigned Chats</Heading>
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
