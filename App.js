import {
  StyleSheet,
  Text,
  View,
  AlertButton,
  StatusBar,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useState, useRef } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  return (
    <ScrollView>
      {/* <SafeAreaView style={styles.container}> */}
      {/* <View
        style={{
          flex: 3,
          backgroundColor: "green",
          width: 350,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
       
        <StatusBar style="auto" backgroundColor="white" />
         <Text style={{ fontSize: 50 }}>{count}</Text>
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
          ref={inputRef}
          placeholder="type here for translate"
        />
      </View> */}
      {/* <View style={{ flex: 2, backgroundColor: "yellow", width: 350 }}>
        <Text>text</Text>
      </View> */}
      {/* </SafeAreaView> */}
      <Text style={{ fontSize: 50 }}>{count}</Text>
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
        ref={inputRef}
        placeholder="type here for translate"
      />
      <Text style={{ fontSize: 50 }}>{count}</Text>
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
        ref={inputRef}
        placeholder="type here for translate"
      />
      <Text style={{ fontSize: 50 }}>{count}</Text>
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
        ref={inputRef}
        placeholder="type here for translate"
      />
      <Text style={{ fontSize: 50 }}>{count}</Text>
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
        ref={inputRef}
        placeholder="type here for translate"
      />
      <Text style={{ fontSize: 50 }}>{count}</Text>
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
        ref={inputRef}
        placeholder="type here for translate"
      />
      <Text style={{ fontSize: 50 }}>{count}</Text>
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
        ref={inputRef}
        placeholder="type here for translate"
      />
    </ScrollView>
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
