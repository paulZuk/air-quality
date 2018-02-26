import PropTypes from 'prop-types';
import React from 'react';

export default class SparklinesText extends React.Component {

    static propTypes = {
      text: PropTypes.string,
      point: PropTypes.object,
      fontSize: PropTypes.number,
      fontFamily: PropTypes.string,
      color: PropTypes.string
    };

    static defaultProps = {
        text: '',
        point: { x: 0, y: 0 },
        color: { fill: 'orange'}
    };

    render() {
        const { point, textLineOne, textLineTwo, fontSize, fontFamily, color } = this.props;
        const { x, y } = point;
        
        let ySec = y + fontSize;
        let setColor = {
          fill: color
        };
        
        return (
            <g>
              <text x={ x } y={ y } style={setColor} fontFamily={fontFamily || "Verdana"} fontSize={fontSize || 10}>
                { textLineOne }
              </text>
              <text x={ x } y={ !ySec ? 0 : ySec } style={setColor} fontFamily={fontFamily || "Verdana"} fontSize={fontSize || 10}>
                { textLineTwo }
              </text>
            </g>
        )
    }
}
