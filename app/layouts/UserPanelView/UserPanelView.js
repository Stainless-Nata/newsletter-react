import React, { Component,Buffer} from 'react';
import { AppRegistry, Text, Image, View, TextInput, Button, Alert,Linking,StyleSheet,ToastAndroid} from 'react-native';
import { StackNavigator,} from 'react-navigation';
import MyBottomNavigationBar from '../../components/MyBottomNavigationBar/MyBottomNavigationBar';
import {Actions} from 'react-native-router-flux';
const base64 = require('base-64');
import HR from 'react-native-hr'
var styles = require('./style');
var images = require('../../config/images');
var API_URL = 'http://www.beinsured.t.test.ideo.pl/api/v1/1/pl/DefaultProfil/getPakiet?apiKey=2esde2%23derdsr%23RD';
var usernamePassword = 'beinsured:beinsu12';
class UserPanelView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rodzaj_konta : 0,
            typ_abonamentu : '',
            okres : '',
            data_konca : '',
            max_ilosc_dostepow : '',
            wykorzystano_ilosc_dostepow : '',
        }
    };

    componentWillMount () {
        fetch(API_URL,{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': base64.encode(usernamePassword),
                'Authtoken': global.logintoken
            },
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    rodzaj_konta : data.rodzaj_konta,
                    typ_abonamentu : data.typ_abonamentu,
                    okres: data.okres,
                    data_konca: data.data_konca
                });
                //   if (data.rodzaj_konta==3){
                // this.setState({max_ilosc_dostepow: data.max_ilosc_dostepow.toString()});
                // this.setState({wykorzystano_ilosc_dostepow: data.wykorzystano_ilosc_dostepow.toString()});
                // }
                //alert(data.rodzaj_konta);
            })}



    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:10}}>
                    <Image
                        source={require('../../images/logo.png')}
                        style={styles.toolbarimage}
                    />
                    <View>
                        <Text style={styles.mojekonto}>{'Moje Konto'}</Text>
                        <View style={styles.row}>
                            <Text style={styles.informacja}>{'Tutaj możesz modyfikować swoje dane podstawowe, które opisują Twoje konto.'}</Text>
                            <Image
                                style={styles.image}
                                source={images.arrow}
                            />
                        </View>
                    </View>
                    <HR lineColor={'#000000'}/>
                    <View>
                        <Text style={styles.mojekonto}>{'Abonament'}</Text>
                        <View style={styles.view}>
                            <View style={styles.rowtext}>
                                <Text>Typ: </Text>
                                <Text>{this.state.typ_abonamentu}</Text>
                            </View>
                            <View style={styles.rowtext}>
                                <Text>Okres: </Text>
                                <Text style={styles.text}>{this.state.okres}</Text>
                            </View>
                            <View style={styles.rowtextlast}>
                                <Text>Ważny do: </Text>
                                <Text style={styles.text}>{this.state.data_konca}</Text>
                            </View>
                        </View>
                    </View>
                    <HR lineColor={'#000000'}/>
                </View>
                <MyBottomNavigationBar/>
            </View>
        );
    }
}

export default UserPanelView;
