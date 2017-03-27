import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

const CountryDetails = (props) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.flag} source={{ uri: props.country.imageUrl }} />
            <Text style={styles.name}>{props.country.name}</Text>
        </View>
        <View style={styles.info}>
            <View style={styles.populationContainer}>
                <Text style={styles.label}>Population</Text>
                <Text>{props.country.populace} M</Text>
            </View>
            <View>
                <Text style={styles.label}>Capital</Text>
                <Text>{props.country.capital}</Text>
            </View>
            <View>
                <Text style={styles.label}>Currency</Text>
                <Text>{props.country.currency}</Text>
            </View>

        </View>
    </View>

);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    flag: {
        width: 250,
        height: 150,
    },
    name: {
        fontWeight: 'bold'
    },
    info: {
        flex: 1,
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    label: {
        fontWeight: 'bold'
    }
});

export default CountryDetails;