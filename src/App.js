import React from "react";

import AuthNavigator from "./navigation";
import { Provider as PaperProvider } from "react-native-paper";

const App = () => {
  return (
    <PaperProvider>
      <AuthNavigator />
    </PaperProvider>
  );
};

export default App;
