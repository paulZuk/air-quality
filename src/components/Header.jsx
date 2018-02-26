import React, { Component } from 'react';
import { connect } from 'react-redux';
import avgRisk from './calculations/average_risk';
import {setNotification} from '../actions';


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            risk: ""
        }
    }

    setRiskNotification() {

        this.setState({
            risk: this.props.notification.text,
        });

    }

    render() {
        
        if(!this.props.notification) {
            return null;
        }
        
        return (
            <div>
                <h1
                    style={{
                        textAlign:'center',
                    }}
                >
                    Air quality in Kraków
                </h1>
                <button
                    className="btn btn-success"
                    style={{
                        display:'block',
                        margin:'30px auto'
                    }}
                    onClick={() => this.setRiskNotification()}
                >
                    Czy Maksik może iść na pole ?
                </button>
                <h2 style={{textAlign:'center',margin:'30px'}}>
                    {this.state.risk}
                </h2>
            </div>

        );
    }

}

function mapStateToProps(state) {
    const { primaryData, notification } = state;
    return {
        primaryData,
        notification
    }
}

export default connect(mapStateToProps, { setNotification })(Header);