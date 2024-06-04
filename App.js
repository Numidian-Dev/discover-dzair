import { StatusBar } from "expo-status-bar";
import { SafeAreaView, useColorScheme } from "react-native";
import { Provider } from "react-native-paper";
import styled from "styled-components/native";
import { colors } from "./components/Styled/MyColors";
import MainIndex from "./navigation/mainIndex";
import Index from "./navigation";
import { ContextProvider } from "./context/context";
export default function App() {
  const colorScheme = useColorScheme();

  const Container = styled.View`
    background-color: ${colorScheme === "dark" ? colors.black : colors.white};
  `;

  const TextInit = styled.Text`
    color: ${colorScheme === "dark" ? colors.grey : colors.dark};
  `;

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ContextProvider>
        <MainIndex />
      </ContextProvider>
    </SafeAreaView>
  );
}
