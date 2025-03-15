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

function Communities() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Communities</Text>
          <View style={styles.headerIcons} >
            <Entypo name="dots-three-vertical" size={25} color="white" />
          </View>
        </View>

        <ScrollView style={styles.content}>
          <View style={styles.communities}>
            <View style={styles.people}>
              <MaterialIcons name="people" size={30} color="white" style={styles.peopleIcon} />
              <AntDesign name="plus" size={15} color="white" style={styles.plus} />
            </View>
            <View style={styles.favouritecontent}>
              <Text style={styles.messageSender}>New communities</Text>
            </View>
          </View>
          <View style={styles.communities}>
            <View style={styles.communityImage}>
              <Image source={require('../assets/Prince.jpg')} style={styles.profileImage} width={50} height={50} />
            </View>
            <View style={styles.favouritecontent}>
              <Text style={styles.messageSender}>New communities</Text>
            </View>

            <View style={styles.chat}>
              <View style={styles.profilePictureDiv}>
                <MaterialCommunityIcons name="bullhorn" size={30} color="rgb(180, 250, 180)" style={styles.bullhorn} />
              </View>
              <View style={styles.messageContent}>
                <Text style={styles.messageSender}>Announcements</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.message}>Joy: d dndnisd nedfnief kdvedf dnjc sads</Text>
              </View>
              <View style={styles.messageDetails}>
                <Text style={styles.timeStamp}>14:09</Text>
                <Text style={styles.unreadMessages}></Text>
              </View>
            </View>

            <View style={styles.chat}>
              <View style={styles.profilePictureDiv}>
                <Image source={require('../assets/Prince.jpg')} style={styles.groupImage} width={50} height={50} />
              </View>
              <View style={styles.messageContent}>
                <Text style={styles.messageSender}>Announcements</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.message}>Joy: d dndnisd nedfnief kdvedf dnjc sads</Text>
              </View>
              <View style={styles.messageDetails}>
                <Text style={styles.timeStamp}>14:09</Text>
              </View>
            </View>

            <View style={styles.viewIcon}>
            <AntDesign name="right" size={20} color="rgb(255, 255, 255)" />
            </View>
            <View style={styles.favouritecontent}>
              <Text style={styles.messageSender}>View all</Text>
            </View>
          </View>

          <View style={styles.communities}>
            <View style={styles.communityImage}>
              <Image source={require('../assets/Prince.jpg')} style={styles.profileImage} width={50} height={50} />
            </View>
            <View style={styles.favouritecontent}>
              <Text style={styles.messageSender}>New communities</Text>
            </View>

            <View style={styles.chat}>
              <View style={styles.profilePictureDiv}>
                <MaterialCommunityIcons name="bullhorn" size={30} color="rgb(180, 250, 180)" style={styles.bullhorn} />
              </View>
              <View style={styles.messageContent}>
                <Text style={styles.messageSender}>Announcements</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.message}>Joy: d dndnisd nedfnief kdvedf dnjc sads</Text>
              </View>
              <View style={styles.messageDetails}>
                <Text style={styles.timeStamp}>14:09</Text>
                <Text style={styles.unreadMessages}></Text>
              </View>
            </View>

            <View style={styles.chat}>
              <View style={styles.profilePictureDiv}>
                <Image source={require('../assets/Prince.jpg')} style={styles.groupImage} width={50} height={50} />
              </View>
              <View style={styles.messageContent}>
                <Text style={styles.messageSender}>Announcements</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.message}>Joy: d dndnisd nedfnief kdvedf dnjc sads</Text>
              </View>
              <View style={styles.messageDetails}>
                <Text style={styles.timeStamp}>14:09</Text>
              </View>
            </View>

            <View style={styles.viewIcon}>
            <AntDesign name="right" size={20} color="rgb(255, 255, 255)" />
            </View>
            <View style={styles.favouritecontent}>
              <Text style={styles.messageSender}>View all</Text>
            </View>
          </View>

          <View style={styles.bottom}></View>
        </ScrollView>
        <Sidebar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  content:
  {
    padding: 0,
    marginTop: 10,
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
  communities:
  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 20,
    marginBottom: 10,
    backgroundColor: 'rgb(24, 24, 24)',
    flexWrap: 'wrap',
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
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    gap: 10,
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
    color: 'rgb(150, 153, 150)',
  },
  unreadMessages:
  {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'green',
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
  people:
  {
    backgroundColor: 'grey',
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  communityImage:
  {
    backgroundColor: 'grey',
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  viewIcon:
  {
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus:
  {
    position: 'relative',
    left: 22,
    backgroundColor: 'green',
    padding: 1,
    borderRadius: 50,
  },
  peopleIcon:
  {
    position: 'relative',
    top: 10,
  },
  bullhorn:
  {
    backgroundColor: 'rgb(3, 51, 3)',
    padding: 10,
    borderRadius: 10,
  },
  groupImage:
  {
    borderRadius: 50,
  },
  bottom:
  {
    height: 50,
  },
});

export default Communities;
