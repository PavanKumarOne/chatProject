import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Image} from '../../../components/atoms/image';
import {Heading} from '../../../components/atoms/text/heading';
import {Button} from '../../../components/atoms/button/index';

const name = 'Pavan Kumar';

export const Userprofile = () => {
  return (
    <View>
      <View>
        <Image
          imageSource={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          isRound
        />
        <Heading>{name}</Heading>
      </View>
      <View></View>
      <View>
        {/* <Button>Logout</Button> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  inner: {},
});
