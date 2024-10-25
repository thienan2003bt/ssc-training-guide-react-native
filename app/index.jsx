import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.customLeftButton}
        onPress={() => router.push("basic-react-native")}
      >
        <Text style={styles.customText}>Go to Basic React Native</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.customRightButton}
        onPress={() => router.push("advanced-react-native")}
      >
        <Text style={styles.customText}>Go to Advanced React Native</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
  },
  customLeftButton: {
    width: 240,
    height: 50,
    textAlign: 'center',
    lineHeight: 50,
    alignItems: 'center',
    backgroundColor: '#0946ab',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  }, 
  customRightButton: {
    width: 240,
    height: 50,
    textAlign: 'center',
    lineHeight: 50,
    alignItems: 'center',
    backgroundColor: 'green',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  }, 
  customText: {
    color: 'white',
    textAlign: 'center',
  }
});