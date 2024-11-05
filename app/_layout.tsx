import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true); //Ignore all log notifications

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen 
          name="(tabs)"
          options={{
            headerShown: false, //prevent render of header
            headerLeft: () => <></>, //prevent back button from showing
          }} 
        />
        <Stack.Screen name="+not-found" options={{}} />
      </Stack>
    </>
  );
}
