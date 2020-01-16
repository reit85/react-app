import React, { Fragment } from "react";

import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'

const items = [
  { name: 'home', label: 'Start' },
  { name: 'dashboard', label: 'Übersicht' },
  { name: 'projects', label: 'Projekte' },
  { name: 'customer', label: 'Kunden' },
  { name: 'employees', label: 'Mitarbeiter' },
  { name: 'holidays', label: 'Urlaub' }
]

function App() {
  return (
    <Fragment>
      <NavBar />
      <div className='content'>
        <Sidebar items={items} />
      </div>
    </Fragment>
  );
}

export default App;
