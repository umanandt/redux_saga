import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from './redux/action';
import {removeToCart} from './redux/action';

const Product = props => {
  const cartData = useSelector(state => state.reducer);
  const item = props.item;
  const [isAdded, setIsAdded] = useState(false);
  const Dispatch = useDispatch();

  const addToCartHandler = item => {
    Dispatch(addToCart(item));
  };
  const removeToCartHandler = item => {
    Dispatch(removeToCart(item.name));
  };

  useEffect(() => {
    /* if (cartData && cartData.length) {
      cartData.forEach(cartItem => {
        if (cartItem.name === item.name) {
          setIsAdded(true);
        }
      });
    }*/
    let result = cartData.filter(element => {
      return element.name === item.name;
    });

    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartData]);

  return (
    <View style={{alignItems: 'center', marginTop: 30}}>
      <Text style={{fontSize: 24}}>{item.name}</Text>
      <Text style={{fontSize: 24}}>{item.color}</Text>
      <Text style={{fontSize: 24}}>{item.price}</Text>
      <Image source={{uri: item.image}} style={{width: 150, height: 150}} />

      {isAdded ? (
        <Button
          title="Remove from Cart"
          onPress={() => removeToCartHandler(item)}
        />
      ) : (
        <Button title="Add To Cart" onPress={() => addToCartHandler(item)} />
      )}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});

// Action batayega karna kya h
// reducer usko implement karega
