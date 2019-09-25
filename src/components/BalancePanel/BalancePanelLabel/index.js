import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../../styles/Colors';

const BalancePanelLabel = () => {
  return (
    <View>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>$2.102,45</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center',
  },
  value: {
    fontSize: 36,
    color: Colors.white,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default BalancePanelLabel;
