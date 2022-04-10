import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Image} from '../../components/atoms/image';
import {Heading} from '../../components/atoms/text/heading';
import {ProfileRow} from '../../components/atoms/profileRow';
import {Button} from '../../components/atoms/button/index';
import {Line} from '../../components/atoms/line';
import {ImagePath, ResponsiveSize} from '../../utility';
import theme from '../../styles/theme';
import {Tab} from '../../components/atoms/tab';
import {UserDocs} from '../../components/molecules/userDocs/userDocs';

const data = {
  name: 'Pavan Kumar',
  email: 'Email',
  number: 'number',
  mobile: 1234567890,
  emailId: 'onecare@co.in',
  subHeading: 1234567890,
};

const images = [
  {
    source: ImagePath.sample2,
    title: 'Paris',
    width: 806,
    height: 720,
  },
  {
    source: ImagePath.sample2,
    title: 'Paris',
    width: 806,
    height: 720,
  },
  {
    source: ImagePath.sample2,
    title: 'Paris',
    width: 806,
    height: 720,
  },
  {
    source: ImagePath.sample2,
    title: 'Paris',
    width: 806,
    height: 720,
  },
  {
    source: ImagePath.sample2,
    title: 'Paris',
    width: 806,
    height: 720,
  },
];

const docs = [
  {title: 'title1', subHeading: 'sub heading 1', icon: ImagePath.sample2},
  {title: 'title1', subHeading: 'sub heading 1', icon: ImagePath.sample2},
  {title: 'title1', subHeading: 'sub heading 1', icon: ImagePath.sample2},
  {title: 'title1', subHeading: 'sub heading 1', icon: ImagePath.sample2},
];

const split = data.name.split(' ');

//TODO: Pavan:

export const ContactInfo = () => {
  const [tabState, setTabState] = useState({
    tabData: images,
    currentTab: 'image',
  });

  const setState = keyValuePair => {
    console.log(keyValuePair, 'key value pair');
    setTabState(prevState => ({...prevState, ...keyValuePair}));
  };

  const onTabChange = key => {
    setState({tabData: key === 'image' ? images : docs, currentTab: key});
  };

  const {tabData, currentTab} = tabState;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image imageSource={ImagePath.groupImage} isRound split={split} />
        </View>
        <ProfileRow heading={data.email} subHeading={data.subHeading} />
      </View>
      <Tab
        onTabChange={key => {
          console.log(key, 'key');
          onTabChange(key);
        }}
        tabConfig={[
          {
            key: 'image',
            title: 'Images & Video',
            tabToRender: () => (
              <UserDocs data={tabData} currentTab={currentTab} />
            ),
          },
          {
            key: 'docs',
            title: 'Docs',
            tabToRender: () => (
              <UserDocs data={tabData} currentTab={currentTab} />
            ),
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  content: {
    marginTop: ResponsiveSize(108),
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: ResponsiveSize(16),
  },
});
