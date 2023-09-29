import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../../constants/theme'
import { SliderBox } from 'react-native-image-slider-box'
import carouselSlides from '../../../../styles/components/homepage/carousel/carouselSlides'

const CarouselSlides = () => {

  const imageSlides = [
    "https://i.ibb.co/W29btXp/profile.jpg",
    "https://i.ibb.co/W29btXp/profile.jpg",
    "https://i.ibb.co/W29btXp/profile.jpg",
  ]

  return (
    <View style={carouselSlides.outerContainer}>
      <SliderBox
      images={imageSlides}
      dotColor= {COLORS.primary}
      inactiveDotColor = {COLORS.secondary}
      ImageComponentStyle = {{ borderRadius: 15, width: (94/100*(SIZES.width)), marginTop: 0 }}
      autoplay
      circleLoop
      />
    </View>
  )
}

export default CarouselSlides