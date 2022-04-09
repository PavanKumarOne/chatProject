import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {Message} from '../../components/molecules/Message';
import theme from '../../styles/theme';
import {InputBox} from '../../components/atoms/input';
import {Header} from '../../components/molecules/header';
import {NavigationKeys} from '../../navigation/constants';
import VectorImage from 'react-native-vector-image';
import {ImagePath} from '../../utility';

const renderChatMessage = ({item}) => {
  const {id, message, user, name, time} = item;

  return <Message message={message} user={user} name={name} time={time}  />;
};

export const ChatScreen = ({route, navigation}) => {
  const array = [
    {
      id: 1,
      name: 'Pummy',
      message: 'Hii!',
      user: false,
      time: '10:10',
    },
    {
      id: 1,
      name: 'oneCare',
      message: 'Hii Pummy ,Thank you for contacting us!',
      user: true,
      time: '10:10',
    },
    {
      id: 3,
      name: 'oneCare',
      message: 'Please!,provide these details,for me to help you',
      user: true,
      time: '10:10',
    },
    {
      id: 4,
      name: 'oneCare',
      message: 'your name!',
      user: true,
      time: '10:10',
    },
    {
      id: 5,
      name: 'Pummy',
      message: 'Pummy Sharma',
      user: false,
      time: '10:10',
    },
    {
      id: 1,
      name: 'oneCare',
      message: 'your phone number',
      user: true,
      time: '10:10',
    },
  ];


  console.log(route, 'route');
  var item;
  if(route.params){
   var {item:{groupName,groupImage}}=route.params
  }

  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        userInfoConfig={{
          heading: groupName,
          subHeading: 'type here for more info',
          image:{groupImage}
        }}
        enableBack
        onBackPress={() =>
          navigation.navigate(NavigationKeys.screen.allPatient)
        }
        onUserInfoPress={() =>
          navigation.navigate(NavigationKeys.screen.profile)
        }
      />
      <FlatList
        data={array}
        renderItem={renderChatMessage}
        keyExtractor={item => item.id}
      />
      <VectorImage source={ImagePath.add} />
      <View style={styles.attachCont}>
        
        <InputBox
          style={styles.box}
          border={theme.palette.secondary.secondary01}
          borderRadi="16"
        />
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
  header: {
    backgroundColor: theme.palette.background,
  },
});
