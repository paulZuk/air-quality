import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            risk: 0
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

        
        // switch (averageRisk) {
        //     case averageRisk >= 8 :
        //         return notification = "ALARM !!! Maksik zakłada maskę gazową !!!";
        //     case averageRisk >= 6 :
        //         return notification = "Tragedia Maksik zostaje w domu !!!";
        //     case averageRisk >= 4 :
        //         return notification = "Zła jakość powietrza Maksik powinien zostać w domu";
        //     case averageRisk >= 2 :
        //         return notification = "Powietrze dobre mozna iść na spacer :)";
        //     case averageRisk >= 1 :
        //         return notification = "Powietrze bardzo dobre Maksik obowiązkowo idzie na spacer :)";
        //     default:
        //         return notification = "???";
        // }
    }

    render() {
        return (
            <div>
                <h1
                    style={{
                        textAlign:'center',
                    }}
                >
                    Air Condition in Kraków
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