import React from 'react';

import {Svg, G, Rect} from 'react-native-svg';

const BalancePanelChart = () => {
  const SVGHeight = 60;
  const SVGWidth = 60;
  const graphHeight = 50;

  return (
    <Svg width={SVGWidth} height={SVGHeight}>
      <G y={graphHeight}>
        <Rect
          x="15"
          y="-15"
          width="20"
          height="20"
          stroke="red"
          strokeWidth="4"
          fill="yellow"
        />
      </G>
    </Svg>
  );
};

export default BalancePanelChart;
