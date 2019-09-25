import React, {useState} from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';

import ActionFooter, {
  ActionSecondaryButton,
} from '../../../components/Core/ActionFooter';

import Colors from '../../../styles/Colors';

const NewEntryPicker = ({categories, category, onChangeCategory}) => {
  const [modalVisible, onChangeModalVisible] = useState(false);

  const onCategoryPress = item => {
    onChangeCategory(item);
    onClosePress();
  };

  const onClosePress = () => {
    onChangeModalVisible(!modalVisible);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => onChangeModalVisible(true)}>
        <Text style={styles.pickerButtonText}>{category.name}</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.modalInner}>
            <FlatList
              data={categories}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => onCategoryPress && onCategoryPress(item)}>
                  <Text style={styles.modalItemText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>

          <ActionFooter>
            <ActionSecondaryButton title="Fechar" onPress={onClosePress} />
          </ActionFooter>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerButton: {
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  pickerButtonText: {
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center',
  },
  modal: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
  modalInner: {
    flex: 1,
  },
  modalItem: {
    borderColor: '#87c5fb45',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    marginVertical: 10,
    paddingBottom: 15,
  },
  modalItemText: {
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default NewEntryPicker;
