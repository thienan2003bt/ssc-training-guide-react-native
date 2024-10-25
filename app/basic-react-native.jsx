import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import avatar from '../assets/avatar.jpg'
import ToastHelper from '../helpers/ToastHelper'

const HomePage = () => {
  const [items, setItems] = useState([0, 1]);
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  const showToast = ToastHelper();

  useEffect(() => {
    if (items.length > 0) {
      const newX = items.reduce((total, x) => (total + Number(x)), 0);
      setX(newX);
    }
  }, [items])

  const onClickGreenButton = (index) => {
    const curValue = items[index];
    const newItems = items.map(((it, id) => {
      if (id === index) {
        return it + Number(y);
      }
      return it;
    }));

    setItems(newItems);
    showToast(`The ${index} item increased by ${y} to: ${curValue + Number(y)}`);
  }

  const onClickBlueButton = (index) => {
    const newItem = parseInt(Math.random() * 100);
    const newItems = items.map(x => x);
    newItems.splice(index + 1, 0, newItem);

    setItems(newItems);
    return showToast(`Add new item at index ${index + 1} successfully`);
  }

  const onClickRedButton = (index) => {
    const newItems = items.filter((_, id) => id !== index);
    setItems(newItems);

    return showToast(`Remove item at index ${index} successfully`);
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.topSection}>
        <Image style={styles.profileImage} source={avatar} />
        <View style={styles.infoSection}>
          <Text>Họ và tên: Triệu Hoàng Thiên Ân</Text>
          <Text>MSSV: 21120036</Text>
        </View>
      </View>

      {/* Dropdown and Button Section */}
      <View style={styles.inputSection}>
        <TextInput style={styles.input} value={x.toString()} onChangeText={val => setX(val)} keyboardType='numeric'/>
        {/* <View style={styles.icons}>
          <Text style={styles.label}>X Value:</Text>
        </View> */}
        <View style={styles.icons}>
          <TextInput style={styles.input} placeholder="Enter Y" value={y.toString()} onChangeText={val => setY(val)} keyboardType='numeric'/>
        </View>
      </View>

      {/* List Items */}
      <View style={styles.listContainer}>
        {items?.length > 0 &&
          <FlatList
          style={ styles.listContainer }
            data={items}
            keyExtractor={(_, index) => `item-${index}`}
            renderItem={({ item, index }) => (
              <View style={styles.listItem}>
                <Text>{ item }</Text>
                <View style={styles.circleContainer}>
                  <TouchableOpacity 
                    onPress={() => onClickGreenButton(index)}
                    style={[styles.circle, styles.green]} 
                  />
                  <TouchableOpacity 
                    onPress={() => onClickBlueButton(index)}
                    style={[styles.circle, styles.blue]} 
                  />
                  <TouchableOpacity 
                    onPress={() => onClickRedButton(index)}
                    style={[styles.circle, styles.red]} 
                  />
                </View>
              </View>
            )}
          />
        }
      </View>
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "80vh",
    padding: 10,
    backgroundColor: '#ebebeb',
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    backgroundColor: '#ccc',
    marginRight: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  infoSection: {
    flex: 1,
  },
  inputSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  input: {
    minWidth: 120,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    marginRight: 20,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  listContainer: {
    flex: 1,
    marginTop: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 140,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  green: {
    backgroundColor: 'green',
  },
  blue: {
    backgroundColor: 'blue',
  },
  red: {
    backgroundColor: 'red',
  },
});