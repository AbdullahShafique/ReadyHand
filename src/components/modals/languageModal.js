import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';
import SmallButton from '../buttons/smallButton';

const LanguageModal = ({visibility, onPress}) => {
  return (
    <Modal visible={visibility} transparent={true}>
      <Pressable style={styles.container} onPress={onPress}>
        <View style={styles.card}>
          <Text style={styles.text1}>Add Language</Text>

          {/* Select Language */}

          <View style={styles.location}>
            <TextInput placeholder="Select Language" />
            <Image
              source={require('../../../assets/icons/downArrow.png')}
              resizeMode={'contain'}
              style={{width: '5%', height: '40%'}}
            />
          </View>
          {/* Add */}
          <SmallButton
            text={'Add'}
            height={Dimensions.get('window').height / 16}
            width={Dimensions.get('window').width / 3}
          />
        </View>
      </Pressable>
    </Modal>
  );
};

export default LanguageModal;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 100, justifyContent: 'center'},
  card: {
    backgroundColor: 'white',
    alignSelf: 'center',
    width: '90%',
    height: Dimensions.get('window').height / 3.5,
    borderRadius: 16,
    justifyContent: 'space-between',

    paddingTop: '5%',
    paddingBottom: '2%',
  },
  text1: {
    color: colors.Green,
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
    alignSelf: 'center',
  },
  username: {
    color: colors.Green,
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    width: '90%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: colors.DarkGrey,
  },
  location: {
    color: colors.Green,
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    width: '90%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: colors.DarkGrey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
