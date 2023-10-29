import React, { Children, useState, useEffect} from "react";
import { Image, View ,Text ,StyleSheet , TextInput, SafeAreaView, TouchableHighlight} from "react-native";
import { ScrollView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Welcome  from "./Welcome";
import Login from "./Login";
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';

function Loginemail ({navigation})
{
    const [email, setChangeEmail] = useState('');
    const [savedEmail, setSavedEmail] = useState(null);
    const [password, setPassword] = useState('');
    const [savedPassword, setSavedPassword] = useState(null)
    
    const getData = async () => {
        await AsyncStorage.setItem('savedEmail',email);
        await AsyncStorage.setItem('savedPassword',password);
        if( (email === 'a@gmail.com' && password === '123') || (email === 'a' && password === '1') )
        {
            console.log('true')
            navigation.navigate('Home')
        }
        else
        {
            email = null
             password == null
            console.log('cant connect')
        }
    };
      
    const chuyenhuong = async() =>
    {
        const valueemail = await AsyncStorage.getItem('savedEmail')
        const valuepassword = await AsyncStorage.getItem('savedPassword')
        if(valueemail === null && valuepassword === null)
        {
          console.log('true');
          
        }
        getData();
    }

    return(
        <SafeAreaView>
            <TouchableHighlight onPress={() => navigation.navigate('Welcome')} style={{position: 'absolute', marginTop:40, justifyContent: 'flex-start', marginLeft: 14,}}>
                <Icon name="arrow-back" size={24} color="#f96bf1" />
            </TouchableHighlight>
            <View style={{ marginTop: 80, marginLeft:25,}}>
                <Text style={{color: '#f96bf1', fontSize: 30, justifyContent: 'flex-start',}}>
                    Sign In
                </Text>
            </View>
            <View style={{width: '100%', marginTop: 56,height: 40, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput style={{backgroundColor: 'white', width: '70%', height: '100%',borderRadius: 50, }} placeholder="Email" editable onChangeText={(value) => setChangeEmail(value)} value={email}/>
            </View>
            <View style={{width: '100%', marginTop: 10,height: 40, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput style={{backgroundColor: 'white', width: '70%', height: '100%',borderRadius: 50, marginTop: 10, }} placeholder="Password" secureTextEntry onChangeText={(value) => setPassword(value)} value={password}/>
            </View>
            <Text onPress={() => alert("you forgot your password?")} style ={{ marginTop: 10, textAlign: 'right',color: '#2bc2ec'}}>Forgot Password?</Text>
            <TouchableHighlight style={{width: '100%', height: 40, marginTop: 20, alignItems: 'center',  }} onPress={chuyenhuong}>
                <Text style={{paddingTop: 8, color: 'white',width: '60%',borderRadius: 50, height: '100%',backgroundColor:'#f96bf1',textAlign: 'center',}}>
                    Log In
                </Text>
            </TouchableHighlight>
            <View style={{width: '100%', height: 40, marginTop: 20, alignItems: 'center',  }}>
                    <Text style={{marginTop: 12,}}>
                    OR
                </Text>
            </View>
            <TouchableHighlight style={{width: '100%', height: 40, marginTop: 20, alignItems: 'center',  }} onPress={()=> alert("Using Facebook")}>
                <Text style={{paddingTop: 8, color: 'white',width: '60%',borderRadius: 50, height: '100%',backgroundColor:'#f96bf1',textAlign: 'center',}}>
                    Login With Facebook
                </Text>
            </TouchableHighlight>
            <TouchableHighlight style={{width: '100%', height: 40, marginTop: 20, alignItems: 'center',  }} onPress={()=> alert("Using Apple")}>
                <View style={{width: '60%',}}>
                    <Text style={{paddingTop: 8, color: 'white',width: '100%',borderRadius: 50, height: '100%',backgroundColor:'black',textAlign: 'center',}}>
                        Sign in with Apple
                    </Text>
                    {/* <Icon name="logo-apple" size={26} color={"white"} style={{position: 'absolute', marginLeft: 50, marginTop: 3}} /> */}
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={{width: '100%', height: 40, marginTop: 20, alignItems: 'center',  }} onPress={()=> navigation.navigate(Login)}>
                <Text style={{paddingTop: 8, color: 'black',width: '60%',borderRadius: 50, height: '100%',backgroundColor: 'white',textAlign: 'center',}}>
                    Sign in with phone number
                </Text>
            </TouchableHighlight>
            <View style={{ width: '100%', height: 40, marginTop: 20, alignItems: 'center' }}>
                <Text>Gía trị đã lưu: {savedEmail}</Text>
            </View>
            <View style={{ width: '100%', height: 40, marginTop: 20, alignItems: 'center' }}>
                <Text >Gía trị đã lưu: {password}</Text>
            </View>
        </SafeAreaView>
    );
    
}
// function ExampleView(props) {
//     return <Icon name="ios-person" size={30} color="#4F8EF7" />;
//   }

// const styles = StyleSheet.create({
//     overlay:
//     {
//         ...StyleSheet.absoluteFillObject,
//     }
// })
export default Loginemail;