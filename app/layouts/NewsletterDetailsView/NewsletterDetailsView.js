import React, { Component } from 'react';
import { Text, Image, View, ScrollView, ListView} from 'react-native';
import ListViewNews from '../../components/ListViewNews/ListViewNews';
import MyBottomNavigationBar from '../../components/MyBottomNavigationBar/MyBottomNavigationBar';
var styles = require('./style');
var images = require('../../config/images');
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class NewsletterDetailsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource :  ds
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view}>
                    <Image
                        source={require('../../images/logo.png')}
                        style={styles.image}
                    />
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
