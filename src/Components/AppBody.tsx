import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AppBody = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={[styles.box, styles.box1]}>
          <Text style={styles.label}>Cattle Farms</Text>
          <Image
            source={require('../assets/Icons/FilterIcon.png')}
            width={100}
            resizeMode='cover'
            height={200}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.column}>
        <View style={[styles.box, styles.box2]}>
          <Text style={styles.label}>Dairy Product</Text>
        </View>
        <View style={[styles.box, styles.box3]}>
          <Text style={styles.label}>Bakeries</Text>
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
  Image: {
    fontSize: 10,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    elevation: 5,
  },
  box2: {
    height: 90,
    width: 200,
    backgroundColor: '#E9B0DF',
    borderRadius: 10,
    elevation: 5,
  },
  box3: {
    height: 100,
    marginTop: 10,
    backgroundColor: '#E9B0DF',
    borderRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 20,
    color: 'black',
    position: 'absolute',
    top: 10, // Adjust this value to position the text vertically
    alignSelf: "flex-start",
    fontFamily: 'sans-serif',
    marginLeft: 10,
  },
});

export default AppBody;
