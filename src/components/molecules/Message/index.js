import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import theme from '../../../styles/theme';
import { ResponsiveSize } from '../../../utility';

export const Message = props => {
  return (
    <View style={styles.container}>
      {props.type === 'message' ? (
        <View style={props.owner ? styles.reciever : styles.sender}>
          {props.name && (
            <Text
              style={
                props.user
                  ? {color: theme.palette.secondary.secondary01}
                  : {color: 'red', fontSize: 12}
              }>
              {props.name}
            </Text>
          )}
          <View style={styles.messageContainer}>
            {props.type === 'message' ? (
              <Text>
                {props.message}
                {'  '}
              </Text>
            ) : (
              <Text>{props.eventDescription}</Text>
            )}

            <Text style={styles.timeColor}>{props.time}</Text>
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.ticket}>{props.eventDescription}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sender: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    padding:ResponsiveSize(6) ,
    flex:1,
    margin: 8,
    borderRadius: 8,
    
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
    padding:ResponsiveSize(6) ,
    margin: 8,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    borderRadius: 8,
  },
  ticket:{
    backgroundColor:theme.palette.neutral.dateBackground,
    alignSelf:"center",
    padding:ResponsiveSize(6) ,
  }
});
