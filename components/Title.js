import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const Title = () => {
    return (
        <View>
            <Text style={tw`text-5xl font-bold`}>
                Browse Games
            </Text>
        </View>
    )
}

export default Title