import React from 'react';
import {FlatList} from 'react-native';

import Container from '../Core/Container';
import EntryListItem from './EntryListItem';

const EntryList = ({entries, onEntryPress}) => {
  return (
    <Container title="Últimos Lançamentos">
      <FlatList
        data={entries}
        renderItem={({item, index}) => (
          <EntryListItem
            entry={item}
            isFirstItem={index === 0}
            isLastItem={index === entries.length - 1}
            onEntryPress={onEntryPress}
          />
        )}
      />
    </Container>
  );
};

export default EntryList;
