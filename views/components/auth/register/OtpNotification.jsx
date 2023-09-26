import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function OtpNotification() {
    const [otp, setOTP] = useState('');
  
    const handleOTPChange = (text) => {
      setOTP(text);
    };
  
    const handleVerifyOTP = () => {

    };
  
    return (
      <View>
        <Text>Enter OTP</Text>
        <OTPInputView
          pinCount={6}
          code={otp}
          onCodeChanged={handleOTPChange}
          autoFocusOnLoad
          codeInputFieldStyle={{ borderWidth: 1 }}
        />
        <Button title="Verify OTP" onPress={handleVerifyOTP} />
      </View>
    );
  }
  
  export default OtpNotification;
  
