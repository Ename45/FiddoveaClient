import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import useFetch from '../../../../hook/useFetch'
import productList from '../../../../styles/components/product/allproducts/productList';
import { COLORS, SIZES } from '../../../../constants/theme';
import AllProductsCardView from '../allProductsCardView/AllProductsCardView.jsx';

const ProductList = () => {

  const {data, isLoading, error } = useFetch();

  if (isLoading) {
    return (
      <View style={productList.loadingContainer}>
        <ActivityIndicator
        size={SIZES.xLarge}
        color={COLORS.primary}
        />
      </View>
    );
  }

      const allProductsList = [
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Cake",
    productPrice: "N1500",
    productId: 1,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Strawberry Cupcakes",
    productPrice: "N1200",
    productId: 2,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Vanilla Donuts",
    productPrice: "N800",
    productId: 3,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Bar",
    productPrice: "N500",
    productId: 4,
  },

  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Gummy Bears",
    productPrice: "N300",
    productId: 5,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Jellybeans",
    productPrice: "N250",
    productId: 6,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Brownies",
    productPrice: "N1800",
    productId: 7,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Red Velvet Cake",
    productPrice: "N1600",
    productId: 8,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Caramel Toffee",
    productPrice: "N900",
    productId: 9,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Mint Chocolate Chip Cookies",
    productPrice: "N1100",
    productId: 10,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Lemon Tart",
    productPrice: "N1300",
    productId: 11,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Raspberry Cheesecake",
    productPrice: "N1400",
    productId: 12,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Blueberry Muffins",
    productPrice: "N1000",
    productId: 13,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Peanut Butter Fudge",
    productPrice: "N950",
    productId: 14,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Coconut Macaroons",
    productPrice: "N750",
    productId: 15,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Oreo Truffles",
    productPrice: "N1200",
    productId: 16,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Pumpkin Pie",
    productPrice: "N1700",
    productId: 17,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Chip Cookies",
    productPrice: "N850",
    productId: 18,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Fruit Tart",
    productPrice: "N1400",
    productId: 19,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Lavender Cupcakes",
    productPrice: "N1100",
    productId: 20,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Cinnamon Rolls",
    productPrice: "N1250",
    productId: 21,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Cherry Pie",
    productPrice: "N1550",
    productId: 22,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Caramel Popcorn",
    productPrice: "N800",
    productId: 23,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Banana Bread",
    productPrice: "N950",
    productId: 24,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Pecan Pie",
    productPrice: "N1600",
    productId: 25,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Coconut Cream Pie",
    productPrice: "N1400",
    productId: 26,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Mango Sorbet",
    productPrice: "N750",
    productId: 27,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Butterscotch Pudding",
    productPrice: "N1100",
    productId: 28,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Pistachio Gelato",
    productPrice: "N1200",
    productId: 29,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Coated Almonds",
    productPrice: "N750",
    productId: 30,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Candy Canes",
    productPrice: "N350",
    productId: 31,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Gummy Worms",
    productPrice: "N300",
    productId: 32,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Truffles",
    productPrice: "N1200",
    productId: 33,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Jelly Bean Jar",
    productPrice: "N450",
    productId: 34,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Caramel Chews",
    productPrice: "N550",
    productId: 35,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Milk Chocolate Bar",
    productPrice: "N450",
    productId: 36,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Gummy Bears",
    productPrice: "N350",
    productId: 37,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Covered Raisins",
    productPrice: "N650",
    productId: 38,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Licorice",
    productPrice: "N250",
    productId: 39,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "White Chocolate Bar",
    productPrice: "N550",
    productId: 40,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Peppermint Bark",
    productPrice: "N750",
    productId: 41,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Rock Candy",
    productPrice: "N300",
    productId: 42,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Toffee",
    productPrice: "N450",
    productId: 43,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Marshmallow",
    productPrice: "N200",
    productId: 44,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Dark Chocolate Truffles",
    productPrice: "N1300",
    productId: 45,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Covered Strawberries",
    productPrice: "N950",
    productId: 46,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Peanut Butter Cups",
    productPrice: "N400",
    productId: 47,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Cotton Candy",
    productPrice: "N300",
    productId: 48,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Coated Pretzels",
    productPrice: "N550",
    productId: 49,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Fruit Gummies",
    productPrice: "N350",
    productId: 50,
  },
];

  return (
    <View style={productList.container}>
      <FlatList
      data={allProductsList}
      numColumns={2}
      renderItem={({item}) => (<AllProductsCardView item={item}/>)}
      contentContainerStyle={productList.container}
      ItemSeparatorComponent={() => <View style={productList.seperator}>
      </View>}
      />
    </View>
  )
}

export default ProductList