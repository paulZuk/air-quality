import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            risk: ""
        }
    }

    calculateRisk() {
        const { primaryData } = this.props;
        
        let averageRisk;
        let notification;
        let sumRisk = primaryData.reduce(
            (prev,current) => {
            return prev + current.pollutionLevel
        }, 0);
        
        averageRisk = sumRisk/primaryData.length;
        console.log(averageRisk);
        
        if (averageRisk >= 5) {
            notification = "ALARM !!! Maksik zakłada maskę gazową !!!";
        } else if (averageRisk >=4) {
            notification = "Tragedia Maksik zostaje w domu !!!";
        } else if (averageRisk >= 3) {
            notification = "Zła jakość powietrza Maksik powinien zostać w domu";
        } else if (averageRisk >= 2) {
            notification = "Szału nie ma ale mozna iść na spacer :)";
        } else {
            notification = "Powietrze dobre Maksik idzie na spacer :)";
        }

        this.setState({
            risk: notification,
        });

    }

    render() {
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
                    onClick={() => this.calculateRisk()}
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
    const { primaryData } = state;
    return {
        primaryData
    }
}

export default connect(mapStateToProps, null)(Header);