// src/components/ControlPanel.jsx

import React from 'react';
import '../index.css';

const ControlPanel = ({ addGateNode }) => {
  return(
    <>
    <div className= "top-panel">
      <h2>Logic Gate Simulator</h2>
    </div>

    <div className="control-panel-container">
      <div className="control-panel">
        <button onClick={() => addGateNode('andNode')}>Add AND Gate</button>
        <button onClick={() => addGateNode('nandNode')}>Add NAND Gate</button>
        <button onClick={() => addGateNode('orNode')}>Add OR Gate</button>
        <button onClick={() => addGateNode('norNode')}>Add NOR Gate</button>
        <button onClick={() => addGateNode('xorNode')}>Add XOR Gate</button>
        <button onClick={() => addGateNode('xnorNode')}>Add XNOR Gate</button>
        <button onClick={() => addGateNode('notNode')}>Add NOT Gate</button>
        <button onClick={() => addGateNode('bufferNode')}>Add BUFFER Gate</button>
      </div>
    </div>

   
  </>
);
};

export default ControlPanel;
