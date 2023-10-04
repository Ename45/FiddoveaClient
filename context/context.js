import { createContext, useEffect, useState } from "react";
import { ngrokBaseUrl, productUrl } from "../api/Api";
import axios from "axios";
// create context
// provide context
// consume context

export const Context = createContext(null);

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const [wishListItems, setWishListItems] = useState([])

  const addToFavorites = () => {

  }


  useEffect(() => {
    setIsLoading(true)
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
        setError(error)
      }
    }

    getProductFromApi()
  }, []);

  // console.log("this is the list of products", products);

  return <Context.Provider value={{ products, isLoading, error, wishListItems, addToFavorites }}>{children}</Context.Provider>;
};

export default ProductContext;
