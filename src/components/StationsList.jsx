import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getDetailData } from "../actions/index";
import Detail from "./Detail";

class StationsList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            clicked: null
        }
    }

    handleListClick(id) {

        this.state.clicked === id ?

            this.setState({clicked: null}) :

            this.setState({
                clicked: id
            },() => {
                this.props.getDetailData(id)
            });


    }

    render() {
        const { primaryData } = this.props;
        const { clicked } = this.state;

        let spanStyle = {
            padding: '0 10px'

        };

        if (typeof primaryData === 'undefined') return null;

        return (
            <ul 
                className="list-group"
                style={{width: '80%'}}
            >
                {
                    primaryData.map(elem => {

                        let liStyle = {
                            cursor: 'pointer',
                            marginBottom: '5px'
                        };

                        elem.pollutionLevel === 1 ? Object.assign(liStyle, { backgroundColor: 'lightgreen' }) :
                            elem.pollutionLevel === 2 ? Object.assign(liStyle, { backgroundColor: 'lightgreen' }) :
                                elem.pollutionLevel === 3 ? Object.assign(liStyle, { backgroundColor: 'gold' }) :
                                    elem.pollutionLevel === 4 ? Object.assign(liStyle, { backgroundColor: 'orange' }):
                                        elem.pollutionLevel === 5 ? Object.assign(liStyle, { backgroundColor: 'red' }) :
                                            elem.pollutionLevel === 6 ? Object.assign(liStyle, { backgroundColor: 'red' }) :
                                                Object.assign(liStyle, { backgroundColor: 'white' });

                        if (elem.pollutionLevel === 0) return null;

                        return (
                            <li
                                key={elem.id}
                                className="list-group-item d-flex flex-column"
                                style={liStyle}
                                onClick={() => this.handleListClick(elem.id)}
                            >
                                <span style={spanStyle}>{elem.address.route}</span>

                                {
                                    clicked === elem.id ?

                                        <Detail />

                                        : null
                                }

                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { getDetailData }, dispatch);
}

function mapStateToProps(state) {
    const { primaryData } = state;
    return {
        primaryData,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StationsList);