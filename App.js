import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import NavSys from './Components/Pages/Navigation';

export default function App() {
  return (   
    <SafeAreaProvider >
    <StatusBar/>
      <NavSys/>
    </SafeAreaProvider>
  );
}

//----------------------------------------------------------------------------
//DEV NOTES:
//-> Uses SafeAreaProvider for ios
//-> Statusbar for phone visible on top of the Navigation System

//-> Uses shared stylesheet from same directory
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//TO DO:
//-> More Tasks incoming