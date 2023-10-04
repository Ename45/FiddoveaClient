import { createContext, useEffect, useState } from "react";
import { customerUrl, ngrokBaseUrl, productUrl } from "../api/Api";
import axios from "axios";
import { AsyncStorage } from "@react-native-async-storage/async-storage";

// create context
// provide context
// consume context

export const Context = createContext(null);

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [wishListItems, setWishListItems] = useState([]);

  const WISHLIST_STORAGE_KEY = "wishlist";


  useEffect(() => {
    async function loadWishlistFromStorage() {
      try {
        const existingWishlist = await AsyncStorage.getItem(
          WISHLIST_STORAGE_KEY
        );
        const wishlist = existingWishlist ? JSON.parse(existingWishlist) : [];
        setWishListItems(wishlist);
      } catch (error) {
        console.log("Error loading wishlist from storage", error);
      }
    }

    loadWishlistFromStorage();
  }, []);


  async function addToWishlistUsingApi(productId) {
    try {
      // Check if the item exists in AsyncStorage
      const existingWishlist = await AsyncStorage.getItem(WISHLIST_STORAGE_KEY);
      const wishlist = existingWishlist ? JSON.parse(existingWishlist) : [];

      // Check if the product is already in the wishlist
      const exists = wishlist.find((item) => item.productId === productId);

      if (!exists) {
        const data = {
          productId: productId,
          customerId: "6519d0e1d7ee80377ef42653",
        };

        // Make the API call to add the item to the server-side wishlist
        const response = await axios.post(
          `${ngrokBaseUrl}/${customerUrl}/addtowishlist`,
          data
        );

        if (response.status === 200) {
          // Update the local wishlist state and AsyncStorage
          const updatedWishlist = [...wishlist, response.data];
          await AsyncStorage.setItem(
            WISHLIST_STORAGE_KEY,
            JSON.stringify(updatedWishlist)
          );

          setIsLoading(false);
          setWishListItems(updatedWishlist);
        }
      } else {
        console.log("Item is already in the wishlist");
      }
    } catch (error) {
      console.log("Error adding to wishlist", error);
      setError(error);
    }
  }


  // console.log(wishListItems);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     async function getWishlistUsingApi(productId) {
  //       console.log("Get Wishlist ==> ", productId);
  //       // const data = {
  //       //   productId: productId,
  //       //   customerId: "6519d0e1d7ee80377ef42653"
  //       // }
  //       try {
  //         const response = await axios.get(
  //           `${ngrokBaseUrl}/${customerUrl}/wishlist/${"6519d0e1d7ee80377ef42653"}`
  //         );

  //         console.log("this is the response", response.data);

  //         if (response.status == 200) {
  //           setIsLoading(false);
  //           setGetWishList(response.data);
  //         }
  //       } catch (error) {
  //         console.log("wishlist component error message", error);
  //         setError(error);
  //       }
  //     }

  //     getWishlistUsingApi();
  //   }, []);

  // console.log(getWishList);

  async function removeFromWishlistUsingApi(productId) {
    try {
      // Check if the item exists in AsyncStorage
      const existingWishlist = await AsyncStorage.getItem(WISHLIST_STORAGE_KEY);
      const wishlist = existingWishlist ? JSON.parse(existingWishlist) : [];

      // Remove the item from the local wishlist state and AsyncStorage
      const updatedWishlist = wishlist.filter(
        (item) => item.productId !== productId
      );
      await AsyncStorage.setItem(
        WISHLIST_STORAGE_KEY,
        JSON.stringify(updatedWishlist)
      );

      // Make the API call to remove the item from the server-side wishlist
      const data = {
        productId: productId,
        userId: "6519d0e1d7ee80377ef42653",
      };
      const response = await axios.post(
        `${ngrokBaseUrl}/${customerUrl}/removefromwishlist`,
        data
      );

      if (response.status === 200) {
        setIsLoading(false);
        setWishListItems(updatedWishlist);
      }
    } catch (error) {
      console.log("Error removing from wishlist", error);
      setError(error);
    }
  }
  // console.log("removeFromWishlistUsingApi==> ", wishListItems);




  useEffect(() => {
    setIsLoading(true);
    async function getProductFromApi() {
      try {
        const response = await axios.get(`${ngrokBaseUrl}/${productUrl}`);

        // console.log("this is the response", response.data);

        if (response.status == 200) {
          setIsLoading(false);
          setProducts(response.data);
        }
      } catch (error) {
        console.log("this is the error message", error);
        setError(error);
      }
    }

    getProductFromApi();
  }, []);

  // console.log("this is the list of products", products);

  return (
    <Context.Provider
      value={{ products, isLoading, error, addToWishlistUsingApi, removeFromWishlistUsingApi }}
    >
      {children}
    </Context.Provider>
  );
};

export default ProductContext;
