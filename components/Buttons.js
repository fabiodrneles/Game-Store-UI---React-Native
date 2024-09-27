import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Button from './Button';

const Buttons = () => {
    return (
        <View>
            <ScrollView horizontal >

                <Button Title="Action"/>
                <Button Title="Adventure"/>
                <Button Title="Games"/>
                <Button Title="Puzzels"/>
                <Button Title="Mind Map"/>
                <Button Title="Bank"/>
                <Button Title="Car Race"/>
                <Button Title="Subway"/>
            </ScrollView>
            
        </View>
    )
}

export default Buttons