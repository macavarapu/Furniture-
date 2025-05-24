import { StyleSheet, Text, View,Image,TouchableOpacity ,TextInput} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import Specialcard from '../components/Specialcard';

const Homeview = () => {
  return (
    <View style={styles.container}> 
    <View style={styles.topRow}>
        <Image source={require("../assets/images/profile.jpg")} style={styles.avatar} />
        <View style={styles.nameContainer}>
          <Text style={styles.welcomeText}>Welcome,</Text>
          <Text style={styles.nameText}>Besnik Doe</Text>
        </View>
            <TouchableOpacity style={styles.bellContainer}>
          <Icon name="bell" size={20} color="#000" />
        </TouchableOpacity>
    </View>
     <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#999" />
        <TextInput
          placeholder="Search Furniture"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
        <TouchableOpacity>
          <Icon name="sliders" size={20} color="#999" />
        </TouchableOpacity>
      </View>
      <Text style={styles.SpecialText}>Special Offers</Text>
      <Specialcard/>
    </View>
  )
}

export default Homeview

const styles = StyleSheet.create({
   container: {
    padding: 16,
    backgroundColor: '#fff',
  },
   topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
   avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nameContainer: {
    flex: 1,
    marginLeft: 12,
  },
  welcomeText: {
    color: '#555',
    fontSize: 14,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
    bellContainer: {
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 20,
  },
   searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    borderRadius: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#000',
  },
  SpecialText:{
    fontSize:18,
    color:"black",
    fontWeight:"bold",
  },
})