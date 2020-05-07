import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize } from "react-native-responsive-dimensions";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.intro}>
            <Text style={styles.h1}> 🌟 Together Alone 🌟</Text>
            <Text style={styles.h2}>Community Recommendations &amp; Activities</Text>
        </View>

        <ScrollView>
            <View style={styles.about}>
                <Text style={styles.h1}> About </Text>
                <Text style={styles.p}>
                    This is a collaborative, open-source resource for the community to 
                    share ways we are staying creative, motivated or productive with the extra time we have. 
                    It's a great reminder that community is not just a group of people, 
                    it's the sharing of ideas, experiences, and knowledge. 
                    Feel free to check back regularly for new updates from the community 
                    so we can still be together while apart!
                </Text>
            </View>

            <View style={styles.know}>
                <Text style={styles.h1}> Things To Know </Text>
                <FlatList
                    data={[
                        {key: '1. Check out all the categories we have in the different tabs! Each category has a brief description so you can see what it  is about.'},
                        {key: '2. Add anything you believe is relevant for the community. Consider hosting a virtual meetup!'},
                        {key: '3. Do not have anything to add? Feel free to browse for inspiration or to join in on a virtual meet up.'},
                        {key: '4. With great power comes great responsibilities. Please keep this public resource safe, inclusive, and welcoming for everyone.'},
                        {key: '5. Feel free to share this resource with your friends, classmates, or anyone that need this.'},
                    ]}
                    renderItem={({item}) => <Text style={styles.p}>{item.key}</Text>}
                />
            </View>

            <View style={styles.support}>
                <Text style={styles.h1}> Need Support? </Text>
                <Text style={styles.p}>
                    Reach out to salonishivdasani@gmail.com and I'd be happy to help!
                </Text>
            </View>

        </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdfd96',
    },
  
    intro: {
        backgroundColor: "#F99AB9",
        textAlign: 'center',
        padding: 20,
    },

    about: {
        backgroundColor: "#FFF2ED",
        textAlign: 'center',
        padding: 20,
        margin:5
    },

    know: {
        backgroundColor: "#D4F1F6",
        textAlign: 'center',
        padding: 20,
        margin:5
    },

    support: {
        backgroundColor: "#E1FDB7",
        textAlign: 'center',
        padding: 20,
        margin:5
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
