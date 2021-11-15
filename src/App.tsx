import React from 'react';
import './App.css';
import {LoginPage} from "./scenes/LoginPage";
import MainLayout from "./components/Layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <LoginPage />
    </MainLayout>
  );
}

export default App;
