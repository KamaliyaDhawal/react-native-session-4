import React, { useState } from 'react';
import { View, RefreshControl } from 'react-native';
import Slider from '../components/elements/Slider';
import { globleStyles } from '../assets/styles/ globle';

export default function Home({navigation}) {
    // const user = navigation.getParam('result');
    const [refreshing, setRefreshing] = useState(true);
    const user = {
        "email": "jm1@example.com",
        "firstName": "Jay",
        "id": 2,
        "lastName": "Mehta",
        "password": "aa718893bfe3e587047c81af40269d14",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s",
    };
    const [recipes, setRecipes] = useState();
    
    const getData = () => {
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
            console.log(result);
            setRecipes(result);
            setRefreshing(false);
        });
    }
    getData();
    return(
        <View style={globleStyles.constainer}>

        <View>
                <View >
                
                    <Slider
                        navigation = {navigation}
                        data = {recipes}
                        getData= {getData}
                    />
                </View>
        </View>
        </View>
    )
}
