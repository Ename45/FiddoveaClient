import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { ngrokBaseUrl, productUrl } from "../api/Api";

const useFetch = () => {
  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${ngrokBaseUrl}/${productUrl}`);
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
