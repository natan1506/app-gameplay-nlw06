import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

interface Props {
  isCentered?: boolean;
}

export const ListDivider: React.FC<Props> = ({ isCentered }) => {
  return (
    <View  
      style={[
        styles.container,
        isCentered ? {
          marginVertical: 12,
         } : {
           marginTop: 2,
           marginBottom: 31,
         }
      ]}
    />
  );
}

