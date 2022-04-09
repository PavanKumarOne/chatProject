import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {Message} from '../../components/molecules/Message';
import theme from '../../styles/theme';
import {Header} from '../../components/molecules/header';
import {NavigationKeys} from '../../navigation/constants';
import VectorImage from 'react-native-vector-image';
import {ImagePath} from '../../utility';
import {messages} from '../../../mocks/assignedChats';
import {TextInput} from '../../components/atoms/textInput';

const renderChatMessage = ({item}) => {
  const {message, user, name, time} = item;

  return <Message message={message} user={user} name={name} time={time} />;
};

export const ChatScreen = ({route, navigation}) => {
  if (route.params) {
    var {
      item: {groupName, groupImage},
    } = route.params;
  }

  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        userInfoConfig={{
          heading: groupName,
          subHeading: 'type here for more info',
          image: {groupImage},
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
        data={messages}
        renderItem={renderChatMessage}
        keyExtractor={item => item.id}
      />
      <VectorImage source={ImagePath.add} />
      <View style={styles.attachCont}>
        <TextInput
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
    paddingHorizontal: 16,
  },
  header: {
    backgroundColor: theme.palette.background,
  },
});
