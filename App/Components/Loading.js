'use strict';
import React, { Component} from 'react';
import {
    StyleSheet,
    View, Text,
    ActivityIndicator
} from 'react-native';

export default class Loading extends Component {
    constructor(props){
        super(props);
        this.state = {
            animating:true
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={this.state.animating}
                    style={[styles.centering,{height:80}]}
                    size="large"
                />
            </View>

        )
    }
}

var styles = StyleSheet.create({
    container:{
      marginTop:64
    },
    centering:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    }
});