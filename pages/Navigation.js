import Screen3 from './Screen3';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';



const Navigation = createStackNavigator(
    {
        Screen3: {
            screen: Screen3,
            navigationOptions: { header: null }
        },


    });

const Nav = createAppContainer(Navigation);
export default Nav;