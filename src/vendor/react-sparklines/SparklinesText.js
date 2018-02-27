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
        let linePos = 52;
        const textPos = linePos + 3;
        let ySec = textPos + fontSize;  
        let setColor = {
          fill: color
        };

        let updateXforText;
      
        switch (this.props.index) {
          case 33:
            updateXforText = -10;
            break;
          case 34: 
            updateXforText = -15;
            break;
          case 36:
            updateXforText = -11;
            break;
          case 37:
            updateXforText = -35;
            break;
          case 38:
            updateXforText = -35;
            break;
          default: 
            updateXforText = 0;
        }

        if(!x || !y) {
          return null
        }
         
        return (
            <g>
              <line x1={ x } y1={ y } x2={ x } y2={linePos} style={{stroke:color, strokeWidth: .3}} />
              <text x={ x + updateXforText } y={ textPos } style={setColor} fontFamily={fontFamily || "Verdana"} fontSize={fontSize || 10}>
                { textLineOne }
              </text>
              <text x={ x + updateXforText } y={ !ySec ? 0 : ySec } style={setColor} fontFamily={fontFamily || "Verdana"} fontSize={fontSize || 10}>
                { textLineTwo }
              </text>
            </g>
        )
    }
}
