import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import WhiteHeader from '../../components/header/whiteHeader';
import ServiceDetail from '../../components/cards/serviceDetail';

const Search = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      {/* Header */}

      <WhiteHeader
        onPress={() => navigation.goBack()}
        text={route.params.text}
      />
      <View style={{marginTop: '5%'}} />

      {/* Flatlist */}
      <FlatList
        data={[1, 2, 3, 4]}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ServiceDetail />}
        // <ServiceDetail />
        keyExtractor={item => item}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
