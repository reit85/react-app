import React, { Fragment } from "react";
import { Grid, MenuList, MenuItem } from "@material-ui/core";

function App() {
  return (
    <Fragment className="App">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h3>Header</h3>
        </Grid>
        <Grid item xs={12} sm={3}>
          <nav className="App-text">
            <MenuList>
              <MenuItem>Übersicht</MenuItem>
              <MenuItem>Projekte</MenuItem>
              <MenuItem>Kunden</MenuItem>
              <MenuItem>Mitarbeiter</MenuItem>
              <MenuItem>Urlaubsplanung</MenuItem>
            </MenuList>
          </nav>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default App;
