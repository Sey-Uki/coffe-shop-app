import React, { useState } from "react";

import styled from "styled-components/native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Cappuccino } from "@/app/icons/Cappuccino";

const categories = [
  { name: "Cappuccino", icon: <Cappuccino /> },
  { name: "Cold Bre", icon: <Cappuccino /> },
  { name: "Espresso", icon: <Cappuccino /> },
];

export function Categories() {
  const selectedCategories = useState();

  const color = useThemeColor({}, "text");

  return (
    <View>
      {categories.map((item) => (
        <Container>
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

const Container = styled.View`
  height: 30px;
  background-color: #846046;

  align-items: center;
  flex-direction: row;
  gap: 4px;
  padding: 7px;
  border-radius: 33px;
`;
