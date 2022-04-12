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
import {Logger} from '../../utility/logger';
import {StorageKeys, StorageService} from '../../services/storageService';
import {ApiHandler} from '../../network/apiClient';

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



const onSubmit = async () => {
  // console.log("onsubmit working",textValue);
  const payload = {
    whatsappNumber: '919886137711',
    text: textValue,
    clinic_id: 1,
  };
  console.log(payload);
  try {
    let response = await ApiHandler({
      endPoint: 'chat/reply',
      method: 'post',
      reqParam: payload,
    });

    console.log('response', response);
    // await StorageService.remove(StorageKeys.appToken);
  } catch (e) {
    Logger.error(e.message);
  }
};


  const [showFileSelector, setShowFileSelector] = useState(false);
  const [textValue, setTextValue] = useState('');

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
        onBackPress={navigation.goBack}
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
          onChangeText={text => {
            setTextValue(text);
          }}
          onSubmitEditing={onSubmit}
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
