import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartData = useSelector(state => state.reducer);
  const [cartItem, setcartItem] = useState(0);

  useEffect(() => {
    setcartItem(cartData.length);
  }, [cartData]);


  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'right',
          padding: 10,
          backgroundColor: 'orange',
        }}>
        <View
          style={{
            backgroundColor: 'yellow',
            borderRadius: 10,
            height: 30,
            width: 30,
          }}>
          <Text style={styles.headerStyle}>{cartItem}</Text>
        </View>
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerStyle: {
    fontSize: 30,
  },
});
