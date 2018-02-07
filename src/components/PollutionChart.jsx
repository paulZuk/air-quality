import React, { Component } from 'react';
import { Sparklines, SparklinesLine , SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';
import { connect } from 'react-redux';


class PollutionChart extends Component {
    render() {
        if (typeof this.props.primaryData === 'undefined'){
            return null
        }
        let pollution = this.props.primaryData.map(station => station.pollutionLevel);
        let pollutionWithout = pollution.filter(elem => elem !== 0 )
        
        console.log(this.props.primaryData);
        
    
                
        return (
            <div style={{
                width: '80%',
                borderTop: '1px dashed red',
                position: 'relative'
             }}>
                <div style={{
                    position:'absolute', 
                    top:'-15px',
                    left: '-40px',
                    color:'red'
                }}> 
                    max
                </div>
                <Sparklines min={0} max={6} data={pollutionWithout}>
                    <SparklinesLine color="orange" style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }} />
                </Sparklines>
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

export default connect(mapStateToProps, null)(PollutionChart);