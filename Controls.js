import React from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";

function MySlider({ onValueChange }) {
  return (
    <Slider
      onValueChange={onValueChange}
      style={{ width: "100%" }}
      minimumValue={2}
      maximumValue={10}
      step={1}
      minimumTrackTintColor="white"
      maximumTrackTintColor="white"
      thumbTintColor="white"
    />
  );
}

export default function Controls({ setLevel, style }) {
  return (
    <View style={style}>
      <MySlider onValueChange={(value) => setLevel(value) && newPuzzle()} />
    </View>
  );
}
