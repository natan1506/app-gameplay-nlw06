import React from "react";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Text } from 'react-native';

import { styles } from './styles';

interface Props extends RectButtonProps {
  title: string;
}

export const Button: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <RectButton 
      style={styles.container} 
      {...rest} 
    >

      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  )  
}