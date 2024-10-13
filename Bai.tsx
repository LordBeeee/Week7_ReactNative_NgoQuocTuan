import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const Item = ({item}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.name}</Text>
  </View>
);

const App = () => {

  const [data,setData] = useState([]);

  useEffect(()=>{
    var url = 'https://645446a0a74f994b333d1a49.mockapi.io/tuan7'
    var fn = fetch(url);
    fn.then(res=>res.json()).then((data)=>{setData(data)})
  },[])
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

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Add" onPress={fnAdd}/>
      <br/>
      <Button title="Edit" onPress={fnAdd}/>
      <br/>
      <Button title="Delete" onPress={fnAdd}/>
      <FlatList
        data={data}
        renderItem={Item}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;