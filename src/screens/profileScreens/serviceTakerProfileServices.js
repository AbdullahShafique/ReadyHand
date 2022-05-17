import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import ProfileServiceCard2 from '../../components/cards/ProfileServiceCard2';

const ServiceTakerProfileServices = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <ProfileServiceCard2
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
