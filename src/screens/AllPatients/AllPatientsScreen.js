import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Header} from '../../components/molecules/header';
import {UserInfoRow} from '../../components/molecules/userInfoRow';
import {TextInput} from '../../components/atoms/textInput';
import theme from '../../styles/theme';
import {ResponsiveSize} from '../../utility';
import {chatGroups} from '../../../mocks/allPatientscreen';
import {Line} from '../../components/atoms/line';
import {NavigationKeys} from '../../navigation/constants';
import {Loader} from '../../components/atoms/loader';
import {FirebaseService} from '../../services/firebase';

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
  const debouncer = useRef();
  const [data, setData] = useState(chatGroups);
  const [loading, setLoading] = useState(false);

  // TODO: Shivam: add collection name
  useEffect(() => {
    // const data = FirebaseService.getCollectionData('');
  }, []);

  function onChangeText(txt) {
    clearTimeout(debouncer.current);

    setLoading(true);
    debouncer.current = setTimeout(() => {
      const dataCopy = [...chatGroups];
      const filteredData = dataCopy.filter(group => {
        const groupName = group.groupName.toLowerCase();
        const searchedText = txt.toLowerCase();

        return groupName.includes(searchedText);
      });
      setData(filteredData);
      setLoading(false);
    }, 500);
  }

  return (
    <View style={styles.container}>
      {loading && <Loader />}
      <Header onBackPress={() => {}} title={'All Patients'} />
      <View style={styles.search}>
        <TextInput
          placeholder="Search by group name"
          onChangeText={onChangeText}
        />
      </View>
      <FlatList
        data={data}
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
