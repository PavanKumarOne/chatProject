import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {FileSelectorModal} from '../../components/molecules/fileSlectorModal';

export const TestingScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Button
        title="Show modal"
        onPress={() => setIsModalVisible(!isModalVisible)}
      />
      <FileSelectorModal
        isModalVisible={isModalVisible}
        closeModal={() => setIsModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  healthRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
