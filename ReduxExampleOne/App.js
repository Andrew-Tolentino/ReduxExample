import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, TextInput, Dimensions, Button } from 'react-native';
import store from './src/store';
import TextBox from './src/components/reuseable/TextBox';

export default function App() {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;

  console.log('rendering');

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TextBox 
        paddingBottom={20.0} 
        width={width * 0.85}
        height={40.0}
        />   

      </View>
    </Provider>
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
