import React from 'react';
import {View, StyleSheet} from 'react-native';

import {TextInputMask} from 'react-native-masked-text';

import Colors from '../../../styles/Colors';

const NewEntryInput = ({amount, onChangeAmout}) => {
  return (
    <View>
      <TextInputMask
        style={styles.input}
        autoFocus={false}
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: '',
          suffixUnit: '',
        }}
        value={amount}
        onChangeText={value => onChangeAmout(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 28,
    color: Colors.white,
    textAlign: 'right',
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});

export default NewEntryInput;
