import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import allProducts from '../../../../styles/components/product/allproducts/allProducts'
import { COLORS, SIZES } from '../../../../constants/theme'
import AllProductsCardView from '../allProductsCardView/AllProductsCardView'
import useFetch from '../../../../hook/useFetch'

const AllProducts = () => {

  const {data, isLoading, error } = useFetch()


    const allProductsList = [
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Cake",
    productPrice: "N1500",
    _productId: 1,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Strawberry Cupcakes",
    productPrice: "N1200",
    _productId: 2,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Vanilla Donuts",
    productPrice: "N800",
    _productId: 3,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Bar",
    productPrice: "N500",
    _productId: 4,
  },

  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Gummy Bears",
    productPrice: "N300",
    _productId: 5,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Jellybeans",
    productPrice: "N250",
    _productId: 6,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Brownies",
    productPrice: "N1800",
    _productId: 7,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Red Velvet Cake",
    productPrice: "N1600",
    _productId: 8,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Caramel Toffee",
    productPrice: "N900",
    _productId: 9,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Mint Chocolate Chip Cookies",
    productPrice: "N1100",
    _productId: 10,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Lemon Tart",
    productPrice: "N1300",
    _productId: 11,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Raspberry Cheesecake",
    productPrice: "N1400",
    _productId: 12,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Blueberry Muffins",
    productPrice: "N1000",
    _productId: 13,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Peanut Butter Fudge",
    productPrice: "N950",
    _productId: 14,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Coconut Macaroons",
    productPrice: "N750",
    _productId: 15,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Oreo Truffles",
    productPrice: "N1200",
    _productId: 16,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Pumpkin Pie",
    productPrice: "N1700",
    _productId: 17,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Chip Cookies",
    productPrice: "N850",
    _productId: 18,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Fruit Tart",
    productPrice: "N1400",
    _productId: 19,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Lavender Cupcakes",
    productPrice: "N1100",
    _productId: 20,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Cinnamon Rolls",
    productPrice: "N1250",
    _productId: 21,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Cherry Pie",
    productPrice: "N1550",
    _productId: 22,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Caramel Popcorn",
    productPrice: "N800",
    _productId: 23,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Banana Bread",
    productPrice: "N950",
    _productId: 24,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Pecan Pie",
    productPrice: "N1600",
    _productId: 25,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Coconut Cream Pie",
    productPrice: "N1400",
    _productId: 26,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Mango Sorbet",
    productPrice: "N750",
    _productId: 27,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Butterscotch Pudding",
    productPrice: "N1100",
    _productId: 28,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Pistachio Gelato",
    productPrice: "N1200",
    _productId: 29,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Coated Almonds",
    productPrice: "N750",
    _productId: 30,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Candy Canes",
    productPrice: "N350",
    _productId: 31,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Gummy Worms",
    productPrice: "N300",
    _productId: 32,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Truffles",
    productPrice: "N1200",
    _productId: 33,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Jelly Bean Jar",
    productPrice: "N450",
    _productId: 34,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Caramel Chews",
    productPrice: "N550",
    _productId: 35,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Milk Chocolate Bar",
    productPrice: "N450",
    _productId: 36,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Gummy Bears",
    productPrice: "N350",
    _productId: 37,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Covered Raisins",
    productPrice: "N650",
    _productId: 38,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Licorice",
    productPrice: "N250",
    _productId: 39,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "White Chocolate Bar",
    productPrice: "N550",
    _productId: 40,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Peppermint Bark",
    productPrice: "N750",
    _productId: 41,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Rock Candy",
    productPrice: "N300",
    _productId: 42,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Toffee",
    productPrice: "N450",
    _productId: 43,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Marshmallow",
    productPrice: "N200",
    _productId: 44,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Dark Chocolate Truffles",
    productPrice: "N1300",
    _productId: 45,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Covered Strawberries",
    productPrice: "N950",
    _productId: 46,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Peanut Butter Cups",
    productPrice: "N400",
    _productId: 47,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Cotton Candy",
    productPrice: "N300",
    _productId: 48,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Coated Pretzels",
    productPrice: "N550",
    _productId: 49,
  },
  {
    productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Fruit Gummies",
    productPrice: "N350",
    _productId: 50,
  },
];


  return (
    <View style={allProducts.container}>
          {/* <FlatList
    data={allProductsList}
    renderItem={({ item}) => <AllProductsCardView item={item} />}
    keyExtractor = {(item) => item._productId}
    // keyExtractor = {(item) => item.__productId}
    contentContainerStyle={{ columnGap: SIZES.medium}}
    // horizontal
    /> */}
    
    </View>
  )
}

