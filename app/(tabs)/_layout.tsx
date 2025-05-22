import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#4ADE80",
            tabBarInactiveTintColor: "#9CA3AF",
            tabBarStyle: {
              position: "absolute",
              elevation: 1,
              height: 50,
              backgroundColor: "#000000",
              paddingTop: 5,
              paddingBottom: 8,
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons size={size} color={color} name="home" />
              ),
            }}
          />
          <Tabs.Screen
            name="bookmark"
            options={{
              title: "Bookmarks",
              tabBarIcon: ({ color, size }) => (
                <Ionicons size={size} color={color} name="bookmark" />
              ),
            }}
          />
          <Tabs.Screen
            name="create"
            options={{
              title: "Create",
              tabBarIcon: ({ color, size }) => (
                <Ionicons size={size} color={"#4ADE80"} name="add-circle" />
              ),
            }}
          />
          <Tabs.Screen
            name="notifications"
            options={{
              title: "Notifications",
              tabBarIcon: ({ color, size }) => (
                <Ionicons size={size} color={color} name="notifications" />
              ),
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: "Profile",
              tabBarIcon: ({ color, size }) => (
                <Ionicons size={size} color={color} name="person-circle" />
              ),
            }}
          />
        </Tabs>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
