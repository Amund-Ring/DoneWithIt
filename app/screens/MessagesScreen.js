import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/amund.jpeg')
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/amund.jpeg')
  },
  {
    id: 3,
    title: 'T3',
    description: 'D3',
    image: require('../assets/amund.jpeg')
  },
  {
    id: 4,
    title: 'T4',
    description: 'D4',
    image: require('../assets/amund.jpeg')
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos rem cumque omnis quisquam velit. Delectus, at. Minima nisi culpa illo incidunt libero et sint atque sequi dignissimos. Repudiandae sapiente iure quos illo placeat explicabo illum similique, quidem accusantium repellendus nostrum?',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos rem cumque omnis quisquam velit. Delectus, at. Minima nisi culpa illo incidunt libero et sint atque sequi dignissimos. Repudiandae sapiente iure quos illo placeat explicabo illum similique, quidem accusantium repellendus nostrum?',
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
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/amund.jpeg')
            }
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
