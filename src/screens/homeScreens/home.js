import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../../globalStyles/colors';
import HomeHeader from '../../components/header/homeHeader';
import InputFieldWithIcon from '../../components/inputfields/inputFieldWithIcon';
import ServiceDetail from '../../components/cards/serviceDetail';
import ServiceDetailHorizontal from '../../components/cards/serviceDetailHorizontal';
import ProfileServiceCard2 from '../../components/cards/ProfileServiceCard2';
import ServiceCard from '../../components/cards/serviceCard';

const Home = ({navigation}) => {
  const [services, setServices] = useState([
    {
      key: 1,
      title: 'Cleaning',
      icon: require('../../../assets/icons/Cleaning.png'),
      isSelected: false,
    },
    {
      key: 2,
      title: 'Babysitting',
      icon: require('../../../assets/icons/Babysitting.png'),
      isSelected: false,
    },
    {
      key: 3,
      title: 'Errand',
      icon: require('../../../assets/icons/Errand.png'),
      isSelected: false,
    },
    {
      key: 4,
      title: 'Shopping',
      icon: require('../../../assets/icons/Shopping.png'),
      isSelected: false,
    },
    {
      key: 5,
      title: 'Nursing',
      icon: require('../../../assets/icons/Nursing.png'),
      isSelected: false,
    },
    {
      key: 6,
      title: 'Companionship',
      icon: require('../../../assets/icons/Companionship.png'),
      isSelected: false,
    },
    {
      key: 7,
      title: 'Nanny',
      icon: require('../../../assets/icons/Nanny.png'),
      isSelected: false,
    },
    {
      key: 8,
      title: 'Gardening',
      icon: require('../../../assets/icons/Gardening.png'),
      isSelected: false,
    },
  ]);
  return (
    <View style={styles.container}>
      {/* Header */}
      <HomeHeader
        Dashboard={false}
        onPress={() => navigation.navigate('Dashboard')}
        typeOfUser={'Service Taker'}
      />
      {/* Search Bar */}
      <View style={{marginBottom: '5%'}}>
        <InputFieldWithIcon
          ShowPassword={true}
          placeholder={'Search by name or location'}
          icon={require('../../../assets/icons/filter.png')}
          iconSize={18}
          onSubmitEditing={() =>
            navigation.navigate('Search', {text: 'Clearing'})
          }
          onPress={() => navigation.navigate('Filters')}
        />
      </View>

      {/* Horizontal Flatlist */}
      <FlatList
        ListHeaderComponent={
          <View>
            {/* Popular Services */}
            <Text style={styles.text}>Popular Services</Text>
            <View style={{marginVertical: '2%', marginHorizontal: '2.5%'}}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={services}
                keyExtractor={item => item.key}
                renderItem={({item}) => (
                  <ServiceCard
                    title={item.title}
                    icon={item.icon}
                    isSelected={item.isSelected}
                    // onPress={() => {
                    //   handleSelection(item.key);
                    // }}
                  />
                )}
              />
            </View>
            {/* Available Subscriptions */}
            <Text style={styles.text}>Available Subscriptions</Text>
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
                  // <ServiceDetailHorizontal />
                  <View
                    style={{
                      marginRight: 20,
                      justifyContent: 'center',
                    }}>
                    <ProfileServiceCard2
                      item={{
                        name: 'Zesshan Ali',
                        addres: '197 Cadar Street London',
                      }}
                    />
                  </View>
                )}
                // <ServiceDetail />
                keyExtractor={item => item}
                horizontal={true}
              />
            </View>
            {/* Explore */}
            <View style={{marginBottom: '5%', marginTop: '2%'}}>
              <Text style={styles.text}>Explore</Text>
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
