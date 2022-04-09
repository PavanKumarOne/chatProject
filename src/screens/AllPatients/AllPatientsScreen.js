import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Header} from '../../components/molecules/header';
import {UserInfoRow} from '../../components/molecules/userInfoRow';
import {TextInput} from '../../components/atoms/textInput';
import theme from '../../styles/theme';
import {ResponsiveSize} from '../../utility';
import {chatGroups} from '../../../mocks/allPatientscreen';
import {Line} from '../../components/atoms/line';
import {NavigationKeys} from '../../navigation/constants';

const renderUserGroups = (item, navigation) => {
  const {groupName, message, flag, groupImage, date} = item;

  return (
    <UserInfoRow
      heading={groupName}
      subHeading={message}
      image={groupImage}
      headingRightText={date}
      flag={flag}
      onPress={() => navigation.navigate(NavigationKeys.screen.chat, {item})}
    />
  );
};

export const AllPatientsScreen = ({navigation}) => {
  const onChangeText = data => {
    //TODO: Pummy need to implement search logic
  };

  return (
    <View style={styles.container}>
      <Header onBackPress={() => {}} title={'All Patients'} />
      <View style={styles.search}>
        <TextInput
          placeholder="Search by patient name"
          onChangeText={onChangeText}
        />
      </View>
      <FlatList
        data={chatGroups}
        renderItem={({item}) => renderUserGroups(item, navigation)}
        ItemSeparatorComponent={() => <Line style={styles.separater} />}
        keyExtractor={(item, index) => `${item.groupName} ${index}`}
        contentContainerStyle={styles.userGroupList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: theme.palette.background},
  healthRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userGroupList: {
    paddingVertical: ResponsiveSize(16),
    marginHorizontal: ResponsiveSize(16),
  },
  separater: {
    marginVertical: ResponsiveSize(16),
  },
  search: {
    backgroundColor: theme.palette.borderColors.border01,
  },
});
