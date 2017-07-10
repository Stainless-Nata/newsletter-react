import React, { Component } from 'react';
import { Text, Image, View, ScrollView, ListView,Picker, Alert} from 'react-native';
import ListViewNews from '../../components/ListViewNews/ListViewNews';
import MyBottomNavigationBar from '../../components/MyBottomNavigationBar/MyBottomNavigationBar';
var styles = require('./style');
var images = require('../../config/images');
import DefaultPreference from 'react-native-default-preference';
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class NewsletterDetailsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource :  '',
            items : null
        }
    };
    componentWillMount() {
        DefaultPreference.get('json').then((value) => {Alert.alert(value);});
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
                                selectedValue={this.state.language}
                                onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
                                style={styles.picker}>
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
