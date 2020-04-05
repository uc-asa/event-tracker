import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Initial from './views/Initial';
import EventList from './views/EventList';
import Event from './views/Event';

// Create our stack navigator
let RootStack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="initial">
                <RootStack.Screen name="initial" component={Initial} />
                <RootStack.Screen
                    name="eventList"
                    component={EventList}
                    options={({ route }) => ({ title: route.params })}
                />
                <RootStack.Screen
                    name="event"
                    component={Event}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
  }
  
export default App;