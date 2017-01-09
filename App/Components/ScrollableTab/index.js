
import React, {Component} from 'react';
import {
    Text, View,
    StyleSheet,
    NavigatorIOS,
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar} from 'react-native-scrollable-tab-view';
import RefreshListView from '../RefreshableListView'
import API from '../../NetWork/api'

export default class MyScrollableTabView extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: API.HOME_PAGE
        }
    }

    _onChangeURL(url){
        this.setState({
            url:url
        })
    }

    render(){
        var data = ['头条','要闻','娱乐','体育','财经','段子','科技','美女']
       return (
           <ScrollableTabView
               style={styles.container}
               tabBarPosition="top"
               initialPage={0} //default 0
               renderTabBar={() => <ScrollableTabBar/>}
               tabBarUnderlineColor='deepskyblue'
               tabBarBackgroundColor='#FFFFFF'
               tabBarActiveTextColor='deepskyblue'
               tabBarInactiveTextColor='#000516'
               tabBarTextStyle={{fontSize: 18}}
               onChangeTab={(obj) =>{
                    switch (obj.i){
                        case 0:
                            this._onChangeURL(API.HOME_PAGE)
                            break;
                        //case 1:
                        //    this._onChangeURL(API.IMPORTANT_NEWS)
                        //    break;
                        case 2:
                           this._onChangeURL(API.RECREATION)
                           break;
                        default:
                            this._onChangeURL(API.HOME_PAGE)
                            break;
                    }
               }}
        //       onScroll={(postion) => {
        //  // float类型 [0, tab数量-1]    滑动时触发
        //  console.log('scroll position:' + postion);
        //}}
           >
               {
                   data.map((item,index) => {
                       return (
                           <View key={index} tabLabel={data[index]} >
                                   <RefreshListView index={index} url={this.state.url} navigator={this.props.navigator} />
                           </View>
                       )
                   })
                }
           </ScrollableTabView>
       )
    }
}

var styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:64
    }
})