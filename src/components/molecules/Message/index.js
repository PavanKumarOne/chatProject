import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import theme from '../../../styles/theme';

export const Message = props => {
  return (
    <View style={styles.container}>
      <View style={props.flag ? styles.sender : styles.reciever}>
        {props.name && <Text style={styles.name}>{props.name}</Text>}
        <View style={styles.messageContainer}>
          <Text>
            {props.message}
            {'  '}
          </Text>

          <Text style={styles.timeColor}>{props.time}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sender: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    padding: 6,
    margin: 8,
    borderRadius: 8,
  },
  name: {
    color: 'red',
    fontSize: 12,
  },
  messageContainer: {
    flexDirection: 'row',
    fontSize: 16,
    justifyContent: 'space-between',
  },
  timeColor: {
    color: theme.palette.textColors.timeTextColor,
  },

  reciever: {
    backgroundColor: theme.palette.chatBackground,
    alignSelf: 'flex-start',
    padding: 6,
    margin: 8,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    borderRadius: 8,
  },
});
