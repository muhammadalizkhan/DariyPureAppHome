import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Farm from '../Farm/Farm'
const Home = () => {
  return (
          <SafeAreaView>
            <View style={styles.container}>
             <Farm />
            </View>
          </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: { backgroundColor: 'white' }
})