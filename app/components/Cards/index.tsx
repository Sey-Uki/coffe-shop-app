import React from "react";

import styled from "styled-components/native";
import { View } from "react-native";
import { Plus } from "@/app/icons/Plus";

const coffee = [
  {
    name: "Cappuccino",
    img: require("@/assets/images/cappuccino.png"),
    price: "200",
  },
  {
    name: "Cold Brew",
    img: require("@/assets/images/cappuccino.png"),
    price: "200",
  },
  {
    name: "Espresso",
    img: require("@/assets/images/cappuccino.png"),
    price: "200",
  },
];

export function Cards() {
  return (
    <Main>
      {coffee.map((item) => (
        <Container key={item.name}>
          <Image source={item.img} />

          <View>
            <Text>{item.name}</Text>
            <ContainerDescription>
              <Text>{item.price}р</Text>
              <View>
                <Add>
                  <Plus />
                </Add>
              </View>
            </ContainerDescription>
          </View>
        </Container>
      ))}
    </Main>
  );
}

const Main = styled.View`
  margin: 10px auto;
  flex-wrap: wrap;
  flex-direction: row;

  gap: 17px;

  padding-horizontal: 20px;
`;

const Text = styled.Text`
  font-size: 20px;
  font-weight: 400;
`;

const Container = styled.Pressable`
  background-color: #ffffff;
  padding: 7px;
  border-radius: 15px;
  width: 150px;
`;

const ContainerDescription = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.Image`
  width: 100%;
`;

const Add = styled.Pressable`
  width: 30px;
  height: 30px;

  background-color: #846046;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
`;
