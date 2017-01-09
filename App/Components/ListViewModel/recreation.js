'use strict';

import React, { Component} from 'react';
import {
    StyleSheet,
    Text, View,
    ListView,
    TouchableOpacity,
    Image,
} from 'react-native';

import DetailView from '../DtaileView';

export default class RecreationItem extends Component {
    constructor(props){
        super(props);
    }

    _onPressItem(){
        this.props.navigator.push({
            component:DetailView,
            title:'Detail View',
            postId:{params:this.props.rowData.postid}
        })
    }
    render(){
        return (
            <TouchableOpacity onPress = {() =>this._onPressItem()}>
                <View style={styles.containerItem}>
                    <Image
                        style={styles.itemImage}
                        source={{uri:this.props.rowData.imgsrc}}
                    />
                    <View style={styles.itemRightContent}>
                        <Text style={styles.title}>
                            {this.props.rowData.ltitle}
                        </Text>
                        <View style={styles.itemRightBottom}>
                            <Text style={styles.newsForm}>
                                娱乐新闻
                            </Text>
                            <Text style={styles.votecount}>
                                {this.props.rowData.votecount}跟帖
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

var styles = StyleSheet.create({
    containerItem:{
       flexDirection:'row',
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
        flex:1,
        flexDirection:'column'
    },
    title: {
        fontSize: 18,
        textAlign: 'left',
        color: 'black'
    },
    itemRightBottom: {
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    votecount: {
        flex: 1,
        fontSize: 14,
        color: '#87CEFA',
        marginTop: 5,
        marginRight: 5
    },
    newsForm: {
        flex:1,
        fontSize:14,
        color:'red',
        marginTop:5
    }
});