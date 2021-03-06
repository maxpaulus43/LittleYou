import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, StyleSheet.absoluteFill]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{...StyleSheet.absoluteFillObject, alignItems: "center", justifyContent: "center"}}>
        <Text style={{color: isDarkMode ? 'white' : 'black'}}>Hello world</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
