import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import ChatBotScreen from "./screens/ChatBotScreen";
import FloatingChatButton from "./components/FloatingChatButton";
import { AuthProvider } from "./context/AuthContext";
import { SafeAreaView } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthProvider>
        <PaperProvider>
          <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="ChatBot" component={ChatBotScreen} />
          </Stack.Navigator>
          <FloatingChatButton />
        </PaperProvider>
      </AuthProvider>
    </SafeAreaView>
  );
};

export default App;
