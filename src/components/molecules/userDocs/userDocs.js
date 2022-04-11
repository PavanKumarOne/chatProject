import React, {useState} from 'react';
import ImageView from 'react-native-image-view';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {Image} from '../../atoms/image';
import {ProfileRow} from '../../atoms/profileRow';
import { UserInfoRow } from '../userInfoRow';

export const UserDocs = props => {
  const {data, currentTab} = props;
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageVisible, setIsImageVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {currentTab === 'docs' ? (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={styles.box}>
                
                <UserInfoRow heading={item.title}
                  subHeading={item.subHeading}
                  style={styles.profileRowContainer}
                  icon
                  showArrow={false}/>
              </View>
            )}
          />
        ) : (
          <View>
            <FlatList
              data={data}
              renderItem={({item, index}) => (
                <View
                  style={{
                    flexDirection: 'column',
                    margin: 3,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setIsImageVisible(true);
                      setSelectedImage(index);
                    }}>
                    <Image imageSource={item.source} style={styles.imageTag} />
                  </TouchableOpacity>
                </View>
              )}
              //Setting the number of column
              numColumns={3}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
        <ImageView
          images={data}
          imageIndex={selectedImage}
          isVisible={isImageVisible}
          onClose={() => setIsImageVisible(false)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 2,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  profileRowContainer: {
    justifyContent: 'flex-start',
  },
  imageRow: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    backgroundColor: 'blue',
  },
  box: {
    margin: 10,
    backgroundColor:"white",
    padding:2
  },
  imageTag: {
    width: 125,
    height: 120,
  },
});
