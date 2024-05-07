import { ScrollView, StyleSheet, View} from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Products from '../Components/Products'
import TopBarkiers from '../Components/TopBarkiers'
import BestChoice from '../Components/BestChoice'
import GetRegister from '../Components/GetRegister'
import TopFarms from '../Farm/TopFarms'
import AppBody from '../Components/AppBody'

const Home = () => {
  return (
     <ScrollView>
      <View style={styles.Maincontainer}>
      <Header />
      <AppBody />
      <TopFarms />
      <Products />
      <GetRegister />
      <BestChoice />
      <TopBarkiers />
      </View>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  Maincontainer: {
    backgroundColor: '#f3f3f3',
  },
});
