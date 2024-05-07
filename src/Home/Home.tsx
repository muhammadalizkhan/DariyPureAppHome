import { NavigationProp } from '@react-navigation/native';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Products from '../Components/Products';
import TopBarkiers from '../Components/TopBarkiers';
import BestChoice from '../Components/BestChoice';
import GetRegister from '../Components/GetRegister';
import TopFarms from '../Farm/TopFarms';
import AppBody from '../Components/AppBody';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <AppBody />
      <TopFarms />
      <Products />
      <GetRegister />
      <BestChoice />
      <TopBarkiers />
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
  },
});
