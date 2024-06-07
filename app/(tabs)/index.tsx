import { StyleSheet, SafeAreaView } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { ThemedView } from "@/components/ThemedView";
import { Heading } from "../components/Heading";

import { Categories } from "../components/Categories";
import { Cards } from "../components/Cards";

export default function HomeScreen() {
  const user = "Diana";
  return (
    <SafeAreaView>
      <ThemedView style={styles.titleContainer}>
        <Heading text={`Good morning, ${user}`} />
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Heading text="Categories" />
        <Categories />
      </ThemedView>
      <ThemedView>
        <Cards />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
