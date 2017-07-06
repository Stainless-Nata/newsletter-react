import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TitleItem = (news) => (
  <View style={styles.row}>
    <Text style={styles.title}>{news.tytul}</Text>
  </View>
);
const styles = StyleSheet.create({
  row: {
     alignItems: 'center',
  },
  title: {
    fontSize: 20,
    alignItems: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
    marginLeft: 16,
    marginRight:16,
    marginTop:22,
  },
});
export default TitleItem;
