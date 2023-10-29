//home, new post, log in, sign up
import React, { Component } from "react";
import {StyleSheet, Text, View, TouchableHighlight, SafeAreaView, Image, BackHandler} from 'react-native';
import Login from "./Login";
import Signup from "./Signup";
import Loginemail from './Loginemail';
import Home from './Home';
import Signupemail from "./Signupemail";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

const Welcome = ({navigation}) =>
{
    return (
        <SafeAreaView>
            <View style={{height: '100%',width: '100%', justifyContent: 'center', alignItems:'center',backgroundColor:'white',}}>
                <View style={{justifyContent: 'center',  alignItems:'center', }}>
                    <Image style={{width: 100, height: 100,}} source={require("./image/imagephotography.jpg")}/>
                </View>
                <View style={{ justifyContent: 'center', alignItems:'center',}}>
                    <Text style={{color: '#2bc2ec',fontWeight: 'bold', fontSize: 26,}}> Welcome to Instamobile</Text>
                </View>
                {/*,opacity: 0.39*/}
                <View style={{ width: '100%',marginTop: 17, justifyContent: 'center', alignItems:'center'}}>
                    <Text style={{ width: '62%',}}>Click to Log In to make a your account</Text>
                </View>
                <TouchableHighlight
                    style={{
                        marginTop: 20,
                        height: 40,
                        width: '58%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => navigation.navigate(Login)}>
                    <Text style={{
                        width: '100%',
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: 'white',
                        backgroundColor: '#2bc2ec',
                        borderRadius: 50,
                        paddingTop: 8
                    }}>
                        Log In
                    </Text>
                </TouchableHighlight>
                {/*onPress={() => navigation.navigate('test')}*/}
                <View  style={{  marginTop: 20,height: 40,width: '58%',justifyContent: 'center', alignItems:'center'}}>
                    <Text onPress={() => navigation.navigate(Signup)} style={{ width: '100%',height: 40,justifyContent: 'center',alignItems:'center',textAlign: 'center',color: '#2bc2ec',backgroundColor: 'white',borderWidth: 1,borderColor: '#2bc2ec',borderRadius: 50,paddingTop: 8,}}>
                        Sign Up
                    </Text>
                </View>
                {/* <View style={{  marginTop: 20,height: 40,width: '58%',justifyContent: 'center', alignItems:'center'}}>
                    <Text onPress={() => navigation.navigate('test')} style={{ width: '100%',height: 40,justifyContent: 'center',alignItems:'center',textAlign: 'center',color: 'blue',backgroundColor: 'white',borderWidth: 1,borderColor: 'blue',borderRadius: 50,paddingTop: 8,}}>
                        Sign Up 2
                    </Text>
                </View> */}

            </View>
        </SafeAreaView>
    );
}

const Stack = createStackNavigator();
//"screenOptions={{ headerShown: false }}" dung de an header
const App = () =>{
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen  name="Welcome"  component={Welcome}  />   
            <Stack.Screen name="Login"  component={Login} /> 
            <Stack.Screen name="Loginemail"  component={Loginemail} /> 
            <Stack.Screen name="Signup"  component={Signup} />
            <Stack.Screen name="Signupemail"  component={Signupemail} />
            <Stack.Screen name="Home" component={Home}/>
            {/* <Stack.Screen name="Newpost" component={Newpost}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }


export default App;