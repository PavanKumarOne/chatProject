import React from 'react';
import {View, StyleSheet} from 'react-native';
import { InputBox } from '../../components/atoms/input';
import {Heading} from '../../components/atoms/text/heading';
import {Header} from '../../components/molecules/header';
import theme from '../../styles/theme';

export const AssignedChatsScreen = () => {

  const onChangeText=(data)=>{
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <View style={styles.InputBox}>
        <InputBox placeholder="Search by patient name" border={theme.palette.neutral.white} onChangeText={onChangeText} />
      </View>
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
  InputBox:{
    backgroundColor:theme.palette.borderColors.border01
  }
});
