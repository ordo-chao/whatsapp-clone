import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

function Sidebar() {
  const navigation = useNavigation();
  return (
    <View style={styles.sidebar}>
      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Home')}>
        <MaterialIcons name="chat" size={20} color={'white'} />
        <Text style={styles.linkText}>Chats</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Updates')}>
        <MaterialIcons name="update" size={20} color={'white'} />
        <Text style={styles.linkText}>Updates</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Communities')}>
        <MaterialCommunityIcons name="account-group-outline" size={25} color={'white'} />
        <Text style={styles.linkText}>Communities</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Calls')}>
        <MaterialCommunityIcons name="phone-outline" size={25} color={'white'} />
        <Text style={styles.linkText}>Calls</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: 'black',
    width: windowWidth,
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  link: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  linkText: {
    color: 'white',
  },
});

export default Sidebar;
