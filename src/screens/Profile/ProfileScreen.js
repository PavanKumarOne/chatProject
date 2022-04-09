import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Image} from '../../components/atoms/image';
import {Heading} from '../../components/atoms/text/heading';
import {UserInfoRow} from '../../components/atoms/userInfoRow';
import {Button} from '../../components/atoms/button/index';
import {Line} from '../../components/atoms/line';
import {ImagePath, ResponsiveSize} from '../../utility';

const data = {
  name: 'Pavan Kumar',
  email: 'Email',
  number: 'number',
  mobile: 1234567890,
  emailId: 'onecare@co.in',
};

const split = data.name.split(' ');

//TODO: Pavan: add logout funct, call api

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image imageSource={ImagePath.groupImage} isRound split={split} />
          <Heading styles={styles.heading}>{data.name}</Heading>
        </View>
        <UserInfoRow heading={data.email} value={data.emailId} />
        <Line />
        <UserInfoRow heading={data.number} value={data.mobile} />
        <View style={styles.logOut}>
          <Button
            onPress={() => {}}
            buttonText="Logout"
            textType="subHeading"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  content: {
    marginTop: ResponsiveSize(108),
  },
  heading: {
    marginBottom: ResponsiveSize(30),
    marginTop: ResponsiveSize(30),
    fontSize: ResponsiveSize(26),
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
  },
  logOut: {
    backgroundColor: 'white',
    padding: ResponsiveSize(16),
    marginTop: ResponsiveSize(16),
  },
});
