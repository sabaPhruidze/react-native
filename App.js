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
  Pressable,
  FlatList,
} from "react-native";
import { useState, useRef } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef();
  const ScrollViewRef = useRef();
  return (
    <View>
      <FlatList
        data={[
          { key: "Devin" },
          { key: "Devin" },
          { key: "Devin" },
          { key: "Devin" },
          { key: "Devin" },
          { key: "Devin" },
          { key: "Devin" },
          { key: "Devin" },
          { key: "Devin" },
          { key: "Devin" },
          { key: "Devin" },
          { key: "nom" },
          { key: "nom" },
          { key: "nom" },
          { key: "nom" },
          { key: "nom" },
          { key: "nom" },
          { key: "nom" },
          { key: "nom" },
          { key: "nom" },
          { key: "nom" },
          { key: "nom" },
          { key: "nom" },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        ItemSeparatorComponent={() => (
          <View
            style={{ height: 20, backgroundColor: "blue", width: "100%" }}
          />
        )}
      />
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
// <ScrollView ref={ScrollViewRef}>
//   <Pressable
//     onPress={() => {
//       ScrollViewRef.current?.scrollToEnd?.();
//     }}
//     style={{
//       backgroundColor: "blue",
//       height: 50,
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     }}
//   >
//     <Text style={{ color: "white" }}>Scroll button</Text>
//   </Pressable>
//   {/* <SafeAreaView style={styles.container}> */}
//   {/* <View
//     style={{
//       flex: 3,
//       backgroundColor: "green",
//       width: 350,
//       alignItems: "center",
//       justifyContent: "center",
//     }}
//   >

//     <StatusBar style="auto" backgroundColor="white" />
//      <Text style={{ fontSize: 50 }}>{count}</Text>
//     <Button
//       title="increment"
//       onPress={() => {
//         setCount((current) => current + 1);
//       }} // onClick არის
//     />
//     <TextInput
//       style={{
//         height: 40,
//         borderColor: "#FFFF00",
//         borderWidth: 1,
//         marginTop: 10,
//       }}
//       ref={inputRef}
//       placeholder="type here for translate"
//     />
//   </View> */}
//   {/* <View style={{ flex: 2, backgroundColor: "yellow", width: 350 }}>
//     <Text>text</Text>
//   </View> */}
//   {/* </SafeAreaView> */}
//   <Text style={{ fontSize: 50 }}>{count}</Text>
//   <Button
//     title="increment"
//     onPress={() => {
//       setCount((current) => current + 1);
//     }} // onClick არის
//   />
//   <TextInput
//     style={{
//       height: 40,
//       borderColor: "#FFFF00",
//       borderWidth: 1,
//       marginTop: 10,
//     }}
//     ref={inputRef}
//     placeholder="type here for translate"
//   />
//   <Text style={{ fontSize: 50 }}>{count}</Text>
//   <Button
//     title="increment"
//     onPress={() => {
//       setCount((current) => current + 1);
//     }} // onClick არის
//   />
//   <TextInput
//     style={{
//       height: 40,
//       borderColor: "#FFFF00",
//       borderWidth: 1,
//       marginTop: 10,
//     }}
//     ref={inputRef}
//     placeholder="type here for translate"
//   />
//   <Text style={{ fontSize: 50 }}>{count}</Text>
//   <Button
//     title="increment"
//     onPress={() => {
//       setCount((current) => current + 1);
//     }} // onClick არის
//   />
//   <TextInput
//     style={{
//       height: 40,
//       borderColor: "#FFFF00",
//       borderWidth: 1,
//       marginTop: 10,
//     }}
//     ref={inputRef}
//     placeholder="type here for translate"
//   />
//   <Text style={{ fontSize: 50 }}>{count}</Text>
//   <Button
//     title="increment"
//     onPress={() => {
//       setCount((current) => current + 1);
//     }} // onClick არის
//   />
//   <TextInput
//     style={{
//       height: 40,
//       borderColor: "#FFFF00",
//       borderWidth: 1,
//       marginTop: 10,
//     }}
//     ref={inputRef}
//     placeholder="type here for translate"
//   />
//   <Text style={{ fontSize: 50 }}>{count}</Text>
//   <Button
//     title="increment"
//     onPress={() => {
//       setCount((current) => current + 1);
//     }} // onClick არის
//   />
//   <TextInput
//     style={{
//       height: 40,
//       borderColor: "#FFFF00",
//       borderWidth: 1,
//       marginTop: 10,
//     }}
//     ref={inputRef}
//     placeholder="type here for translate"
//   />
//   <Text style={{ fontSize: 50 }}>{count}</Text>
//   <Button
//     title="increment"
//     onPress={() => {
//       setCount((current) => current + 1);
//     }} // onClick არის
//   />
//   <TextInput
//     style={{
//       height: 40,
//       borderColor: "#FFFF00",
//       borderWidth: 1,
//       marginTop: 10,
//     }}
//     ref={inputRef}
//     placeholder="type here for translate"
//   />
// </ScrollView>
