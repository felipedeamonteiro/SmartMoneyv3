import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import DeviceInfo from 'react-native-device-info';

import ActionFooter, {
  ActionPrimaryButton,
  ActionSecondaryButton,
} from '../../components/Core/ActionFooter';
import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import AppStyles from '../../styles/AppStyles';
import Colors from '../../styles/Colors';

const Report = ({navigation}) => {
  const entries = navigation.getParam('entries', []);
  const entry = navigation.getParam('entry');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <BalanceLabel />
      <View style={styles.filtersContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Todas Categorias</Text>
          <Icon
            name="keyboard-arrow-down"
            size={20}
            color={Colors.champagneDark}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Últimos 7 dias</Text>
          <Icon
            name="keyboard-arrow-down"
            size={20}
            color={Colors.champagneDark}
          />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <EntrySummary />
        <EntryList entries={entries} />
      </ScrollView>

      <ActionFooter>
        <ActionPrimaryButton title="Adicionar" />
        <ActionSecondaryButton
          title="Cancelar"
          onPress={() => navigation.goBack()}
        />
      </ActionFooter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: DeviceInfo.hasNotch() ? 20 : 0,
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  filterButton: {
    flexDirection: 'row',
    borderRadius: 150,
    borderWidth: 1,
    borderColor: Colors.champagneDark,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  filterButtonText: {
    color: Colors.champagneDark,
  },
});

export default Report;
