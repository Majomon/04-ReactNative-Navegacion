import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components';
import {StackActions, useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigator = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>SettingsScreen</Text>

      <PrimaryButton onPress={() => navigator.goBack()} label="Regresar" />
      <PrimaryButton
        onPress={() => navigator.dispatch(StackActions.popToTop())}
        label="Regresar al home"
      />
    </View>
  );
};
