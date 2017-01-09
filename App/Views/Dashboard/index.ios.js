'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text, View,TabBarIOS
} from 'react-native';

//import TabBar from '../../Components/TabBar'
import Icon from 'react-native-vector-icons/FontAwesome'
import RefreshListView from '../../Components/RefreshableListView/index'
//import RefreshListView from '../../Components/RefreshableListView/GiftedListView'
import ScrollableNavBar from '../../Components/ScrollableTab/index'
import Me from './Me';
import Star from './Star'

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectTab:'comment'
        }
    }

    _renderContent(type){
        switch(type){
            case 'comment':
                return (<ScrollableNavBar navigator={this.props.navigator}/>);
            case 'star':
                return(<Star navigator={this.props.navigator} />);
            case 'user':
                return(<Me navigator={this.props.navigator} />);
        }
    }

    render(){
        return (
            <TabBarIOS>
                <Icon.TabBarItem
                    title="news"
                    iconName="comment"
                    selectedIconName="comment"
                    selected={this.state.selectTab == 'comment'}
                    onPress={() => {
                        this.setState({
                        selectTab:'comment'
                        })
                    }}
                >
                    {this._renderContent('comment')}
                </Icon.TabBarItem>

                <Icon.TabBarItem
                    title="Star"
                    iconName="star"
                    selectedIconName="star"
                    selected={this.state.selectTab == 'star'}
                    onPress={() => {
                        this.setState({
                            selectTab:'star'
                        })
                    }}
                >
                    {this._renderContent('star')}
                </Icon.TabBarItem>

                <Icon.TabBarItem
                    title="me"
                    iconName="user"
                    selectedIconName="user"
                    selected={this.state.selectTab == 'user'}
                    onPress={() => {
                        this.setState({
                           selectTab:'user'
                        })
                    }}
                >
                    {this._renderContent('user')}
                </Icon.TabBarItem>


            </TabBarIOS>
        )
    }
}

var styles = StyleSheet.create({
    tabContent: {
        //flex:1,
        //alignItems:'center',
        //justifyContent:'center'
        backgroundColor:'red'
    },
    listView:{
        marginTop:64
    }
});