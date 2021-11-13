import React, { useState } from "react";
import { View, Text } from "react-native";
import NumberGrid from "./Number";
import Controls from "./Controls";

export default function App() {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);
  const [mod, setMod] = useState(2);

  return (
    <View style={{ flex: 1 }}>
      <NumberGrid
        style={{ flex: 3 }}
        rows={rows}
        cols={cols}
        MOD={mod}
        onSuccess={(steps) => alert(`You won in ${steps} steps`)}
      />
      <Text style={{ textAlign: "center", backgroundColor: "yellow" }}>
        try to make all rectangles have the same color
      </Text>
      <Controls
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        setRows={setRows}
        setCols={setCols}
        setMod={setMod}
      />
    </View>
  );
}
