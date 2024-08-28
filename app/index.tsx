import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import { Text, View, SafeAreaView, Animated } from "react-native";
import { Stack } from "expo-router";
import { Button } from "tamagui";
import { toast, Toasts } from "@backpackapp-io/react-native-toast";

// const CustomToast = ({ text1, text2, ...rest }) => {
//   const opacity = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(opacity, {
//       toValue: 1,
//       duration: 500, // Show animation duration
//       useNativeDriver: true,
//     }).start();

//     return () => {
//       Animated.timing(opacity, {
//         toValue: 0,
//         duration: 500, // Hide animation duration
//         useNativeDriver: true,
//       }).start();
//     };
//   }, [opacity]);

//   return (
//     <Animated.View style={{ opacity }}>
//       <View style={{ padding: 10, backgroundColor: "green", borderRadius: 8 }}>
//         <Text>{text1}</Text>
//         <Text>{text2}</Text>
//       </View>
//     </Animated.View>
//   );
// };

// const toastConfig: any = {
//   custom_success: (props) => <CustomToast {...props} />,
// };

export default function App() {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="bg-red-400 h-full">
        <Text>Hello World</Text>
        <Button
          className="font-semibold"
          onPress={() => {
            toast("hello");
          }}
        >
          Plain
        </Button>
      </View>
      {/* <Toast config={toastConfig} /> */}
    </SafeAreaView>
  );
}
