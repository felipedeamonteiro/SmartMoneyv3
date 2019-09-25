import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../../styles/Colors';

const Container = ({title, children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.asphalt,
    borderColor: '#87c5fb45',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    padding: 8,
  },
  label: {
    fontSize: 12,
    color: Colors.white,
    marginBottom: 5,
  },
});

export default Container;
