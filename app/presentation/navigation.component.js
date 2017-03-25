import React from 'react';
import { Link } from 'react-router-native';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

const Navigation = props => (
    <View style={styles.container}>
        <View style={styles.title}>
            <Link to='/'><Text>Countries.js</Text></Link>
        </View>
        <View style={styles.menu}>
            <Link to='/countries'><Text>Countries</Text></Link>
            <Link to='/continents'><Text> Continents </Text></Link>
        </View>
        <View style={styles.fluid}>
                {props.children}
            </View>
        </View>
        );

export default Navigation;

const styles ={
            container: {
        },
    title:{
            marginTop: 20,
        marginBottom: 10
    },
    menu: {
            flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    fluid: {
            flex: 1,
    }
}