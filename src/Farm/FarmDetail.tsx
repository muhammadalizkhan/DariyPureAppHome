import { StyleSheet, Image, View, Text } from 'react-native';
import React from 'react';

const FarmDetail = () => {
  return (
   <View>
     <View style={styles.container}>
      <Image 
        style={styles.img}
        source={require('../assets/Images/CattleFarmHeader.jpg')}
      />
    </View>
    <Text style={styles.Title}>Cattel Farms</Text>
   </View>
  );
};

export default FarmDetail;

const styles = StyleSheet.create({
  container: {
    height: 180,
    elevation: 5,
    overflow: 'hidden',
    borderRadius: 25,
  },
  img: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  Title:{
    marginTop: 8,
    fontSize: 25,
    color: '#49243E',
    marginLeft: 8,
    fontFamily: 'system-ui',
    fontWeight: 'bold',
  },
});
