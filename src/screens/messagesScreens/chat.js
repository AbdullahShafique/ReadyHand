import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import WhiteHeader from '../../components/header/whiteHeader';
import colors from '../../globalStyles/colors';
import ChatCard from '../../components/cards/chatCard';
import MessageButton from '../../components/buttons/messageButton';

const Chat = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        {/* Header */}
        <WhiteHeader
          text={'Username'}
          icon={require('../../../assets/images/p5.png')}
          onPress={() => navigation.goBack()}
        />
        <ScrollView>
          {/* Date */}
          <View style={styles.date}>
            <Text style={styles.text1}>Sep 12, 2020</Text>
          </View>
          <ChatCard left={true} text={'How are you?'} />
          <ChatCard right={true} text={'Good 😊'} />
        </ScrollView>
      </View>

      <MessageButton />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  date: {
    backgroundColor: colors.Green,
    width: '30%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: '1.5%',
    borderRadius: 17,
    marginVertical: '5%',
  },
  text1: {
    fontFamily: 'OpenSans-regular',
    color: 'white',
    fontSize: 12,
  },
});
