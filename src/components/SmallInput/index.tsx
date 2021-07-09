import React from "react";
import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export const SmallInput: React.FC<TextInputProps> = ({ ...rest }) => {

  return (
    <TextInput
      style={styles.container}
      keyboardType="numeric"
      {...rest} 
    />
  )
}