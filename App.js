import React, { useState } from "react";
import {
  View,
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import NumberGrid from "./Number";
import Controls from "./Controls";

export default function App() {
  const [level, setLevel] = useState(2);
  const [numbered, setNumbered] = useState(false);
  const rows = level;
  const cols = level;
  const mod = level;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "stretch",
        justifyContent: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setNumbered(!numbered);
        }}
      >
        <Text style={styles.text}>
          Press the rectangles to change color in column &#38; row
        </Text>
        <Text style={styles.text}>
          Try to make them all have the same color!
        </Text>
      </TouchableOpacity>
      <NumberGrid
        numbered={numbered}
        style={{ flex: 12 }}
        rows={rows}
        cols={cols}
        MOD={mod}
        onSuccess={(steps) => {
          const title = `Congratulations!`;
          const message = `You won in ${steps} press${steps > 1 ? "es" : ""}.`;
          if (Platform.OS === "android") {
            Alert.alert(title, message);
          }
          if (Platform.OS === "web") {
            alert(
              `${title} ${message}`
            );
          }
        }}
      />
      <Text style={styles.text}>&#8592; Easier / Harder &#8594;</Text>
      <Controls
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#333",
        }}
        setLevel={setLevel}
      />
    </View>
  );
}

let styles = StyleSheet.create({
  text: {
    textAlign: "center",
    backgroundColor: "yellow",
    backgroundColor: "#333",
    color: "#ccc",
    fontSize: 16,
  },
});
