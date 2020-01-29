import {createAppNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './pages/Login';
import TablesGrid from './pages/TablesGrid';

const AppStack = createStackNavigator({
    Login : {
        screen: Login
    },
    Home: {
        screen: TablesGrid
    }
}, {
    initialRouteName: 'Home'
});

const Routes = createAppNavigator(AppStack);

export default Routes;