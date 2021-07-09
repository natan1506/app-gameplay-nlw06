import React from "react";
import { ScrollView } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { Category } from "../Category";

import { styles } from "./styles";
import { categories } from "../../utils/categories";

interface Props {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
}

export const CategorySelect: React.FC<Props> = ({ 
  categorySelected, 
  setCategory, 
  hasCheckBox = false 
}) => {

  return (
    <ScrollView 
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(category => (
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
            onPress={() => setCategory(category.id)}
            hasCheckBox={hasCheckBox}
          />
        ))
      }
    </ScrollView>
  )
}