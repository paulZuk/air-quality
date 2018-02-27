import React, { Component } from 'react';
import StationsList from './StationsList'
import Header from "./Header";
import PollutionChart from "./PollutionChart";
import { getData, setNotification } from '../actions';
import { connect } from 'react-redux';

class App extends Component {

    componentDidMount() {
        this.props.getData();
    }

    componentDidUpdate(prevProps) {
        if(!prevProps.primaryData) {
         this.props.setNotification();
        }
    }

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

function mapStateToProps(state) {
    const { primaryData } = state;
    return {
        primaryData
    }
}

export default connect(mapStateToProps, { getData, setNotification })(App);

