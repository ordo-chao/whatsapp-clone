import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import App from './screens/Chats';
import Updates from './screens/Updates';
import Call from './screens/Calls';

const Stack = createNativeStackNavigator();

const Layout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="Updates" component={Updates} />
        <Stack.Screen name="Calls" component={Call} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default Layout;
