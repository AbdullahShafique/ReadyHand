import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import WhiteHeader from '../../components/header/whiteHeader';
import MainInputField from '../../components/inputfields/mainInputField';
import InputFieldWithIcon from '../../components/inputfields/inputFieldWithIcon';
import SmallButton from '../../components/buttons/smallButton';
import colors from '../../globalStyles/colors';
import ImageDropdownButton from '../../components/buttons/imageDropdownButton';

const NewService = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <WhiteHeader
        text={'New Service'}
        onPress={() => navigation.goBack()}
        style={{}}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top Image */}
        <View style={styles.topImage}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../../assets/icons/picture.png')}
              resizeMode={'contain'}
              style={{
                width: Dimensions.get('window').width * 0.2,
                height: Dimensions.get('window').width * 0.2,
              }}
            />
            <Text style={styles.text1}>Cover Image</Text>
          </View>
        </View>

        {/* Title */}
        <MainInputField title={'Title'} placeholder={'Enter Title here'} />

        {/* Category */}

        <InputFieldWithIcon
          title={'Category'}
          placeholder={'Laundry'}
          icon={require('../../../assets/icons/downArrow.png')}
          iconSize={12}
        />

        {/* Rate/Hr */}

        <InputFieldWithIcon
          title={'Rate/Hr'}
          placeholder={'10.00'}
          icon={require('../../../assets/icons/£.png')}
          iconSize={12}
        />

        {/* Location */}

        <InputFieldWithIcon
          title={'Location'}
          placeholder={'Remote'}
          icon={require('../../../assets/icons/current-location.png')}
          iconSize={20}
        />

        {/* Language Prefered */}
        <InputFieldWithIcon
          title={'Language Prefered'}
          placeholder={'Spanish'}
          icon={require('../../../assets/icons/downArrow.png')}
          iconSize={14}
        />
        {/* Description */}
        <View style={{marginTop: '5%'}}>
          <MainInputField
            title={'Description'}
            placeholder={'Description'}
            Height={5}
            MarginTop={'0%'}
            multiline={true}
          />
        </View>

        {/* Subscription Package */}

        <InputFieldWithIcon
          placeholder={'Subscription Package'}
          icon={require('../../../assets/icons/green_tick.png')}
          iconSize={20}
        />

        {/* Subscription Type */}
        <InputFieldWithIcon
          title={'Subscription Type'}
          placeholder={'Weekly'}
          icon={require('../../../assets/icons/downArrow.png')}
          iconSize={14}
        />

        {/* Select Service */}
        <ImageDropdownButton
          title={'Select Service'}
          placeholder={'I provide house cleaning service on weekly basis.'}
          iconSize={14}
          icon={require('../../../assets/icons/downArrow.png')}
        />

        {/* Price/Hr */}

        <InputFieldWithIcon
          title={'Price/Hr'}
          placeholder={'8.00'}
          icon={require('../../../assets/icons/£.png')}
          iconSize={12}
        />

        {/* Create Service Offer */}
        <View style={{marginTop: '5%', marginBottom: '5%'}}>
          <SmallButton
            text={'Create Service'}
            width={'50%'}
            height={Dimensions.get('window').height / 15}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default NewService;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topImage: {
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center',
    height: Dimensions.get('window').height * 0.25,
    marginTop: '5%',
    backgroundColor: colors.Grey,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: colors.DarkGrey,
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    marginTop: '1%',
  },
});
