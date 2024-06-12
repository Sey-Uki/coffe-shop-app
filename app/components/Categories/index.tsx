import React, { useState } from "react";

import styled from "styled-components/native";
import { Cappuccino } from "@/app/icons/Cappuccino";
import { Coldbrew } from "@/app/icons/Coldbrew";
import { Espresso } from "@/app/icons/Espresso";
import { useThemeColor } from "@/hooks/useThemeColor";

const categories = [
  { name: "Кофе", icon: <Cappuccino /> },
  { name: "Не кофе", icon: <Coldbrew /> },
  { name: "Еда", icon: <Espresso /> },
];

export function Categories() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const categoriesColor = useThemeColor({}, "categories");

  return (
    <View>
      {categories.map((item, index) => (
        <Container
          key={item.name}
          onPress={() => setActiveCategoryIndex(index)}
          active={index === activeCategoryIndex}
          categoriesColor={categoriesColor}
        >
          {/* {item.icon} */}
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
  width: 112px;

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
