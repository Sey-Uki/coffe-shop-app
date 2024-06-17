import React, { useEffect, useState } from "react";

import styled from "styled-components/native";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Link } from "expo-router";

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

  const fetchCards = () => {
    setIsLoading(true);
    axios
      .get("https://5735b40cee7b5c0d.mokky.dev/cards")
      .then(({ data }) => setItems(data))
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Нет продукции");
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => fetchCards(), []);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={fetchCards} />
      }
      data={items}
      renderItem={({ item }) => (
        <Container key={item.id}>
          <Link
            asChild
            href={{
              pathname: "/cards/[id]",
              params: { id: item.id },
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                flex: 1,
              }}
            >
              <Image src={item.img} />

              <ContainerDescription>
                <Name style={{ color }}>{item.name}</Name>
                <Description style={{ color }}>{item.description}</Description>
              </ContainerDescription>
            </TouchableOpacity>
          </Link>

          <ContainerPrice>
            <Price style={{ color }}>{item.price}р</Price>
          </ContainerPrice>
        </Container>
      )}
    />
  );
}

const Container = styled.View`
  padding: 7px;
  flex-direction: row;
  align-items: center;

  width: 100%;
  margin: 10px auto;
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

const ContainerPrice = styled.TouchableOpacity`
  border: 1px solid #d0ccca;
  border-radius: 100%;
  padding: 5px 10px;
`;

const Price = styled.Text`
  text-align: center;
  font-size: 16px;
`;
