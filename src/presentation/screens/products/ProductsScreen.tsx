import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {FlatList} from 'react-native-gesture-handler';
import {PrimaryButton} from '../../components';
import {useNavigation} from '@react-navigation/native';

const products = [
  {id: 1, name: 'Producto 1'},
  {id: 2, name: 'Producto 2'},
  {id: 3, name: 'Producto 3'},
  {id: 4, name: 'Producto 4'},
  {id: 5, name: 'Producto 5'},
  {id: 6, name: 'Producto 6'},
];

export const ProductsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{...globalStyles.text, marginBottom: 10}}>Products</Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            onPress={() => navigation.navigate('Product' as never)}
            label={item.name}
          />
        )}
      />
      <Text style={{...globalStyles.text, marginBottom: 10}}>Settings</Text>
      <PrimaryButton
        onPress={() => navigation.navigate('Settings' as never)}
        label="Ajustes"
      />
    </View>
  );
};
