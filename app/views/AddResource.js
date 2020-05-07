import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AddResource = () => {
  return (
    <View style={styles.container}>
      <Text>Add Resource</Text>
    </View>
  );
};

export default AddResource;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
