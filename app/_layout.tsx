import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-background">
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
