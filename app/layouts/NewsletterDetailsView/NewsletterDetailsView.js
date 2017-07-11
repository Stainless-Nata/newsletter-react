import React, { Component } from 'react';
import { Text, Image, View, ScrollView, ListView,Picker, Alert} from 'react-native';
import ListViewNews from '../../components/ListViewNews/ListViewNews';
import MyBottomNavigationBar from '../../components/MyBottomNavigationBar/MyBottomNavigationBar';
var styles = require('./style');
var images = require('../../config/images');
import DefaultPreference from 'react-native-default-preference';
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var data = null;
class NewsletterDetailsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items : [],
        };
    }

    componentWillMount()  {
        DefaultPreference.get('news').then((value) => {
            this.setState({items : JSON.parse(value)});
        });
    }
    checkTitle(news) {
        return news.tytul!=null && news.typ!=0 && news.typ!=3;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view}>
                    <View style={{flexDirection: 'row'}}>
                        <Image
                            source={require('../../images/logo.png')}
                            style={styles.image}
                        />
                        <View>
                            <Image
                                source={require('../../images/menu.png')}
                                style={styles.menu}
                            />
                            <Picker
                                style={styles.picker}>
                                {

                                    this.state.items.filter(this.checkTitle).map((news, i) => {
                                        {return <Picker.Item key={i} label={news.tytul} value={news.tytul}/>;}
                                    })
                                }
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.scrollview}>
                        <ScrollView style={styles.scroll}>
                            <ListViewNews />
                        </ScrollView>
                    </View>
                </View>
                <MyBottomNavigationBar />
            </View>
        );
    }
}

export default NewsletterDetailsView;
