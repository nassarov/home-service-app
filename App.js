import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Apps/Screens/LoginScreen';
import * as SecureStore from "expo-secure-store";
import HomeScreen from './Apps/Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabNaviagtion from './Apps/Navigations/TabNavigation';

// const tokenCache = {
//   async getToken(key ) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };


export default function App() {
  return (
    <ClerkProvider 
    // tokenCache={tokenCache}
    publishableKey='pk_test_a25vd2luZy1zY3VscGluLTY3LmNsZXJrLmFjY291bnRzLmRldiQ'>
  <View style={styles.container}>
      <StatusBar style="auto"/>
      {/* Sign In */}
      <SignedIn>
        <NavigationContainer>
          <TabNaviagtion/>
        </NavigationContainer>
      </SignedIn>
      {/* Sign out */}
      <SignedOut>
       <LoginScreen/>
      </SignedOut>
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});