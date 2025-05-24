
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

 
import Loginview from "../view/Login_view";
import Signupview from "../view/Signup_view";
import Homeview from "../view/Home_view";
import Favouriteview from "../view/Favourite_view";
import Shoppingview from "../view/Shopping_view";
import Profileview from "../view/Profile_view";
import Scnnerview from "../view/Scnner_view";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FloatingTabButton = ({ children, onPress }) => (
  <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
    <View style={styles.floatingButtonInner}>{children}</View>
  </TouchableOpacity>
);


const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
         tabBarActiveTintColor: '#008060',
       
      }}
    >
      <Tab.Screen
        name="Home"
        component={Homeview}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign name="home" size={26} color={focused ? "#008060" : "#999"} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favouriteview}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="favorite-border" size={26} color={focused ? "#008060" : "#999"} />
          ),
        }}
      />

      {/* Floating Center Button */}
      <Tab.Screen
        name="Scanner"
        component={Scnnerview}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="qrcode-scan" size={30} color="white" />
          ),
          tabBarButton: (props) => <FloatingTabButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Shopping"
        component={Shoppingview}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="shopping-cart" size={26} color={focused ? "#008060" : "#999"} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profileview}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="person-outline" size={26} color={focused ? "#008060" : "#999"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="login" component={Loginview} />
        <Stack.Screen name="signup" component={Signupview} />
        <Stack.Screen name="Bottom" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Route = () => {
  return <StackNavigation />;
};

export default Route;

const styles = StyleSheet.create({
 
  floatingButton: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButtonInner: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#008060',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
});

