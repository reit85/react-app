import React from "react";
import { Grid, MenuList, MenuItem } from "@material-ui/core";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="App-header">
        <MenuList>
          <MenuItem>Übersicht</MenuItem>
          <MenuItem>Projekte</MenuItem>
          <MenuItem>Kunden</MenuItem>
          <MenuItem>Mitarbeiter</MenuItem>
          <MenuItem>Urlaubsplanung</MenuItem>
        </MenuList>
      </nav>
    </div>
  );
}

export default App;
