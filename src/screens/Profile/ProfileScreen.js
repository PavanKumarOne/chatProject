import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Image} from '../../components/atoms/image';
import {Heading} from '../../components/atoms/text/heading';
import {ProfileRow} from '../../components/atoms/profileRow';
import {Button} from '../../components/atoms/button/index';
import {Line} from '../../components/atoms/line';
import {ImagePath, ResponsiveSize} from '../../utility';
import theme from '../../styles/theme';
import { HelperService } from '../../services/helperService';
import {ApiHandler} from "../../network/apiClient"
import { Logger } from '../../utility/logger';
import { StorageKeys, StorageService } from '../../services/storageService';
import { login,logout } from '../../redux/actions/action';
import {connect} from "react-redux"

const data = {
  name: 'Pavan Kumar',
  email: 'Email',
  number: 'number',
  mobile: 1234567890,
  emailId: 'onecare@co.in',
};

const split = data.name.split(' ');



//TODO: Pavan: add logout funct, call api

const ProfileScreen = (props) => {


  const Logout=async ()=>{

    const payload = {
     token :HelperService.token
    };
  
    try {
      let token = await ApiHandler({
        endPoint: 'auth/applogout',
        method: 'post',
        reqParam: payload,
      });
  
      
  
      console.log("response",token);
      await StorageService.remove(StorageKeys.appToken);
      props.logout()
    } catch (e) {
      Logger.error(e.message);
    }
  
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image imageSource={ImagePath.groupImage} isRound split={split} />
          <Heading styles={styles.heading}>{data.name}</Heading>
        </View>
        <ProfileRow heading={data.email} value={data.emailId} />
        <Line />
        <ProfileRow heading={data.number} value={data.mobile} />
        <View style={styles.logOut}>
          <Button
            onPress={Logout}
            buttonText="Logout"
            textType="subHeading"
          />
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {isLoggedIn: state.isLoggedIn};
};


const mapDispatchToProps = {login,logout};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

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
    backgroundColor: theme.palette.neutral.white,
    padding: ResponsiveSize(16),
    marginTop: ResponsiveSize(16),
  },
});


