import "bootswatch/dist/Flatly/bootstrap.min.css";
import React from "react";
import "./App.css";
import Header from "./components/Header";

import Body from "./components/Body";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <UserProvider>
      <div>
        <Header />
        <Body />
      </div>
    </UserProvider>
  );
}

export default App;
