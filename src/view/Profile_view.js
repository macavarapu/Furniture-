
// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather'; 

// const Profileview = ({ navigation }) => {
//   const handleLogout = () => {
//     // Clear async storage or auth tokens if needed
//     navigation.replace("login");
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <TouchableOpacity style={styles.backButton}>
//         <Icon name="arrow-left" size={24} />
//       </TouchableOpacity>

//       <View style={styles.profileContainer}>
//         <Image source={require("../assets/images/profile.jpg")}style={styles.avatar}
//         />
      
//         <Text style={styles.name}>Singaraiah</Text>
//         {/* <Text style={styles.email}>mansurul952@gmail.com</Text> */}
//       </View>

//       <View style={styles.menuContainer}>
//         <MenuItem icon="user" title="Profile" />
//         <MenuItem icon="credit-card" title="Payment Methods" />
//         <MenuItem icon="box" title="Order History" />
//         <MenuItem icon="map-pin" title="Delivery Address" />
//         <MenuItem icon="help-circle" title="Support Center" />
//         <MenuItem icon="shield" title="Legal Policy" />
//       </View>

//       <TouchableOpacity onPress={handleLogout}>
//         <Text style={styles.logout}>Log Out</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const MenuItem = ({ icon, title }) => (
//   <TouchableOpacity style={styles.menuItem}>
//     <Icon name={icon} size={20} color="#000" />
//     <Text style={styles.menuText}>{title}</Text>
//     <Icon name="chevron-right" size={20} color="#999" style={{ marginLeft: 'auto' }} />
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   backButton: {
//     margin: 16,
//   },
//   profileContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   avatar: {
//     width: 90,
//     height: 90,
//     borderRadius: 45,
//     marginBottom: 10,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#101817',
//   },
//   email: {
//     fontSize: 14,
//     color: '#828A89',
//   },
//   menuContainer: {
//     marginHorizontal: 20,
//     marginBottom: 30,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 14,
//     borderRadius: 12,
//     backgroundColor: '#F6F6F6',
//     marginVertical: 6,
//   },
//   menuText: {
//     marginLeft: 12,
//     fontSize: 16,
//     color: '#000',
//   },
//   logout: {
//     textAlign: 'center',
//     color: 'red',
//     fontWeight: 'bold',
//     fontSize: 16,
//     paddingVertical: 20,
//   },
// });

// export default Profileview;




import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profileview = ({ navigation }) => {
  const [email, setEmail] = useState('');

  // Get email from AsyncStorage
  useEffect(() => {
    const fetchEmail = async () => {
      const storedEmail = await AsyncStorage.getItem('userEmail');
      if (storedEmail) {
        setEmail(storedEmail);
      }
    };
    fetchEmail();
  }, []);

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            await AsyncStorage.clear(); // Clear all stored items
            navigation.replace("login"); // Navigate to login screen
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow-left" size={24} />
      </TouchableOpacity>

      <View style={styles.profileContainer}>
        <Image source={require("../assets/images/profile.jpg")} style={styles.avatar} />
        <Text style={styles.name}>Singaraiah</Text>
        {email ? <Text style={styles.email}>{email}</Text> : null}
      </View>

      <View style={styles.menuContainer}>
        <MenuItem icon="user" title="Profile" />
        <MenuItem icon="credit-card" title="Payment Methods" />
        <MenuItem icon="box" title="Order History" />
        <MenuItem icon="map-pin" title="Delivery Address" />
        <MenuItem icon="help-circle" title="Support Center" />
        <MenuItem icon="shield" title="Legal Policy" />
      </View>

      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logout}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const MenuItem = ({ icon, title }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Icon name={icon} size={20} color="#000" />
    <Text style={styles.menuText}>{title}</Text>
    <Icon name="chevron-right" size={20} color="#999" style={{ marginLeft: 'auto' }} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    margin: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#101817',
  },
  email: {
    fontSize: 14,
    color: '#828A89',
  },
  menuContainer: {
    marginHorizontal: 20,
    marginBottom: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#F6F6F6',
    marginVertical: 6,
  },
  menuText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#000',
  },
  logout: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 20,
  },
});

export default Profileview;
