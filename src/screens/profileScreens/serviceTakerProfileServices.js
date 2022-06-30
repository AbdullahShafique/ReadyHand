import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import ProfileServiceCard from '../../components/cards/ProfileServiceCard';

const ServiceTakerProfileServices = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <ProfileServiceCard
            isExpired={!index && true}
            item={{name: 'Zesshan Ali', addres: '197 Cadar Street London'}}
          />
        )}
      />
    </View>
  );
};

export default ServiceTakerProfileServices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
