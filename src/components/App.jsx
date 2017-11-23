import React, { Component } from 'react';
import StationsList from './StationsList'
import Header from "./Header";

class App extends Component {

    render() {
        return(
            <div>
                <Header />
                <StationsList />
            </div>

        )
    }
}

export default App;

