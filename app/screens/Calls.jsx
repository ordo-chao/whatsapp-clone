import { StyleSheet, Text, View, StatusBar, ScrollView, Image, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions } from 'react-native';

// Icons
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import Sidebar from '../components/sidebar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function Call() {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <ScrollView style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Calls</Text>
            <View style={styles.headerIcons} >
              <Feather name="search" size={25} color="white" />
              <Entypo name="dots-three-vertical" size={25} color="white" />
            </View>
          </View>


          <View style={styles.favourite}>
          <View style={styles.favouriteheader}>
            <Text style={styles.subheader}>Favourites</Text>
            <Text style={styles.more}>More</Text>
          </View>
          <View style={styles.chat}>
            <View style={styles.profilePictureDiv}>
              <Image source={require('../assets/Prince.jpg')} style={styles.profilePicture} />
            </View>
            <View style={styles.favouritecontent}>
              <Text style={styles.messageSender}>Kenyans.co.ke</Text>
            </View>
            <View style={styles.favouriteoption}>
              <Ionicons name="call-outline" color={'white'} size={25} />
              <Ionicons name="videocam-sharp" color={'white'} size={25} />
            </View>
          </View>

          <View style={styles.chat}>
            <View style={styles.profilePictureDiv}>
              <Image source={require('../assets/Prince.jpg')} style={styles.profilePicture} />
            </View>
            <View style={styles.favouritecontent}>
              <Text style={styles.messageSender}>Kenyans.co.ke</Text>
            </View>
            <View style={styles.favouriteoption}>
              <Ionicons name="call-outline" color={'white'} size={25} />
              <Ionicons name="videocam-sharp" color={'white'} size={25} />
            </View>
          </View>

          <View style={styles.chat}>
            <View style={styles.profilePictureDiv}>
              <Image source={require('../assets/Prince.jpg')} style={styles.profilePicture} />
            </View>
            <View style={styles.favouritecontent}>
              <Text style={styles.messageSender}>Kenyans.co.ke</Text>
            </View>
            <View style={styles.favouriteoption}>
              <Ionicons name="call-outline" color={'white'} size={25} />
              <Ionicons name="videocam-sharp" color={'white'} size={25} />
            </View>
          </View>
          </View>

          {/* Recent calls */}

          <View style={styles.recent}>
            <Text style={styles.subheader}>Recent</Text>

            <View style={styles.chat}>
              <View style={styles.profilePictureDiv}>
                <Image source={require('../assets/Prince.jpg')} style={styles.profilePicture} />
              </View>
              <View style={styles.messageContent}>
                <Text style={styles.messageSender}>Kenyans.co.ke</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.message}>310k followers</Text>
              </View>
              <View style={styles.messageDetails}>
                <Ionicons name="call-outline" color={'white'} size={25} />
              </View>
            </View>

            <View style={styles.chat}>
              <View style={styles.profilePictureDiv}>
                <Image source={require('../assets/Prince.jpg')} style={styles.profilePicture} />
              </View>
              <View style={styles.messageContent}>
                <Text style={styles.messageSender}>Kenyans.co.ke</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.message}>310k followers</Text>
              </View>
              <View style={styles.messageDetails}>
                <Ionicons name="call-outline" color={'white'} size={25} />
              </View>
            </View>

            <View style={styles.chat}>
              <View style={styles.profilePictureDiv}>
                <Image source={require('../assets/Prince.jpg')} style={styles.profilePicture} />
              </View>
              <View style={styles.messageContent}>
                <Text style={styles.messageSender}>Kenyans.co.ke</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.message}>310k followers</Text>
              </View>
              <View style={styles.messageDetails}>
              <Ionicons name="videocam-sharp" color={'white'} size={25} />
              </View>
            </View>

            <View style={styles.chat}>
              <View style={styles.profilePictureDiv}>
                <Image source={require('../assets/Prince.jpg')} style={styles.profilePicture} />
              </View>
              <View style={styles.messageContent}>
                <Text style={styles.messageSender}>Kenyans.co.ke</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.message}>310k followers</Text>
              </View>
              <View style={styles.messageDetails}>
              <Ionicons name="videocam-sharp" color={'white'} size={25} />
              </View>
            </View>

            <View style={styles.chat}>
              <View style={styles.profilePictureDiv}>
                <Image source={require('../assets/Prince.jpg')} style={styles.profilePicture} />
              </View>
              <View style={styles.messageContent}>
                <Text style={styles.messageSender}>Kenyans.co.ke</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.message}>310k followers</Text>
              </View>
              <View style={styles.messageDetails}>
              <Ionicons name="videocam-sharp" color={'white'} size={25} />
              </View>
            </View>

            <View style={styles.chat}>
              <View style={styles.profilePictureDiv}>
                <Image source={require('../assets/Prince.jpg')} style={styles.profilePicture} />
              </View>
              <View style={styles.messageContent}>
                <Text style={styles.messageSender}>Kenyans.co.ke</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.message}>310k followers</Text>
              </View>
              <View style={styles.messageDetails}>
              <Ionicons name="videocam-sharp" color={'white'} size={25} />
              </View>
            </View>
          </View>

          <Text style={styles.bottomText}><Fontisto name="locked" />Your personal calls are <Text style={styles.green}>end-to-end encrypted</Text></Text>

        </ScrollView>
      </SafeAreaView>
      <Sidebar />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  content:
  {
    height: windowHeight * 0.9,
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
  favourite:
  {
    padding: 10,
  },
  favouriteheader:
  {
    display: 'flex',
    flexDirection: 'row',
    // padding: 10,
    justifyContent: 'space-between',
  },
  subheader:
  {
    color: 'white',
    fontSize: 15,
    marginBottom: 10,
  },
  more:
  {
    color: 'green',
    fontSize: 18,
  },
  // Chat
  chat:
  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  profilePictureDiv:
  {
    width: 50,
    height: 50,
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
    width: '68%',
  },
  favouritecontent:
  {
    width: '60%',
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
    width: '10%',
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

  favouriteoption:
  {
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
  },
  recent:
  {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
  },
  bottomText:
  {
    marginBottom: 100,
    color: 'grey',
    textAlign: 'center',
    marginTop: 20,
  },
  green:
  {
    color: 'rgb(0, 255, 68)',
  },

});

export default Call;
