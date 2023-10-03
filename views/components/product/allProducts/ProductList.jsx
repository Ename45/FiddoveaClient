import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useState } from 'react'
import useFetch from '../../../../hook/useFetch'
import productList from '../../../../styles/components/product/allproducts/productList';
import { COLORS, SIZES } from '../../../../constants/theme';
import AllProductsCardView from '../allProductsCardView/AllProductsCardView.jsx';

const ProductList = () => {

  const {data, isLoading, error } = useFetch();

  const [wishlist, setWishlist] = useState([]);

  const addToWishList = (product) => {
    if (!wishlist.some((item) => item._productId === product._productId)) {
      setWishlist([...wishlist, product]);
    }
  };

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

  
  return (
    <View style={productList.container}>
    {/* {isLoading ? (
      <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}/>
    ): error ? (
      <Text style={{fontSize: SIZES.xxLarge, marginTop: SIZES.height/2, fontFamily: "poppinsRegular400", fontSize: SIZES.width/20, textAlign: "center"}}>Something went wrong</Text>
    ): (
      <FlatList
      data={data}
      numColumns={2}
      renderItem={({item}) => (<AllProductsCardView item={item}/>)}
      contentContainerStyle={productList.container}
      ItemSeparatorComponent={() => <View style={productList.seperator}>
      </View>}
      />
    )} */}
      <FlatList
      data={data}
      numColumns={2}
      renderItem={({item}) => (<AllProductsCardView item={item} addToWishList={addToWishList} />)}
      contentContainerStyle={productList.container}
      ItemSeparatorComponent={() => <View style={productList.seperator}>
      </View>}
      />
    </View>
  )
}

export default ProductList


    //       const allProductsList = [
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Chocolate Cake",
    //     productPrice: "1500",
    //     _productId: 1,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Strawberry Cupcakes",
    //     productPrice: "1200",
    //     _productId: 2,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Vanilla Donuts",
    //     productPrice: "800",
    //     _productId: 3,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Chocolate Bar",
    //     productPrice: "500",
    //     _productId: 4,
    //   },
    
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Gummy Bears",
    //     productPrice: "300",
    //     _productId: 5,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Jellybeans",
    //     productPrice: "250",
    //     _productId: 6,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Chocolate Brownies",
    //     productPrice: "1800",
    //     _productId: 7,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Red Velvet Cake",
    //     productPrice: "1600",
    //     _productId: 8,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Caramel Toffee",
    //     productPrice: "900",
    //     _productId: 9,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Mint Chocolate Chip Cookies",
    //     productPrice: "1100",
    //     _productId: 10,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Lemon Tart",
    //     productPrice: "1300",
    //     _productId: 11,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Raspberry Cheesecake",
    //     productPrice: "1400",
    //     _productId: 12,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Blueberry Muffins",
    //     productPrice: "1000",
    //     _productId: 13,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Peanut Butter Fudge",
    //     productPrice: "950",
    //     _productId: 14,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Coconut Macaroons",
    //     productPrice: "750",
    //     _productId: 15,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Oreo Truffles",
    //     productPrice: "1200",
    //     _productId: 16,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Pumpkin Pie",
    //     productPrice: "1700",
    //     _productId: 17,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Chocolate Chip Cookies",
    //     productPrice: "850",
    //     _productId: 18,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Fruit Tart",
    //     productPrice: "1400",
    //     _productId: 19,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Lavender Cupcakes",
    //     productPrice: "1100",
    //     _productId: 20,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Cinnamon Rolls",
    //     productPrice: "1250",
    //     _productId: 21,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Cherry Pie",
    //     productPrice: "1550",
    //     _productId: 22,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Caramel Popcorn",
    //     productPrice: "800",
    //     _productId: 23,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Banana Bread",
    //     productPrice: "950",
    //     _productId: 24,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Pecan Pie",
    //     productPrice: "1600",
    //     _productId: 25,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Coconut Cream Pie",
    //     productPrice: "1400",
    //     _productId: 26,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Mango Sorbet",
    //     productPrice: "750",
    //     _productId: 27,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Butterscotch Pudding",
    //     productPrice: "1100",
    //     _productId: 28,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Pistachio Gelato",
    //     productPrice: "1200",
    //     _productId: 29,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Chocolate Coated Almonds",
    //     productPrice: "750",
    //     _productId: 30,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Candy Canes",
    //     productPrice: "350",
    //     _productId: 31,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Gummy Worms",
    //     productPrice: "300",
    //     _productId: 32,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Chocolate Truffles",
    //     productPrice: "1200",
    //     _productId: 33,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Jelly Bean Jar",
    //     productPrice: "450",
    //     _productId: 34,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Caramel Chews",
    //     productPrice: "550",
    //     _productId: 35,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Milk Chocolate Bar",
    //     productPrice: "450",
    //     _productId: 36,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Gummy Bears",
    //     productPrice: "350",
    //     _productId: 37,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Chocolate Covered Raisins",
    //     productPrice: "650",
    //     _productId: 38,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Licorice",
    //     productPrice: "250",
    //     _productId: 39,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "White Chocolate Bar",
    //     productPrice: "550",
    //     _productId: 40,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Peppermint Bark",
    //     productPrice: "750",
    //     _productId: 41,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Rock Candy",
    //     productPrice: "300",
    //     _productId: 42,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Toffee",
    //     productPrice: "450",
    //     _productId: 43,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Marshmallow",
    //     productPrice: "200",
    //     _productId: 44,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Dark Chocolate Truffles",
    //     productPrice: "1300",
    //     _productId: 45,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Chocolate Covered Strawberries",
    //     productPrice: "950",
    //     _productId: 46,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Peanut Butter Cups",
    //     productPrice: "400",
    //     _productId: 47,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Cotton Candy",
    //     productPrice: "300",
    //     _productId: 48,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Chocolate Coated Pretzels",
    //     productPrice: "550",
    //     _productId: 49,
    //   },
    //   {
    //     productImage: "https://i.ibb.co/W29btXp/profile.jpg",
    //     productName: "Fruit Gummies",
    //     productPrice: "350",
    //     _productId: 50,
    //   },
    // ];