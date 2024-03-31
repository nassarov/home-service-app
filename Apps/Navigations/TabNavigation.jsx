import { View, Text, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import BookingScreen from '../Screens/BookingScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function TabNaviagtion() {
    return (

        <View className="flex-1">
         <Tab.Navigator screenOptions={{headerShown:false, headerBackground:'light',}} >
             <Tab.Screen name="home" component={HomeScreen} 
             options={{tabBarLabel:
                 ({color})=>(
                 <Text style={{color:color,fontSize:12, marginBottom:5}}>Home</Text>
                 ),
             }} 
             />
              <Tab.Screen name="booking" component={BookingScreen} 
             options={{tabBarLabel:
                 ({color})=>(
                 <Text style={{color:color,fontSize:12, marginBottom:5}}>Booking</Text>
                 ),
             }} 
             />
         </Tab.Navigator>
         </View>
     )
     }