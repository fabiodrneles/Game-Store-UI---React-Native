import { View, ScrollView, StyleSheet,Text } from 'react-native'
import React from 'react'
import Card from '../components/Card';


const Cards = () => {
    return (
        <View>
            <ScrollView horizontal>
                <Card source={require('../assets/images/freeFire.png')} 
                Name="Free Fire"/>
                <Card source={require('../assets/images/angryBirds.png')} 
                Name="Angry Birds"/>
                <Card source={require('../assets/images/altosAdventure.png')} 
                Name="Altos Adventure"/>
                <Card source={require('../assets/images/zoobaGame.png')} 
                Name="Zooba Game"/>
                
            </ScrollView>
        </View>
    )
}

export default Cards

const styles = StyleSheet.create({})