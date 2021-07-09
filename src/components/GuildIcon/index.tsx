import React from "react";
import { Image } from 'react-native';

import { styles } from './styles';

export const GuildIcon: React.FC = () => {
  const uri = 'https://logosmarcas.net/wp-content/uploads/2020/12/Discord-Logo.png'
  return (
      <Image 
        source={{ uri }}
        style={styles.image}
        resizeMode="cover"
      />
  )
}