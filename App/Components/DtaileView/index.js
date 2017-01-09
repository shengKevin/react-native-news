'use strict';
import React, { Component} from 'react';
import {
    View,Text,
    ScrollView,
    StyleSheet,
    Image,
} from 'react-native';

import API from '../../NetWork/api'
import Loading from '../Loading';
import HTMLView from 'react-native-htmlview'

export default class DetailView extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:{}
        }
    }

    componentWillMount(){
        let url = API.DETAIL_VIEW.replace(/xxx/,this.props.route.postId.params);
        this._onFetch(url)
    }

    _onFetch(url){
        fetch(url)
            .then(response => response.json())
            .then(json =>{
                //console.log(json)
                this.setState({
                    data:json
                })
            })
    }
    render(){
        var params = this.props.route.postId.params;
        var obj = this.state.data[params];
        console.log('obj==',obj);
        return (
            obj?
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.title}>{obj.title}</Text>
                        <Text style={styles.timer}>娱乐新闻&nbsp;&nbsp;&nbsp;{obj.ptime}</Text>
                        {
                            obj.img.map((item,index)=>
                                <View key={index}>
                                    <Image
                                        style={styles.itemImage}
                                        source={{uri:item.src}}
                                    />
                                    <Text style={styles.itemText}>{item.alt}</Text>
                                </View>
                            )
                        }
                            <HTMLView
                                value={obj.body}
                            />
                    </View>
            </ScrollView>:
            <Loading />
        )

    }
}
var styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        marginTop:64,
        marginBottom:30,
    },
    title: {
        color:'black',
        fontSize:20,
    },
    timer: {
        color:'gray',
        fontSize:10,
        textAlign:'left',
        marginTop:10,
    },
    itemImage:{
        margin:10,
        width:355,
        height:400
    },
    itemText:{
        color:'gray',
        fontSize:16,
    }
});