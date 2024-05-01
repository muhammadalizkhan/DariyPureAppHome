import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import Slider from './Slider'

const TopCattelFarms = () => {
    return (
        <View>
            <Text style={styles.title}>Farm Near You</Text>
            <ImageBackground
                source={require('../assets/Images/MapBG.jpg')}
                style={styles.container}
                resizeMode="cover"
            >
                <View style={styles.overlay}>
                    <Slider />
                </View>
            </ImageBackground>
        </View>
    )
}

export default TopCattelFarms

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
    },
    overlay: {
        justifyContent: 'center', // Align content vertically in the center
        alignItems: 'center', // Align content horizontally in the center
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#49243E',
        marginBottom: 10,
        marginLeft: 10,
    },
})
