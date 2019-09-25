import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

const NewEntryActions = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Icon name="photo-camera" size={30} color={Colors.white} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="person-pin" size={30} color={Colors.white} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="edit" size={30} color={Colors.white} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="today" size={30} color={Colors.white} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="delete" size={30} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
    backgroundColor: Colors.asphalt,
    width: 55,
    height: 55,
    marginHorizontal: 3,
  },
  deleteButton: {},
});

export default NewEntryActions;
