import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getData, getDetailData } from "../actions/index";
import Detail from "./Detail";

class StationsList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            clicked: null
        }
    }

    componentDidMount() {
        const { getData } = this.props;
        getData();
    }

    handleListClick(id) {
        
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

        let liStyle = {
            cursor: 'pointer'
        };

        if (typeof primaryData === 'undefined') return null;

        return (
            <ul className="list-group">
                {
                    primaryData.map(elem => {
                        return (
                            <li
                                key={elem.id}
                                className="list-group-item"
                                style={
                                    elem.pollutionLevel === 1 ? {backgroundColor:'lightgreen'} :
                                        elem.pollutionLevel === 2 ? {backgroundColor:'lightgreen'} :
                                            elem.pollutionLevel === 3 ? {backgroundColor:'yellow'} :
                                                elem.pollutionLevel === 4 ? {backgroundColor:'orange'} :
                                                    elem.pollutionLevel === 5 ? {backgroundColor:'red'} :
                                                        elem.pollutionLevel === 6 ? {backgroundColor:'red'} : null
                                }
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
    return bindActionCreators( { getData, getDetailData }, dispatch);
}

function mapStateToProps(state) {
    const { primaryData } = state;
    return {
        primaryData,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StationsList);