import React, { Fragment } from "react";
import { View } from "react-native";

export default function Grid({ children, rows, cols, style }) {
  const len = children.length;
  if (len !== rows * cols) {
    console.error("Grid has wrong number of rows/cols");
  }

  const elements = [...Array(rows).keys()].map((row) =>
    children.slice(row * cols, (row + 1) * cols)
  );

  return (
    <View style={style}>
      {elements.map((row, index) => (
        <View key={index} style={{ flex: 1, flexDirection: "row" }}>
          {row}
        </View>
      ))}
    </View>
  );
}
