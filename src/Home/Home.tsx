import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import AppBody from '../Components/AppBody'
import Slider from '../Components/Slider'
import Products from '../Components/Products'
import TopBarkiers from '../Components/TopBarkiers'
import TopCattelFarms from '../Components/TopCattelFarms'
import BestChoice from '../Components/BestChoice'
import Bakerey from '../Components/Bakerey'
import GetRegister from '../Components/GetRegister'

const Home = () => {
  return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Header />
            <AppBody />
            <Slider />
            <Products />
            <Bakerey />
            <GetRegister />
            <BestChoice />
            <TopCattelFarms />
            <TopBarkiers />
          </View>
        </ScrollView>
      </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: { backgroundColor: 'white' }
})