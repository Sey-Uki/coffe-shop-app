import React, { useState } from "react";

import styled from "styled-components/native";
import { useThemeColor } from "@/hooks/useThemeColor";

const categories = [
  { id: 1, name: "Кофе", category: 1 },
  { id: 2, name: "Не кофе", category: 2 },
  { id: 3, name: "Еда", category: 3 },
];

export function Categories() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const categoriesColor = useThemeColor({}, "categories");

  return (
    <View>
      {categories.map((item, index) => (
        <Container
          key={item.id}
          onPress={() => setActiveCategoryIndex(index)}
          active={index === activeCategoryIndex}
          categoriesColor={categoriesColor}
        >
          <Text
            style={{
              color:
                index === activeCategoryIndex ? categoriesColor : "#CACACA",
            }}
          >
            {item.name}
          </Text>
        </Container>
      ))}
    </View>
  );
}

const View = styled.View`
  flex-direction: row;
`;

const Text = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

const Container = styled.Pressable<{
  active: boolean;
  categoriesColor: string;
}>`
  flex: 1;

  ${({ active, categoriesColor }) =>
    active
      ? `border-bottom-color: ${categoriesColor};
     border-bottom-width: 3px;`
      : `border-bottom-color: #EFEBE9;
     border-bottom-width: 1px;`};

  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 4px;
  padding: 7px;
`;
