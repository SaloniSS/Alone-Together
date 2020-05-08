import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize } from "react-native-responsive-dimensions";
import Resource from "../../components/Resource";

const axios = require("axios").default;

const Host = () => {

  const [resources, setResources] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://project-alone-together.wl.r.appspot.com/api/v1/resources/ToHost`);
            setResources(result.data.data);
          };
          fetchData();
    });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.intro}>
          <Text style={styles.h1}> 💫 To Host 💫 </Text>
          <Text style={styles.h2}>Coordinate a Virtual Meet up!</Text>
      </View>

      <ScrollView>
        <View style={styles.description}>
            <Text style={styles.p}>Want to host a virtual book club? Study hall? Sharing circle? Watch party? </Text>
            <Text style={styles.p}>Whatever it is, pitch your idea below and leave your contact info so others can join in.</Text>
            <Text style={styles.p}>Once it's official, feel free to add to the "To Attend" tab to get some more RSVPS!</Text>
        </View>
        {resources.map (resource => (
          <Resource resource={resource}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Host;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cbeef3',
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
