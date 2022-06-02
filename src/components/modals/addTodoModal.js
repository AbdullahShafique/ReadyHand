import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import MainInputField from '../inputfields/mainInputField';
import SmallButton from '../buttons/smallButton';
import colors from '../../globalStyles/colors';

const AddTodoModal = ({visibility, onPress}) => {
  return (
    <Modal visible={visibility} transparent={true}>
      <Pressable style={styles.container} onPress={onPress}>
        <View style={styles.card}>
          <Text style={styles.text1}>Add To Do</Text>
          <Formik initialValues={{Heading: '', Details: ''}}>
            {formikProps => (
              <View style={{flex: 1}}>
                <View style={{marginBottom: '5%'}}>
                  <MainInputField placeholder={'Heading'} />
                </View>
                <View style={{marginBottom: '5%'}}>
                  <MainInputField
                    placeholder={'Details'}
                    Height={5}
                    MarginTop={'0%'}
                    multiline={true}
                  />
                </View>
                <View style={{marginTop: '5%'}}>
                  <SmallButton
                    text={'Add'}
                    width={'30%'}
                    height={Dimensions.get('window').height / 15}
                    radius={8}
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </Pressable>
    </Modal>
  );
};

export default AddTodoModal;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 100, justifyContent: 'center'},
  card: {
    backgroundColor: 'white',
    alignSelf: 'center',
    width: '90%',
    height: Dimensions.get('window').height / 1.8,
    borderRadius: 16,
    justifyContent: 'space-between',

    paddingTop: '5%',
    paddingBottom: '2%',
  },
  text1: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
    alignSelf: 'center',
  },
});
