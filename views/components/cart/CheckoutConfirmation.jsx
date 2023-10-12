import { View, Text, Pressable, ScrollView } from "react-native";
import checkoutConfirmation from "../../../styles/components/cart/checkoutConfirmation";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../../constants/theme";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import InputField from "../reusable/inputField/InputField";
import CustomButton from "../reusable/button/CustomButton";


const CheckoutConfirmation = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { checkoutDataStringified, grandTotal } = route.params;

    const checkoutData = JSON.parse(checkoutDataStringified)

    const [serviceFee, setServiceFee] = useState(50);
    const [deliveryFee, setDeliveryFee] = useState(1000);
    const formattedServiceFee = serviceFee.toFixed(2);
    const formattedDeliveryFee = deliveryFee.toFixed(2);    
    const [houseNumber, setHouseNumber] = useState("");
    const [street, setStreet] = useState("");
    const [lga, setLga] = useState("");
    const [state, setState] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");


    const [isAddressPressed, setIsAddressPressed] = useState(false);
    const [isPhonePressed, setIsPhonePressed] = useState(false);
    const [addressToSend, setAddressToSend] = useState("Enter your address")
    const [phoneNumberToSend, setPhoneNumberToSend] = useState("Enter the delivery number")


    const handleAddressSubmit = () => {
        if (houseNumber && street && lga && state) {
        setIsAddressPressed(false)
        let addressToDeliver = `${houseNumber} ${street}, ${lga}. ${state}`
        setAddressToSend(addressToDeliver)
    }else {
        alert("all fields required")
    }
        
    }

    const handlePhoneNumberSubmit = () => {
        if (phoneNumber) {
            setIsPhonePressed(false)
            let phoneNumberToDeliver = `${phoneNumber}`
            setPhoneNumberToSend(phoneNumberToDeliver)
        } else {
            alert("Phone number required")
        }
    }

    const handleInitiatePayment = async() => {
        navigation.navigate("PaymentPage")
    }
    

    const vat = () => {
        const vatPrice = ((7 / 100) * grandTotal).toFixed(2);
        return vatPrice;
    };

    const grandOrderTotalVatIncluded = () => {
        const vatPrice = ((7 / 100) * grandTotal).toFixed(2);
        const allItemsTotal = parseFloat(grandTotal) + parseFloat(formattedServiceFee) + parseFloat(formattedDeliveryFee) + parseFloat(vatPrice);
        return (allItemsTotal.toFixed(2));
    };

    return (
        <View style={checkoutConfirmation.container}>
        <View style={checkoutConfirmation.outerWrapper}>
            <View style={checkoutConfirmation.headerContainer}>
            <View style={checkoutConfirmation.headerBackIcon}>
                <Pressable
                onPress={() => {
                    navigation.goBack();
                }}
                >
                <MaterialIcons
                    name="keyboard-arrow-left"
                    size={24}
                    color={COLORS.black}
                />
                </Pressable>
            </View>
            <View>
                <Text style={checkoutConfirmation.header}>Order Confirmation</Text>
            </View>
            </View>

            <ScrollView>
            <View style={checkoutConfirmation.section}>
                <View style={checkoutConfirmation.deliveryContainer}>
                <MaterialIcons
                    name="location-on"
                    size={24}
                    color={COLORS.goldenrod}
                />
                <View style={checkoutConfirmation.deliveryInnerContent}>
                    <View>
                    <Text style={checkoutConfirmation.deliveryContainerText}>
                        Delivery Location
                    </Text>
                    <Text style={checkoutConfirmation.deliveryMainText}>
                        {addressToSend}
                    </Text>
                    </View>
                    <View>
                    <MaterialIcons
                        name="edit"
                        size={24}
                        color={COLORS.tabBarBrown}
                        onPress={() => {
                        setIsAddressPressed(true);
                    }}
                    />
                    </View>
                </View>
                </View>

                {isAddressPressed && (
                <View style={checkoutConfirmation.inputContainer}>
                <InputField
                    style={checkoutConfirmation.inputField}
                    value={houseNumber}
                    onChangeText={(text) => setHouseNumber(text)}
                    placeholder="Enter your house number"
                    />
                    <InputField
                    style={checkoutConfirmation.inputField}
                    value={street}
                    onChangeText={(text) => setStreet(text)}
                    placeholder="Enter your street number"
                    />
                    <InputField
                    style={checkoutConfirmation.inputField}
                    value={lga}
                    onChangeText={(text) => setLga(text)}
                    placeholder="Enter your local government area"
                    />
                    <InputField
                    style={checkoutConfirmation.inputField}
                    value={state}
                    onChangeText={(text) => setState(text)}
                    placeholder="Enter your state"
                    />
                    
                    <CustomButton
                    buttonName="Submit"
                    onPress={handleAddressSubmit}
                    style={checkoutConfirmation.buttonStyle}
                    />
                </View>
                )}
                
                <View style={checkoutConfirmation.deliveryContainer}>
                <MaterialIcons name="phone" size={24} color={COLORS.goldenrod} />
                <View style={checkoutConfirmation.deliveryInnerContent}>
                    <View>
                    <Text style={checkoutConfirmation.deliveryContainerText}>
                        Phone Number
                    </Text>
                    <Text style={checkoutConfirmation.deliveryMainText}>
                        {phoneNumberToSend}
                    </Text>
                    </View>
                    <View>
                    <MaterialIcons
                        name="edit"
                        size={24}
                        color={COLORS.tabBarBrown}
                        // onPress={() => {
                        // navigation.navigate("EditProfile");
                        // }}
                        onPress={()=> setIsPhonePressed(true)}
                    />
                    </View>
                </View>
                </View>
                {isPhonePressed && (
              <View  style={checkoutConfirmation.inputContainer2}>
                <InputField
                    style={checkoutConfirmation.inputField}
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                    placeholder="Enter your Phone number"
                    />
                    
                    <CustomButton
                    buttonName="Submit"
                    onPress={handlePhoneNumberSubmit}
                    style={checkoutConfirmation.buttonStyle}
                    />
                </View>
                )}

                <View style={checkoutConfirmation.deliveryContainer}>
                <MaterialIcons
                    name="credit-card"
                    size={24}
                    color={COLORS.goldenrod}
                />
                <View style={checkoutConfirmation.deliveryInnerContent}>
                    <View>
                    <Text style={checkoutConfirmation.deliveryContainerText}>
                        Payment
                    </Text>
                    <Text style={checkoutConfirmation.deliveryMainText}>
                        Choose Payment Method
                    </Text>
                    </View>
                    <View>
                    <MaterialIcons
                        name="edit"
                        size={24}
                        color={COLORS.tabBarBrown}
                    />
                    </View>
                </View>
                </View>
            </View>

            <View style={checkoutConfirmation.section}>
                <Text style={checkoutConfirmation.sectionTitle}>Items</Text>
                <View>
                {checkoutData.map((item) => (
                    <View
                    key={item.productId}
                    style={checkoutConfirmation.productItem}
                    >
                    <Text style={checkoutConfirmation.productItemText}>
                        x {item.quantity} {item.productName}
                    </Text>
                    <Text style={checkoutConfirmation.productItemText}>
                        N{item.totalItemPrice}
                    </Text>
                    </View>
                ))}
                </View>
            </View>
            <View style={checkoutConfirmation.calcs}>
                <View style={checkoutConfirmation.totalRow}>
                <Text style={checkoutConfirmation.totalLabel}>Subtotal</Text>
                <Text style={checkoutConfirmation.totalAmount}>
                    N {grandTotal}
                </Text>
                </View>
                <View style={checkoutConfirmation.totalRow}>
                <Text style={checkoutConfirmation.totalLabel}>Service Fee</Text>
                <Text style={checkoutConfirmation.totalAmount}>N {formattedServiceFee}</Text>
                </View>
                <View style={checkoutConfirmation.totalRow}>
                <Text style={checkoutConfirmation.totalLabel}>VAT (7%)</Text>
                <Text style={checkoutConfirmation.totalAmount}>N {vat()}</Text>
                </View>
                <View style={checkoutConfirmation.totalRow}>
                <Text style={checkoutConfirmation.totalLabel}>Delivery Fee</Text>
                <Text style={checkoutConfirmation.totalAmount}>N {formattedDeliveryFee}</Text>
                </View>
            </View>
            <Pressable style={checkoutConfirmation.voucher}>
                <View style={{flexDirection: "row", width: "100%"}}>
                    <MaterialIcons
                name="confirmation-number"
                size={24}
                color={COLORS.black}
                />
                <Text style={checkoutConfirmation.voucherText}>Voucher Code?</Text>
                </View>
            </Pressable>
            <View style={checkoutConfirmation.totalRow}>
                <Text style={checkoutConfirmation.totalLabel}>
                Total (Incl. VAT)
                </Text>
                <Text style={checkoutConfirmation.totalAmount2}>
                N {grandOrderTotalVatIncluded()}
                </Text>
            </View>
            <Pressable 
            onPress={handleInitiatePayment}
            style={checkoutConfirmation.placeOrderButton}
            >
                <Text style={checkoutConfirmation.placeOrderButtonText}>
                PLACE ORDER
                </Text>
            </Pressable>
            </ScrollView>
        </View>
        </View>
    );
};

export default CheckoutConfirmation;
