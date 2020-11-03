import React, {useState} from 'react';
import {  View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const getRandom =() => {
  const random = Math.floor(Math.random() * 10000);
  return random;
  }

  const [items, setItems] = useState([
    {id: getRandom(), text: 'Milk'} ,
    {id: getRandom(), text: 'Eggs'},
    {id: getRandom(), text: 'Bread'},
    {id: getRandom(), text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
}

  const addItem = (text) => {
    if(!text){
      Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}]);
    } else {
      setItems(prevItems => {
        return [{id: getRandom(), text}, ...prevItems]
      });

    }
  }

  return (
    <View style={styles.container}>
     <Header title='Shopping List'/>
     <AddItem addItem ={addItem}/>
     <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
        keyExtractor = {item=> item.id.toString()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },

});

export default App;