import {
  StyleSheet,
  Text,
  View,
  AlertButton,
  StatusBar,
  Button,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }}>{count}</Text>
      <StatusBar style="auto" />
      <Button
        title="increment"
        onPress={() => {
          setCount((current) => current + 1);
        }} // onClick არის
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
