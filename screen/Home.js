import React from 'react';
import { View, Text } from 'react-native';

export default function Home({navigation}) {
    console.log('navigation', navigation);
    const user = navigation.getParam('result');
    console.log(user);
    fetch('http://35.160.197.175:3006/api/v1/recipe/cooking-list',
    {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${user.token}`
        },
    })
    .then((response) => {
        // console.log(response);
        if(response.status === 200) {
            return(response.json());
        } else {
            Alert.alert('Error', "Invalid email or password"); 
        }
    })
    .then((result) => {
        console.log(result);
        navigation.navigate('Home', {result});
    })
    return(
        <View>
            <Text>
                Home Screen
            </Text>
        </View>
    )
}
