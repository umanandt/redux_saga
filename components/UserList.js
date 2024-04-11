import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from './redux/action';

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.reducer);

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return (
    <View style={styles.container}>
      {userList.length? (
        userList.map(user => (
          <Text key={user.id} style={styles.text}>
            {user.users.firstName}
          </Text>
        ))
      ) : (
        <Text style={styles.loadingText}>...Loading</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'red',
  },
  loadingText: {
    fontSize: 18,
    color: 'black',
  },
});

export default UserList;


/*

 {userList.length ? (
        userList.users.map(item => (
          <Text key={item.id} style={{fontSize: 28, color: 'red'}}>
            {item.firstName}
          </Text>
        ))
      ) : (
        <Text>...Loading</Text>
      )}

*/