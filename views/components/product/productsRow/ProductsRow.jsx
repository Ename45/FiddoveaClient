import { FlatList, View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import productsRow from '../../../../styles/components/product/productRow/productsRow';
import { SIZES } from '../../../../constants/theme';

const ProductsRow = ({productList}) => {

const renderProductItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View key={item.id}>
          <Image source={{ uri: item.productImage }} style={{ width: 200, height: 150 }} />                    
          <Text style={productsRow.nameText}>{item.productName}</Text>
          <Text>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };


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
    data={productList}
    renderItem={renderProductItem}
    // keyExtractor = {(item) => item.id.toString()}
    contentContainerStyle={{ columnGap: SIZES.medium}}
    horizontal
    showHorizontal
    />
    </View>
  )
}

export default ProductsRow