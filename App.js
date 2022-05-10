import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchView from './src/views/Search';
import HistoryView from './src/views/History';
import FavoriteView from './src/views/Favorite';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailView from './src/views/Detail';
import { Platform } from 'react-native';
import TabBar from './src/components/TabBar';
import styled from 'styled-components/native';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Search"
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tab.Screen name="History" component={HistoryView} />
        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Favorite" component={FavoriteView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Search"
        component={SearchView}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Details" component={DetailView} />
    </HomeStack.Navigator>
  );
}
