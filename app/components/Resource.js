import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView, Linking, TouchableOpacity} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize } from "react-native-responsive-dimensions";

const Resource = (props) => {
  const link = props.resource.link;
  return (
      <SafeAreaView style={styles.container}>
      <View style={styles.card}>
          <Text style={styles.h1}> {props.resource.title} </Text>
          <Text style={styles.p}> 
            <Text style={{fontWeight: "bold"}}>Medium: </Text>
            {props.resource.medium}
          </Text>
          <Text style={styles.p}> 
            <Text style={{fontWeight: "bold"}}>Description: </Text>
            {props.resource.description}
          </Text>
          <Text style={styles.p}> 
            <Text style={{fontWeight: "bold"}}>Submitted By: </Text>
            {props.resource.submittedBy}
          </Text>
          <TouchableOpacity style = {styles.button} onPress={ ()=>{ Linking.openURL(props.resource.url)}} >
            <Text>CLICK ME</Text>
          </TouchableOpacity>
      </View>
      </SafeAreaView>
  );
};

export default Resource;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cbeef3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  card: {
    backgroundColor: "#c8ffc4",
    textAlign: 'center',
    padding: 20,
    borderColor: "#9DE996",
    borderWidth: 8
  },

  button: {
    backgroundColor: "#9DE996",
    margin: 5,
    padding: 10,
    textAlign: "center",
    alignItems: 'center',
    justifyContent: 'center',
  },

  h1: {
    textAlign:"center",
    textAlignVertical:"center",
    fontSize: responsiveScreenWidth(6)
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
