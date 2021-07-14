import React from "react";
import { NativeBaseProvider } from "native-base";
import { BackGroundStyling } from "./styles";
import { NavigationContainer } from "@react-navigation/native";

//components
import StackNavigator from "./components/Navigation/StackNavigator";

// Redux
import { Provider } from "react-redux";
import store from "./store/index";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <BackGroundStyling>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </BackGroundStyling>
      </NativeBaseProvider>
    </Provider>
  );
}
