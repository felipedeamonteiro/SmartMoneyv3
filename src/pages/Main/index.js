import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import {getAllEntries} from '../../services/Entries';

import Colors from '../../styles/Colors';

const App = ({navigation}) => {
  const data = getAllEntries();

  return (
    <View style={styles.container}>
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />
      <ScrollView>
        <EntrySummary />
        <EntryList
          entries={data}
          onEntryPress={entry =>
            navigation.navigate('Report', {entries: data, entry: entry})
          }
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default App;
