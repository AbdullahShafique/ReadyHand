import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import Service from '../../components/Services/Service';
import ProfileServiceCard from '../../components/cards/ProfileServiceCard';
const data = [
  {
    name: 'Zesshan Ali',
    addres: '197 Cadar Street London',
  },
  {
    name: 'Zesshan Ali',
    addres: '197 Cadar Street London',
  },
];
const Service = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item, index}) => (
          <ProfileServiceCard key={index} item={item} />
        )}
      />
    </View>
  );
};
export default Service;
const styles = StyleSheet.create({});
