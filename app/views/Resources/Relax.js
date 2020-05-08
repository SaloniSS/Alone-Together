import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize } from "react-native-responsive-dimensions";
import Resource from "../../components/Resource";

const axios = require("axios").default;

const Relax = () => {

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
          <Text style={styles.h1}> 📖 To Relax 📖 </Text>
          <Text style={styles.h2}>The Fun Stuff!</Text>
      </View>

      <ScrollView>
        <View style={styles.description}>
            <Text style={styles.p}>Share what you've been reading, watching, consuming that you think are *must do* for the community. Sky's the limit!</Text>
        </View>
        {resources.map (resource => (
          <Resource resource={resource}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Relax;

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

  description: {
    backgroundColor: '#cbeef3',
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
