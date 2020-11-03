import React from 'react';
import {  View, Text, StyleSheet } from 'react-native';

// Destructuring title so we don't have to call props.title
const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style = {styles.text}>
        {title}
      </Text>
    </View>
  )
}
/*
Header.defaultProps = {
    title: 'Shopping List'
}*/

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue'
  },
  text: {
      color: '#fff',
      fontSize: 23,
      textAlign: 'center',
  }
});

export default Header;