import React from 'react';
import { View, FlatList } from 'react-native';

import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

interface Props {
  handleGuildSelect: (guild: GuildProps) => void;
}

export const Guilds: React.FC<Props> = ({ handleGuildSelect }) => {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
  ]
  
  return(
    <View style={styles.container}>
      <FlatList 
        style={styles.guilds}
        data={guilds}
        contentContainerStyle={{ paddingBottom: 68 }}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => <ListDivider isCentered />}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Guild 
            data={item} 
            onPress={() => handleGuildSelect(item)}
          />
        )}
        
      />
    </View>
  );
}
