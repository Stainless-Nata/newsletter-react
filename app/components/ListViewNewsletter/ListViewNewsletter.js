import React, { Component } from 'react';
import { ListView, StyleSheet,TouchableHighlight, View, Text,Image} from 'react-native';
const base64 = require('base-64');
var API_URL = 'http://www.beinsured.t.test.ideo.pl/api/v1/1/pl/DefaultProfil/getListaNewsleter?apiKey=2esde2%23derdsr%23RD';
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var styles = require('./style');
import {Actions} from 'react-native-router-flux';
class ListViewNewsletter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource :  ds
        }
    };


    componentWillMount() {
        fetch(API_URL,{
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
                this.setState({ dataSource: ds.cloneWithRows(responseData.data) });
            })
            .done();
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(newsletter)=>this.renderNewsletter(newsletter)}
                //renderRow={(rowdata,sectionID)=><Row {...rowdata,...sectionID}/>}
                style={styles.listView}
            />
        );
    }

    _onPressButton (idNewsletter) {
        global.idNewsletter=idNewsletter;
        Actions.NewsletterDetailsView();
    }


    renderNewsletter (newsletter) {
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
        );

    }
}


export default ListViewNewsletter;
