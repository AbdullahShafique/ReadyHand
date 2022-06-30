import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../../globalStyles/colors';
import HomeHeader from '../../components/header/homeHeader';
import InputFieldWithIcon from '../../components/inputfields/inputFieldWithIcon';
import ServiceDetail2 from '../../components/cards/serviceDetail2';
import ServiceDetailHorizontal from '../../components/cards/serviceDetailHorizontal';
import ColorfullButtons from '../../components/buttons/colorfullButtons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import TodoCard from '../../components/cards/todoCard';
import AddTodoModal from '../../components/modals/addTodoModal';
import OfferBestServicesCard from '../../components/cards/offerBestServicesCard';

const ServiceProviderHome = ({navigation}) => {
  const [todoModal, setTodoModal] = useState(false);
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{marginBottom: '5%'}}>
        <HomeHeader
          Dashboard={true}
          onPress={() => navigation.navigate('Dashboard')}
          typeOfUser={'Service Provider'}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top Buttons */}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginHorizontal: '5%',
            marginBottom: '5%',
          }}>
          <ColorfullButtons
            text1={'$ 550'}
            text2={' Total Earnings'}
            backgroundColor={'#E25050'}
          />
          <ColorfullButtons
            text1={'03'}
            text2={'Active Services'}
            backgroundColor={'#50C8E2'}
          />
          <ColorfullButtons
            text1={'250'}
            text2={'Withdraw'}
            backgroundColor={'#F69762'}
          />
          {/* <ColorfullButtons
            text1={'250'}
            text2={'Name'}
            backgroundColor={'#1E8B85'}
          /> */}
        </View>
        {/* Active Services/jobs */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: '5%',
            marginBottom: '5%',
          }}>
          <Text style={styles.text2}>Active Services/jobs</Text>
          <Pressable onPress={() => console.log('View All')}>
            <Text style={styles.text3}>View All</Text>
          </Pressable>
        </View>

        {[1, 2].map((item, index) => (
          <ServiceDetail2
            key={index}
            onPress={() => navigation.navigate('SelectServices')}
          />
        ))}
        {/* Offer Best Services */}
        <OfferBestServicesCard
          onPress={() => navigation.navigate('AddServiceRequest')}
        />
        {/* ToDo  */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: '5%',
            marginBottom: '5%',
          }}>
          <Text style={styles.text2}>To Do</Text>
          <Pressable onPress={() => setTodoModal(true)}>
            <Text style={styles.text4}>Add</Text>
          </Pressable>
        </View>
        {/* todo Card */}
        <TodoCard />
      </ScrollView>
      <AddTodoModal
        visibility={todoModal}
        onPress={() => setTodoModal(false)}
      />
    </View>
  );
};

export default ServiceProviderHome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
    marginLeft: '7.5%',

    //marginBottom: '5%',
  },
  text2: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
  },
  text3: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 12,
  },
  text4: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Green,
    fontSize: 16,
  },
});
