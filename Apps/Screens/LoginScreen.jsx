import { View, Text, Image, Button, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View className="mt-[250px]">
    <View className="pt-16">
      <Image source={require('../../assets/images/login.jpg')} className="w-full h-[700px] object-fill "/>
    </View>
      <View style={{backgroundColor:"#8E3FFF"}} className="mt-[-40px] rounded-t-3xl shadow-2xl min-h-screen min-w-full items-center">
            <Text className='text-center text-[28px] text-white mt-3 py-5'>Let's Find <Text className='font-bold'> Professional Cleaning
            </Text> and <Text className='font-bold'>Repair</Text> Service</Text>
            <View>
                <Text className='text-start p-3 text-lg text-white'>Best App to find services near you which deliver you a 
                professional service in shortest time</Text>
            </View>
            <TouchableOpacity className="rounded-full bg-white w-[250px] h-[50px] mt-5 justify-center"
            onPress={onPress}>
            <Text className='text-center text-[20px] text-violet-600 font-bold'>Get Started</Text>
            </TouchableOpacity>
      </View>
      
    </View>
  )
}