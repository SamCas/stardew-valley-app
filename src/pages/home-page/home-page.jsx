import { Container, CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import React, {Component} from 'react';

import './home-page.scss';

class HomePage extends Component {
    constructor(props){
        super();
    }

    componentDidMount() {
        // TODO: Query Crops Data.
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />

            </Container>
        );
    }
}

export default HomePage;