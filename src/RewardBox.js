import React, { Component } from 'react';
import {
    Area,
    Box,
    Text,
} from 'proton-native';

export default class RewardBox extends Component {
    render() {
        const { bells } = this.props;
        return(
                <Box
            vertical={false}
                >
                <Text>{'Current Rewards: ${bells}'}</Text>
                </Box>
        );
    }
}
