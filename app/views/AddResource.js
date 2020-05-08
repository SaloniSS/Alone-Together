import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize } from "react-native-responsive-dimensions";

const axios = require("axios").default;

const AddResource = () => {

  const [resources, setResources] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://project-alone-together.wl.r.appspot.com/api/v1/resources/ToRelax`);
            setResources(result.data.data);
          };
          fetchData();
    });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.intro}>
          <Text style={styles.h1}> Add Resource </Text>
      </View>

      <ScrollView>
        <View style={styles.description}>
            <Text>Add Resource</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddResource;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cbeef3'
  },

  intro: {
    backgroundColor: "#1721f2",
    textAlign: 'center',
    padding: 20,
  },

  description: {
    backgroundColor: '#cbeef3',
    textAlign: 'center',
    padding: 20,
  },

  h1: {
    textAlign:"center",
    textAlignVertical:"center",
    fontSize: responsiveScreenWidth(7),
    color: '#fff'
  },

  h2: {
      textAlign:"center",
      textAlignVertical:"center",
      fontSize: responsiveScreenWidth(5)
  },

  p:{
      textAlign:"center",
      textAlignVertical:"center",
  }
});
