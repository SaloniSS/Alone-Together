import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GetSupport = () => {
  return (
    <View style={styles.container}>
      <Text>Get Support</Text>
    </View>
  );
};

export default GetSupport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
