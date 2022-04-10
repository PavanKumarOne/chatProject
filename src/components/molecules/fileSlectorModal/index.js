import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import VectorImage from 'react-native-vector-image';
import RNImageCropPicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';
import Modal from 'react-native-modal';
import theme from '../../../styles/theme';
import {ImagePath, ResponsiveSize} from '../../../utility';
import {Heading} from '../../atoms/text/heading';
import {isIOS} from '../../../utility/platformUtils';

const fileOptions = [
  {id: 0, icon: ImagePath.cameraOutline, heading: 'Camera'},
  {id: 1, icon: ImagePath.image, heading: 'Photo & Video Library'},
  {id: 2, icon: ImagePath.image, heading: 'Document'},
];

async function openCamera(setImage) {
  try {
    const images = await RNImageCropPicker.openCamera({
      cropping: true,
      multiple: false,
      includeBase64: true,
      compressImageQuality: 0.8,
    });

    let newImage = {
      ...images,
      uri: images.path,
      filename: images.path.split('/').pop(),
    };

    setImage(newImage);
  } catch (e) {
    console.log('Error in opening camera:', e);
  }
}

async function openGallery(setImage) {
  try {
    const images = await RNImageCropPicker.openPicker({
      cropping: true,
      multiple: false,
      includeBase64: true,
      compressImageQuality: 0.8,
    });

    let newImage = {
      ...images,
      uri: images.path,
      filename: images.path.split('/').pop(),
    };

    setImage(newImage);
  } catch (e) {
    console.log('Error in opening gallery', e);
  }
}

async function openFiles(setImage) {
  try {
    const docFromFiles = await DocumentPicker.pick({
      type: [DocumentPicker.types.pdf],
      allowMultiSelection: false,
    });
    console.log('Image from gallery:', docFromFiles);
    const doc = Array.isArray(docFromFiles) ? docFromFiles[0] : docFromFiles;
    console.log('Doc from files:', doc);

    const fileName = doc.uri.split('/').pop();
    const type = doc.type || doc.mime;

    const newDoc = {
      ...doc,
      filename: isIOS ? fileName : `${fileName}.${type.split('/').pop()}`,
      type: doc.type || doc.mime,
    };
    setImage(newDoc);
  } catch (e) {
    console.log('Error in opening gallery', e);
  }
}

function setSelectedOption(id, setImage) {
  setTimeout(() => {
    switch (id) {
      case 0:
        return openCamera(setImage);
      case 1:
        return openGallery(setImage);
      case 2:
        return openFiles(setImage);
    }
  }, 350);
}

const renderFileOptions = (options, closeModal, setImage) => {
  const {id, icon, heading} = options;

  return (
    <TouchableOpacity
      onPress={() => {
        setSelectedOption(id, setImage);
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
  const {isModalVisible, closeModal, getSelectedImage} = props;
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (image && getSelectedImage) {
      getSelectedImage(image);
    }
  }, [image]);

  return (
    <Modal isVisible={isModalVisible}>
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <FlatList
            data={fileOptions}
            renderItem={({item}) =>
              renderFileOptions(item, closeModal, setImage)
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
