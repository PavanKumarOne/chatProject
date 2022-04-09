import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Heading} from '../../components/atoms/text/heading';
import {Header} from '../../components/molecules/header';
import {TextInput} from '../../components/atoms/textInput'

export const AllPatientsScreen = () => {

  const onChangeText=(data)=>{
    // console.log(data);
  }

  return (
    <View style={styles.container}>
      <Header onBackPress={() => {}} title={'All Patients'} />
      <Heading fontWeight="bold">AllPatientsScreen</Heading>
      <TextInput placeholder="Search by patient name" onChangeText={onChangeText}/>
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
