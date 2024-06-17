import { ActivityIndicator, Alert, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components/native";

type Item = {
  id: number;
  name: string;
  description: string;
  price: string;
  img: string;
};

export default function CardScreen() {
  const { id } = useLocalSearchParams();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [item, setItem] = useState<Item>();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://5735b40cee7b5c0d.mokky.dev/cards/${id}`)
      .then(({ data }) => setItem(data))
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Нет продукции");
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <View>
      <Text>Details</Text>
      <Img src={item?.img} />
      <Text>{item?.name}</Text>
      <Text>{item?.price}</Text>
    </View>
  );
}

const Img = styled.Image`
  width: 200px;
  height: 200px;
`;
