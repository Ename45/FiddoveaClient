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
      categoryImage: "http://res.cloudinary.com/di8higqd1/image/upload/v1695924370/promiscuous/users/profile%20images/7e7fef99-0cd0-4483-a2ed-cb98de3b27d8.jpg",
      categoryName: "Cup Cakes",
      screen: "Cupcake",
      id: 1
    },
    {
      categoryImage: "http://res.cloudinary.com/di8higqd1/image/upload/v1695924663/promiscuous/users/profile%20images/61200cd0-aae8-47c1-bdce-e5bd3c4088da.jpg",
      categoryName: "Brownies",
      screen: "Brownie",
      id: 2
    },
    {
      categoryImage: "http://res.cloudinary.com/di8higqd1/image/upload/v1695925411/promiscuous/users/profile%20images/95c4900a-7e9d-443c-ae9a-290fd93100c1.jpg",
      categoryName: "Cookies",
      screen: "Cookie",
      id: 3
    },
    {
      categoryImage: "http://res.cloudinary.com/di8higqd1/image/upload/v1695924126/promiscuous/users/profile%20images/ba26eac9-859b-4702-b648-4cdb65beeee3.jpg",
      categoryName: "Popcorn",
      screen: "Popcorn",
      id: 4
    },
    {
      categoryImage: "http://res.cloudinary.com/di8higqd1/image/upload/v1696273396/promiscuous/users/profile%20images/1494e687-7906-4544-a5ee-2366dfeb643d.jpg",
      categoryName: "Cakes",
      screen: "Cake",
      id: 5
    },
    {
      categoryImage: "http://res.cloudinary.com/di8higqd1/image/upload/v1696273615/promiscuous/users/profile%20images/de05085b-fae7-4447-a4d5-6fa9e577fa2d.jpg",
      categoryName: "Doughnuts",
      screen: "Doughnut",
      id: 6
    },
    {
      categoryImage: "http://res.cloudinary.com/di8higqd1/image/upload/v1696322343/promiscuous/users/profile%20images/ba075d1a-82a0-458c-8605-7a34573f855b.jpg",
      categoryName: "Rolls",
      screen: "Roll",
      id: 7
    },
    {
      categoryImage: "http://res.cloudinary.com/di8higqd1/image/upload/v1695925241/promiscuous/users/profile%20images/f47dd56b-15aa-4294-83c8-b437102e3d1b.jpg",
      categoryName: "Chocolates",
      screen: "Chocolate",
      id: 8
    },
    {
      categoryImage: "http://res.cloudinary.com/di8higqd1/image/upload/v1695925241/promiscuous/users/profile%20images/f47dd56b-15aa-4294-83c8-b437102e3d1b.jpg",
      categoryName: "Candies",
      screen: "Candy",
      id: 9
    },
    {
      categoryImage: "http://res.cloudinary.com/di8higqd1/image/upload/v1695925241/promiscuous/users/profile%20images/f47dd56b-15aa-4294-83c8-b437102e3d1b.jpg",
      categoryName: "Desserts",
      screen: "Dessert",
      id: 10
    },
    {
      categoryImage: "http://res.cloudinary.com/di8higqd1/image/upload/v1695925241/promiscuous/users/profile%20images/f47dd56b-15aa-4294-83c8-b437102e3d1b.jpg",
      categoryName: "Bread",
      screen: "Bread",
      id: 11
    },
    {
      categoryImage: "http://res.cloudinary.com/di8higqd1/image/upload/v1695925241/promiscuous/users/profile%20images/f47dd56b-15aa-4294-83c8-b437102e3d1b.jpg",
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
