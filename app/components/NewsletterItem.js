import React from 'react';
import { View, Text, StyleSheet, Image,Alert,TouchableHighlight } from 'react-native';

_onPressButton = (idNewsletter)=>{
  alert(idNewsletter.toString())
}

const NewsletterItem = (newsletter) => (
  //<TouchableHighlight onClick={()=>this._onPressButton(props.key)}>
  <View>
    <View style={styles.row}>
      <Text style={styles.title}>{newsletter.tytul}</Text>
      <Image
        style={styles.image}
        source={require('./app/images/arrow.png')}
      />
    </View>
    <View>
      <Text style={styles.date}>{`${newsletter.data_wyslania.substring(0, 10)} ${newsletter.czas_wyslania}`}</Text>
    </View>
  </View>
//</TouchableHighlight>
);
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
     alignSelf: 'stretch',
    //  flex: 1
  },
  title: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    width: 320,
    marginBottom: 15,
    marginLeft: 16,
    marginRight:16,
    marginTop:22,
  },
  date: {
    fontSize:12,
    marginLeft:20,
    marginRight:20,
    marginBottom:10,
    marginTop:23,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {

  },
  image:{
    width:20,
    height:20,
    marginLeft:16,
    marginBottom:15,
    marginRight:16,
    marginTop: 30,
    resizeMode: 'contain',
  //  justifyContent: 'center',
 //alignItems: 'center'
  },
});
export default NewsletterItem;
