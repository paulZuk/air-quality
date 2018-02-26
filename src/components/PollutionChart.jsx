import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesText }  from '../vendor/react-sparklines/Sparklines';
import avgRisk from './calculations/average_risk';
import { connect } from 'react-redux';


class PollutionChart extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            hoverStation: "",
            hoverLevel: "",
            hoverPoint: {}, 
            dangerColor: ""
        }
    }

    handleMouseEnter(eventType, data, index, point) {
        console.log(index);
        
        let updatedPoint;

        if(index >= 35  ) {
            updatedPoint = {
                x: point.x - 15, 
                y: point.y - 6
            }
        } else {
            updatedPoint = {
                x: point.x - 1, 
                y: point.y - 6
            }
        }

        if(eventType === "enter") {
            this.setState({
                hoverStation: "Station: " + this.props.primaryData[index].address.route, 
                hoverLevel: "Level: " + data,
                hoverPoint: updatedPoint
            });
        }
    }

    setColor() {



    }


    render() {
        if (!this.props.primaryData || !this.props.notification ){
            return null
        }

        const { text, color } = this.props.notification;


        let pollution = this.props.primaryData.map(station => station.pollutionLevel);
        let pollutionWithout = pollution.filter(elem => elem !== 0 )
        
        console.log(this.props.primaryData);
        
        return (
            <div style={{
                width: '80%',
                borderTop: `1px dashed ${color}`,
                position: 'relative'
             }}>
                <div style={{
                    position:'absolute', 
                    top:'-30px',
                    left: '0',
                    color
                }}> 
                    max
                </div>
                <Sparklines min={0} max={6} data={pollutionWithout}>
                    <SparklinesLine onMouseMove={this.handleMouseEnter.bind(this)} color={color} />
                    <SparklinesText 
                        point={this.state.hoverPoint} 
                        textLineOne={this.state.hoverStation}
                        textLineTwo={this.state.hoverLevel} 
                        fontSize={3}
                        color={color} />
                </Sparklines>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { primaryData,notification } = state;
    return {
        primaryData,
        notification
    }
}

export default connect(mapStateToProps, null)(PollutionChart);