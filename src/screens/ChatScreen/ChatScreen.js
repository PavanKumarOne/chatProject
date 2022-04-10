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
import {TouchableOpacity} from 'react-native';
import {FileSelectorModal} from '../../components/molecules/fileSlectorModal';
import {useState} from 'react';

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

  const [showFileSelector, setShowFileSelector] = useState(false);

  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        userInfoConfig={{
          heading: groupName,
          subHeading: 'type here for more info',
          image: groupImage,
        }}
        enableBack
        onUserInfoPress={() =>
          navigation.navigate(NavigationKeys.screen.contactInfo)
        }
      />
      <FlatList
        data={messages}
        renderItem={renderChatMessage}
        keyExtractor={item => item.id}
      />
      <View style={styles.attachCont}>
        <TouchableOpacity onPress={() => setShowFileSelector(true)}>
          <VectorImage source={ImagePath.add} />
        </TouchableOpacity>
        <TextInput
          style={styles.box}
          border={theme.palette.secondary.secondary01}
          borderRadi="16"
          onChangeText={() => {}}
        />
      </View>
      <FileSelectorModal
        isModalVisible={showFileSelector}
        closeModal={() => setShowFileSelector(false)}
      />
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
