import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';

import {Welcome} from "./screens/Authentication"

import {Colors,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Welcome />
  );
};


export default App;
