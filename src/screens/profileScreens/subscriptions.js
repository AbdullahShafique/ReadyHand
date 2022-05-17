import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import React, {useState} from 'react';
import colors from '../../globalStyles/colors';
import WhiteHeader from '../../components/header/whiteHeader';
import SubscriptionCard from '../../components/cards/subscriptionCard';

const ToggleButton = ({text}) => (
  <View style={styles.toggleButton}>
    <Text style={styles.toggleButtonText}>{text}</Text>
  </View>
);

const Subscriptions = ({navigation}) => {
  // dummy data
  const [dummyData, setDummyData] = useState([
    {key: 1, selected: false},
    {key: 2, selected: false},
    {key: 3, selected: false},
    {key: 4, selected: false},
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

  return (
    <View style={styles.container}>
      {/* Header */}
      <WhiteHeader
        text={'Create Subscription'}
        onPress={() => navigation.goBack()}
      />
      {/* Toggle Button View */}
      <View style={styles.toggleButtonView}>
        {['Weekly', 'Biweekly', 'Monthly'].map((item, index) => (
          <ToggleButton key={index} text={item} />
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
    backgroundColor: colors.Green,
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
