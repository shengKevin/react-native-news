/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,NavigatorIOS
} from 'react-native';

import Dashboard from './App/Views/Dashboard/index.ios'

export default class News extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <NavigatorIOS
            style={styles.container}
            tintColor='#FF6600'
            initialRoute={{
          title: 'News',
          component: Dashboard,
          tintColor:'deepskyblue'
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black'
    //justifyContent: 'center',
    //alignItems: 'center',
  }
});

AppRegistry.registerComponent('News', () => News);
