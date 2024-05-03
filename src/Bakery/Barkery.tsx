import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BakeryHeader from '../Bakery/BakeryHeader'
import SearchBar from '../Components/SearchBar'
import BakereyHome from '../Components/BakereyHome'
import TopBarkiers from '../Components/TopBarkiers'
import GetRegister from '../Components/GetRegister'
import Products from '../Components/Products'

const Barkery = () => {
  return (
    <ScrollView>
      <BakeryHeader />
      <SearchBar />
      <BakereyHome />
      <TopBarkiers />
      <GetRegister />
      <Products />
    </ScrollView>
  )
}

export default Barkery

const styles = StyleSheet.create({})