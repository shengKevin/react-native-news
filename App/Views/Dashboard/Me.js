'use strict';

import React, {Component } from 'react';
import {
    View,Text,
    ScrollView,
    ListView,
    StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Me extends Component {
    constructor(props){
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
        super(props);
        this.state={
            dataSource:ds.cloneWithRows(this._getRows())
        }
    }
    _getRows(){
        return [{
            title:'我的消息',
            iconName:'ios-color-fill',},
            {
                title:'商城',
                iconName:'ios-happy',},
            {
                title:'夜间模式',
                iconName:'md-eye',},
            {
                title:'关于我们',
                iconName:'ios-person',},
            {
                title:'反馈',
                iconName:'md-help',},
        ];
    }

    _renderRow(rowData){
        return (
            <View style={styles.container}>
                <Icon name={rowData.iconName} size={30} color="#4F8EF7" />
                <Text>{rowData.title}</Text>
            </View>
        )
    }

    render(){
        return (
            <ScrollView>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />
            </ScrollView>
        )
    }
}
var styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor:'#fcfcfc',
        padding:10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    }
});