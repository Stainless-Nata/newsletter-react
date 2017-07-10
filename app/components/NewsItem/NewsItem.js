import React from 'react';
import { View, Text, StyleSheet, Button, Dimensions, Linking,TouchableHighlight, Alert} from 'react-native';
import MyWebView from 'react-native-webview-autoheight';
import Prompt from 'react-native-prompt';
const base64 = require('base-64');
var styles = require('./style');
var API_URL = 'http://www.beinsured.t.test.ideo.pl/api/v1/1/pl/DefaultAktualnosci/dodajKomentarz';
class NewsItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            promptVisible: false
        }
        //this.AddComment=this._AddComent.bind(this);
    }
    render() {
        return (
            <View>
                <Text style={styles.title} onPress={() => {
                    if (this.props.news.link!=null && this.props.news.link.toString().contains("http://")){
                        Linking.openURL(this.props.news.link.replace('"','').replace('"',''));
                    }
                    else if (this.props.news.link!=null && !this.props.news.link.toString().contains("http://")){
                        Linking.openURL("http://"+this.props.news.link.replace('"','').replace('"',''))
                    }
                }}>
                    {this.props.news.tytul}
                </Text>
                <Text style={styles.text}>
                    {(this.props.news.autor=='') ? '' : 'Autor: '+this.props.news.autor}
                </Text>
                <Text style={styles.text}>
                    {(this.props.news.publikator=='') ? '' : 'Publikator: '+this.props.news.publikator}
                </Text>
                <MyWebView
                    source={{html: this.props.news.tresc}}
                    startInLoadingState={true}
                    scalesPageToFit={true}
                    style={styl.webview}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Dodaj Komentarz"
                        style={styles.button}
                        color="#ff7200"
                        onPress={()=> this.setState({promptVisible : true})}
                    />
                </View>
                <View>
                    <Prompt
                        title="Dodaj Komentarz"
                        placeholder="Komentarz"
                        visible={this.state.promptVisible}
                        onCancel={ () => this.setState({
                            promptVisible: false,
                        }) }
                        onSubmit={ (value) => {
                            var data = {
                                'id_aktualnosci' : this.props.news.id_aktualnosci,
                                'apiKey' : '2esde2#derdsr#RD',
                                'komentarz' : value,
                            };
                            var formBody = [];
                            for (var property in data) {
                                var encodedKey = encodeURIComponent(property);
                                var encodedValue = encodeURIComponent(data[property]);
                                formBody.push(encodedKey + '=' + encodedValue);
                            }
                            formBody = formBody.join('&');
                            fetch(API_URL,{
                                method: 'POST',
                                headers:{
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/x-www-form-urlencoded',
                                    'Authorization': base64.encode('beinsured:beinsu12'),
                                    'Authtoken': global.logintoken,
                                },
                                body: formBody
                            })
                                .then(function(res){ return res.json(); })
                                .then(function(data){
                                    Alert.alert('Beinsured',JSON.stringify(data.message).replace('"','').replace('"',''));

                                })
                            this.setState({promptVisible: false});
                        }
                        }
                    />
                </View>
            </View>

        );
    }
  
    AddComment(news) {
        var data = {
            'id_aktualnosci' : news.id_aktualnosci,
            'apiKey' : '2esde2#derdsr#RD',
        };

        var formBody = [];
        for (var property in data) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(data[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
        fetch(API_URL,{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': base64.encode('beinsured:beinsu12'),
                'Authtoken': global.logintoken,
            },
            body: formBody
        })
            .then(function(res){ return res.json(); })
            .then(function(data){
                this.setState({promptVisible: false})
                if (data.message=="OK")
                {
                    global.logintoken=JSON.stringify(data.login_token).replace('"','').replace('"','');
                    global.refreshtoken=JSON.stringify(data.refresh_token).replace('"','').replace('"','');
                    Alert.alert("token odświerzony")
                }
            })
    }

}
const styl = StyleSheet.create({
    webview:{
        marginTop:16,
        marginBottom:16,
        marginLeft:16,
        marginRight:16,
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
        width: Dimensions.get('window').width-32,
    },
})
export default NewsItem;
