import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Heading} from '../../components/atoms/text/heading';
import {Header} from '../../components/molecules/header';
import {UserInfoRow} from '../../components/molecules/userInfoRow';

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
  console.log(item, 'item$$$');
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
  return (
    <View style={styles.container}>
      <Header onBackPress={() => {}} title={'All Patients'} />
      <FlatList
        data={mockData}
        renderItem={renderUserGroups}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item, index) => `${item.groupName} ${index}`}
      />
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
  separator: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
