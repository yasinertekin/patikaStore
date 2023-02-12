import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import NewCard from './components/Card';
import news_data from './news_data.json';



function App(){
  const renderNews = ({item}) => <NewCard news = {item} />
  const keys = (item) => item.id.toString()
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput
        style={styles.input}
        placeholder="Ara..."
      />
      <FlatList
      keyExtractor={keys}
      data={news_data}
      renderItem={renderNews}
      numColumns={2}
      
      
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    color:'white'
  },
  title:{
    color:'purple',
    fontSize:50,
    fontWeight:'bold'
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor:'#e0e0e0',
    borderRadius:10,
  },
})

export default App;
