import { SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import FarmHeader from '../Components/FarmHeader';
import FarmBody from '../Components/FarmBody';
import FarmList from '../Components/FarmList';
import TopBarkiers from '../Components/TopBarkiers';

const Farm = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FarmHeader />
      <View style={styles.content}>
        <FarmBody />
        <FarmList />
        <TopBarkiers />
      </View>
    </SafeAreaView>
  );
};

export default Farm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
