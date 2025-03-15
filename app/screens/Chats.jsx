import { StyleSheet, Text, View, StatusBar, ScrollView, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions } from 'react-native';


// Icons
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import Sidebar from '../components/sidebar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const App = () => {

  return (
      <SafeAreaProvider style={styles.container} >
        <StatusBar style="auto" />
        <SafeAreaView>

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>WhatsApp</Text>
            <View style={styles.headerIcons} >
              <SimpleLineIcons name="camera" size={25} color="white" />
              <Feather name="search" size={25} color="white" />
              <Entypo name="dots-three-vertical" size={25} color="white" />
            </View>
          </View>

          {/* Filter */}
          <ScrollView style={styles.filter} horizontal={true} >
            <Text style={styles.allFilter} >All</Text>
            <Text style={styles.allFilter} >Unread 30</Text>
            <Text style={styles.allFilter} >Favourite 1</Text>
            <Text style={styles.allFilter} >Group 22</Text>
            <Text style={styles.allFilter} ><Ionicons name="add" size={20} /></Text>
          </ScrollView>

          {/* Archive */}
          <View style={styles.archive}>
            <Foundation name="archive" size={27} color="rgb(138, 139, 138)" />
            <Text style={styles.archiveText}>Archived</Text>
          </View>

          {/* Chats */}
          <ScrollView style={styles.content}>
            {/* Chat example */}
            <View style={styles.chat}>
              <View style={styles.profilePictureDiv}>
                <Image source={require('../assets/Prince.jpg')} style={styles.profilePicture} />
              </View>
              <View style={styles.messageContent}>
                <Text style={styles.messageSender}>Wifey</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.message}>okay oakd dndnisd nedfnief kdvedf dnjc sads</Text>
              </View>
              <View style={styles.messageDetails}>
                <Text style={styles.timeStamp}>14:09</Text>
                <View style={styles.pin}>
                  <MaterialIcons name="push-pin" size={15} color={'rgb(138, 139, 138)'} />
                  <Text style={styles.messageCount}>100</Text>
                </View>
              </View>
            </View>
            <View style={styles.chat}>
              <View style={styles.profilePictureDiv}>
                <Image source={require('../assets/Prince.jpg')} style={styles.profilePicture} />
              </View>
              <View style={styles.messageContent}>
                <Text style={styles.messageSender}>Math 312 group</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.message}>Joy: d dndnisd nedfnief kdvedf dnjc sads</Text>
              </View>
              <View style={styles.messageDetails}>
                <Text style={styles.timeStamp}>14:09</Text>
                <View style={styles.pin}>
                  <MaterialIcons name="push-pin" size={15} color={'rgb(138, 139, 138)'} />
                  <Text style={styles.messageCount}>100</Text>
                </View>
              </View>
            </View>
            <View style={styles.chat}>
              <View style={styles.profilePictureDiv}>
                <Image source={require('../assets/Prince.jpg')} style={styles.profilePicture} />
              </View>
              <View style={styles.messageContent}>
                <Text style={styles.messageSender}>Math 312 group</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.message}>nuunjnjnd dndnisd nedfnief kdvedf dnjc sads</Text>
              </View>
              <View style={styles.messageDetails}>
                <Text style={styles.timeStamp}>14:09</Text>
                {/* <View style={styles.pin}>
                  <MaterialIcons name="push-pin" size={15} color={'rgb(138, 139, 138)'} />
                <Text style={styles.messageCount}>100</Text>
                </View> */}
              </View>
            </View>
            <View style={styles.chat}>
              <View style={styles.profilePictureDiv}>
                <Image source={require('../assets/Prince.jpg')} style={styles.profilePicture} />
              </View>
              <View style={styles.messageContent}>
                <Text style={styles.messageSender}>Math 312 group</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.message}>Joy: d dndnisd nedfnief kdvedf dnjc sads</Text>
              </View>
              <View style={styles.messageDetails}>
                <View>
                  <View style={styles.groupmessagesCount}>
                    <Text>100</Text>
                    <AntDesign name="right" size={14} color={'black'} />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.bottom}>
            <Text style={styles.bottomText}><Fontisto name="locked" />Your personal calls are <Text style={styles.green}>end-to-end encrypted</Text></Text>
            </View>
          </ScrollView>

          {/* Contact link button */}
          <View style={styles.contactLink}>
            <AntDesign name="plussquare" size={20} color={'black'}/>
          </View>


        </SafeAreaView>
        <Sidebar />
      </SafeAreaProvider>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    // Header
    header:
    {
      padding: 10,
      paddingTop: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 0.5,
      borderBottomColor: 'white',
    },
    headerText:
    {
      color: 'white',
      fontSize: 25,
    },
    headerIcons:
    {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 25,
    },

    // Filter
    filter:
    {
      display: 'flex',
      padding: 10,
      flexDirection: 'row',
      gap: 10,
    },
    allFilter:
    {
      color: 'rgb(138, 139, 138)',
      backgroundColor: 'rgb(47, 48, 47)',
      textAlign: 'center',
      padding: 3,
      paddingLeft: 10,
      paddingRight: 10,
      borderRadius: 20,
      maxWidth: 100,
      minWidth: 40,
      marginRight: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    // Archive
    archive:
    {
      display: 'flex',
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
    },
    archiveText:
    {
      color: 'rgb(138, 139, 138)',
      fontSize: 18,
    },

    // Chat
    content:
    {
      padding: 10,
      paddingRight: 0,
      height: windowHeight * 0.7,
    },
    chat:
    {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    profilePictureDiv:
    {
      width: 50,
      height: 50,
      padding: 5,
      borderColor: 'rgb(68, 68, 68)',
      borderWidth: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
    },
    profilePicture:
    {
      width: 40,
      height: 40,
      borderRadius: 50,
    },
    messageContent:
    {
      // backgroundColor: 'aqua',
      width: '68%',
    },
    messageSender:
    {
      color: 'white',
      fontSize: 17,
      fontWeight: 'bold',
    },
    message:
    {
      color: 'rgb(68, 68, 68)',
      fontSize: 14,
      width: '98%',
    },
    messageDetails:
    {
      width: '16%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5,
    },
    pin:
    {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      gap: 8,
    },
    timeStamp:
    {
      color: 'rgb(0, 255, 0)',
    },
    messageCount:
    {
      backgroundColor: 'rgb(0, 255, 0)',
      width: 20,
      height: 20,
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      padding: 1,
      fontSize: 11,
    },
    groupmessagesCount:
    {
      backgroundColor: 'rgb(0, 255, 0)',
      width: 45,
      height: 20,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      padding: 1,
      fontSize: 11,
      gap: 1,
    },

    // Contact link button
    contactLink:
    {
      backgroundColor: 'rgb(0, 255, 0)',
      width: 60,
      height: 60,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 70,
      right: 10,
      borderRadius: 10,
    },
    sidebar:
    {
      backgroundColor: 'black',
      width: windowWidth ,
      height: 60,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'absolute',
      bottom: 23,
    },
    link:
    {
      display: 'flex',
      flexDirection: 'colomn',
      alignItems: 'center',
    },
    linkText:
    {
      color: 'white',
    },
    bottomText:
    {
      marginBottom: 0,
      color: 'grey',
      textAlign: 'center',
      marginTop: 20,
    },
    green:
    {
      color: 'rgb(0, 255, 68)',
    },
  }
);

export default App;
