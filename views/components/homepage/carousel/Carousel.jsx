import { View, Text } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import carousel from '../../../../styles/components/homepage/carousel/carousel'

const Carousel = () => {

  const imageSlides = [
    "https://i.ibb.co/W29btXp/profile.jpg",
    "https://i.ibb.co/W29btXp/profile.jpg",
    "https://i.ibb.co/W29btXp/profile.jpg",
  ]

  return (
    <View style={carousel.outerContainer}>
      <SliderBox
      images
      />
    </View>
  )
}

export default Carousel