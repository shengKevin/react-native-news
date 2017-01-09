'use strict';

import React, {Component } from 'react';
import {
    Text,View,
    ListView,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';


export default class Star extends Component {
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2})
        this.state = {
            dataSource:ds.cloneWithRows(this._genRows()),
        }
    }

    _genRows(){
        return ['头条','要闻','娱乐','科技','段子','军事','美女','股票','体育',
        '财经','漫画','图片','时尚','历史','健康'
        ]
    }


    _renderRows(rowData){
        return (
            //<TouchableOpacity style={styles.row} onPress={this._onPressButton}>

                <Item rowData={rowData} />

        )
    }


    render(){
        return (
            <ScrollView>
                <View style={styles.topView}>
                    <Text style={styles.subTitle}>点击选择您的关注点</Text>
                </View>
                <ListView
                    initialListSize={15}
                    contentContainerStyle={styles.list}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRows}
                />
            </ScrollView>

        )
    }
}

class Item extends Component {
    constructor(props){
        super(props);
        this.state={
            background:'#F6F6F6'
        }
    }

    _onPressButton(){
        this.setState({
            background:this.state.background=='#F6F6F6'?'deepskyblue':'#F6F6F6'
        })
    }

    render(){
        return (
            <View style={[styles.row,{'backgroundColor':this.state.background}]}>
            <TouchableOpacity onPress={()=>this._onPressButton()}>
                <Text>{this.props.rowData}</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    topView:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        backgroundColor:'#ccc'
    },
    subTitle:{
        color:'white',
        fontSize:10
    },
    list: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    row: {
        justifyContent: 'center',
        padding: 5,
        margin: 10,
        width: 85,
        height: 50,
        //backgroundColor: '#F6F6F6',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#CCC'
    },
});