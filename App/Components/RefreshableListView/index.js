
'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text, View,
    TabBarIOS,
    ListView,
    NavigatorIOS
} from 'react-native';

import PullRefresh from 'react-native-pullrefresh-scrollview';
import HomePageList from '../ListViewModel';
import RecreationItem from '../ListViewModel/recreation'
import API from '../../NetWork/api'
import Loading from '../Loading'

export default class RefreshableListView extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource:new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2}),
            data:[],
            page:0

        }
    }

    componentWillMount(){
        this._onFetch();
    }
    componentWillReceiveProps(props){
        if(this.props.url !== props.url){
            this._onFetch(props.url);
        }
    }

    _onFetch(url=API.HOME_PAGE){
        fetch(url)
            .then((response)=> response.json())
            .then(json => {
                let data;
                 if(this.props.index !== 2){
                     data = json.data.categories.category_list;
                 }else {
                     data = json.T1348648517839;
                 }
                this.setState({
                    data:this.state.data.concat(data),
                    dataSource:this.state.dataSource.cloneWithRows(data)
                });

            })
            .catch((error)=>{
                console.log(error)
            });
    }

    _renderRow(rowData, sectionID, rowID){
        if(this.props.index !== 2){
            return (
                <HomePageList  rowData={rowData} navigator={this.props.navigator}/>
            )
        }else {
            return (
                <RecreationItem  rowData={rowData} navigator={this.props.navigator} />
            )
        }
    }

    _onRefresh(PullRefresh,page){
        if(this.props.index !==2){
            setTimeout(()=>{
                PullRefresh.onRefreshEnd()
            },2000);
        }else {
            var url = API.RECREATION.replace(/offset=0/,'offset='+page)
            fetch(url)
                .then((response)=> response.json())
                .then(json => {
                    let data;
                    if(this.props.index !== 2){
                        data = json.data.categories.category_list;
                    }else {
                        data = json.T1348648517839;
                    }
                    data = data.concat(this.state.data);
                    this.setState({
                        page:this.state.page+1,
                        data:data,
                        dataSource:this.state.dataSource.cloneWithRows(data)
                    });
                    PullRefresh.onRefreshEnd()
                })
                .catch((error)=>{
                    console.log(error)
                });
        }
    }

    render(){
        return (
        this.state.dataSource?
            <ListView
                renderScrollComponent={(props) =>
                <PullRefresh
                onRefresh={(PullRefresh)=>this._onRefresh(PullRefresh,this.state.page)} {...props} />}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
            />:
            <Loading />
        )
    }


}

