import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentation/flag-list.component';
import { getCountries, searchCountries, deleteCountry } from '../actions/actions-countries';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';
class CountryFlagContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.search = this.search.bind(this);
        this.deleteCountry = this.deleteCountry.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(getCountries());
        this.props.dispatch(searchCountries(''));
    }
    search() {
        this.props.dispatch(searchCountries(this.state.text));
    }
    deleteCountry(id) {
        this.props.dispatch(deleteCountry(id));
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ marginBottom: 15, paddingLeft: 10}}>
                    <TextInput 
                        placeholder='Search'
                        style={{height: 40}}
                        onChangeText={(text) => {
                            this.setState({ text });
                            this.search();
                            }
                        } 
                        value={this.state.text} 
                    />
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry} />
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        countries: store.countriesReducer.countries,
        visibleCountries: store.countriesReducer.visibleCountries
    };
};

export default connect(mapStateToProps)(CountryFlagContainer)