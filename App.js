import React, {useState} from 'react';
import {  View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {

  const [items, setItems] = useState([
    {id: 0, text: 'Milk'} ,
    {id: 1, text: 'Eggs'},
    {id: 2, text: 'Bread'},
    {id: 3, text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
}

  const addItem = (text) => {
    const random = Math.floor(Math.random() * 10000);
    if(!text){
      Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}]);
    } else {
      setItems(prevItems => {
        return [{id: random, text}, ...prevItems]
      });

    }
  }

  return (
    <View style={styles.container}>
     <Header title='Shopping List'/>
     <AddItem addItem ={addItem}/>
     <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },

});

export default App;