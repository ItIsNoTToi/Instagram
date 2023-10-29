import React, { useEffect, useState} from "react";
import { Image, View ,Text ,StyleSheet , TextInput, SafeAreaView, TouchableHighlight} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Welcome  from "./Welcome";
import Home from './Home';
import Loginemail from "./Loginemail";
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login ({navigation})
{
    const [open, setOpen] = useState(false); // Trạng thái mở hộp thoại dropdown
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [countries, setCountries] = useState([
        { label: 'USA', value: 'usa' },
        { label: 'Canada', value: 'canada' },
        { label: 'UK', value: 'uk' },
        { label: 'VN', value: 'vn' },
        { label: 'CN', value: 'cn' },
        { label: 'France', value: 'france' },
        { label: 'Singapore', value: 'sp' },

        // Add more countries as needed
      ]);
      const handleDropdownOpen = () => {
        // Khi người dùng nhấn để mở hộp thoại dropdown, bạn có thể cập nhật trạng thái open.
        setOpen(true);
      };
    
      const handleDropdownClose = () => {
        // Khi người dùng nhấn để đóng hộp thoại dropdown hoặc chọn một mục, bạn có thể cập nhật trạng thái open.
        setOpen(false);
      };

    const [Phone, setPhone] = useState('');
    const [savedPhone, setSavedPhone] = useState(null);
      const Connect = async() =>
      {
        await AsyncStorage.setItem('savedPhone', Phone);
        if(Phone === '0971505561' || Phone === '+84971505561' || Phone === '1')
        {
          navigation.navigate('Home');
        }
        else{
          Phone === null;
        }
      }

      const handlsavedPhone = async() =>
      {
        const value = await AsyncStorage.getItem('savedPhone');
        if(value === null)
        {
          console.log('true');
          
        }
        Connect();
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
            <View style={{width: '100%', marginTop: 70,height: 50, justifyContent: 'center',}}>
                <View style={{flexDirection: 'row',marginRight:2, width: '100%',height: '100%',alignItems: 'center',justifyContent: 'center'}}>
                    <View style={{width: '26%',}}>
                        <DropDownPicker
                          open={open}
                          setOpen={setOpen}
                          value={selectedCountry}
                          setValue={setSelectedCountry}
                          items={countries}
                          setItems={setCountries}
                          onOpen={handleDropdownOpen}
                          onClose={handleDropdownClose}
                          placeholder="Select: "
                          // defaultValue={selectedCountry}
                          containerStyle={styles.dropdownContainer}
                          style={styles.dropdown}
                          itemStyle={styles.dropdownItem}
                          dropDownStyle={styles.dropdownList}
                          // onChangeItem={(item) => setSelectedCountry(item.value)}
                          // theme="LIGHT"
                          // multiple={true}
                          // mode="BADGE"
                        />
                    </View>
                    <View style={{marginLeft: 2,width: '56%',height: '100%',}}>
                        <TextInput style={{backgroundColor: 'white', width: '100%', height: '100%',borderTopRightRadius: 100, borderBottomRightRadius: 100, }} placeholder="Phone number" onChangeText={(value) => setPhone(value)} value={Phone} />
                    </View>
                </View>
            </View>
            <TouchableHighlight style={{width: '100%', height: 40, marginTop: 20, alignItems: 'center',  }} onPress={handlsavedPhone}>
                <Text style={{paddingTop: 8, color: 'white',width: '60%',borderRadius: 50, height: '100%',backgroundColor:'#f96bf1',textAlign: 'center',}}>
                    Send code
                </Text>
            </TouchableHighlight>
            <View style={{width: '100%', height: 40, marginTop: 50, alignItems: 'center',  }}>
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
            <TouchableHighlight style={{width: '100%', height: 40, marginTop: 20, alignItems: 'center',  }} onPress={()=> navigation.navigate(Loginemail)}>
                <Text style={{paddingTop: 8, color: 'black',width: '60%',borderRadius: 50, height: '100%',backgroundColor: 'white',textAlign: 'center',}}>
                    Sign in with google
                </Text>
            </TouchableHighlight>
            <View style={{ width: '100%', height: 40, marginTop: 20, alignItems: 'center' }}>
                <Text>Gía trị đã lưu: {Phone}</Text>
            </View>
        </SafeAreaView>
    );
    
}
// function ExampleView(props) {
//     return <Icon name="ios-person" size={30} color="#4F8EF7" />;
//   }

const styles = StyleSheet.create({
    dropdownContainer: {
      width: '100%',
      height: '100%',
      zIndex: 1,
    },
    dropdown: {
      backgroundColor: 'white',
      borderBottomLeftRadius: 50,
      borderTopLeftRadius: 50,
    },
    dropdownItem: {
      justifyContent: 'center',
    },
    dropdownList: {
      backgroundColor: 'white',
    },
  });
  

export default Login;