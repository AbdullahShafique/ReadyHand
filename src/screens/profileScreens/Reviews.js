import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ProfileReviewCard from '../../components/cards/ProfileReviewCard';
// import Reviews from '../../components/Reviews/Reviews';
const star = [
  {image: require('../../../assets/icons/proposal/Star.png')},
  {image: require('../../../assets/icons/proposal/Star.png')},
  {image: require('../../../assets/icons/proposal/Star.png')},
  {image: require('../../../assets/icons/proposal/Star.png')},
  {image: require('../../../assets/icons/proposal/Star.png')},
];
const data = [
  {
    job: 'House Cleaning',
  },
  {
    job: 'House Cleaning',
  },
  {
    job: 'House Cleaning',
  },
];
const Reviews = () => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return <ProfileReviewCard item={item} />;
        }}
      />
    </View>
  );
};
export default Reviews;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: '2.5%',
  },
});
