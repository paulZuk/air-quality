import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getData } from "../actions/index";

class App extends Component {

    componentDidMount() {
        this.props.getData();
    }

    render() {
        console.log(this.props);
        return(
            <div>APP</div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { getData }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);

