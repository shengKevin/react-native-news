/**
 * Created by liusheng on 2016/12/29.
 */

//var React = require('react-native');
//var {
//    StyleSheet,
//    Text,
//    View,
//    TouchableHighlight
//    } = React;

'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text, View,TouchableHighlight,
} from 'react-native';

//var GiftedListView = require('react-native-gifted-listview');
import GiftedListView from 'react-native-gifted-listview';

//var Example = React.createClass({
export default class Example extends Component{

    /**
     * Will be called when refreshing
     * Should be replaced by your own logic
     * @param {number} page Requested page to fetch
     * @param {function} callback Should pass the rows
     * @param {object} options Inform if first load
     */
    _onFetch(page = 1, callback, options) {
        setTimeout(() => {
            var rows = ['row '+((page - 1) * 3 + 1), 'row '+((page - 1) * 3 + 2), 'row '+((page - 1) * 3 + 3)];
            if (page === 3) {
                callback(rows, {
                    allLoaded: true, // the end of the list is reached
                });
            } else {
                callback(rows);
            }
        }, 1000); // simulating network fetching
    }


    /**
     * When a row is touched
     * @param {object} rowData Row data
     */
    _onPress(rowData) {
        console.log(rowData+' pressed');
    }

    /**
     * Render a row
     * @param {object} rowData Row data
     */
    _renderRowView(rowData) {
        return (
            <TouchableHighlight
                style={styles.row}
                underlayColor='#c8c7cc'
                onPress={() => this._onPress(rowData)}
            >
                <Text>{rowData}</Text>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBar} />

            </View>
        );
    }
}

var styles = {
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    navBar: {
        height: 64,
        backgroundColor: '#CCC'
    },
    row: {
        padding: 10,
        height: 44,
    },
};
