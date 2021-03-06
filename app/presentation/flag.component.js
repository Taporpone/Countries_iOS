import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';

export default class CountryFlag extends Component {
    constructor(props) {
        super(props);
    }
    setNativeProps(nativeProps){
        this._root.setNativeProps(nativeProps);
    }
    render() {
        return (
            <View ref={component => this._root = component}>
                <Image style={styles.image} source={{ uri: this.props.country.imageUrl }} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    image: {
        width:150,
        height:100,
    }
});