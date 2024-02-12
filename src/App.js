import { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import {SearchProvider} from "./components/SearchContext"

function App() {

  return (
    <SearchProvider>
      <Header />
      <Main />
      <Footer />
    </SearchProvider>
  );
}

export default App;
