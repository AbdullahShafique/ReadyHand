import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';
import SmallButton from '../buttons/smallButton';

const SubscriptionCard = ({selected, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {/* Top Image & Text */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../../../assets/images/p1.png')}
          resizeMode={'contain'}
          style={styles.imageStyle}
        />
        <Text numberOfLines={2} style={styles.text1}>
          We provide Laundry service with high tech machines.
        </Text>
      </View>
      {/* Rate and Language */}
      {selected ? (
        <View>
          <View style={styles.RateandLanguageView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../assets/icons/proposal/money-card.png')}
                resizeMode={'contain'}
                style={{width: '20%', height: '100%'}}
              />

              <Text style={styles.text2}>£ 8.00/Week</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',

                justifyContent: 'flex-end',
              }}>
              <Image
                source={require('../../../assets/icons/proposal/langauge.png')}
                resizeMode={'contain'}
                style={{width: '20%', height: '100%'}}
              />
              <Text style={styles.text2}>Spanish</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: '15%',
              marginTop: '2.5%',
            }}>
            <SmallButton
              text={'Pause'}
              height={Dimensions.get('window').height / 17}
              width={Dimensions.get('window').width / 3.5}
              onPress={() => console.log('Pause')}
            />

            <SmallButton
              text={'Cancel'}
              height={Dimensions.get('window').height / 17}
              width={Dimensions.get('window').width / 3.5}
              onPress={() => console.log('Cancel')}
            />
          </View>
        </View>
      ) : null}
    </Pressable>
  );
};

export default SubscriptionCard;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: colors.DarkGrey,
    paddingTop: '4%',
    paddingBottom: '2%',
  },
  imageStyle: {
    width: Dimensions.get('window').width / 7,
    height: Dimensions.get('window').width / 7,
    borderRadius: 8,
  },
  text1: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 16,
    width: '70%',
    marginLeft: '5%',
  },
  RateandLanguageView: {
    flexDirection: 'row',
    paddingVertical: '3%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: '5%',
    borderColor: colors.DarkGrey,
    justifyContent: 'space-between',
    paddingHorizontal: '15%',
  },
  text2: {
    fontFamily: 'OpenSans-Regular',
    color: colors.DarkGrey,
    fontSize: 12,
    marginLeft: '5%',
  },
});
