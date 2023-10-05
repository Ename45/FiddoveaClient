import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useContext, useState } from 'react'
import productList from '../../../../styles/components/product/allproducts/productList';
import { COLORS, SIZES } from '../../../../constants/theme';
import AllProductsCardView from '../allProductsCardView/AllProductsCardView.jsx';
import { Context } from '../../../../context/context';

const ProductList = () => {
  const { products, isLoading, error } = useContext(Context);

  if (isLoading) {
    return (
      <View >
        <ActivityIndicator
        style={productList.loadingContainer}
        size={SIZES.xxLarge}
        color={COLORS.tabBarBrown}
        />
      </View>
    );
  }


  if (error) {
    return (
      <View>
        <Text style={{ fontSize: SIZES.xxLarge, marginTop: SIZES.height / 2, fontFamily: "poppinsRegular400", fontSize: SIZES.width / 20, textAlign: "center" }}>Something went wrong</Text>
      </View>
    );
  }


  return (
    <View style={productList.container}>
      <FlatList
      data={products}
      renderItem={({item}) => {
      if (!item || !item.productImageUrl) {
            return null;
          }
          return <AllProductsCardView product={item} />;
    }}
      keyExtractor={(item) => item.productId}
      numColumns={2}
      />
    </View>
  )
}

export default ProductList

