import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ImagePath, ResponsiveSize} from '../../../utility';
import VectorImage from 'react-native-vector-image';
import {UserInfoRow} from '../userInfoRow';
import {NavigationKeys} from '../../../navigation/constants';

export const Header = ({
  onBackPress,
  enableBack,
  title,
  rightContent,
  style = {},
  back,
  userInfoConfig = null,
  onUserInfoPress,
}) => {
  return (
    <View style={[styles.container, style]}>
      {enableBack ? (
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={onBackPress}>
          <VectorImage
            source={ImagePath.backArrow}
            resizeMode={'contain'}
            style={styles.backIcon}
          />
          {back && <Text style={styles.backText}>{back}</Text>}
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyContainer} />
      )}
      {userInfoConfig ? (
        <UserInfoRow
          heading={userInfoConfig.heading}
          subHeading={userInfoConfig.subHeading}
          imageSource={userInfoConfig.imageSource}
          showArrow={false}
          style={styles.userInfo}
          imageStyle={{height: 36, width: 36}}
          onPress={onUserInfoPress}
        />
      ) : (
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      )}
      {rightContent ? (
        <View style={styles.emptyContainer}>{rightContent}</View>
      ) : (
        <View style={styles.emptyContainer} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: ResponsiveSize(65),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButtonContainer: {
    paddingLeft: ResponsiveSize(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    marginLeft: ResponsiveSize(10),
    fontWeight: 'normal',
    fontSize: ResponsiveSize(17),
  },
  emptyContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleContainer: {flex: 0.4, alignItems: 'center', justifyContent: 'center'},
  titleText: {
    fontWeight: '600',
    fontSize: ResponsiveSize(17),
  },
  backIcon: {
    width: 16,
    height: 16,
  },
  userInfo: {
    flex: 0,
  },
});
