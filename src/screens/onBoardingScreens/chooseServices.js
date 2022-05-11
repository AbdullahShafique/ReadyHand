import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useContext, useState} from 'react';
import colors from '../../globalStyles/colors';
import MainHeader from '../../components/header/mainHeader';
import ServiceCard from '../../components/cards/serviceCard';
import {AuthContext} from '../../Authentication/authProvider';
import MainButton from '../../components/buttons/mainButton';

const ChooseServices = ({navigation}) => {
  const {userType, setOnBoardingDone} = useContext(AuthContext);

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

  // This Function is for selecting services

  const handleSelection = key => {
    const temp = [];
    services.forEach((item, index) => {
      if (item.key == key)
        temp.push({
          icon: item.icon,
          isSelected: !item.isSelected,
          key: item.key,
          title: item.title,
        });
      else temp.push(item);
    });
    setServices(temp);
  };

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
              isSelected={item.isSelected}
              onPress={() => {
                handleSelection(item.key);
              }}
            />
          )}
          ListFooterComponent={
            <View style={{marginVertical: '5%'}}>
              <MainButton
                text={'Next'}
                onPress={() => setOnBoardingDone(true)}
              />
            </View>
          }
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
