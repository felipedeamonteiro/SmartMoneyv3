import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import Svg, {Circle, Rect} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

const EntryListItem = ({entry, isFirstItem, isLastItem, onEntryPress}) => {
  const bulletLineY = isFirstItem ? 20 : 0;
  const bulletLineHeight = isLastItem ? 30 : 50;
  const bulletColor = entry.category.color || Colors.white;

  return (
    <TouchableOpacity
      // activeOpacity={() => (onEntryPress ? 0.2 : 0)}
      onPress={() => onEntryPress && onEntryPress(entry)}>
      <View style={styles.primaryItemContainer}>
        <View>
          <Svg height="50" width="30">
            <Rect
              x="9"
              y={bulletLineY}
              width="1.5"
              height={bulletLineHeight}
              fill="#233240"
            />
            <Circle
              cx="10"
              cy="25"
              r="8"
              stroke="#233240"
              strokeWidth="1.5"
              fill={bulletColor}
            />
          </Svg>
        </View>

        <View style={styles.primaryItemValueContainer}>
          <Text style={styles.primaryItemValue}>{entry.description}</Text>

          <View style={styles.secondaryItemContainer}>
            <View style={styles.secondaryItemValueContainer}>
              <Icon name="access-time" style={styles.secondaryItemValueIcon} />
              <Text style={styles.secondaryItemValue}>{entry.entryAt}</Text>
            </View>

            <View style={styles.secondaryItemValueContainer}>
              <Icon name="person-pin" style={styles.secondaryItemValueIcon} />
              <Text style={styles.secondaryItemValue}>
                {entry.location.address}
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.primaryItemValue}>${entry.amount}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryItemContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  primaryItemValueContainer: {
    flexGrow: 1,
  },
  secondaryItemContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  secondaryItemValueContainer: {
    flexDirection: 'row',
  },
  primaryItemValue: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  secondaryItemValueIcon: {
    flexGrow: 0,
    fontSize: 13,
    color: '#95a5a6',
    marginTop: 2,
    marginRight: 2,
  },
  secondaryItemValue: {
    flexGrow: 0,
    fontSize: 12,
    color: '#95a5a6',
    marginRight: 10,
  },
});

export default EntryListItem;
