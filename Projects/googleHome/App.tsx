import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider , SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons  , MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView style={styles.container}>
         <View style={styles.headerContainer}>
            <View>
              <MaterialCommunityIcons name='home-outline' size={25} color={'black'}/>
            </View>
            <View style={styles.headerRightIcons}>
              <MaterialIcons name='account-circle' size={25} color={'black'}/>
              <MaterialIcons name='filter-2' size={25} color={'black'}/>
              <MaterialIcons name='more-vert' size={25} color={'black'}/>
              </View>
         </View>
         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
           <Image
              source={{ uri: 'https://techcrunch.com/wp-content/uploads/2023/02/glitched-google-logo.jpg?w=1024'}}
              style={{height:120,width:350,borderRadius:60,marginBottom:5}}
           />
         </View>
         <View style={styles.inputContainer}>
            <TextInput
            placeholder='Search or type URL'
            placeholderTextColor={'black'}
            style={{marginHorizontal:10,fontSize:20,fontWeight:'bold'}}
            >
            </TextInput>
            <View style={{flexDirection:'row',width:70,justifyContent:'space-between',marginEnd:10}}>
              <MaterialIcons name='mic' size={25} color={'black'}/>
              <MaterialIcons name='center-focus-weak' size={25} color={'black'}/>
              
            </View>
         </View>
         <ScrollView horizontal={true} style={{marginRight:10,marginLeft:10,borderRadius:30}}>
          <View style={styles.iconTray}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <MaterialCommunityIcons name="facebook" size={50} style={styles.iconStyle} color="#1877F2" />
               <Text>Facebook</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <MaterialCommunityIcons name="whatsapp" size={50} style={styles.iconStyle} color="#25D366" />
              <Text>WhatsApp</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <MaterialCommunityIcons name="twitter" size={50} style={styles.iconStyle} color="#1DA1F2" />
              <Text>Twitter</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <MaterialCommunityIcons name="github" size={50} style={styles.iconStyle} color="#171515" />
              <Text>GitHub</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <MaterialCommunityIcons name="gitlab" size={50} style={styles.iconStyle} color="#FC6D26" />
              <Text>GitLab</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <MaterialCommunityIcons name="alpha" size={50} style={styles.iconStyle} color="#9C27B0" />
              <Text>Alpha</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <MaterialCommunityIcons name="instagram" size={50} style={styles.iconStyle} color="#E4405F" />
              <Text>Instagram</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <MaterialCommunityIcons name="youtube" size={50} style={styles.iconStyle} color="#FF0000" />
              <Text>YouTube</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <MaterialCommunityIcons name="netflix" size={50} style={styles.iconStyle} color="#E50914" />
              <Text>Netflix</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <MaterialCommunityIcons name="snapchat" size={50} style={styles.iconStyle} color="#FFFC00" />
              <Text>Snapchat</Text>
            </View>
          </View>
         </ScrollView>
         <View style={styles.continueTabContainer}>
           <View style={{ flexDirection: 'row',justifyContent: 'space-between', padding:5}}>
               <Text>Continue with this tab</Text>
               <Text style={{color:'#261447'}}>See More</Text>
           </View>
           <View  style={{ flexDirection: 'row'}}>
               <View style={{padding:5}}>
                    <Image 
                    source={{uri:'https://pbs.twimg.com/media/FDlusrZVEAQEmx_.jpg'}}
                    style={{height:130 , width:130}}
                    />
               </View>
               <View style={{flexDirection:'column',justifyContent:"space-between",margin:10}}>
                    <Text>OSRTC COMMUTER</Text>
                    <Text>osrtc.org</Text>
               </View>
           </View>
         </View>
         <ScrollView style={styles.blogsContainer}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                  <Text>Discover</Text>
                  <MaterialIcons name='more-vert' size={25} color={'black'}/>
            </View>
            <View>
              <ImageBackground 
              source={{uri:"https://rangandatta.wordpress.com/wp-content/uploads/2015/03/toi-blog.jpg"}}
              style={styles.blogImage}
              imageStyle={{ borderRadius: 15 }} 
              >
                <Text style={styles.blogText}>Blog Title</Text>
              </ImageBackground>
            </View>
         </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F7F2',
    height : '100%',
  },
  headerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerRightIcons:{
    flexDirection:'row',
    width: 120,
    justifyContent: 'space-between'
  },
  inputContainer:{
    height: 60,
    width: 370,
    padding: 5,
    marginHorizontal:23,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor : 'black',
    borderRadius: 30,
    marginBottom:20,
    backgroundColor:'#E0E0E0'
  },
  iconTray:{
    width:'100%',
    height: 120,
    borderRadius:30,
    backgroundColor:'#E0E0E0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle:{
    marginHorizontal: 10,
    elevation:5,
    shadowOffset:{
      width: 1,
      height:1
    },
    shadowColor:'black',
    shadowOpacity:1,
  },
  continueTabContainer:{
    width:'95%',
    height: 200,
    marginHorizontal:10,
    marginTop:10,
    borderRadius: 30,
    backgroundColor:'#E0E0E0',
   padding:10
  },
  blogsContainer:{
    width:'95%',
    height: 800,
    marginHorizontal:10,
    marginTop:10,
    borderRadius: 30,
    backgroundColor:'#E0E0E0',
    padding:10
  },
  blogImage:{
    width:'100%',
    height:400,
    justifyContent: "flex-end", 
    marginTop:10
  },
  blogText:{
    color: "#ffffff",         
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 10,
  }
});
