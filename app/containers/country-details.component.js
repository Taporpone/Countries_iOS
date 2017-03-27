import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native'
import { getCountry } from '../actions/actions-countries';
import CountryDetails from '../presentation/country-details.component';

class CountryDetailsContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(getCountry(this.props.match.params.id));
    }
    render() {
        return (
            <CountryDetails country={this.props.selectedCountry} />
        );
    }
}

const mapStateToProps = function (store) {
    return {
        selectedCountry: store.countriesReducer.selectedCountry
    };
};

export default connect(mapStateToProps)(CountryDetailsContainer);