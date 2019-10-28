import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';

import createRouter from './routes';

function App() {
  const [firstOpen, setFirstOpen] = useState(true);
  const signed = useSelector(state => state.auth.signed);

  useEffect(() => {
    async function checkFirstOpen() {
      const firstOpenStorage = await AsyncStorage.getItem(
        '@meetapp/first_open'
      );

      if (firstOpenStorage) {
        setFirstOpen(false);
      }
    }

    checkFirstOpen();
  }, []);

  const Routes = createRouter(signed, firstOpen);

  SplashScreen.hide();

  return <Routes />;
}

export default App;
