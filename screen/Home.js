import React from 'react';
import { View, Text } from 'react-native';

export default function Home({navigation}) {
    console.log('navigation', navigation);
    const user = navigation.getParam('result');
    console.log(user);
    return(
        <View>
            <Text>
                Home Screen
            </Text>
        </View>
    )
}
