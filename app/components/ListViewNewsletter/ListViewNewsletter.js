import React, { Component } from 'react';
import { ListView, StyleSheet,TouchableHighlight, View, Text,Image, Alert} from 'react-native';
const base64 = require('base-64');
var API_URL = 'http://www.beinsured.t.test.ideo.pl/api/v1/1/pl/DefaultProfil/getListaNewsleter?apiKey=2esde2%23derdsr%23RD';
import DefaultPreference from 'react-native-default-preference';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var styles = require('./style');
import {Actions} from 'react-native-router-flux';
class ListViewNewsletter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource :  ds,
            data : []
        };
    }


    componentWillMount()  {
        DefaultPreference.get('json').then((value) => {this.setState({dataSource :ds.cloneWithRows(JSON.parse(value).data),data : JSON.parse(value).data });});
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(newsletter, secId, rowId, rowMap)=>this.renderNewsletter(newsletter, secId, rowId, rowMap)}
                //     //renderRow={(rowdata,sectionID)=><Row {...rowdata,...sectionID}/>}
                style={styles.listView}
                onEndReached={()=> this.addRender()}
            />
        );
    }

    _onPressButton (idNewsletter) {
        global.idNewsletter=idNewsletter;
        Actions.NewsletterDetailsView();
    }
    addRender()
    {
      console.log("dziala");
        if (global.refreshtoken<=new Date())
        {
            this.Refresh()
          }
        fetch("http://www.beinsured.t.test.ideo.pl/api/v1/1/pl/DefaultProfil/getListaNewsleter?apiKey=2esde2%23derdsr%23RD",{
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
                if (responseData.status.equals=="OK"){
                    //Alert.alert(typeof(responseData.data));
                    //DefaultPreference.set('json',JSON.stringify(responseData));
                    //  Alert.alert('text');
                    //  Actions.ListNewslettersView();
                    this.setState({data :this.state.data.concat(JSON.parse(responseData).data), dataSource : ds.cloneWithRows(data)});

                }


            });
    }

    renderNewsletter (newsletter, secId, rowId, rowMap) {
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
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

export default ListViewNewsletter;
