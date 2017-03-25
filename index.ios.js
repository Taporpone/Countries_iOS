/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { NativeRouter, Route, Link } from 'react-router-native';
import { Provider } from 'react-redux';
import store from './app/store/store';

import Home from './app/presentation/home.component';
import Navigation from './app/presentation/navigation.component';
import CountryFlagContainer from './app/containers/flag-container.component';
import ContinentsContainer from './app/containers/continents-container.component';

export default class countries extends Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={styles.container}>
            <View>
              <Navigation />
            </View>
            <Route exact path='/' component={Home} />
            <Route path='/countries' component={CountryFlagContainer} />
            <Route path='/continents' component={ContinentsContainer} />
          </View>
        </NativeRouter>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  }
});

AppRegistry.registerComponent('countries', () => countries);
