import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView, Button, Form, Item, Input} from 'react-native';
import { useForm, Controller } from "react-hook-form";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize } from "react-native-responsive-dimensions";

const axios = require("axios").default;

const AddResource = () => {

  const [category, setCategory] = useState(0);
  const [enteredText, setEnteredText] = useState("");

  const infoArray = [
    "Share your me time! Can include gardening, meditation, reading, movie recommendations and much more!",
    "Record your family/community experience! Can include board games, video calls, family projects, and much more!",
    "Log your workout routine! Activities include yoga, jogging, dancing, or things that get your heart pumping!",
    "Update your productivity! Activities include learning a new skill, finishing an assignment, or doing a chore!",
  ];
  
  const categoryList = ["md-happy", "md-contacts", "md-bicycle", "md-briefcase"];

  const submitPost = () => {
    console.log(enteredText);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.intro}>
          <Text style={styles.h1}> Add Resource </Text>
      </View>

      <ScrollView>
        <View style={styles.description}>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
          </Form>
          
          
          <Button title="Submit" onPress={() => submitPost()} />
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
