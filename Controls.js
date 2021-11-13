import React from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";

function MySlider({ onValueChange }) {
  return (
    <Slider
      onValueChange={onValueChange}
      style={{ width: 200, height: 40 }}
      minimumValue={2}
      maximumValue={10}
      step={1}
      minimumTrackTintColor="red"
      maximumTrackTintColor="#000000"
    />
  );
}

export default function Controls({ setRows, setCols, setMod, style }) {
  return (
    <View style={style}>
      <Text>number of rows</Text>
      <MySlider onValueChange={(value) => setRows(value) && newPuzzle()} />
      <Text>number of columns</Text>
      <MySlider onValueChange={(value) => setCols(value) && newPuzzle()} />
      <Text>mod</Text>
      <MySlider onValueChange={(value) => setMod(value) && newPuzzle()} />
    </View>
  );
}
