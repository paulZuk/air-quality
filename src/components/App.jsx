import React, { Component } from 'react';
import StationsList from './StationsList'
import Header from "./Header";
import PollutionChart from "./PollutionChart";

class App extends Component {

    render() {
        return(
            <div className='container'>
                <div className="row justify-content-center">
                    <Header />
                </div>
                <div className="row justify-content-center">
                    <PollutionChart />
                </div>
                <div className="row justify-content-center">
                    <StationsList />
                </div>
            </div>

        )
    }
}

export default App;

