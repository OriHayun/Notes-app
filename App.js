import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Header from './components/Header/header';


export default function App() {
  return (
    <View style={styles.container}>
      <Header
      headerStyleFirst={styles.homeHedderMY}
      firstWord={"My "}
      headerStyleSecond={styles.homeHedder}
      secondWord={"Notes"}
      />
      
      <View>
        <Text>footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#aaa',
    justifyContent: 'center',
  },
  homeHedder: {
    fontSize: 70,
    alignItems: 'center',
    color: '#468'
  },
  homeHedderMY: {
    color: '#FFD700',
    fontSize: 70,
    alignItems: 'center',
  },
  Avatar: {
    padding: 4
  },
  Category: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#468'

  }

});
