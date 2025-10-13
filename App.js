import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';

// Import providers
import {ContactProvider} from './src/utils/ContactContext';

// Import screens
import ContactListScreen from './src/screens/ContactList/ContactListScreen';
import AddContactScreen from './src/screens/AddContact/AddContactScreen';

// Import styles
import {Colors} from './src/styles/globalStyles';

const Stack = createNativeStackNavigator();

// Simple ContactDetailsScreen placeholder (create this file)
const ContactDetailsScreen = () => {
  return (
    <div style={{padding: 20}}>
      <h2>Contact Details Screen</h2>
      <p>This screen will show contact details.</p>
    </div>
  );
};

const App = () => {
  return (
    <ContactProvider>
      <NavigationContainer>
        <StatusBar 
          backgroundColor={Colors.primary} 
          barStyle="light-content" 
        />
        <Stack.Navigator
          initialRouteName="ContactList"
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.text.light,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            contentStyle: {
              backgroundColor: Colors.background,
            },
          }}>
          <Stack.Screen
            name="ContactList"
            component={ContactListScreen}
            options={{
              title: 'Contacts',
            }}
          />
          <Stack.Screen
            name="AddContact"
            component={AddContactScreen}
            options={{
              title: 'Add Contact',
            }}
          />
          <Stack.Screen
            name="ContactDetails"
            component={ContactDetailsScreen}
            options={{
              title: 'Contact Details',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContactProvider>
  );
};

export default App;