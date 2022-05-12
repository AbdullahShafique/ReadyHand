import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../../globalStyles/colors';
import HomeHeader from '../../components/header/homeHeader';
import InputFieldWithIcon from '../../components/inputfields/inputFieldWithIcon';
import ServiceDetail from '../../components/cards/serviceDetail';
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <HomeHeader />
      {/* Search Bar */}
      <InputFieldWithIcon
        placeholder={'Search by name or location'}
        icon={require('../../../assets/icons/filter.png')}
        iconSize={18}
        onSubmitEditing={() => navigation.navigate('Search')}
        onPress={() => navigation.navigate('Filters')}
      />
      {/* Explore */}
      <Text style={styles.text}>Explore</Text>
      {/* Services  */}
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({item}) => (
          <ServiceDetail
            onPress={() => navigation.navigate('SelectServices')}
          />
        )}
        // <ServiceDetail />
        keyExtractor={item => item}
        //horizontal={true}
      />
      {/* <ServiceDetail /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
    marginLeft: '7.5%',
    marginTop: '5%',
    marginBottom: '5%',
  },
});
