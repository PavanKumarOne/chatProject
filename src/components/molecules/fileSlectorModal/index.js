import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import VectorImage from 'react-native-vector-image';
import Modal from 'react-native-modal';
import theme from '../../../styles/theme';
import {ImagePath, ResponsiveSize} from '../../../utility';
import {Heading} from '../../atoms/text/heading';

const fileOptions = [
  {id: 1, icon: ImagePath.cameraOutline, heading: 'Camera'},
  {id: 2, icon: ImagePath.image, heading: 'Photo & Video Library'},
];

const renderFileOptions = (options, setSelectedOption, closeModal) => {
  const {id, icon, heading} = options;

  return (
    <TouchableOpacity
      onPress={() => {
        setSelectedOption(id);
        closeModal();
      }}>
      <View style={styles.options}>
        <VectorImage
          source={icon}
          resizeMode={'contain'}
          style={styles.rightIcon}
        />
        <Heading styles={styles.heading}>{heading}</Heading>
      </View>
    </TouchableOpacity>
  );
};

export const FileSelectorModal = props => {
  const {isModalVisible, closeModal} = props;

  const [selctedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (selctedOption) {
    }
  }, [selctedOption]);

  return (
    <Modal isVisible={isModalVisible}>
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <FlatList
            data={fileOptions}
            renderItem={({item}) =>
              renderFileOptions(item, setSelectedOption, closeModal)
            }
            keyExtractor={item => `${item.id}`}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
        {closeModal && (
          <TouchableOpacity style={styles.cancel} onPress={closeModal}>
            <Heading textColor={theme.palette.neutral.azureRadiance}>
              Cancel
            </Heading>
          </TouchableOpacity>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: theme.palette.neutral.athensGray,
    borderRadius: 15,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: ResponsiveSize(31),
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: ResponsiveSize(16),
    paddingHorizontal: ResponsiveSize(22),
  },
  cancel: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: theme.palette.neutral.white,
    marginTop: ResponsiveSize(8),
    borderRadius: 15,
  },
  separator: {
    borderBottomColor: theme.palette.neutral.manatee,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  heading: {
    marginLeft: ResponsiveSize(21),
  },
});
