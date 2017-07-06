import React, { Component} from 'react';
import { AppRegistry, Text, Image, View, TextInput, Button, Alert,Linking,StyleSheet,ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
const base64 = require('base-64');
global.logintoken ='';
global.idNewsletter ='';
var styles = require('./style');
//var images = require('../../config/images');
var API_URL = 'http://www.beinsured.t.test.ideo.pl/api/v1/1/pl/RestAuth/signIn/';
export default class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 't.chrobak',
            password: '1234qwer'
        }
        this._onPressButton=this._onPressButton.bind(this);
    };

    _onPressButton ()  {
        var data = {
            'login': 't.chrobak',
            'password': '1234qwer',
            'apiKey': '2esde2#derdsr#RD',
        };

        var formBody = [];
        for (var property in data) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(data[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
        fetch(API_URL,
            {
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': base64.encode('beinsured:beinsu12')
                },
                body: formBody
            })
            .then(function(res){ return res.json(); })
            .then(function(data){
                ToastAndroid.show(JSON.stringify(data.message).replace('"','').replace('"',''), ToastAndroid.SHORT);
                global.logintoken=JSON.stringify(data.login_token).replace('"','').replace('"','');
                Actions.ListNewslettersView();
            })
    }



    render() {
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    <Image
                        style={styles.image}
                        source={require('../../images/logo.png')}
                    />
                </View>
                <View style={styles.inputTextView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder='Login'
                        underlineColorAndroid= 'transparent'
                        placeholderTextColor= '#959595'
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                    />
                    <TextInput
                        style={styles.inputText}
                        placeholder='Hasło'
                        underlineColorAndroid= 'transparent'
                        placeholderTextColor= '#959595'
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        secureTextEntry={true}
                    />
                    <View style={styles.buttonView}>
                        <Button
                            onPress={() => this._onPressButton()}
                            title="Zaloguj"
                            color="#ff7200"
                            style={styles.button}
                        />
                    </View>
                    <Text style={styles.text}>
                      Jeśli nie masz jeszcze konta zarejestruj się na beinsured.pl
                    </Text>
                    <Text style={styles.linkText}
                        onPress={() => Linking.openURL('http://www.beinsured.pl/pakiety/')}>
                        Link
                    </Text>
                </View>
            </View>
        );
    }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
