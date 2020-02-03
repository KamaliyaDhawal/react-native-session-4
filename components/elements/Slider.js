import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';

// import { globleStyle } from '../assets/styles/global';

export default function Slider({navigation, data, horizontal}) {
    // const styles = globleStyle;
    return(
        <View>
            <View>
                <FlatList
                    data={data}
                    renderItem = {({item}) => {
                        const { name, image } = item;
                        return (
                            <View>
                                <Image
                                    numColumns={2}
                                    source={{uri: item.photo? item.photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDZJVHHq4TO06E9w0igCfZvzu_jnQYSWLWBSgzyc85-aaOXAIf'}}
                                    style={{
                                        height: 50,
                                        width: 50
                                    }}
                                />
                                <Text>{item.name}</Text>
                            </View>
                          );
                    }}
                    horizontal = {horizontal}
                />
            </View>
        </View>
    )
}
