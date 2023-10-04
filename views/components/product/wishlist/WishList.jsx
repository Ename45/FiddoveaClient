import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { customerUrl, ngrokBaseUrl } from '../../../../api/Api';
import axios from 'axios';
import WishlistCardView from './WishlistCardView';

const WishList = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [error, setError] = useState(null);
  const [inputError, setInputError] = useState("");
  const [networkError, setNetworkError] = useState("");
  const [wishList, setWishList] = useState([])

  const navigation = useNavigation();

  useEffect(() => {
    // setIsLoading(true)
    async function getProductFromApi() {
      try {
        const response = await axios.get(`${ngrokBaseUrl}/${customerUrl}/wishlist/${"6519d0e1d7ee80377ef42653"}`);

        // console.log("this is the response", response.data);

        if (response.status == 200) {
          // setIsLoading(false);
          setWishList(response.data);
        }
      } catch (error) {
        console.log("wishlist component error message", error);
        setError(error)
      }
    }

    getProductFromApi()
  }, []);

  console.log(wishList);

  return(
    <View >
      <FlatList
      data={wishList}
      renderItem={({item}) => {
      if (!item || !item.productImageUrl) {
            return null;
          }
          return <WishlistCardView wishList={item} />;
    }}
      keyExtractor={(item) => item.productId}
      numColumns={2}
      />
    </View>
  )
};

export default WishList;
