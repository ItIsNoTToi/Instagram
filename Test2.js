import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Home from './Home';

const LoginWithPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countries, setCountries] = useState([
    { label: 'USA', value: 'usa' },
    { label: 'Canada', value: 'canada' },
    { label: 'UK', value: 'uk' },
    // Add more countries as needed
  ]);

  const handleLogin = () => {
    if (!phoneNumber || !selectedCountry) {
      // Kiểm tra xem số điện thoại và mã vùng đã được chọn.
      alert('Please enter your phone number and select a country.');
      return;
    }
  
    // Ở đây, bạn có thể thực hiện logic đăng nhập của bạn.
    // Ví dụ: Gửi mã OTP đến số điện thoại sử dụng API hoặc kiểm tra nó trong cơ sở dữ liệu.
  
    // Đoạn mã dưới đây giả định bạn đã thực hiện đăng nhập thành công và điều hướng đến trang mới.
    navigation.navigate('LoggedInScreen');
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login with Phone</Text>
      <DropDownPicker
        items={countries}
        placeholder="Select Country"
        defaultValue={selectedCountry}
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        itemStyle={styles.dropdownItem}
        dropDownStyle={styles.dropdownList}
        onChangeItem={(item) => setSelectedCountry(item.value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  dropdownContainer: {
    width: '80%',
    marginBottom: 20,
  },
  dropdown: {
    backgroundColor: 'white',
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },
  dropdownList: {
    backgroundColor: 'white',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default LoginWithPhone;
