import React, {useState} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';

import DeviceInfo from 'react-native-device-info';

import NewEntryInput from './NewEntryInput';
import NewEntryPicker from './NewEntryPicker';
import NewEntryActions from './NewEntryActions';

import ActionFooter, {
  ActionPrimaryButton,
  ActionSecondaryButton,
} from '../../components/Core/ActionFooter';
import BalanceLabel from '../../components/BalanceLabel';

import {getAllCategories} from '../../services/Categories';

import Colors from '../../styles/Colors';

const NewEntry = ({navigation}) => {
  const categories = getAllCategories();
  const [amount, onChangeAmout] = useState('0');
  const [category, onChangeCategory] = useState(categories[0]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <BalanceLabel />
      <View style={styles.formContainer}>
        <NewEntryInput amount={amount} onChangeAmout={onChangeAmout} />
        <NewEntryPicker
          categories={categories}
          category={category}
          onChangeCategory={onChangeCategory}
        />
        <NewEntryActions />
      </View>
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
    paddingTop: DeviceInfo.hasNotch() ? 50 : 20,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 20,
  },
});

export default NewEntry;
