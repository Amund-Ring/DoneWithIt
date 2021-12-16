import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'Amund Ring',
    description: 'Hey! Is this item still available?',
    image: require('../assets/amund.jpeg')
  },
  {
    id: 2,
    title: 'Amund Ring',
    description: "I'm interested in this item. Are you able to send it by post?",
    image: require('../assets/amund.jpeg')
  }
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    setMessages(messages.filter(m => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            showChevron
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: 'Amund Ring',
              description: 'Updated message',
              image: require('../assets/amund.jpeg')
            },
            {
              id: 2,
              title: 'Amund Ring',
              description: "Updated message",
              image: require('../assets/amund.jpeg')
            }
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
