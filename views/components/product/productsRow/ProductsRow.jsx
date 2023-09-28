import { FlatList, View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import productsRow from '../../../../styles/components/product/productRow/productsRow';
import { SIZES } from '../../../../constants/theme';
import ProductCardView from '../productCardView/ProductCardView';
// import cake from '../../../../assets/images/jpg/cake'
// import cupcake from '../../../../assets/images/jpg/cupcake'

const ProductsRow = ({navigation}) => {
  

  const productCategories = [
    {
      categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
      categoryName: "Cakes",
      screen: "Cake",
      id: 1
    },
    {
      categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
      categoryName: "Cup Cakes",
      screen: "Cupcake",
      id: 2
    },
    {
      categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
      categoryName: "Doughnuts",
      screen: "Doughnut",
      id: 3
    },
    {
      categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
      categoryName: "Chocolates",
      screen: "Chocolate",
      id: 4
    },
    {
      categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
      categoryName: "Candies",
      screen: "Candy",
      id: 5
    },
    {
      categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
      categoryName: "Brownies",
      screen: "Brownie",
      id: 6
    },
    {
      categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
      categoryName: "Cookies",
      screen: "Cookie",
      id: 7
    },
    {
      categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
      categoryName: "Desserts",
      screen: "Dessert",
      id: 8
    },
    {
      categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
      categoryName: "Rolls",
      screen: "Roll",
      id: 9
    },
    {
      categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
      categoryName: "Popcorn",
      screen: "Popcorn",
      id: 10
    },
    {
      categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
      categoryName: "Bread",
      screen: "Bread",
      id: 11
    },
    {
      categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
      categoryName: "Drinks",
      screen: "Drink",
      id: 12
    },
  ];

  // const renderProductCategory = ({ item }) => {
  //   return (
  //     <TouchableOpacity onPress={() => navigateToScreen(item.screen)}>
  //       <View key={item.id}>
  //         <Image
  //           source={{ uri: item.categoryImage }}
  //           style={{ width: 200, height: 150 }}
  //         />
  //         <Text style={productsRow.nameText}>{item.categoryName}</Text>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };


  // const [allProducts, setAllProducts] = useState([]);

  // useEffect(() => {
  //   allProducts();
  // }, []);

  // const products = async () => {
  //   await fetch("")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAllProducts(data);
  //       console.log(data);
  //     })

  //     .catch((error) => console.error(error));
  // };


  return (
    <View style={productsRow.container}>
      <FlatList
    data={productCategories}
    renderItem={({ item }) => <ProductCardView item={item} navigation={navigation}/>}
    keyExtractor = {(item) => item.id.toString()}
    contentContainerStyle={{ columnGap: SIZES.medium}}
    horizontal
    />
    </View>
  )
}

export default ProductsRow




  // const navigateToCake = () => {
  //   navigation.navigate("Cake");
  // };

  // const navigateToCupCake = () => {
  //   navigation.navigate("Cupcake");
  // };

  // const navigateToDoughnut = () => {
  //   navigation.navigate("Doughnut");
  // };

  // const navigateToChocolate = () => {
  //   navigation.navigate("Chocolate");
  // };

  // const navigateToCandy = () => {
  //   navigation.navigate("Candy");
  // };

  // const navigateToBrownie = () => {
  //   navigation.navigate("Brownie");
  // };

  // const navigateToCookie = () => {
  //   navigation.navigate("Cookie");
  // };
  
  // const navigateToDessert = () => {
  //   navigation.navigate("Dessert");
  // };

  // const navigateToRoll = () => {
  //   navigation.navigate("Roll");
  // };

  // const navigateToPopcorn = () => {
  //   navigation.navigate("Popcorn");
  // };

  // const navigateToBread = () => {
  //   navigation.navigate("Bread");
  // };

  // const navigateToDrink = () => {
  //   navigation.navigate("Drink");
  // };

  // const productCategories = [
  //   {
  //     categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
  //     categoryName: "Cakes",
  //     action: navigateToCake,
  //     id: 1
  //   },
  //   {
  //     categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
  //     categoryName: "Cup Cakes",
  //     action: navigateToCupCake,
  //     id: 2
  //   },
  //   {
  //     categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
  //     categoryName: "Doughnuts",
  //     action: navigateToDoughnut,
  //     id: 3
  //   },
  //   {
  //     categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
  //     categoryName: "Chocolates",
  //     action: navigateToChocolate,
  //     id: 4
  //   },
  //   {
  //     categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
  //     categoryName: "Candies",
  //     action: navigateToCandy,
  //     id: 5
  //   },
  //   {
  //     categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
  //     categoryName: "Brownies",
  //     action: navigateToBrownie,
  //     id: 6
  //   },
  //   {
  //     categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
  //     categoryName: "Cookie",
  //     action: navigateToCookie,
  //     id: 7
  //   },
  //   {
  //     categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
  //     categoryName: "Desserts",
  //     action: navigateToDessert,
  //     id: 8
  //   },
  //   {
  //     categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
  //     categoryName: "Rolls",
  //     action: navigateToRoll,
  //     id: 9
  //   },
  //   {
  //     categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
  //     categoryName: "Popcorn",
  //     action: navigateToPopcorn,
  //     id: 10
  //   },
  //   {
  //     categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
  //     categoryName: "Bread",
  //     action: navigateToBread,
  //     id: 11
  //   },
  //   {
  //     categoryImage: "https://i.ibb.co/W29btXp/profile.jpg",
  //     categoryName: "Drinks",
  //     action: navigateToDrink,
  //     id: 12
  //   },
  // ];
