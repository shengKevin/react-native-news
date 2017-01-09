'use strict';
import React, { Component} from 'react';
import {
    StyleSheet,
    Text, View,
    ListView,
    TouchableOpacity,
    Image,
} from 'react-native';

export default class HomeListViewModel extends Component {
    constructor(props){
        super(props);
    }

    //enter detail
    _onPressListView(){
        console.log('enter detail')
    }
    render(){
        return (
            <TouchableOpacity onPress={() => this._onPressListView()}>
                <View style={styles.containerItem}>
                    <Image
                        style={styles.itemImage}
                        source={{uri:this.props.rowData.icon_url}}
                        //source={require('../../image_01.jpg')}
                    />
                    <View style={styles.itemRightContent} >
                        <Text style={styles.title}>
                            {this.props.rowData.name}
                        </Text>
                        <View style={styles.itemRightBottom} >
                            <Text style={styles.userName} >
                                {this.props.rowData.intro}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

var styles = StyleSheet.create({
    base: {
        flex:1
    },
    containerItem: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fcfcfc',
        padding:10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    itemImage: {
        width:88,
        height:66,
        marginRight:10
    },
    itemRightContent: {
        flex: 1,
        flexDirection: 'column'
    },
    title: {
        fontSize: 18,
        textAlign: 'left',
        color: 'black'
    },
    itemRightBottom: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userName: {
        flex: 1,
        fontSize: 14,
        color: '#87CEFA',
        marginTop: 5,
        marginRight: 5
    },
});