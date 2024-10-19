import React,{useState,useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';

function HomeScreen({ navigation}) {
  return (
    <View style={styles.home}>
      <Image source={require('./assets/Container 104.png')}/>
      <Text style={styles.home_text_title}>MANAGE YOUR TASK</Text>
      <TouchableOpacity style={styles.home_btn_input}>
        <Image source={require('./assets/Frame.png')} style={styles.home_img}/>
        <Text style={styles.home_text_input}>Enter your name</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.home_btn} onPress={() => navigation.navigate('Dolist')}>
        <Text style={styles.home_text_btn}>GET STARTED -></Text>
      </TouchableOpacity>
    </View>
  );
}

function DolistScreen({ navigation}) {
  const [data,setData] = useState([]);

  useEffect(()=>{
    var url = 'https://645446a0a74f994b333d1a49.mockapi.io/tuan7'
    var fn = fetch(url);
    fn.then(res=>res.json()).then((data)=>{setData(data)})
  },[])

  return (
    <View style={styles.dolist}>
      <Image source={require('./assets/Container 104.png')}/>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{marginRight:120}}>
          <Image source={require('./assets/Icon Button 11.png')}/>
        </TouchableOpacity>
        <Image source={require('./assets/Frame (1).png')}/>
        <View style={{marginLeft:5}}>
          <Text style={styles.dolist_text_1}>Hi Twinkle</Text>
          <Text style={styles.dolist_text_2}>Have agrate day a head</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.dolist_btn_sreach}>
        <Image source={require('./assets/Frame (2).png')} style={styles.dolist_img}/>
        <Text style={styles.dolist_text_input}>Search</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={Item}
        keyExtractor={item=>item.id}
      />
    </View>
  );
}

const Item = ({item}) => (
  <TouchableOpacity style={styles.dolist_btn_do}>
    <Text style={styles.title}>{item.name}</Text>
  </TouchableOpacity>
);

const Stack = createNativeStackNavigator();

const App = () => {


  

  var url = 'https://645446a0a74f994b333d1a49.mockapi.io/tuan7'
  var job = {};
  var fnAdd = ()=>{
    fetch(url, {
                  method: 'POST',
                  headers: {
                    'Content-Tpye': 'application/json',
                  },
                  body: JSON.stringify(job),
    });
  }
  var fnDelete =()=> {
      fetch(url.concat("/")+1,{
        method:"Delete"
    });
  }
  var fnEdit =()=> {
    
  }
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Dolist">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dolist" component={DolistScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
};
      
const styles = StyleSheet.create({
  home:{
    flexDirection:'column',
    alignItems:'center',
    width:389,
    height:843,
    borderWidth:2
  },
  home_text_title:{
    height:72,
    color:'#8353E2',
    fontSize:24,
    fontWeight:700,
    lineHeight:36,
    width:190,
    alignSelf:'center',
    textAlign:'center',
    marginTop:270
  },
  row:{
    flexDirection:'row'
  },
  home_btn_input:{
    flexDirection:'row',
    width:334,
    height:43,
    borderColor:'#9095A0',
    borderWidth:1,
    alignItems:'center',
    borderRadius:10,
    marginTop:50,
  },
  home_img:{
    margin:10
  },
  home_text_input:{
    color:'#BCC1CA'
  },
  home_btn:{
    width:190,
    height:44,
    backgroundColor:'#00BDD6',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    marginTop:70,
  },
  home_text_btn:{
    color:'#fff',
    fontSize:16,
    lineHeight:26,
    fontWeight:400,
  },
  ///////////////
  dolist:{
    flexDirection:'column',
    alignItems:'center',
    width:389,
    height:843,
    borderWidth:2
  },
  dolist_text_1:{
    fontSize:20,
    fontWeight:700,
    lineHeight:30,
    textAlign:'center'
  },
  dolist_text_2:{
    fontSize:14,
    fontWeight:700,
    lineHeight:22,
    color:'#171A1F',
    textAlign:'center',
    opacity:0.75
  },
  dolist_btn_sreach:{
    flexDirection:'row',
    width:334,
    height:43,
    borderColor:'#9095A0',
    borderWidth:1,
    alignItems:'center',
    borderRadius:10,
    marginTop:50,
  },
  dolist_img:{
    margin:10
  },
  dolist_text_input:{
    color:'#BCC1CA'
  },
  /////////////////////////////////// reder dolist
  dolist_btn_do:{
    flexDirection:'row',
    width:335,
    height:48,
    backgroundColor:'#DEE1E678',
    alignItems:'center',
    borderRadius:10,
    marginTop:5,
  }
});

export default App;