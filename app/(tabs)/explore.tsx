import { Link } from "expo-router";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { H5, Separator, SizableText, Tabs } from "tamagui";

const Explore = () => {
  return (
    <View>
      <ExploreHeader />
    </View>
  );
};

const ExploreHeader = () => {
  return (
    <SafeAreaView>
      <View className="bg-white flex flex-row justify-between items-center p-2 gap-3">
        <Link href="(modals)/booking" asChild>
          <TouchableOpacity className="flex flex-row items-center space-x-3 px-5 py-3 rounded-full border-gray-100 border-[2px] flex-1 shadow-xl bg-white">
            <Ionicons name="search" size={24} color="#000" />
            <View>
              <Text className="font-bold">Where to?</Text>
              <Text className="font-light text-sm">Anywhere Any week</Text>
            </View>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity className="p-2 border-gray-400 border-2 rounded-full">
          <Ionicons name="options-outline" size={24} color="#000"></Ionicons>
        </TouchableOpacity>
      </View>
      <HorizontalTabs />
    </SafeAreaView>
  );
};

const HorizontalTabs = () => {
  return (
    <Tabs
      defaultValue="tab1"
      orientation="horizontal"
      flexDirection="column"
      borderRadius="$4"
      borderWidth="$0.25"
      overflow="hidden"
      borderColor="$borderColor"
    >
      <ScrollView horizontal>
        <Tabs.List>
          <Tabs.Tab flex={1} value="tab1">
            <SizableText fontFamily="$body">Profile</SizableText>
          </Tabs.Tab>
          <Tabs.Tab flex={1} value="tab2">
            <SizableText fontFamily="$body">Connections</SizableText>
          </Tabs.Tab>
          <Tabs.Tab flex={1} value="tab3">
            <SizableText fontFamily="$body">Notifications</SizableText>
          </Tabs.Tab>
          <Tabs.Tab flex={1} value="tab4">
            <SizableText fontFamily="$body">sidofjsdiofjsadoif</SizableText>
          </Tabs.Tab>
        </Tabs.List>
        <Separator />
      </ScrollView>
      <TabsContent value="tab1">
        <H5>Profile</H5>
      </TabsContent>

      <TabsContent value="tab2">
        <H5>Connections</H5>
      </TabsContent>

      <TabsContent value="tab3">
        <H5>Notifications</H5>
      </TabsContent>

      <TabsContent value="tab4">
        <H5>Yes</H5>
      </TabsContent>
    </Tabs>
  );
};

const TabsContent = (props) => {
  return (
    <Tabs.Content
      className="bg-white px-2 py-5 flex items-center justify-center"
      key="tab3"
      {...props}
    >
      {props.children}
    </Tabs.Content>
  );
};

export default Explore;
