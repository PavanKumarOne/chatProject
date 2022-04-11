import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from 'react-native';

import {login, logout} from '../../redux/actions/action';

import {Colors, Fonts, ImagePath, ResponsiveSize} from '../../utility';
import VectorImage from 'react-native-vector-image';
import {Header} from '../../components/molecules/header';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from '../../components/atoms/textInput';
import theme from '../../styles/theme';
import {ApiHandler} from '../../network/apiClient';
import DeviceInfo from 'react-native-device-info';
import {isAndroid} from '../../utility/platformUtils';
import {Logger} from '../../utility/logger';
import {HelperService} from '../../services/helperService';
import {connect} from 'react-redux';
let appVersion = DeviceInfo.getReadableVersion();
let deviceVersion = DeviceInfo.getSystemVersion();
let deviceOs = isAndroid ? 'android' : 'ios';

console.log("StorageToken",HelperService.getToken)

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: '',
    };
  }

  onSubmit = async () => {
    console.log(this.props.isLoggedIn);
    const {errors, email, password} = this.state;
    const {navigation} = this.props;

    const payload = {
      email: email,
      password: password,
      deviceToken: 'test12314',
      appVersion: appVersion,
      deviceVersion: deviceVersion,
      deviceOs: deviceOs,
    };
    console.log(payload);

    try {
      let token = await ApiHandler({
        endPoint: 'auth/applogin',
        method: 'post',
        reqParam: payload,
      });

      //set is logged in true in reducer

      console.log(token.data.data.token);
      HelperService.setToken(token.data.data.token);
      this.props.login();

      console.log("StorageToken",HelperService.getToken())
    } catch (e) {
      Logger.error(e.message);
    }
  };
  render() {
    const {email, password, errors} = this.state;
    const {navigation, loading} = this.props;
    return (
      <View style={styles.container}>
        <Header onBackPress={() => navigation.goBack()} />
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'handled'}>
          <VectorImage
            source={ImagePath.oneCareLogo}
            style={styles.logo}
            resizeMode={'contain'}
          />
          <TextInput
            style={styles.phoneInput}
            onChangeText={text => this.setState({email: text})}
            value={email}
            placeholder={'Email'}
            placeholderTextColor={Colors.placeholder}
          />
          <TextInput
            style={styles.phoneInput}
            onChangeText={text => this.setState({password: text})}
            value={password}
            placeholder={'Password'}
            placeholderTextColor={Colors.placeholder}
          />
          <TouchableOpacity onPress={this.onSubmit} disabled={loading}>
            <LinearGradient
              style={styles.continueContainer}
              colors={[Colors.buttonLinearOne, Colors.buttonLinearTwo]}
              useAngle>
              {loading ? (
                <ActivityIndicator color={Colors.white} />
              ) : (
                <Text style={styles.continue}>Continue</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.ifNotRegistered}>
            If not registered yet, please contact us at
          </Text>
          <Text
            onPress={() => {
              Linking.openURL(`tel:${+918045687460}`);
            }}
            style={styles.registerationNumber}>
            +918045687460
          </Text>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {isLoggedIn: state.isLoggedIn};
};

// const mapDispatchToProps = dispatch => {
//   return {login: () => dispatch(login()), logout: () => dispatch(logout())};
// };

const mapDispatchToProps = {login,logout};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.screenBackground},
  logo: {
    alignSelf: 'center',
    marginTop: ResponsiveSize(58),
    marginBottom: ResponsiveSize(100),
  },
  enterYour: {
    textAlign: 'center',
    marginTop: ResponsiveSize(41),
    fontSize: ResponsiveSize(14),
    fontFamily: Fonts.SFPro,
    fontWeight: '400',
  },
  phoneInputContainer: {
    height: ResponsiveSize(40),
    backgroundColor: Colors.white,
    marginTop: ResponsiveSize(16),
    marginHorizontal: ResponsiveSize(20),
    borderRadius: ResponsiveSize(80),
    flexDirection: 'row',
  },
  countryCodeContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countryCode: {
    fontSize: ResponsiveSize(14),
    fontFamily: Fonts.SFPro,
    fontWeight: '400',
  },
  inputSeparator: {
    backgroundColor: Colors.separator,
    width: 1,
    marginVertical: ResponsiveSize(8),
  },
  phoneInput: {
    flex: 1,
    padding: 0,
    paddingHorizontal: ResponsiveSize(10),
    fontSize: ResponsiveSize(14),
    fontFamily: Fonts.SFPro,
    fontWeight: '400',
    color: Colors.black,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.palette.neutral.doggerBlue,
  },
  iAgreeContainer: {
    flexDirection: 'row',
    marginHorizontal: ResponsiveSize(20),
    justifyContent: 'space-between',
    marginTop: ResponsiveSize(16),
  },
  iAgree: {
    color: Colors.lightGrey,
    fontFamily: Fonts.SFPro,
    fontWeight: 'normal',
    fontSize: ResponsiveSize(14),
  },
  bySigningUp: {
    color: Colors.lightGrey,
    fontFamily: Fonts.SFPro,
    fontWeight: '600',
    fontSize: ResponsiveSize(14),
    marginHorizontal: ResponsiveSize(20),
    marginTop: ResponsiveSize(16),
  },
  onecareTerms: {
    color: Colors.textBlue,
    fontFamily: Fonts.SFPro,
    fontWeight: '600',
    fontSize: ResponsiveSize(14),
    marginHorizontal: ResponsiveSize(20),
  },
  continueContainer: {
    height: ResponsiveSize(40),
    marginHorizontal: ResponsiveSize(66),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ResponsiveSize(20),
    marginTop: ResponsiveSize(40),
  },
  continue: {
    color: Colors.white,
    fontFamily: Fonts.SFPro,
    fontWeight: '600',
    fontSize: ResponsiveSize(14),
  },
  ifNotRegistered: {
    fontFamily: Fonts.SFPro,
    fontWeight: '400',
    fontSize: ResponsiveSize(14),
    marginTop: ResponsiveSize(40),
    textAlign: 'center',
  },
  registerationNumber: {
    color: Colors.textBlue,
    fontFamily: Fonts.SFPro,
    fontWeight: '600',
    fontSize: ResponsiveSize(14),
    textAlign: 'center',
  },
  error: {
    textAlign: 'center',
    marginTop: ResponsiveSize(12),
    fontSize: ResponsiveSize(12),
    fontFamily: Fonts.SFPro,
    fontWeight: '400',
    color: Colors.buttonLinearTwo,
  },
  receiveUpdates: {
    flex: 0.8,
  },
  switch: {
    flex: 0.2,
    alignItems: 'flex-end',
  },
});
