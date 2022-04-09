import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Header} from '../../components/molecules/header';
import {UserInfoRow} from '../../components/molecules/userInfoRow';
import {InputBox} from '../../components/atoms/input';
import theme from '../../styles/theme';
import {ResponsiveSize} from '../../utility';

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

const date = `${day}/${month}/${year}`;

const mockData = [
  {
    groupName: 'group1',
    message: 'messagedd sghouaghoeaug',
    flag: '30',
    groupImage: '',
    date,
  },
  {
    groupName: 'group2',
    message: 'messagedd sghouaghoeaug',
    flag: '30',
    groupImage: '',
    date,
  },
  {
    groupName: 'group3',
    message: 'messagedd sghouaghoeaug',
    flag: '30',
    groupImage: '',
    date,
  },
];

const renderUserGroups = ({item}) => {
  const {groupName, message, flag, groupImage, date} = item;

  return (
    <UserInfoRow
      heading={groupName}
      subHeading={message}
      image={groupImage}
      headingRightText={date}
      flag={flag}
    />
  );
};

export const AllPatientsScreen = () => {
  const onChangeText = data => {
    //TODO: Pummy need to implement search logic
  };

  return (
    <View style={styles.container}>
      <Header onBackPress={() => {}} title={'All Patients'} />
      <InputBox
        placeholder="Search by patient name"
        onChangeText={onChangeText}
      />
      <FlatList
        data={mockData}
        renderItem={renderUserGroups}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
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
  separator: {
    borderBottomColor: theme.palette.neutral.manatee,
    borderBottomWidth: 0.5,
    marginVertical: ResponsiveSize(16),
  },
  userGroupList: {
    paddingVertical: ResponsiveSize(16),
    marginHorizontal: ResponsiveSize(16),
  },
});
