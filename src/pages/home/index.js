import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, } from 'react-native'


export default function Home() {


    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.area}>
            <Text> Bem Vindo</Text>
        </View>
      </SafeAreaView>
    )
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
