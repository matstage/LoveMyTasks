import React, { Component } from 'react'; // import from react
import fs from'fs';

import { render, Window, App, Button, ProgressBar } from 'proton-native'; // import the proton-native components

class Example extends Component {
    render() { // all Components must have a render method
    return (
      <App> // you must always include App around everything
            <Menu label="File">
            <Menu.item type="Project" onClick={()=> this.open()}>
            Open Project
            </Menu>
            <Window title="Mats Tage Rocks!" size={{w: 600, h: 600}} menuBar={false}>
            {/* all your other components go here*/}
            <Area >
            <List
            <ProgressBar value={70} />
            </Area>

        </Window>
      </App>
    );
  }
}

render(<Example />); // and finally render your main component
