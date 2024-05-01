import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const AppBody = () => {

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={[styles.box, styles.box1]}>
          <Text style={styles.text}>Cattle Farms</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.column}>
        <View style={[styles.box, styles.box2]}>
          <Text style={styles.text}>Dairy Products</Text>
        </View>
        <View style={[styles.box, styles.box3]}>
          <Text style={styles.text}>Bakeries</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  column: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 10,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    height: 200,
    width: 180,
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: '#E9B0DF',
    elevation: 8,
  },
  box2: {
    height: 90,
    width: 200,
    backgroundColor: '#FFD3B4',
    borderRadius: 10,
    elevation: 8,
  },
  box3: {
    height: 100,
    marginTop: 10,
    backgroundColor: '#F6F5F2',
    borderRadius: 10,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default AppBody;
