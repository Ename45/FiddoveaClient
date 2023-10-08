import React from 'react';
import { View, Text, Image } from 'react-native';
import { COLORS, SIZES } from '../../../../constants/theme';
import { SliderBox } from 'react-native-image-slider-box';
import carouselSlides from '../../../../styles/components/homepage/carousel/carouselSlides';

const CarouselSlides = () => {
  const slides = [
    {
      image: 'http://res.cloudinary.com/di8higqd1/image/upload/v1695924126/promiscuous/users/profile%20images/ba26eac9-859b-4702-b648-4cdb65beeee3.jpg',
      text: 'Welcome to Our Store',
    },
    {
      image: 'http://res.cloudinary.com/di8higqd1/image/upload/v1695925411/promiscuous/users/profile%20images/95c4900a-7e9d-443c-ae9a-290fd93100c1.jpg',
      text: 'Explore Our Products',
    },
    {
      image: 'http://res.cloudinary.com/di8higqd1/image/upload/v1695924370/promiscuous/users/profile%20images/7e7fef99-0cd0-4483-a2ed-cb98de3b27d8.jpg',
      text: 'Find Great Deals',
    },
    {
      image: 'http://res.cloudinary.com/di8higqd1/image/upload/v1695924370/promiscuous/users/profile%20images/7e7fef99-0cd0-4483-a2ed-cb98de3b27d8.jpg',
      text: 'Dive Into a Treasure Trove of Products and Services',
    },
  ];

  return (
    <View style={carouselSlides.outerContainer}>
      <SliderBox
        images={slides.map((slide) => slide.image)}
        
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.white}
        ImageComponentStyle={{ borderRadius: 20, width: (80 / 100) * SIZES.width, marginTop: 0 }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default CarouselSlides;
