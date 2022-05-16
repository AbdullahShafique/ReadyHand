import {StyleSheet, Text, View, Modal} from 'react-native';
import React from 'react';

const ChatModal = () => {
  return (
    <Modal visible={true} transparent={true}>
      <View style={{position: 'relative', bottom: 0}}>
        <Text>ChatModal</Text>
      </View>
    </Modal>
  );
};

export default ChatModal;

const styles = StyleSheet.create({});
