import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  Pressable,
  TextInput,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import productDetails from "../../../../styles/components/product/productDetails/productDetails";
import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../../constants/theme";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { baseUrl, customerUrl, productUrl } from "../../../../api/Api";
import { Context } from "../../../../context/context";
import StarRating from "react-native-star-rating";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductDetails = ({ navigation }) => {
  const route = useRoute();
  const { productId } = route.params;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productDetailsData, setProductDetailsData] = useState(null);
  const [rating, setRating] = useState(0.0);
  const [review, setReview] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const { addToWishList, addToCart } = useContext(Context);

  const handleRatingChange = (rating) => {
    setRating(rating);
    // Send a request to the backend to update the rating for the product
    // You'll need to implement this API endpoint on the backend.
  };

  const handleReviewSubmit = async () => {
    const tokenStorage = await AsyncStorage.getItem("jwtToken");

    const data = {
      productRatings: rating,
      reviewContent: review,
    };

    try {
      const response = await axios.post(
        `${baseUrl}/${customerUrl}/review/${productId}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenStorage}`,
          },
        }
      );

      console.log("Api URL==>", `${baseUrl}/${customerUrl}/review/${productId}`)

      console.log("this is the reviews response", response.data);

      if (response.status === 200) {
        setResponseMessage(response.data);
        setTimeout(() => {
          setResponseMessage(""); // Clear the response message after 4 seconds
        }, 4000);

        // Fetch updated product details after submitting a review
        getProductDetailsDataFromApi();
      }
    } catch (error) {
      setResponseMessage(error);
      // setResponseMessage("Error submitting review. Please try again.");
      console.log("Error submitting review", error);
    }
    // Include the review text, user information, and product ID.
  };

  useEffect(() => {
    async function getProductDetailsDataFromApi() {
      try {
        const response = await axios.get(
          `${baseUrl}/${productUrl}/findproduct/${productId}`
        );

        // console.log("this is the response", response.data);

        if (response.status == 200) {
          setIsLoading(false);
          setProductDetailsData(response.data);
        }
      } catch (error) {
        console.log("this is the error message", error);
        setError(error);
      }
    }

    getProductDetailsDataFromApi();
  }, []);

  // console.log("this is me", productDetailsData);

  if (isLoading) {
    return (
      <ActivityIndicator size={SIZES.xxLarge} color={COLORS.tabBarBrown} />
    );
  }

  return (
    <ScrollView>
      <View style={productDetails.container}>
        <View style={productDetails.upperMainContainer}>
          <View style={productDetails.upperRow}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                elevation: 10,
                backgroundColor: COLORS.white,
                borderRadius: 50,
              }}
            >
              <Ionicons
                name="chevron-back-circle-outline"
                size={30}
                color={COLORS.black}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => addToWishList(productId)}
              onPressIn={() => setIsFocused(true)}
              style={{
                elevation: 10,
                borderRadius: 50,
                backgroundColor: COLORS.white,
                paddingTop: 2,
              }}
              // onPressOut={() => setIsFocused(false)}
            >
              <Ionicons
                name={isFocused ? "heart" : "heart-outline"}
                size={30}
                color={isFocused ? "red" : COLORS.black}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={{ uri: productDetailsData?.productImageUrl }}
            style={productDetails.image}
          />
        </View>

        <View style={productDetails.details}>
          <View style={productDetails.titleRow}>
            <Text style={productDetails.title}>
              {productDetailsData?.productName}
            </Text>
            <View style={productDetails.priceWrapper}>
              <Text style={productDetails.productPrice}>
                N{productDetailsData?.productPrice}
              </Text>
            </View>
          </View>

          <View style={productDetails.descriptionWrapper}>
            <Text style={productDetails.description}>Description</Text>
            <Text style={productDetails.descriptionStyle}>
              {productDetailsData?.productDescription}
            </Text>
          </View>

          <View style={productDetails.reviewsContainer}>
            <Text style={productDetails.reviewsTitle}>Reviews</Text>
            {productDetailsData?.reviews &&
            productDetailsData.reviews.length > 0 ? (
              productDetailsData.reviews.map((review, index) => (
                <View key={index} style={productDetails.reviewContainer}>
                  <View style={productDetails.reviewHeader}>
                    <Text style={productDetails.reviewUser}>
                      {review.userFullName}
                    </Text>
                    <StarRating
                      disabled={true}
                      maxStars={5}
                      rating={review.rating}
                      starSize={22}
                      emptyStarColor={COLORS.tabBarBrown}
                      fullStarColor={COLORS.goldenrod}
                    />
                  </View>
                  <Text style={productDetails.reviewText}>{review.text}</Text>
                </View>
              ))
            ) : (
              <Text>No reviews available.</Text>
            )}
            <View style={productDetails.leaveReviewContainer}>
              <TextInput
                placeholder="Leave a review..."
                value={review}
                onChangeText={(text) => setReview(text)}
                style={productDetails.leaveReviewInput}
              />
              <Pressable onPress={handleReviewSubmit}>
                <Text style={productDetails.leaveReviewButton}>
                  Submit Review
                </Text>
              </Pressable>
            </View>
          </View>
          {responseMessage ? (
            <Text style={productDetails.responseMessage}>
              {JSON.stringify(responseMessage)}
            </Text>
          ) : null}

          <View style={productDetails.cartRow}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Cart")}
              style={productDetails.cartButton}
            >
              <Text style={productDetails.cartTitle}>BUY NOW</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={productDetails.addToCart}
              onPress={() => addToCart(productId)}
            >
              <MaterialCommunityIcons
                name="cart"
                size={24}
                color={COLORS.lightWhite}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;
