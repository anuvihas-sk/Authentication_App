import { Tabs } from "expo-router";
import {Fontawesome} from '@expo/vector-icons';

export default function RootLayout() {
    return (
      <Tabs>
        <Tabs.Screen 
         name="index"
         options={{ headerShown: false, title: "Home", 
      tabBarIcon: ({ color }) => (
             <Fontawesome name="home" color={color} />
           )}}

         />
              
      </Tabs>
    );
}