import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setContinent, deleteCountry } from '../actions/actions-countries';
import CountryFlagList from '../presentation/flag-list.component';

import {
    View,
    Picker,
    ScrollView
} from 'react-native';

class ContinentsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pick: ''
        }
        this.deleteCountry = this.deleteCountry.bind(this);
        this.chooseContinent = this.chooseContinent.bind(this);
    }
    chooseContinent(continent) {
        this.props.dispatch(setContinent(continent));
    }
    deleteCountry(id) {
        this.props.dispatch(deleteCountry(id));
    }
    render() {
        return (
            <View>
                <Picker
                    onValueChange={(pick) => {
                        this.setState({ pick });
                        this.chooseContinent(pick);
                    }}
                    selectedValue={this.state.pick}
                >
                    <Picker.Item value='' label='...' />
                    <Picker.Item value="Africa" label='Africa' />
                    <Picker.Item value="Americas" label='Americas' />
                    <Picker.Item value="Asia" label='Asia' />
                    <Picker.Item value="Europe" label='Europe' />
                    <Picker.Item value="Oceania" label='Oceania' />
                    <Picker.Item value="Polar" label='Polar' />
                </Picker>
                <ScrollView>
                    <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry} />
                </ScrollView>
            </View>
        );
    }
}
const mapStateToProps = function (store) {
    return {
        visibleCountries: store.countriesReducer.visibleCountries
    }
}

export default connect(mapStateToProps)(ContinentsContainer);