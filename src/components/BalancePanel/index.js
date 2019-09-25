import React from 'react';
import {StatusBar, View, TouchableOpacity, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DeviceInfo from 'react-native-device-info';

import BalancePanelLabel from './BalancePanelLabel';
// import BalancePanelChart from './BalancePanelChart';

import Colors from '../../styles/Colors';

const BalancePanel = ({onNewEntryPress}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.violet, Colors.blue]}
        style={styles.panel}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.violet} />
        <BalancePanelLabel />
      </LinearGradient>
      <TouchableOpacity style={styles.button} onPress={onNewEntryPress}>
        <Icon name="add" size={30} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: -20,
  },
  panel: {
    alignItems: 'center',
    paddingTop: DeviceInfo.hasNotch() ? 50 : 10,
    paddingBottom: 10,
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderRadius: 150,
    backgroundColor: Colors.green,
    width: 50,
    height: 50,
    shadowColor: Colors.black,
    elevation: 5,
    marginTop: -25,
    marginRight: 10,
  },
});

export default BalancePanel;
