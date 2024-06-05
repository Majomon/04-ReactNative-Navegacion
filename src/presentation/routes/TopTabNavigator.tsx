import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AboutScreen} from '../screens/about/AboutScreen';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {HamburguerMenu} from '../components/shared/HamburguerMenu';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <>
      <HamburguerMenu />
      <Tab.Navigator>
        <Tab.Screen name="Perfil" component={ProfileScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
};
