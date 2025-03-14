import { StyleSheet, Text, View, StatusBar, ScrollView, Image, Button } from 'react-native';
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import Sidebar from '../components/sidebar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DetailsScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Updates</Text>
          <View style={styles.headerIcons} >
            <Feather name="search" size={25} color="white" />
            <Entypo name="dots-three-vertical" size={25} color="white" />
          </View>
        </View>

        <ScrollView style={styles.content}>
          {/* Status */}
          <View style={styles.status}>
            <Text style={styles.statusheader}>Status</Text>
            <ScrollView style={styles.statuscontent} horizontal={true} >
              <View style={styles.update} >
                <View style={styles.myprofile}>
                  <Ionicons name="person" style={styles.person} size={30} />
                  <AntDesign name="plus" style={styles.plus} size={15} />
                </View>
                <Text style={styles.updatetext} >Add status</Text>
              </View>

              <View style={styles.update} >
                <View style={styles.profile}>
                  <Image source={require('../assets/Prince.jpg')} style={styles.profileImage} width={47} height={47} />
                </View>
                <Text style={styles.updatetext} >Natalie</Text>
              </View>

              <View style={styles.update} >
                <View style={styles.profile}>
                  <Image source={require('../assets/Prince.jpg')} style={styles.profileImage} width={47} height={47} />
                </View>
                <Text style={styles.updatetext} >Natalie</Text>
              </View>

              <View style={styles.update} >
                <View style={styles.profile}>
                  <Image source={require('../assets/Prince.jpg')} style={styles.profileImage} width={47} height={47} />
                </View>
                <Text style={styles.updatetext} >Natalie</Text>
              </View>
            </ScrollView>
          </View>

          {/* Channels */}
          <View style={styles.channel}>
            <View style={styles.channelheader}>
              <Text style={styles.statusheader}>Channels</Text>
              <Text style={styles.explore}>Explore</Text>
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
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.message}>Jo: d dndnisd nedfnief kdvedf dnjc sads</Text>
              </View>
              <View style={styles.messageDetails}>
                <Text style={styles.timeStamp}>14:09</Text>
                <View style={styles.pin}>
                  <MaterialIcons name="push-pin" size={15} color={'rgb(138, 139, 138)'} />
                  <Text style={styles.messageCount}>100</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Channels to follow */}
          <View style={styles.channel}>
            <Text style={styles.findchannel}>Find Channels to follow</Text>
            <View style={styles.chat}>
              <View style={styles.profilePictureDiv}>
                <Image source={require('../assets/Prince.jpg')} style={styles.profilePicture} />
              </View>
              <View style={styles.messageContent}>
                <Text style={styles.messageSender}>Kenyans.co.ke <MaterialCommunityIcons name="check-decagram" color={'rgb(5, 118, 248)'} size={15} /></Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.message}>310k followers</Text>
              </View>
              <View style={styles.messageDetails}>
                <Text style={styles.follow}>Follow</Text>
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
                <Text style={styles.follow}>Follow</Text>
              </View>
            </View>
          </View>

          <Text style={styles.exploremore}>Explore more</Text>

          <View style={styles.bottom}></View>
        </ScrollView>
                  {/* Contact link button */}
                  <View style={styles.camera}>
                    <MaterialCommunityIcons name="camera-plus" size={21} color={'black'}/>
                  </View>

                  <View style={styles.pencil}>
                    <MaterialCommunityIcons name="pencil" size={21} color={'white'}/>
                  </View>

      </SafeAreaView>
      <Sidebar />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  content:
  {
    height: windowHeight * 0.8,
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

  // Status
  status:
  {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
  statusheader:
  {
    color: 'white',
    fontSize: 22,
  },
  update:
  {
    height: 150,
    width: 100,
    borderRadius: 20,
    backgroundColor: 'grey',
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-end',
    padding: 10,
    marginRight: 10,
  },
  updatetext:
  {
    color: 'white',
    width: 50,
    backgroundColor: 'red',
    height: 40,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  myprofile:
  {
    position: 'relative',
    top: '-25%',
  },
  profile:
  {
    position: 'relative',
    top: '-35%',
  },

  profileImage:
  {
    padding: 20,
    borderRadius: 50,
    borderColor: 'green',
    borderWidth: 2,
  },
  person:
  {
    backgroundColor: 'rgb(232, 232, 231)',
    padding: 5,
    borderRadius: 50,
  },
  plus:
  {
    position: 'relative',
    top: -15,
    left: 25,
    backgroundColor: 'green',
    width: 15,
    borderRadius: 50,
  },

  // Channel
  channel:
  {
    padding: 10,
  },
  explore:
  {
    color: 'white',
    backgroundColor: 'rgb(39, 39, 39)',
    width: 70,
    textAlign: 'center',
    borderRadius: 10,
    padding: 5,
  },
  channelheader:
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
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
  findchannel:
  {
    color: 'rgb(107, 107, 104)',
    marginBottom: 30,
  },
  follow:
  {
    color: 'rgb(182, 248, 181)',
    width: 80,
    textAlign: 'center',
    borderRadius: 15,
    padding: 5,
    backgroundColor: 'rgb(1, 44, 1)',
  },
  exploremore:
  {
    margin: 10,
    color: 'rgb(7, 250, 3)',
    width: 140,
    textAlign: 'center',
    borderRadius: 25,
    padding:10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(244, 246, 247, 0.29)',
  },
  bottom:
  {
    height: windowHeight * 0.2,
  },
      // Contact link button
      camera:
      {
        backgroundColor: 'rgb(0, 255, 0)',
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 60,
        right: 15,
        borderRadius: 10,
      },
      pencil:
      {
        backgroundColor: 'rgb(44, 44, 44)',
        width: 40,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 120,
        right: 20,
        borderRadius: 10,
      },
});

export default DetailsScreen;
