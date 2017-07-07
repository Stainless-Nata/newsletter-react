import React from 'react';
import { View, Text, StyleSheet, Button, Dimensions, Linking,TouchableHighlight} from 'react-native';
import MyWebView from 'react-native-webview-autoheight';
var styles = require('./style');
class NewsItem extends React.Component {
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
                        onPress={}
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
                        onSubmit={ (value) => this.setState({
                            promptVisible: false,
                        }) }
                    />
                </View>
            </View>

        );
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
