import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
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
             <View style={{justifyContent:'center' ,alignItems:'center'}}>
            <MaterialCommunityIcons name='facebook' size={50} style={styles.iconStyle}/>
            <Text>Facebook</Text>
            </View>
             <View style={{justifyContent:'center' ,alignItems:'center'}}>
            <MaterialCommunityIcons name='whatsapp' size={50} style={styles.iconStyle}/>
            <Text>Whatsapp</Text>
            </View>
             <View style={{justifyContent:'center' ,alignItems:'center'}}>
            <MaterialCommunityIcons name='twitter' size={50} style={styles.iconStyle}/>
            <Text>Twitter</Text>
            </View>
             <View style={{justifyContent:'center' ,alignItems:'center'}}>
            <MaterialCommunityIcons name='github' size={50} style={styles.iconStyle}/>
            <Text>Github</Text>
            </View>
             <View style={{justifyContent:'center' ,alignItems:'center'}}>
            <MaterialCommunityIcons name='gitlab' size={50} style={styles.iconStyle}/>
            <Text>GitLab</Text>
            </View>
             <View style={{justifyContent:'center' ,alignItems:'center'}}>
            <MaterialCommunityIcons name='alpha' size={50} style={styles.iconStyle}/>
            <Text>Alpha</Text>
            </View>
             <View style={{justifyContent:'center' ,alignItems:'center'}}>
            <MaterialCommunityIcons name='instagram' size={50} style={styles.iconStyle}/>
            <Text>Instagram</Text>
            </View>
             <View style={{justifyContent:'center' ,alignItems:'center'}}>
            <MaterialCommunityIcons name='youtube' size={50} style={styles.iconStyle}/>
            <Text>Youtube</Text>
            </View>
             <View style={{justifyContent:'center' ,alignItems:'center'}}>
            <MaterialCommunityIcons name='netflix' size={50} style={styles.iconStyle}/>
            <Text>Netflix</Text>
            </View>
             <View style={{justifyContent:'center' ,alignItems:'center'}}>
            <MaterialCommunityIcons name='snapchat' size={50} style={styles.iconStyle}/>
            <Text>Snapchat</Text>
            </View>
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
    shadowOpacity:1
  }
});
