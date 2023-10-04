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



  

  const addToWishList = async (productId) => {
    console.log(productId);
    let copyOfWishListItems = [...wishListItems];
    const foundProduct = copyOfWishListItems.findIndex(
      (item) => item.productId == productId
    );

    if (foundProduct === -1 && !wishListItems.includes(productId)) {
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





  const handleRemoveFromWishList = async (getCurrentId) => {
    let copyOfWishListItems = [...wishListItems];

    copyOfWishListItems = copyOfWishListItems.filter(
      (item) => item.productId !== getCurrentId
    );

    const data = {
      productId: getCurrentId,
      userId: "6519d0e1d7ee80377ef42653",
    };

    try {
      const response = await axios.post(
        `${ngrokBaseUrl}/${customerUrl}/removefromwishlist`,
        data
      );

      console.log("this is the response", response.data);

      if (response.status === 200) {
        setIsLoading(false);
        setWishListItems(copyOfWishListItems);
      }
    } catch (error) {
      console.log("Error adding to wishList", error);
      setError(error);
    }
  };





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





  return (
    <Context.Provider
      value={{
        products,
        isLoading,
        error,
        wishListItems,
        addToWishList,
        handleRemoveFromWishList,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ProductContext;
