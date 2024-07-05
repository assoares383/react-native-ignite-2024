import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';

import { AuthContext } from './src/contexts/AuthContext';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';

export default function App() {
  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContext.Provider value={{
        id: '1',
        name: 'Alexandre',
        email: 'alexandressoares383@gmail.com',
        avatar: 'teste.png'
      }}>
      { fontsLoaded ? <Routes /> : <Loading /> }
      </AuthContext.Provider>
    </NativeBaseProvider>
  );
}
                                                                                               