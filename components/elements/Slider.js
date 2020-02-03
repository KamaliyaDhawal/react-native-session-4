import React, { useState } from 'react';
import { globleStyles } from '../../assets/styles/ globle';
import { View, FlatList, Text, Image, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';

console.log('Dimensions', Dimensions)
export default function Slider({navigation, data, horizontal }) {
    return(
        <View>
            <View>
                <FlatList
                    data={data}
                    renderItem = {({item}) => {
                        const { name, image } = item;
                        return (
                            <View style={globleStyles.card}>
                                <Text style={globleStyles.cardText}>
                                    {item.name}
                                </Text>
                                <Image
                                    numColumns={2}
                                    source={{uri: item.photo? item.photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDZJVHHq4TO06E9w0igCfZvzu_jnQYSWLWBSgzyc85-aaOXAIf'}}
                                    style={globleStyles.cardImage}
                                />
                                {/* <View>
                                    <View style={globleStyles.detailsCard}>
                                        <Entypo
                                            name ='users'
                                            size = {24}
                                            color = 'red'
                                            />
                                        <Text style={{
                                            color: '#fff'
                                        }}>{item.serves}</Text>
                                    </View>

                                    <View style={globleStyles.detailsCard}>
                                        <Entypo
                                            name ='stopwatch'
                                            size = {24}
                                            color = 'red'
                                            />
                                        <Text style={{
                                            color: '#fff'
                                        }}>{item.preparationTime}</Text>
                                    </View>
                                </View> */}
                                <Text style={globleStyles.cardText}>
                                    By: {item.firstName} {item.lastName}
                                </Text>
                            </View>
                          );
                    }}
                    horizontal = {horizontal}
                />
            </View>
        </View>
    )
}
