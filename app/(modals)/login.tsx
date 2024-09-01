import { Seperator } from "@/components/seperator";
import { FontAwesome5 } from "@expo/vector-icons";
import { styled } from "nativewind";
import React from "react";
import { Text, View } from "react-native";
import { Button, Input } from "tamagui";

const Login = () => {
  return (
    <View className="mx-4">
      <Input placeholder="Username" />
      <Input placeholder="Password" />
      <Button size="$4" theme="active">
        Continue
      </Button>
      <Seperator title="or" />
      <View className="flex flex-col gap-2">
        <Button size="$4" icon={<FontAwesome5 name="phone" />} theme="outline">
          Continue with Phone
        </Button>
        <Button
          size="$4"
          icon={<FontAwesome5 name="facebook" />}
          theme="outline"
        >
          Continue with Facebook
        </Button>
        <Button size="$4" icon={<FontAwesome5 name="google" />} theme="outline">
          Continue with Google
        </Button>
      </View>
    </View>
  );
};

export default Login;
