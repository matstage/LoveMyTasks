import React, { Component } from 'react'; // import from react
import fs from 'fs';
import store from 'store';

import RewardBox from './src/RewardBox.js';
import MainMenu from './Components/MainMenu.js';

import {
    render,
    Window,
    App,
    Area,
    Button,
    Menu,
    ProgressBar,
    Dialog,
    TextInput,
    StyledText,
    Box,
    RadioButtons,
    Grid,
} from 'proton-native'; // import the proton-native components

/* class */

class LoveMyTasks extends Component {
    constructor(props) {
        super(props);
        this.state ={
            text: '',
            project: '',
        };
        this.save = this.save.bind(this);
        this.open = this.open.bind(this);
}
    save() {
        const filename = Dialog('Save');
        if (filename) {
            let data = (JSON.stringify(this.state));
            console.log(data);
            fs.writeFileSync(filename, data );
        }
    }

    open() {
        const filename = Dialog('Open');
        if (filename) {
            let data = fs.readFileSync(filename);
            // Data is a string, parsing with JSON);
            this.setState(JSON.parse(data));
            // Make interface update
            this.forceUpdate();
            console.log(this.state);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (typeof nextState.text === 'string') return false;
        // nextState is set from input
        else return true; // nextState is set from file
    }

        render() { // all Components must have a render method
            const bells =2;
        return (
                <App> // you must always include App around everything
                <MainMenu
            open = {this.open}
            save = {this.save}
                />
       <Window title="Mats Tage Rocks!" size={{w: 600, h: 600}} menuBar={true}>
            {
                    <Grid padded={true}>
                    <TextInput
                row={0} column={0}
                align={{h:false, v: true}}
                onChange={text => this.setState({ text })}
                multiline={true}
                visible={true}
                    >
                    {this.state.text}
                </TextInput>
                    <RadioButtons selected={
                        (parseInt(this.state.project, 10) + 1)}
                onSelect={project => this.setState( {project} )}
                row ={0} column = {1}
                expand={{h:false, v:false}}>
                    <RadioButtons.Item>Project 1</RadioButtons.Item>
                    <RadioButtons.Item>Project 2</RadioButtons.Item>
                    {console.log(this.state)};
                </RadioButtons>
                   <Area>
                    <Area.Text
                style={{ fontSize: 48 }}>
                    Here we have some Text!
                </Area.Text>
                    </Area>
              </Grid>
            }
        </Window>
      </ App>
    );
  }
}

render(<LoveMyTasks />); // and finally render your main component
