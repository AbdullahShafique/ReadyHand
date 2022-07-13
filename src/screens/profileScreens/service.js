import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../globalStyles/colors';
// import Service from '../../components/Services/Service';
import ProfileServiceCard2 from '../../components/cards/ProfileServiceCard2';
const data = [
  {
    name: 'Zesshan Ali',
    addres: '197 Cadar Street London',
  },
  {
    name: 'Zesshan Ali',
    addres: '197 Cadar Street London',
  },
  {
    name: 'Zesshan Ali',
    addres: '197 Cadar Street London',
  },
  {
    name: 'Zesshan Ali',
    addres: '197 Cadar Street London',
  },
];
const Service = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingTop: '2.5%'}}>
      <FlatList
      
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item, index}) => (
          <ProfileServiceCard2 key={index} item={item} />
        )}
      />
      {/* Add Button */}
      <Pressable
        onPress={() => navigation.navigate('NewService')}
        style={styles.addButton}>
        <Image
          source={require('../../../assets/icons/plus.png')}
          resizeMode={'contain'}
          style={{width: 20, height: 20}}
        />
      </Pressable>
    </View>
  );
};
export default Service;
const styles = StyleSheet.create({
  addButton: {
    backgroundColor: colors.Green,
    width: Dimensions.get('window').width * 0.15,
    height: Dimensions.get('window').width * 0.15,
    borderRadius: (Dimensions.get('window').width * 0.15) / 2,
    position: 'absolute',
    bottom: 40,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
