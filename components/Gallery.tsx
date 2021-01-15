import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Swiper from 'react-native-web-swiper'

const Gallery = () => {
  return (
    <View
      style={{
        width: 500,
        height: 500,
      }}
    >
      <View
        style={{
          width: 500,
          height: 500,
        }}
      >
        <Swiper loop>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(20,20,200,0.3)',
            }}
          >
            <Text>Slide 1</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(20,200,20,0.3)',
            }}
          >
            <Text>Slide 2</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(200,20,20,0.3)',
            }}
          >
            <Text>Slide 3</Text>
          </View>
        </Swiper>
      </View>
    </View>
  )
}

export default Gallery
