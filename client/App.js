import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Main from './Main';

export default function App() {
  return (
    //  <View style={{ paddingVertical : Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
    //   <SafeAreaView>
    //     <Main />
    //   </SafeAreaView>
    // </View>
    <Main />
  );
}


