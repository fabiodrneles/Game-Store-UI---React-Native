import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Download from '../assets/icons/download';
import Star from '../assets/icons/star';
import Topbar from '../components/Topbar';
import Title from '../components/Title';
import Buttons from '../components/Buttons';
import FeaturedText from '../components/FeaturedText';
import Cards from '../components/Cards';
import TopActions from '../components/TopActions';

const index = () => {
    return (
        <View style={tw`flex-col gap-5 p-5`}>
            <Topbar/>
            <Title/>
            <Buttons/>
            <FeaturedText/>
            <Cards/>
            <TopActions/>


            




            

            <View>
                {/* MiniCard */}
                <View style={tw`w-full h-[150px] bg-blue-300 p-3 rounded-xl flex-row justify-between items-center`}>

                    <Image source={require('../assets/images/frag.png')} style={tw`h-30 w-30 rounded-xl`} />

                    <View style={tw`w-[100px] flex-col gap-2`}>

                        <Text style={tw`text-2xl`}>Frage</Text>

                        <View style={tw`flex-row gap-3`}>

                            <View style={tw`flex-row items-center gap-2`}>
                                <Star />
                                <Text>4.5</Text>
                            </View>

                            <View style={tw`flex-row items-center gap-2`}>
                                <Download />
                                <Text>10M</Text>
                            </View>

                        </View>

                    </View>
                    <Text style={tw`bg-blue-500 p-3 px-5 text-white rounded-xl`}>button</Text>
                </View>
                {/* MiniCard */}

            </View>

        </View>
    );
};

export default index;
