import React, { Component } from 'react';
import StationsList from './StationsList'
import Header from "./Header";
import PollutionChart from "./PollutionChart";
import { getData, setNotification } from '../actions';
import { connect } from 'react-redux';

let interval;

class App extends Component {

    componentDidMount() {
        let minutes = .5;

        this.props.getData();

         interval = setInterval(() => {
            this.props.getData();
         }, minutes * 60000); 
    }

    componentDidUpdate(prevProps) {
        if(!prevProps.primaryData) {
         this.props.setNotification();
        }
    }

    componentWillUnmount() {
        clearInterval(interval);
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

