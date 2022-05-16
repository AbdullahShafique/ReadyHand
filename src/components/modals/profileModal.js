import {StyleSheet, Text, View, Modal, Pressable} from 'react-native';
import React from 'react';

const ProfileModal = ({visible, onPress}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <Pressable style={styles.container} onPress={onPress}>
        <View style={styles.card}>
          <Text>ProfileModal</Text>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ProfileModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    height: '60%',
    width: '90%',
    borderRadius: 20,
  },
});
