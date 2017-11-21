import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getDetailData } from "../actions/index";

class Detail extends Component {

    componentDidMount() {
        this.props.getDetailData(this.props.id)
    }

    render() {

        const { detailActive } = this.props;

        if (typeof detailActive === "undefined") return null;
        return (
            <ul
                className="list-group"
            >
                <li
                    className="list-group-item"
                >
                    <div>PM10: { Math.ceil(detailActive.currentMeasurements.pm10)}</div>
                </li>
            </ul>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getDetailData },dispatch)
}

function mapStateToProps(state) {
    const { detailActive } = state;
    return {
        detailActive
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Detail);