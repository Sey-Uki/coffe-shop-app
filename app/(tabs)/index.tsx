import { StyleSheet, SafeAreaView } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { Heading } from "../components/Heading";

import { Categories } from "../components/Categories";
import { Cards } from "../components/Cards";
import { Special } from "../components/Special";
import styled from "styled-components/native";
export default function HomeScreen() {
  const user = "Diana";

  return (
    <SafeAreaView>
      <ThemedView
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          height: "100%",
        }}
      >
        <Container>
          <Heading text={`Доброе утро, ${user}👋`} />
        </Container>

        <Container>
          <Special />
        </Container>

        <Container>
          <Heading text="Категории" />
          <Categories />
        </Container>

        <Container>
          <Cards />
        </Container>
      </ThemedView>
    </SafeAreaView>
  );
}

const Container = styled.View`
  gap: 8;
  margin-bottom: 16;
`;
