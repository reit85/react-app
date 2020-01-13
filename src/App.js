import React, { Fragment, Component } from "react";
import { Grid, MenuList, MenuItem } from "@material-ui/core";
import Button from '@material-ui/core/Button';

import NavBar from './components/NavBar'

function App() {
  return (
    <Fragment className="App">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <NavBar />
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
            <Button variant="contained" color="secondary">Firat Knopf</Button>
          </nav>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default App;
