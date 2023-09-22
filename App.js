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
      <View style={{ flex: 3, backgroundColor: "green", width: 350 }}>
        <Text style={{ fontSize: 50 }}>{count}</Text>
        <StatusBar style="auto" backgroundColor="white" />
        <Button
          title="increment"
          onPress={() => {
            setCount((current) => current + 1);
          }} // onClick არის
        />
      </View>
      <View style={{ flex: 2, backgroundColor: "yellow", width: 350 }}>
        <Text>text</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 10,
    borderColor: "blue",
  },
});
