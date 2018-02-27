import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesText }  from '../vendor/react-sparklines/Sparklines';
import { connect } from 'react-redux';


class PollutionChart extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            hoverStation: "",
            hoverLevel: "",
            hoverPoint: {}, 
            dangerColor: "",
            hoverIndex: null
        }
    }

    handleMouseEnter(eventType, data, index, point) {
        console.log(index);

        let updatedPoint = {
            x: point.x, 
            y: point.y
        }
        

        if(eventType === "enter") {
            this.setState({
                hoverStation: "Station: " + this.props.primaryData[index].address.route, 
                hoverLevel: "Level: " + data,
                hoverPoint: updatedPoint, 
                hoverIndex: index
            });
        }
    }

    setColor() {



    }


    render() {
        if (!this.props.primaryData || !this.props.notification ){
            return null
        }

        const { color } = this.props.notification;


        let pollution = this.props.primaryData.map(station => station.pollutionLevel);
        
        console.log(this.props.primaryData);
        
        return (
            <div style={{
                width: '81%',
                borderTop: `1px dashed ${color}`,
                position: 'relative'
             }}>
                <div style={{
                    position:'absolute', 
                    top:'5px',
                    left: '0',
                    color
                }}> 
                    max
                </div>
                <Sparklines 
                    min={0}
                    max={6}
                    data={pollution}>
                    <SparklinesLine 
                        onMouseMove={this.handleMouseEnter.bind(this)} 
                        color={color}
                        />
                    <SparklinesText 
                        point={this.state.hoverPoint} 
                        index={this.state.hoverIndex}
                        textLineOne={this.state.hoverStation}
                        textLineTwo={this.state.hoverLevel} 
                        fontSize={2.5}
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