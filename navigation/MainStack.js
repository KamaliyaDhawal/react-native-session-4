import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screen/Home';
import Login from '../screen/Login';

const screen = {
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },
    Home: {
        screen: Home
    }
}

export default createAppContainer(createStackNavigator(screen));
