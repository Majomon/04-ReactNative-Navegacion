import React from 'react';
import {Text, View} from 'react-native';
import {HamburguerMenu} from '../../components/shared/HamburguerMenu';
import {IonIcon} from '../../components';

export const Tab1Screen = () => {
  return (
    <View>
      <HamburguerMenu />
      <Text style={{color: 'black'}}>Tab1Screen</Text>
      <IonIcon name="rocket-outline" size={30}/>
    </View>
  );
};
