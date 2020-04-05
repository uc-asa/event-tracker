import React from 'react'
import AppContainer from './Navigation';
import AuthProvider from "./modules/provider";

export default function Router() {
  return (
      <AuthProvider>
          <AppContainer/>
      </AuthProvider>
  );
}

