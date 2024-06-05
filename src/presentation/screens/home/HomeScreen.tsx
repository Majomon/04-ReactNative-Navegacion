import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {PrimaryButton} from '../../components';
import {HamburguerMenu} from '../../components/shared/HamburguerMenu';
import {RootsStackParams} from '../../routes/StackNavigator';
import {globalStyles} from '../../theme/theme';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootsStackParams>>();

  /* useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text style={{color: 'black', fontSize: 16}}>Menu</Text>
        </Pressable>
      ),
    });
  }, []); */

  return (
    <View style={globalStyles.container}>
      <HamburguerMenu />
      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Productos"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Settings"
      />
    </View>
  );
};
