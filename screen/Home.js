import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '../components/elements/Slider';

export default function Home({navigation}) {
    const user = navigation.getParam('result');
    const [recipes, setRecipes] = useState();
    fetch('http://35.160.197.175:3006/api/v1/recipe/cooking-list',
    {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    })
    .then((response) => {
        return(response.json());
    })
    .then((result) => {
        setRecipes(result);
    })
    console.log(user);
    return(
        <View>
            <Text>
                Home Screen
            </Text>
            <Slider
                navigation = {navigation}
                data = {recipes}
            />
        </View>
    )
}
