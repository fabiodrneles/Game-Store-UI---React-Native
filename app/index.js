import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Menu from '../assets/icons/menu';
import Bell from '../assets/icons/bell';

const index = () => {
    return (
        <View style={tw`flex-col gap-5 p-5`}>
            <View style={tw`flex-row justify-between items-center`}>
                <Menu />
                <Bell />
            </View>

            {/* title */}
            <Text style={tw`text-5xl font-bold`}>Browse Games</Text>

            {/* buttons */}
            <View style={tw`flex-row gap-3`}>
                <Text style={tw`bg-blue-500 p-3 px-5 text-white rounded-xl`}>button</Text>
                <Text style={tw`bg-blue-500 p-3 px-5 text-white rounded-xl`}>button</Text>
                <Text style={tw`bg-blue-500 p-3 px-5 text-white rounded-xl`}>button</Text>
                <Text style={tw`bg-blue-500 p-3 px-5 text-white rounded-xl`}>button</Text>
                <Text style={tw`bg-blue-500 p-3 px-5 text-white rounded-xl`}>button</Text>
                <Text style={tw`bg-blue-500 p-3 px-5 text-white rounded-xl`}>button</Text>
            </View>

            <Text style={tw`font-bold text-xl`}>Featured Games</Text>

            <View>
                {/* Card */}
                <View style={tw`h-[250px] w-3/4`}>
                    <Image 
                        source={require('../assets/images/freeFire.png')} 
                        style={tw`h-[100%] w-[100%] rounded-xl`} 
                    />
                </View>
                {/* Card */}
            </View>
        </View>
    );
};

export default index;
