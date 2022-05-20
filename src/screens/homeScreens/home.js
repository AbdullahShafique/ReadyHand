import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../../globalStyles/colors';
import HomeHeader from '../../components/header/homeHeader';
import InputFieldWithIcon from '../../components/inputfields/inputFieldWithIcon';
import ServiceDetail from '../../components/cards/serviceDetail';
import ServiceDetailHorizontal from '../../components/cards/serviceDetailHorizontal';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <HomeHeader onPress={() => navigation.navigate('Dashboard')} />
      {/* Search Bar */}
      <View style={{marginBottom: '5%'}}>
        <InputFieldWithIcon
          placeholder={'Search by name or location'}
          icon={require('../../../assets/icons/filter.png')}
          iconSize={18}
          onSubmitEditing={() => navigation.navigate('Search')}
          onPress={() => navigation.navigate('Filters')}
        />
      </View>

      {/* Horizontal Flatlist */}
      <FlatList
        ListHeaderComponent={
          <View>
            {/* Explore */}

            <Text style={styles.text}>Explore</Text>

            <View
              style={{
                width: '95%',
                height: Dimensions.get('window').height / 4,
                marginLeft: '5%',
              }}>
              <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  // <ServiceDetail
                  //   onPress={() => navigation.navigate('SelectServices')}
                  // />
                  <ServiceDetailHorizontal />
                )}
                // <ServiceDetail />
                keyExtractor={item => item}
                horizontal={true}
              />
            </View>
            {/* Available Subscriptions */}
            <View style={{marginBottom: '5%'}}>
              <Text style={styles.text}>Available Subscriptions</Text>
            </View>
          </View>
        }
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ServiceDetail
            onPress={() => navigation.navigate('SelectServices')}
          />
        )}
        // <ServiceDetail />
        keyExtractor={item => item}
      />
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

    //marginBottom: '5%',
  },
});
