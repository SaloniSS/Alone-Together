import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize } from "react-native-responsive-dimensions";
import Resource from "../../components/Resource";

const axios = require("axios").default;

const GetSupport = () => {

  const [resources, setResources] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://project-accessibility.wl.r.appspot.com/api/v1/resources/ToGetSupport`);
            setResources(result.data.data);
          };
          fetchData();
    });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.intro}>
          <Text style={styles.h1}> 💜 Get Supported 💜 </Text>
          <Text style={styles.h2}>Online Resources</Text>
      </View>

      <ScrollView>
        <View style={styles.container}>
            <Text style={styles.p}> Share free resources on how to cope with anxiety and stress from the coronavirus.</Text>
            <Text style={styles.p}>Articles, guidebooks, or resources that other brands / organizations have created.</Text>
        </View>
        {resources.map (resource => (
          <Resource resource={resource}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default GetSupport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cbeef3'
  },

  intro: {
    backgroundColor: "#9DE996",
    textAlign: 'center',
    padding: 20,
  },

  h1: {
    textAlign:"center",
    textAlignVertical:"center",
    fontSize: responsiveScreenWidth(7)
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
