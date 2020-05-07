import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from "react-navigation-stack"
import { Ionicons } from '@expo/vector-icons';

const Sidebar = (props) => {
    const state = {
        routes:[
            {
                name:"Home",
                icon:"ios-home"
            },
            {
                name:"Profile",
                icon:"ios-contact"
            },
            {
                name:"Settings",
                icon:"ios-settings"
            },
        ]
    }

    const Item = ({ item, navigate }) => {
        return (
          <TouchableOpacity style={styles.listItem} onPress={()=>navigate(item.name)}>
            <Ionicons name={item.icon} size={32} />
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
        );
    }
  
    
    return (
        <View style={styles.container}>
            <FlatList
                style={{width:"100%",marginLeft:30}}
                data={state.routes}
                renderItem={({ item }) => <Item  item={item} navigate={props.navigation.navigate}/>}
                keyExtractor={item => item.name}
            />
        </View>
    );
  }

export default Sidebar;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      paddingTop:40,
      alignItems:"center",
      flex:1
  
    },
    listItem:{
        height:60,
        alignItems:"center",
        flexDirection:"row",
    },
    title:{
        fontSize:18,
        marginLeft:20
    },
  });