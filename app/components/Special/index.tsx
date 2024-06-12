import React from "react";

import { View } from "react-native";
import styled from "styled-components/native";

const special = [
  {
    id: 1,
    img: require("@/assets/images/special.png"),
  },
];
export function Special() {
  return (
    <View>
      {special.map((item) => (
        <Container key={item.id}>
          <Image source={item.img} />
        </Container>
      ))}
    </View>
  );
}

const Container = styled.View`
  align-items: center;
`;

const Image = styled.Image`
  width: 100%;
  height: 160px;
  border-radius: 8px;
`;
