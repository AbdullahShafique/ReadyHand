import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WhiteHeader from '../../components/header/whiteHeader';
import NotificationCard from '../../components/cards/notificationCard';

const Notifications = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <WhiteHeader text={'Notifications'} onPress={() => navigation.goBack()} />
      {[1, 2, 3, 4, 5].map((item, index) => (
        <NotificationCard
          key={index}
          text={
            'Yesterday’s Notification coming from any side either service provider or consumer'
          }
        />
      ))}
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
