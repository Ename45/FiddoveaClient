import { createContext, useEffect, useState, useCallback } from "react";
import { customerUrl, baseUrl, productUrl } from "../api/Api";
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
  const [cartItems, setCartItems] = useState([]);
  const [getCart, setGetCart] = useState([]);

  // console.log("cartItems ==> ", cartItems);

  const fetchAndStoreCartItems = async () => {
    const tokenStorage = await AsyncStorage.getItem("jwtToken");
    try {
      const response = await axios.get(`${baseUrl}/${customerUrl}/viewcart`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenStorage}`,
        },
      });
      if (response.status === 200) {
        const cartItemsData = response.data;
        setCartItems(cartItemsData);
        storeCartItems(cartItemsData);
      }
    } catch (error) {
      console.log("Error fetching cart items from server:", error);
    }
  };


  const storeCartItems = async (cartItems) => {
    try {
      await AsyncStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error storing cart items:", error);
    }
  };

  const getCartItems = async () => {
    try {
      const storedCartItems = await AsyncStorage.getItem("cartItems");
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    } catch (error) {
      console.error("Error retrieving cart items:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      const tokenStorage = await AsyncStorage.getItem("jwtToken");
      if (tokenStorage) {
        fetchAndStoreCartItems(tokenStorage);
        const storedCartItems = await getCartItems();
        setCartItems(storedCartItems);
      }
    };

    fetchCartItems();
  }, []);

  useEffect(() => {
    storeCartItems(cartItems);
  }, [cartItems]);



  const addToCart = async (productId) => {
    console.log(productId);
    let copyOfCartItems = [...cartItems];
    const foundProduct = copyOfCartItems.findIndex(
      (item) => item.productId == productId
    );

    if (foundProduct === -1 && !cartItems.includes(productId)) {
      const tokenStorage = await AsyncStorage.getItem("jwtToken");

      const data = {
        productId: productId,
      };

      try {
        const response = await axios.post(
          `${baseUrl}/${customerUrl}/addtocart`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenStorage}`,
            },
          }
        );

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



    const fetchAndStoreWishListItems = async (tokenStorage) => {
    try {
      const response = await axios.get(`${baseUrl}/${customerUrl}/wishlist`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenStorage}`,
        },
      });

      if (response.status === 200) {
        const wishListItemsData = response.data;
        setWishListItems(wishListItemsData);
        storeWishListItems(wishListItemsData);
      }
    } catch (error) {
      console.log("Error fetching wishlist items from server:", error);
    }
  };


  const storeWishListItems = async (wishListItems) => {
    try {
      await AsyncStorage.setItem("wishListItems", JSON.stringify(wishListItems));
    } catch (error) {
      console.error("Error storing wishlist items:", error);
    }
  };

  const getWishListItems = async () => {
    try {
      const storedWishListItems = await AsyncStorage.getItem("wishListItems");
      return storedWishListItems ? JSON.parse(storedWishListItems) : [];
    } catch (error) {
      console.error("Error retrieving wishlist items:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchWishListItems = async () => {
      const tokenStorage = await AsyncStorage.getItem("jwtToken");
      if (tokenStorage) {
        fetchAndStoreWishListItems(tokenStorage);
        const storedWishListItems = await getWishListItems();
        setWishListItems(storedWishListItems);
      }
    };

    fetchWishListItems();
  }, []);

  useEffect(() => {
    storeWishListItems(wishListItems);
  }, [wishListItems]);



  const addToWishList = async (productId) => {
    let copyOfWishListItems = [...wishListItems];
    const foundProduct = copyOfWishListItems.findIndex(
      (item) => item.productId == productId
    );

    if (foundProduct === -1 && !wishListItems.includes(productId)) {
      const tokenStore = await AsyncStorage.getItem("jwtToken");

      const data = {
        productId: productId,
      };

      try {
        const response = await axios.post(
          `${baseUrl}/${customerUrl}/addtowishlist`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenStore}`,
            },
          }
        );

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



  const handleRemoveFromWishList = async (getCurrentId) => {
    let copyOfWishListItems = [...wishListItems];

    copyOfWishListItems = copyOfWishListItems.filter(
      (item) => item.productId !== getCurrentId
    );

    const tokenStorage = await AsyncStorage.getItem("jwtToken");
    // console.log("Token Storage==>", tokenStorage);

    const data = {
      productId: getCurrentId,
    };

    try {
      const response = await axios.post(
        `${baseUrl}/${customerUrl}/removefromwishlist`,
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
    // console.log("Token Storage==>", tokenStorage);

    const data = {
      productId: getCurrentId,
    };

    try {
      const response = await axios.post(
        `${baseUrl}/${customerUrl}/removefromcart`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenStorage}`,
          },
        }
      );

      if (response.status === 200) {
        setIsLoading(false);
        setCartItems(copyOfCartItems);
      }
    } catch (error) {
      console.log("Error removing from cart", error);
      setError(error);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/${productUrl}`);
        if (response.status === 200) {
          setIsLoading(false);
          setProducts(response.data);
        }
      } catch (error) {
        console.log("Error fetching products", error);
        setError(error);
      }
    };

    fetchData();

    const fetchInterval = setInterval(() => {
      fetchData();
    }, 10000);

    return () => clearInterval(fetchInterval);
  }, []);



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
        getCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ProductContext;
