import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const Title = () => {
    return (
        <View>
            <Text style={tw`text-5xl font-bold mb-3 mt-5`}>
                Top Games
            </Text>
        </View>
    )
}

export default Title