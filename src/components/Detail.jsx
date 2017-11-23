import React, { Component } from 'react';
import { connect } from 'react-redux';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailActive: null
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.detailActive) {
            this.setState({
                detailActive: nextProps.detailActive,
            });

        }
    }


    render() {
        const { detailActive } = this.state;

        let spanStyle = {
            padding: '0 10px'
        };

        if (detailActive === null) return null;
        console.log(this.state);
        return (
            <ul
                className="list-group"
            >
                <li
                    className="list-group-item"
                >
                    <span style={spanStyle}>Air quality: { Math.ceil(detailActive.currentMeasurements.airQualityIndex)}</span>
                    <span style={spanStyle}>PM10: { Math.ceil(detailActive.currentMeasurements.pm10)}</span>
                    <span style={spanStyle}>PM2.5: { Math.ceil(detailActive.currentMeasurements.pm25)}</span>
                    <span style={spanStyle}>Humidity: { Math.ceil(detailActive.currentMeasurements.humidity)}%</span>
                    <span style={spanStyle}>Temperature: { Math.ceil(detailActive.currentMeasurements.temperature)}&#8451;</span>
                    <span style={spanStyle}>Pressure: { Math.ceil(detailActive.currentMeasurements.pressure)}Pa</span>
                </li>
            </ul>
        );
    }

}

function mapStateToProps(state) {
    const { detailActive } = state;
    return {
        detailActive
    }
}


export default connect(mapStateToProps, null)(Detail);