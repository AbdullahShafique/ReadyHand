import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../globalStyles/colors';
import WhiteHeader from '../../components/header/whiteHeader';
import SubscriptionCard from '../../components/cards/subscriptionCard';

const Subscriptions = ({navigation}) => {
  // dummy data
  const [dummyData, setDummyData] = useState([
    {key: 1, selected: false},
    {key: 2, selected: false},
    {key: 3, selected: false},
    {key: 4, selected: false},
  ]);

  // Time Zones
  const [timeZone, setTimeZone] = useState([
    {title: 'Weekly', selected: false},
    {title: 'Biweekly', selected: false},
    {title: 'Monthly', selected: false},
  ]);
  //This function Is toggle the card
  const changeCard = id => {
    const temp = [];
    dummyData.forEach((item, index) => {
      if (id == index) temp.push({key: item.key, selected: !item.selected});
      else temp.push(item);
    });

    setDummyData(temp);
  };
  //This function Is toggle the timeZine
  const changeTimeZine = id => {
    const temp = [];
    timeZone.forEach((item, index) => {
      if (id == index) temp.push({title: item.title, selected: !item.selected});
      else temp.push({title: item.title, selected: false});
    });

    setTimeZone(temp);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <WhiteHeader
        text={'Create Subscription'}
        onPress={() => navigation.goBack()}
        text2={'Create New'}
        onPress2={() => navigation.navigate('CreateSubscription')}
      />
      {/* Toggle Button View */}
      <View style={styles.toggleButtonView}>
        {timeZone.map((item, index) => (
          <Pressable
            key={index}
            style={{
              ...styles.toggleButton,
              backgroundColor: item.selected ? colors.Green : colors.DarkGrey,
            }}
            onPress={() => changeTimeZine(index)}>
            <Text style={styles.toggleButtonText}>{item.title}</Text>
          </Pressable>
        ))}
      </View>

      <FlatList
        data={dummyData}
        keyExtractor={item => item.key}
        renderItem={({item, index}) => (
          <SubscriptionCard
            selected={item.selected}
            onPress={() => changeCard(index)}
          />
        )}
      />
    </View>
  );
};

export default Subscriptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  toggleButton: {
    width: '25%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    marginRight: '2.5%',
  },
  toggleButtonText: {
    fontFamily: 'OpenSans-Regular',
    color: 'white',
    fontSize: 16,
  },
  toggleButtonView: {
    width: '90%',
    alignSelf: 'center',
    height: '5%',
    marginVertical: '2.5%',
    flexDirection: 'row',
  },
});
