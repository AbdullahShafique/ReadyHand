import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useContext} from 'react';
import colors from '../../globalStyles/colors';
import MainHeader from '../../components/header/mainHeader';
import ServiceCard from '../../components/cards/serviceCard';
import {AuthContext} from '../../Authentication/authProvider';

const ChooseServices = ({navigation}) => {
  const {userType} = useContext(AuthContext);
  const services = [
    {
      key: 1,
      title: 'Cleaning',
      icon: require('../../../assets/icons/Cleaning.png'),
    },
    {
      key: 2,
      title: 'Babysitting',
      icon: require('../../../assets/icons/Babysitting.png'),
    },
    {
      key: 3,
      title: 'Errand',
      icon: require('../../../assets/icons/Errand.png'),
    },
    {
      key: 4,
      title: 'Shopping',
      icon: require('../../../assets/icons/Shopping.png'),
    },
    {
      key: 5,
      title: 'Nursing',
      icon: require('../../../assets/icons/Nursing.png'),
    },
    {
      key: 6,
      title: 'Companionship',
      icon: require('../../../assets/icons/Companionship.png'),
    },
    {
      key: 7,
      title: 'Nanny',
      icon: require('../../../assets/icons/Nanny.png'),
    },
    {
      key: 8,
      title: 'Gardening',
      icon: require('../../../assets/icons/Gardening.png'),
    },
  ];
  return (
    <View style={styles.container}>
      {/* Hearder */}
      <MainHeader
        text={'Choose Services'}
        onPress={() => navigation.goBack()}
      />
      {/* Top Text */}
      {userType == 'serviceProvider' ? (
        <Text style={styles.text}>
          Choose the services that best suit what you are providing.
        </Text>
      ) : (
        <Text style={styles.text}>
          Choose the services that best suit what you are looking for.
        </Text>
      )}
      {/*FlatList  */}
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={services}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <ServiceCard
              title={item.title}
              icon={item.icon}
              onPress={() => {
                navigation.navigate('ProfileVerification');
                console.log(item.title);
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ChooseServices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 16,
    marginLeft: '5%',
    marginBottom: '5%',
  },
});
