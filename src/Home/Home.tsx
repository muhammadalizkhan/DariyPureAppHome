import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import AppBody from '../Components/AppBody'
import Products from '../Components/Products'
import TopBarkiers from '../Components/TopBarkiers'
import BestChoice from '../Components/BestChoice'
import GetRegister from '../Components/GetRegister'
import TopFarms from '../Farm/TopFarms'
const Home = () => {
  return (
          <SafeAreaView>
            <ScrollView style={styles.container}>
            <Header />
            <AppBody />
            <TopFarms />
            <Products />
            <GetRegister />
            <BestChoice />
            <TopBarkiers />
            </ScrollView>
          </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: { backgroundColor: 'white' }
})