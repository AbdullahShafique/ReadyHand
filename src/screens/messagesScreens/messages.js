import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WhiteHeader from '../../components/header/whiteHeader';
import MessageCard from '../../components/cards/messageCard';

const Messages = ({navigation}) => {
  const data = [1, 2, 3, 4, 5];
  return (
    <View style={styles.container}>
      {/* Header */}
      <WhiteHeader text={'Messages'} onPress={() => navigation.goBack()} />
      {data.map((item, index) => (
        <MessageCard key={index} onPress={() => navigation.navigate('Chat')} />
      ))}
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
