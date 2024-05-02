import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import FarmDetail from './FarmDetail';
import FarmList from '../Components/FarmList';
import FarmNearYou from '../Components/FarmNearYou';
import SearchBar from '../Components/SearchBar';
import TopFarms from './TopFarms';
import Products from '../Components/Products';

const Farm = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FarmDetail />
        <SearchBar />
        <Products />
        <TopFarms />
        <FarmList />
        <FarmNearYou />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Farm;

const styles = StyleSheet.create({
});
