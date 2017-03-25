import React from 'react';
import {
    View,
    Button,
    StyleSheet,
    Text
} from 'react-native';

import { Link } from 'react-router-native';
import CountryFlag from './flag.component';

const CountryFlagList = (props) => {
    return(
    <View style={styles.countriesList}>
        {props.countries.map(country => {
            return (
                <View style={styles.singleCountry} key={country.id}>
                    <Link style={styles.logo} key={country.id} to={'countries/country/' + country.id}>
                        <CountryFlag country={country} />
                    </Link>
                    <Button title='DELETE' onPress={props.deleteCountry.bind(null, country.id)}/>
                </View>
            )
        })}
    </View>
);
}

export default CountryFlagList;

const styles= {
    countriesList:{
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
        },
    singleCountry:{
    },
    logo:{

    }
}