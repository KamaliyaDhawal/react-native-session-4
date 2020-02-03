import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screen/Home';
import Login from '../screen/Login';

const screen = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Recipe List',
            headerStyle: {
                backgroundColor: '#111',
                marginBottom: 10
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 25
            },
        },
    },
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },
}

export default createAppContainer(createStackNavigator(screen));
