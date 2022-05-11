import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FiltersHeader from '../../components/header/filtersHeader';

const Filters = () => {
  return (
    <View style={styles.container}>
      <FiltersHeader />
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
