import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../styles/Colors';

const BalanceLabel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <LinearGradient
        colors={[Colors.violet, Colors.blue]}
        style={styles.panel}>
        <Text style={styles.value}>$2.102,45</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  panel: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  label: {
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 5,
  },
  value: {
    fontSize: 28,
    color: Colors.white,
  },
});

export default BalanceLabel;
