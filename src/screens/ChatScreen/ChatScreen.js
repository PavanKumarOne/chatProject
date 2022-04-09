import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {Message} from '../../components/molecules/Message';
import {array} from 'prop-types';
import theme from '../../styles/theme';
import {InputBox} from '../../components/atoms/input';
import { ImagePath } from '../../utility';
import VectorImage from 'react-native-vector-image';
console.log(ImagePath.plus);
const renderChatMessage = ({item}) => {
  const {id, message, flag, name, time} = item;

  return <Message message={message} flag={flag} name={name} time={time} />;
};

export const ChatScreen = () => {
  const array = [
    {
      id: 1,
      name: 'Pummy',
      message: 'Hi ,How are you',
      flag: true,
      time: '10:10',
    },
    {
      id: 2,
      message: 'Hi ,I am good',
      flag: false,
      time: '10:10',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={array}
        renderItem={renderChatMessage}
        keyExtractor={item => item.id}
      />
      <View style={styles.attachCont}>
        <VectorImage source={ImagePath.plus} />
        <InputBox style={styles.box} border="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5DCD5',
  },
  attachCont: {
    backgroundColor: '#F6F6F6',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});
