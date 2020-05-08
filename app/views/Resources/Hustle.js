import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize } from "react-native-responsive-dimensions";
import Resource from "../../components/Resource";

const axios = require("axios").default;

const Hustle = () => {

  const [resources, setResources] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://project-alone-together.wl.r.appspot.com/api/v1/resources/ToHustle`);
            setResources(result.data.data);
          };
          fetchData();
    });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.intro}>
          <Text style={styles.h1}> 💻 To Hustle 💻 </Text>
          <Text style={styles.h2}>Getting to Werk</Text>
      </View>

      <ScrollView>
        <View style={styles.description}>
            <Text style={styles.p}>We know you've been keeping busy! Share with us the side projects or business ideas that you're working on.</Text>
            <Text style={styles.p}>Tell us if you just want some love or if you have a request for virtual help in any way.</Text>
            <Text style={styles.p}>Don't have a project? Browse the incredible things your community members are building! Or drop links to free resources to staying productive.</Text>
        </View>
        {resources.map (resource => (
          <Resource resource={resource}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Hustle;

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
