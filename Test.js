

import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Tạo một Stack Navigator
const MyStackNavigator = createStackNavigator(
  {
    Screen1: {
      screen: Screen1,
    },
    Screen2: {
      screen: Screen2,
    },
  },
  {
    initialRouteName: 'Screen1',
    defaultNavigationOptions: {
      title: 'Màn hình mặc định',
    },
    navigationOptions: {
      headerTintColor: 'blue',
      headerStyle: {
        backgroundColor: 'lightblue',
      },
    },
  }
);

// Định nghĩa các screenListeners cho từng màn hình
const screenListeners = {
  Screen1: {
    focus: () => {
      console.log('Màn hình 1 được focus.');
      // Thực hiện các hành động tùy chỉnh khi màn hình 1 được focus.
    },
    blur: () => {
      console.log('Màn hình 1 mất focus.');
      // Thực hiện các hành động tùy chỉnh khi màn hình 1 mất focus.
    },
  },
  Screen2: {
    focus: () => {
      console.log('Màn hình 2 được focus.');
      // Thực hiện các hành động tùy chỉnh khi màn hình 2 được focus.
    },
    blur: () => {
      console.log('Màn hình 2 mất focus.');
      // Thực hiện các hành động tùy chỉnh khi màn hình 2 mất focus.
    },
  },
};

// Kết hợp Stack Navigator và screenListeners
MyStackNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const listeners = screenListeners[routeName];
  return {
    ...MyStackNavigator.router.getStateForAction(navigation.state, navigation.state),
    ...listeners,
  };
};

const AppContainer = createAppContainer(MyStackNavigator);

export default AppContainer;