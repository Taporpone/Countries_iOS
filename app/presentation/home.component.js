import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

const Home = () => (
    <View style={styles.container}>
        <Text style={styles.text}>SPA ported to iOS presenting basic info about countries with implemented search functionality. Built with ReactNative, ReactRouterNative and Redux.</Text>
        <Image style={styles.image} source={require('../img/github.png')} />
        <Text style={styles.text}> https://github.com/Taporpone</Text>
        <Text style={styles.text}>Please note that because of imgur wild API this iOS app has only 30 countries as well as mismatched flags. I can't sort them manually :( </Text>
    </View>
)

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        marginBottom: 10,
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    }

});