export default AllProducts



//   const allProductsList = [
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Chocolate Cake",
//     productPrice: "N1500",
//     _productId: 1,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Strawberry Cupcakes",
//     productPrice: "N1200",
//     _productId: 2,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Vanilla Donuts",
//     productPrice: "N800",
//     _productId: 3,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Chocolate Bar",
//     productPrice: "N500",
//     _productId: 4,
//   },

//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Gummy Bears",
//     productPrice: "N300",
//     _productId: 5,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Jellybeans",
//     productPrice: "N250",
//     _productId: 6,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Chocolate Brownies",
//     productPrice: "N1800",
//     _productId: 7,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Red Velvet Cake",
//     productPrice: "N1600",
//     _productId: 8,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Caramel Toffee",
//     productPrice: "N900",
//     _productId: 9,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Mint Chocolate Chip Cookies",
//     productPrice: "N1100",
//     _productId: 10,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Lemon Tart",
//     productPrice: "N1300",
//     _productId: 11,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Raspberry Cheesecake",
//     productPrice: "N1400",
//     _productId: 12,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Blueberry Muffins",
//     productPrice: "N1000",
//     _productId: 13,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Peanut Butter Fudge",
//     productPrice: "N950",
//     _productId: 14,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Coconut Macaroons",
//     productPrice: "N750",
//     _productId: 15,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Oreo Truffles",
//     productPrice: "N1200",
//     _productId: 16,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Pumpkin Pie",
//     productPrice: "N1700",
//     _productId: 17,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Chocolate Chip Cookies",
//     productPrice: "N850",
//     _productId: 18,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Fruit Tart",
//     productPrice: "N1400",
//     _productId: 19,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Lavender Cupcakes",
//     productPrice: "N1100",
//     _productId: 20,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Cinnamon Rolls",
//     productPrice: "N1250",
//     _productId: 21,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Cherry Pie",
//     productPrice: "N1550",
//     _productId: 22,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Caramel Popcorn",
//     productPrice: "N800",
//     _productId: 23,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Banana Bread",
//     productPrice: "N950",
//     _productId: 24,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Pecan Pie",
//     productPrice: "N1600",
//     _productId: 25,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Coconut Cream Pie",
//     productPrice: "N1400",
//     _productId: 26,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Mango Sorbet",
//     productPrice: "N750",
//     _productId: 27,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Butterscotch Pudding",
//     productPrice: "N1100",
//     _productId: 28,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Pistachio Gelato",
//     productPrice: "N1200",
//     _productId: 29,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Chocolate Coated Almonds",
//     productPrice: "N750",
//     _productId: 30,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Candy Canes",
//     productPrice: "N350",
//     _productId: 31,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Gummy Worms",
//     productPrice: "N300",
//     _productId: 32,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Chocolate Truffles",
//     productPrice: "N1200",
//     _productId: 33,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Jelly Bean Jar",
//     productPrice: "N450",
//     _productId: 34,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Caramel Chews",
//     productPrice: "N550",
//     _productId: 35,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Milk Chocolate Bar",
//     productPrice: "N450",
//     _productId: 36,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Gummy Bears",
//     productPrice: "N350",
//     _productId: 37,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Chocolate Covered Raisins",
//     productPrice: "N650",
//     _productId: 38,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Licorice",
//     productPrice: "N250",
//     _productId: 39,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "White Chocolate Bar",
//     productPrice: "N550",
//     _productId: 40,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Peppermint Bark",
//     productPrice: "N750",
//     _productId: 41,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Rock Candy",
//     productPrice: "N300",
//     _productId: 42,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Toffee",
//     productPrice: "N450",
//     _productId: 43,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Marshmallow",
//     productPrice: "N200",
//     _productId: 44,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Dark Chocolate Truffles",
//     productPrice: "N1300",
//     _productId: 45,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Chocolate Covered Strawberries",
//     productPrice: "N950",
//     _productId: 46,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Peanut Butter Cups",
//     productPrice: "N400",
//     _productId: 47,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Cotton Candy",
//     productPrice: "N300",
//     _productId: 48,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Chocolate Coated Pretzels",
//     productPrice: "N550",
//     _productId: 49,
//   },
//   {
//     productImageUrl: "https://i.ibb.co/W29btXp/profile.jpg",
//     productName: "Fruit Gummies",
//     productPrice: "N350",
//     _productId: 50,
//   },
// ];