import { FlatList } from "react-native";
import { categories } from "../../mocks/categories";
import { Text } from "../Text";
import { Category, TextContainer } from "./styles";
import { useState } from "react";

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleSelectedCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;

    setSelectedCategory(category);
  }

  return (
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={categories}
    contentContainerStyle={{ paddingRight: 24}}
    keyExtractor={category => category._id}
    renderItem={({ item: category }) => {
      const isSelected = selectedCategory === category._id;

      return (
          <Category onPress={() => handleSelectedCategory(category._id)}>
          <TextContainer>
            <Text size={14} weight={600} opacity={isSelected ? 1 : 0.5}>{category.name}</Text>
          </TextContainer>
        </Category>
      );
    }}
    />
  );
}
