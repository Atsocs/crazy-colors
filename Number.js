import Grid from "./Grid";
import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text } from "react-native";

export default function NumberGrid({ rows, cols, MOD, style, onSuccess }) {
  const indexes = [...Array(rows * cols).keys()];

  function randomize() {
    return indexes.map((index) => Math.floor(Math.random() * MOD));
  }

  const [data, setData] = useState(randomize());
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    setData(randomize());
  }, [rows, cols, MOD]);

  function reset(){
    setSteps(0);
    setData(randomize());
  }

  useEffect(() => {
    if (data.filter((v, i) => v == data[0]).length === rows * cols) {
      onSuccess(steps);
      reset();
    }
  }, [data]);

  const handlePress = (index) => {
    setSteps((steps) => steps + 1);
    let row = Math.floor(index / cols);
    let col = index - row * cols;
    const newData = data.map((v, i) => {
      console.log(v, i);
      let r = Math.floor(i / cols);
      let c = i - r * cols;
      return (v + (r == row || c == col ? 1 : 0)) % MOD;
    });
    setData(newData);
  };

  return (
    <Grid style={style} rows={rows} cols={cols}>
      {indexes.map((index) => (
        <NumberSquare
          number={data[index]}
          max={MOD - 1}
          key={index}
          onPress={() => handlePress(index)}
        />
      ))}
    </Grid>
  );
}

function NumberSquare({ number, max, onPress }) {
  if (number === undefined) {
    number = 0;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: `hsl(${Math.floor(
          (number / (max + 1)) * 360
        )}, 50%, 50%)`,
      }}
    >
      <Text style={{ fontSize: 20, color: "#444" }}>{number}</Text>
    </TouchableOpacity>
  );
}
