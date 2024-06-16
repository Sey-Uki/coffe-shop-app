import React, { useEffect, useState } from "react";

import styled from "styled-components/native";
import { ActivityIndicator, Alert, View } from "react-native";
import axios from "axios";
import { useThemeColor } from "@/hooks/useThemeColor";
import { isLoading } from "expo-font";

type Item = {
  id: number;
  name: string;
  description: string;
  price: string;
  img: string;
};

export function Cards() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [items, setItems] = useState<Item[]>([]);

  const color = useThemeColor({}, "text");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://5735b40cee7b5c0d.mokky.dev/cards")
      .then(({ data }) => setItems(data))
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Нет продукции");
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <Main>
      {items.map((item) => (
        <Container key={item.id}>
          <Image src={item.img} />

          <ContainerDescription>
            <Name style={{ color }}>{item.name}</Name>
            <Description style={{ color }}>{item.description}</Description>
          </ContainerDescription>

          <ContainerPrice>
            <Price style={{ color }}>{item.price}р</Price>
          </ContainerPrice>
        </Container>
      ))}
    </Main>
  );
}

const Main = styled.View`
  margin: 10px auto;
  gap: 17px;
  width: 100%;
`;

const Container = styled.Pressable`
  padding: 7px;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;

  gap: 12px;
`;

const ContainerDescription = styled.View`
  gap: 8px;
  flex: 1;
`;

const Image = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 100%;
`;

const Name = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

const Description = styled.Text`
  font-size: 14px;
`;

const ContainerPrice = styled.View`
  border: 1px solid #d0ccca;
  border-radius: 100%;
  padding: 5px 10px;
`;

const Price = styled.Text`
  text-align: center;
  font-size: 16px;
`;
