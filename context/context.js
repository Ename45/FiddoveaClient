import { createContext, useEffect, useState } from "react";
import { customerUrl, ngrokBaseUrl, productUrl } from "../api/Api";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


// create context
// provide context
// consume context

export const Context = createContext(null);

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [wishListItems, setWishListItems] = useState([]);
  const [cartItems, setCartItems] = useState([])



  const addToWishList = async (productId) => {
    // console.log(productId);
    let copyOfWishListItems = [...wishListItems];
    const foundProduct = copyOfWishListItems.findIndex(
      (item) => item.productId == productId
    );

    if (foundProduct === -1 && !wishListItems.includes(productId)) {
      // const data = {
      //   productId: productId,
      //   customerId: "6519d0e1d7ee80377ef42653",
      // };
      const tokenStore = await AsyncStorage.getItem("jwtToken");
      console.log("Token Storage==>", tokenStore);

      const data = {
        productId: productId,
      };

      try {
        const response = await axios.post(
          `${ngrokBaseUrl}/${customerUrl}/addtowishlist`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${tokenStore}`,
            },
          }
        );

        // console.log("this is the response", response.data);

        if (response.status === 200) {
          setIsLoading(false);
          setWishListItems([...copyOfWishListItems, response.data]);
        }
      } catch (error) {
        console.log("Error adding to wishList", error);
        setError(error);
      }
    } else {
      console.log("Item is already in the wishlist");
    }
  };

  // console.log("wishListItems in context", wishListItems);




  const addToCart = async (productId) => {
    console.log(productId);
    let copyOfCartItems = [...cartItems];
    const foundProduct = copyOfCartItems.findIndex(
      (item) => item.productId == productId
    );

    console.log("i got here ")

    
    

    if (foundProduct === -1 && !cartItems.includes(productId)) {

      const tokenStorage = await AsyncStorage.getItem("jwtToken");
      console.log("Token Storage==>", tokenStorage);

      const data = {
        productId: productId
      }

      try {
        const response = await axios.post(
          `${ngrokBaseUrl}/${customerUrl}/addtocart`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${tokenStorage}`,
            },
          }
        );

        console.log("this is the response", response.data);

        if (response.status === 200) {
          setIsLoading(false);
          setCartItems([...copyOfCartItems, response.data]);
        }
      } catch (error) {
        console.log("Error adding to cart", error);
        setError(error);
      }
    } else {
      console.log("Item is already in the cart");
    }
  };

  // console.log("wishListItems in context", wishListItems);




  const handleRemoveFromWishList = async (getCurrentId) => {
    let copyOfWishListItems = [...wishListItems];

    copyOfWishListItems = copyOfWishListItems.filter(
      (item) => item.productId !== getCurrentId
    );

    const tokenStorage = await AsyncStorage.getItem("jwtToken");
    console.log("Token Storage==>", tokenStorage);

    const data = {
      productId: getCurrentId,
    };

    try {
      const response = await axios.post(
        `${ngrokBaseUrl}/${customerUrl}/removefromwishlist`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenStorage}`,
          },
        }
      );

      console.log("this is the response", response.data);

      if (response.status === 200) {
        setIsLoading(false);
        setWishListItems(copyOfWishListItems);
      }
    } catch (error) {
      console.log("Error removing from wishList", error);
      setError(error);
    }
  };




  const handleRemoveFromCart = async (getCurrentId) => {
    let copyOfCartItems = [...cartItems];

    copyOfCartItems = copyOfCartItems.filter(
      (item) => item.productId !== getCurrentId
    );

    const tokenStorage = await AsyncStorage.getItem("jwtToken");
    console.log("Token Storage==>", tokenStorage);

    const data = {
      productId: getCurrentId,
    };

    try {
      const response = await axios.post(
        `${ngrokBaseUrl}/${customerUrl}/removefromcart`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenStorage}`,
          },
        }
      );

      console.log("this is the response", response.data);

      if (response.status === 200) {
        setIsLoading(false);
        setCartItems(copyOfCartItems);
      }
    } catch (error) {
      console.log("Error removing from cart", error);
      setError(error);
    }
  };

  console.log("desperado cart items==>", cartItems);



  useEffect(() => {
    setIsLoading(true);
    async function getProductFromApi() {
      try {
        const response = await axios.get(`${ngrokBaseUrl}/${productUrl}`);

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

  return (
    <Context.Provider
      value={{
        products,
        isLoading,
        error,
        wishListItems,
        addToWishList,
        handleRemoveFromWishList,
        cartItems,
        addToCart,
        handleRemoveFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ProductContext;
