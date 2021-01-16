import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular,
  Roboto_300Light,
} from '@expo-google-fonts/roboto'

import Gallery from '../components/Gallery'
import DatePicker from '../components/DatePicker'

const Main = () => {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
    Roboto_300Light,
  })

  return (
    <View style={styles.container}>
      <View style={styles.appcontainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Вылеты</Text>
          <Entypo
            style={styles.chevron}
            name='chevron-thin-right'
            size={20}
            color='#A7A7A7'
          />
          <Text style={styles.header}>SVO - JFK</Text>
          <DatePicker />
        </View>
        <Gallery />
      </View>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#E5E5E5',
  },
  appcontainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',

    backgroundColor: 'white',
    height: 800,
    width: 680,

    borderRadius: 20,
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.15)',
  },
  headerContainer: {
    marginTop: 65,
    marginBottom: 24,
    marginRight: 'auto',
    marginLeft: 40,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  header: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 32,
    lineHeight: 37,
    color: '#424242',
  },
  chevron: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 6,
  },
})
