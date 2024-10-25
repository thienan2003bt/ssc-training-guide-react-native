import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'

import { getAllUsers } from '../store/reducers/user.async.thunk';
import { toggleSelectItem } from '../store/reducers/user.reducer'

const HomePage = () => {

  const { users, selectedIndexes } = useSelector(state => state.user);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllUsers());
  }, [])

  const handleToggle = (index) => {
    dispatch(toggleSelectItem(index));
  };

  return (
    <SafeAreaView style={ styles.container}>
      <View style={styles.container}>

          <FlatList
            data={users}
            keyExtractor={(item, id) => id}
            numColumns={3} // For a 3-column grid
            contentContainerStyle={styles.grid}
            scrollEnabled={true}
            renderItem={({item: user}, index) => {
              return (
                <TouchableOpacity
                  onPress={() => handleToggle(user._id)}
                  style={selectedIndexes.includes(user._id) ? styles.selectedUserBox : styles.userBox}
                >
                  <Text style={styles.text}>{user._id}</Text>
                  <Text style={styles.text}>{user.firstName} { user.lastName}</Text>
                </TouchableOpacity>
              )
            }}
          />

        <View style={styles.selectedContainer}>
          <Text style={styles.selectedText}>Selected user's id: {selectedIndexes.join(', ')}</Text>
        </View>
      </View>
      
    </SafeAreaView>
  )
}

export default HomePage


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
  },
  grid: {
    width: '100%',
    justifyContent: 'space-evenly',
    paddingHorizontal: 2,
    backgroundColor: '#d3d3d3',
  },
  userBox: {
    flex: 1,
    padding: 4,
    margin: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#161622',
  },
  selectedUserBox: {
    flex: 1,
    padding: 4,
    margin: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'lightcoral',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  selectedContainer: {
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  selectedText: {
    fontSize: 16,
    backgroundColor: 'gray',
    color: 'white',
    padding: 10,
    width: '100%',
    borderRadius: 50,
  },
  text: {
    color: "white",
    fontSize: 16,
    textDecoration: "underline",
  }
});