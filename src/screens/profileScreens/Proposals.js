import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ProposalCard from '../../components/cards/proposalCard';
import WhiteHeader from '../../components/header/whiteHeader';

const data = [
  {
    name: 'Zesshan Ali',
    addres: '197 Cadar Street London',
  },
  {
    name: 'Zesshan Ali',
    addres: '197 Cadar Street London',
  },
  {
    name: 'Zesshan Ali',
    addres: '197 Cadar Street London',
  },
];

const Proposals = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <WhiteHeader text="Proposals" onPress={() => navigation.goBack()} />
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index, separators}) => (
          <Pressable
            key={item.key}
            onPress={() => console.log('Proposal Pressed')}>
            <ProposalCard item={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default Proposals;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp(1.3),
  },
});
