import React, { useState } from "react";

import styled from "styled-components/native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Cappuccino } from "@/app/icons/Cappuccino";
import { Coldbrew } from "@/app/icons/Coldbrew";
import { Espresso } from "@/app/icons/Espresso";

const categories = [
  { name: "Cappuccino", icon: <Cappuccino /> },
  { name: "Cold Brew", icon: <Coldbrew /> },
  { name: "Espresso", icon: <Espresso /> },
];

export function Categories() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const color = useThemeColor({}, "text");

  return (
    <View>
      {categories.map((item, index) => (
        <Container
          key={item.name}
          onPress={() => setActiveCategoryIndex(index)}
          active={index === activeCategoryIndex}
        >
          {item.icon}
          <Text style={{ color }}>{item.name}</Text>
        </Container>
      ))}
    </View>
  );
}

const View = styled.View`
  flex-direction: row;

  column-gap: 12px;
`;

const Text = styled.Text`
  font-size: 12px;
  font-weight: 800;
`;

const Container = styled.Pressable<{ active: boolean }>`
  height: 30px;
  ${({ active }) => active && "background-color: #846046"};

  align-items: center;
  flex-direction: row;
  gap: 4px;
  padding: 7px;
  border-radius: 33px;
`;
