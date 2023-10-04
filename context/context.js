import { createContext, useEffect, useState } from "react";
import { customerUrl, ngrokBaseUrl, productUrl } from "../api/Api";
import axios from "axios";
// create context
// provide context
// consume context

export const Context = createContext(null);

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [wishListItems, setWishListItems] = useState([]);

  // const [getWishList, setGetWishList] = useState([])

  async function addToWishlistUsingApi(productId) {
    // console.log("wishlist ==> ", productId);
    const data = {
      productId: productId,
      customerId: "6519d0e1d7ee80377ef42653",
    };
    try {
      const response = await axios.post(
        `${ngrokBaseUrl}/${customerUrl}/addtowishlist`,
        data
      );

      console.log("this is the response", response.data);

      if (response.status == 200) {
        setIsLoading(false);
        setWishListItems([...wishListItems, response.data]);
      }
    } catch (error) {
      console.log("Error adding to wishList", error);
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
    console.log("wishlist ==> ", productId);
    const data = {
      productId: productId,
      userId: "6519d0e1d7ee80377ef42653",
    };
    try {
      const response = await axios.post(
        `${ngrokBaseUrl}/${customerUrl}/removefromwishlist`,
        data
      );

      console.log("remove response  ", response.data);

      if (response.status == 200) {
        setIsLoading(false);
        setWishListItems([...wishListItems, response.data]);
      }
    } catch (error) {
      console.log("Error adding to wishList", error);
      setError(error);
    }
  };
  console.log("removeFromWishlistUsingApi==> ", wishListItems);



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
