import React, { Component } from 'react';
import {
    Menu,
} from 'proton-native';

export default class MainMenu extends Component {
    render() {
        return(
                <Menu label="File">
                <Menu.Item
            type="Item"
            children="Open"
            onClick={this.props.open}>
                Open
            </Menu.Item>
                <Menu.Item
            type="Item"
            children="Save"
            onClick={this.props.save}>
                Save
            </Menu.Item>
                <Menu.Item type="Quit" />
                </Menu>
        );
    }
}
