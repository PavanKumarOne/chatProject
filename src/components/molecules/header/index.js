import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ImagePath, ResponsiveSize} from '../../../utility';
import VectorImage from 'react-native-vector-image';

export const Header = ({onBackPress, enableBack, title, rightContent}) => {
  return (
    <View style={styles.container}>
      {enableBack ? (
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={onBackPress}>
          <VectorImage
            source={ImagePath.backArrow}
            resizeMode={'contain'}
            style={styles.backIcon}
          />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyContainer} />
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
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
    height: ResponsiveSize(45),
    flexDirection: 'row',
    marginHorizontal: 8,
  },
  backButtonContainer: {
    flex: 0.3,
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
    flex: 0.3,
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
});
