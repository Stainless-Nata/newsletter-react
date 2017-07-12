import React, { Component } from 'react';
import { ListView, StyleSheet,TouchableHighlight, View, Text,Image, Alert, RefreshControl} from 'react-native';
const base64 = require('base-64');
var API_URL = 'http://www.beinsured.t.test.ideo.pl/api/v1/1/pl/DefaultProfil/getListaNewsleter?apiKey=2esde2%23derdsr%23RD';
import DefaultPreference from 'react-native-default-preference';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator'
import {InfiniteVirtualizedList} from 'react-native-infinite-virtualized-list'
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var styles = require('./style');
import {Actions} from 'react-native-router-flux';
class ListViewNewsletter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource :  ds,
            data : [],
            loadingVisible : false,
            page : 1,
            maxPage : 0,

        };
    }


    componentWillMount()  {
        const loading = {
            type: 'Loading',
            loadingVisible: this.state.loadingVisible,
        }
        DefaultPreference.get('json').then((value) => {this.setState({dataSource :ds.cloneWithRows([...JSON.parse(value).data,loading]),data : JSON.parse(value).data, maxPage :JSON.parse(value).pages });});
    }

    render() {
        return (
            <ListView
                enableEmptySections={ true }
                automaticallyAdjustContentInsets={ false }
                dataSource={this.state.dataSource}
                renderRow={(newsletter, secId, rowId, rowMap)=>this.renderNewsletter(newsletter, secId, rowId, rowMap)}
                style={styles.listView}
                onEndReachedThreshold={0}
                refreshControl={
                    <RefreshControl
                        refreshing={ false }
                        onRefresh={ () => this._onRefresh() }
                    />
                }
                onEndReached={()=> this.Reload()}
            />
        );
    }

    _onPressButton (idNewsletter) {
        global.idNewsletter=idNewsletter;
        Actions.NewsletterDetailsView();
    }
    _onRefresh() {
        console.log("refresh");
        this._onGetListNewsletter(1);
    }
    _onGetListNewsletter(index){
        this.setState({loadingVisible :true});
    fetch("http://www.beinsured.t.test.ideo.pl/api/v1/1/pl/DefaultProfil/getListaNewsleter?apiKey=2esde2%23derdsr%23RD&page="+index,{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': base64.encode('beinsured:beinsu12'),
                'Authtoken': global.logintoken
            },
        })
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.status="OK"){
                    const loading = {
                        type: 'Loading',
                        loadingVisible: this.state.loadingVisible,
                    }
                    this.setState({dataSource :ds.cloneWithRows(responseData.data.concat([loading])), loadingVisible :false});
                //    Alert.alert('Beinsured',JSON.stringify(responseData));
                }
                else{
                    Alert.alert('Beinsured',responseData.message);
                    this.setState({loadingVisible : false});
                }

            });
    }
    Reload()
    {
        const lastPage =this.state.page<this.state.maxPage;
          console.log(this.state.page<this.state.maxPage);
        if (this.state.loadingVisible && lastPage) {
            console.log("reload");
            this._onGetListNewsletter(this.state.page+1);
        }
    }

    renderNewsletter (newsletter, secId, rowId, rowMap) {
        if (newsletter.type){
            return <LoadingIndicator loading={ this.state.loadingVisible } />;
        }
        else {
            if (rowId % 2 == 0){
                return (
                    <TouchableHighlight onPress={()=>this._onPressButton(newsletter.id)} underlayColor="white">
                        <View>
                            <View style={styles.row}>
                                <Text style={styles.title}>{newsletter.tytul}</Text>
                                <Image
                                    style={styles.image}
                                    source={require('../../images/arrow.png')}
                                />
                            </View>
                            <View>
                                <Text style={styles.date}>{`${newsletter.data_wyslania.substring(0, 10)} ${newsletter.czas_wyslania}`}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                );}
            else {
                return(
                    <TouchableHighlight onPress={()=>this._onPressButton(newsletter.id)} underlayColor="white">
                        <View style={{backgroundColor: '#f0f0f0' }}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{newsletter.tytul}</Text>
                                <Image
                                    style={styles.image}
                                    source={require('../../images/arrow.png')}
                                />
                            </View>
                            <View>
                                <Text style={styles.date}>{`${newsletter.data_wyslania.substring(0, 10)} ${newsletter.czas_wyslania}`}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                );
            }
        }
    }


}

export default ListViewNewsletter;
