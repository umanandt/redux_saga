import React from 'react';

import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import Header from './Header';
import Product from './Product';
import UserList from './UserList';

const ProductWrapper = ({navigation}) => {

 
  const products = [
    {
      name: 'Samsung',
      color: 'white',
      price: 30000,
      image:
        'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png',
    },
    {
      name: 'Apple',
      color: 'black',
      price: 130000,
      image:
        'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png',
    },
    {
      name: 'Xoami',
      color: 'purple',
      price: 20000,
      image:
        'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png',
    },
  ];
  return (
    <View style={styles.Container}>
      <Button onPress={()=> navigation.navigate('User')} title='Go To User List' /> 
      <Header />
      <ScrollView>
        {products.map(item => (
          <Product item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default ProductWrapper;
