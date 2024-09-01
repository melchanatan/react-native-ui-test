import React from "react-native";
import { View, Text } from "react-native";

export const Seperator = ({ title }) => {
  return (
    <View className="flex-row justify-center items-center gap-3 ">
      <View className="flex-1 bg-gray-300 h-[2px]"></View>
      <Text>{title}</Text>
      <View className="flex-1 bg-gray-300 h-[2px]"></View>
    </View>
  );
};
