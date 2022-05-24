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

const AddServiceRequest = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <WhiteHeader
        text={'Add Service Request'}
        onPress={() => navigation.goBack()}
        style={{}}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top Image */}
        <Image
          source={require('../../../assets/images/p6.png')}
          resizeMode={'contain'}
          style={styles.topImage}
        />

        {/* Category */}
        <MainInputField title={'Category'} placeholder={'House Cleaning'} />

        {/* Time Required */}
        <MainInputField title={'Time Required'} placeholder={'2 Hrs'} />
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
          placeholder={'Choose Location'}
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
        {/* Create Service Offer */}
        <View style={{marginTop: '10%', marginBottom: '5%'}}>
          <SmallButton
            text={'Create Service Offer'}
            width={'75%'}
            height={Dimensions.get('window').height / 15}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AddServiceRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topImage: {
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center',
    height: Dimensions.get('window').height * 0.25,
    marginTop: '2.5%',
  },
});
