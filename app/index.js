import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Menu from '../assets/icons/menu';
import Bell from '../assets/icons/bell';
import Heart from '../assets/icons/heart';
import Download from '../assets/icons/download';
import Star from '../assets/icons/star';

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

                    <View style={tw`bg-[rgba(000,000,000,0.3)] h-[100%] w-[100%] rounded-xl absolute`}></View>

                    <View style={tw`absolute top-5 right-5`}><Heart /></View>
                    <View style={tw`absolute bottom-5 left-5`}>
                        <View style={tw`flex-row`}>
                            <Star/>
                            <Star/>
                            <Star/>
                            <Star/>
                            <Star/>
                        </View>
                        <Text style={tw`text-white text-2xl`}>Free Fire</Text>
                        <View style={tw`flex-row`}>
                            <Download />
                            <Text style={tw`text-white`}>100k Downloads</Text>

                        </View>
                    </View>
                </View>
                {/* Card */}
            </View>


            
        </View>
    );
};

export default index;
