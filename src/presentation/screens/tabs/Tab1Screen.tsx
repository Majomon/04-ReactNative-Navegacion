import React from 'react';
import {Text, View} from 'react-native';
import {HamburguerMenu} from '../../components/shared/HamburguerMenu';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  return (
    <View>
      <HamburguerMenu />
      <Text style={{color:"black"}}>Tab1Screen</Text>
      <Icon name="rocket-outline" size={30} color={'#900'} />
    </View>
  );
};
