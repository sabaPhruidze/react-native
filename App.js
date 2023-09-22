import {
  StyleSheet,
  Text,
  View,
  AlertButton,
  StatusBar,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 3,
          backgroundColor: "green",
          width: 350,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 50 }}>{count}</Text>
        <StatusBar style="auto" backgroundColor="white" />
        <Button
          title="increment"
          onPress={() => {
            setCount((current) => current + 1);
          }} // onClick არის
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "#FFFF00",
            borderWidth: 1,
            marginTop: 10,
          }}
          placeholder="type here for translate"
        />
      </View>
      <View style={{ flex: 2, backgroundColor: "yellow", width: 350 }}>
        <Text>text</Text>
      </View>
    </SafeAreaView>
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
