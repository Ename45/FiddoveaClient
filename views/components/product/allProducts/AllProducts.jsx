import { View, Text, FlatList } from 'react-native'
import React from 'react'
import allProducts from '../../../../styles/components/product/allproducts/allProducts'
import { SIZES } from '../../../../constants/theme'
import AllProductsCardView from '../allProductsCardView/AllProductsCardView'

const AllProducts = () => {
  const allProductsList = [
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Cake",
    price: "N1500",
    id: 1,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Strawberry Cupcakes",
    price: "N1200",
    id: 2,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Vanilla Donuts",
    price: "N800",
    id: 3,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Bar",
    price: "N500",
    id: 4,
  },

  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Gummy Bears",
    price: "N300",
    id: 5,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Jellybeans",
    price: "N250",
    id: 6,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Brownies",
    price: "N1800",
    id: 7,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Red Velvet Cake",
    price: "N1600",
    id: 8,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Caramel Toffee",
    price: "N900",
    id: 9,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Mint Chocolate Chip Cookies",
    price: "N1100",
    id: 10,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Lemon Tart",
    price: "N1300",
    id: 11,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Raspberry Cheesecake",
    price: "N1400",
    id: 12,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Blueberry Muffins",
    price: "N1000",
    id: 13,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Peanut Butter Fudge",
    price: "N950",
    id: 14,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Coconut Macaroons",
    price: "N750",
    id: 15,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Oreo Truffles",
    price: "N1200",
    id: 16,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Pumpkin Pie",
    price: "N1700",
    id: 17,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Chip Cookies",
    price: "N850",
    id: 18,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Fruit Tart",
    price: "N1400",
    id: 19,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Lavender Cupcakes",
    price: "N1100",
    id: 20,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Cinnamon Rolls",
    price: "N1250",
    id: 21,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Cherry Pie",
    price: "N1550",
    id: 22,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Caramel Popcorn",
    price: "N800",
    id: 23,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Banana Bread",
    price: "N950",
    id: 24,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Pecan Pie",
    price: "N1600",
    id: 25,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Coconut Cream Pie",
    price: "N1400",
    id: 26,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Mango Sorbet",
    price: "N750",
    id: 27,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Butterscotch Pudding",
    price: "N1100",
    id: 28,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Pistachio Gelato",
    price: "N1200",
    id: 29,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Coated Almonds",
    price: "N750",
    id: 30,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Candy Canes",
    price: "N350",
    id: 31,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Gummy Worms",
    price: "N300",
    id: 32,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Truffles",
    price: "N1200",
    id: 33,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Jelly Bean Jar",
    price: "N450",
    id: 34,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Caramel Chews",
    price: "N550",
    id: 35,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Milk Chocolate Bar",
    price: "N450",
    id: 36,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Gummy Bears",
    price: "N350",
    id: 37,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Covered Raisins",
    price: "N650",
    id: 38,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Licorice",
    price: "N250",
    id: 39,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "White Chocolate Bar",
    price: "N550",
    id: 40,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Peppermint Bark",
    price: "N750",
    id: 41,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Rock Candy",
    price: "N300",
    id: 42,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Toffee",
    price: "N450",
    id: 43,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Marshmallow",
    price: "N200",
    id: 44,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Dark Chocolate Truffles",
    price: "N1300",
    id: 45,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Covered Strawberries",
    price: "N950",
    id: 46,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Peanut Butter Cups",
    price: "N400",
    id: 47,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Cotton Candy",
    price: "N300",
    id: 48,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Chocolate Coated Pretzels",
    price: "N550",
    id: 49,
  },
  {
    productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    productName: "Fruit Gummies",
    price: "N350",
    id: 50,
  },
];

  return (
    <View style={allProducts.container}>
      <FlatList
    data={allProductsList}
    renderItem={({ item }) => <AllProductsCardView item={item} />}
    keyExtractor = {(item) => item.id.toString()}
    contentContainerStyle={{ columnGap: SIZES.medium}}
    // horizontal
    />
    </View>
  )
}

export default AllProducts