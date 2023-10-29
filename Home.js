import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loginemail from './Loginemail';

const HomeScreen = ({navigation}) => {
    
  const topbar = [
    {
      image: require('./image/imgDogCard.png'),
      label: 'Add Story',
    },
    {
      image: require('./image/imgDogCard.png'),
      label: 'Add Story',
    },
    {
      image: require('./image/imgDogCard.png'),
      label: 'Add Story',
    },
    {
      image: require('./image/imgDogCard.png'),
      label: 'Add Story',
    },
    {
      image: require('./image/imgDogCard.png'),
      label: 'Add Story',
    },
  ];

  const status = [
    {
      imagest: require('./image/imgDogCard.png'),
      avatar: require('./image/imgDogCard.png'),
      name: 'Maria',
    },
    {
      imagest: require('./image/imgDogCard.png'),
      avatar: require('./image/imgDogCard.png'),
      name: 'Maria',
    },
    {
      imagest: require('./image/imgDogCard.png'),
      avatar: require('./image/imgDogCard.png'),
      name: 'Maria',
    },
    {
      imagest: require('./image/imgDogCard.png'),
      avatar: require('./image/imgDogCard.png'),
      name: 'Maria',
    },
    {
      imagest: require('./image/imgDogCard.png'),
      avatar: require('./image/imgDogCard.png'),
      name: 'Maria',
    },
  ];

  const [count, setCount] = useState(1);
  const [heartfill, setheartfill] = useState(false);

  const like = () =>{
    setheartfill(!heartfill)
    setCount(prevCount => prevCount + 1);
      
  }
  const addtopbar = () =>{
    return topbar.map((item, index) => (
      <ScrollView >
        <View key={index} style={{borderColor: 'gray', borderBottomWidth: 1, paddingBottom: 10, marginTop: 10, alignItems: 'center',}}>
          <Image style={{borderRadius: 100, width: 100,borderColor: 'blue', borderWidth: 1.5, height: 100, margin: 1,}}  source={item.image}/>
          <Text style={{textAlign: 'center', fontSize: 10, marginTop: 2, color: 'darkgray', }}>
            {item.label}
          </Text>
        </View>
      </ScrollView>
        
    ));
  }

  const addstatus = ()=>{
    return status.map((item,index)=>(
      <View style={{borderColor: 'lightgray', borderBottomWidth: 1, paddingBottom: 10, marginTop: 10,}}>
        <View key={index} style={{marginTop: 15,}}>
          <View style={{flexDirection: 'row',}}>
            <Image style={{borderRadius: 100, width: 30, height: 30, borderColor: 'blue', borderWidth: 1.5, margin: 1,}} source={item.avatar}/>
            <Text>{item.name}</Text>
          </View>
          <View style={{marginTop: 20, width: '100%', height: 600, }}>
            <Image style={{width: '100%', height: '100%',}} source={item.imagest}/>
          </View>
          <View style={{width: '20%', flexDirection: 'row',justifyContent: 'space-between' }}>
            <TouchableHighlight onPress={() =>like()} style={{marginLeft: 10,}}>
              <Icon name={heartfill ? "heart" : "heart-outline"} size={30} color={heartfill ? "red" : "black"}/>
            </TouchableHighlight>
            <View>
              <Icon name="cloud" size={30} color="black"/>
            </View>
          </View>
          <View style={{marginLeft: 10,}}>
            <Text style={{fontSize: 18, color: 'black', marginBottom: 3, marginTop: 10,}}>
              {count} Likes
            </Text>
            <Text style={{fontSize: 13, color: 'darkgray', marginBottom: 3,}}>
              View all 2 comments
            </Text>
            <Text style={{fontSize: 10, color: 'darkgray', marginBottom: 3,}}>
              3 hours ago
            </Text>
          </View>
        </View>
      </View>
    ));
  }

  return (
    <View >
      <View style={{marginTop: 40, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between',borderColor: 'gray', borderBottomWidth: 1,}}>
          <View style={{}}>
            <Icon name="camera" size={30} color='black' />
          </View>
          <View style={{paddingTop: 8,}}>
            <Text style={{textAlign: 'center', fontSize: 15, fontWeight: 'bold',}}>
              Instagram
            </Text>
          </View>
          <View style={{}}>
            <Icon name="list" size={30} color='black' />
          </View>
      </View>
      <ScrollView scrollsToTop={true}>
        <View style={{marginTop:5, flexDirection: 'row', width: 650,}}>
          {addtopbar()}
        </View>
        <View>
          {addstatus()}
        </View>
      </ScrollView>
      
    </View>
  );
}

const Profile  = ({navigation}) => 
{
  const btnlogout = async() => {
    
    navigation.navigate('Loginemail');
  }
  
  return(
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{marginTop: 200,}} onPress={btnlogout}> Log out  </Text>
      </View>
    </ScrollView>
  )
}


const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator initialRouteName="Home"
      screenOptions={{
        tabBarActiveBackgroundColor: '#f190ea',
        tabBarActiveTintColor: 'white',
        tabBarInactiveBackgroundColor: '#f190da',
        tabBarBadge: '3',
        tabBarInactiveTintColor: 'white',
        headerShown: false, 
      }}>
      <Tab.Screen name="Home"  options={
      {
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
      }} 
      component={HomeScreen} />
      
      <Tab.Screen name="Profile"  options={
      {
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={size} color={color} />
          ),
      }} 
      component={Profile} />
    </Tab.Navigator>
  );
}

function AppHome() {
  return (
      <MyTab/>
  );
}

export default AppHome;
