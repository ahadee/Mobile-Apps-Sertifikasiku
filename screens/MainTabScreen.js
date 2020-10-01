import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ProductScreen from './DetailScreen';
import EventScreen from './ProfileScreen';
import PraKerjaScreen from './ExploreScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import DetailScreen from './DetailScreen';

const HomeStack = createStackNavigator();
const ProductStack = createStackNavigator();
const EventStack = createStackNavigator();
const PraKerjaStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Feed" activeColor="#fff">
    <Tab.Screen
      name="Feed"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#087BC4',
        tabBarIcon: ({color}) => (
          <FontAwesome5 name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Product"
      component={ProductStackScreen}
      options={{
        tabBarLabel: 'Product',
        tabBarColor: '#087BC4',
        tabBarIcon: ({color}) => (
          <FontAwesome5 name="th-large" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Event"
      component={EventStackScreen}
      options={{
        tabBarLabel: 'Event',
        tabBarColor: '#087BC4',
        tabBarIcon: ({color}) => (
          <FontAwesome5 name="calendar-alt" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Pra Kerja"
      component={PraKerjaStackScreen}
      options={{
        tabBarLabel: 'Pra Kerja',
        tabBarColor: '#087BC4',
        tabBarIcon: ({color}) => (
          <FontAwesome5 name="address-card" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#087BC4',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Home',
        headerLeft: () => (
          <FontAwesome5
            name={'bars'}
            size={25}
            style={{margin: 10, color: '#fff'}}
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
        headerRight: () => (
          <FontAwesome5
            name={'bell'}
            size={25}
            style={{margin: 20, color: '#fff'}}
            onPress={() => {}}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const ProductStackScreen = ({navigation}) => (
  <ProductStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#087BC4',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ProductStack.Screen
      name="Product"
      component={ProductScreen}
      options={{
        headerLeft: () => (
          <FontAwesome5
            name={'bars'}
            size={25}
            style={{margin: 10, color: '#fff'}}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </ProductStack.Navigator>
);

const EventStackScreen = ({navigation}) => (
  <EventStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#087BC4',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <EventStack.Screen
      name="Event"
      component={EventScreen}
      options={{
        headerLeft: () => (
          <FontAwesome5
            name={'bars'}
            size={25}
            style={{margin: 10, color: '#fff'}}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </EventStack.Navigator>
);

const PraKerjaStackScreen = ({navigation}) => (
  <PraKerjaStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#087BC4',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <PraKerjaStack.Screen
      name="Pra Kerja"
      component={PraKerjaScreen}
      options={{
        headerLeft: () => (
          <FontAwesome5
            name={'bars'}
            size={25}
            style={{margin: 10, color: '#fff'}}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </PraKerjaStack.Navigator>
);
