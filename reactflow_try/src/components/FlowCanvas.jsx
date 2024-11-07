// src/components/FlowCanvas.jsx

import React, { useCallback } from 'react';
import {ReactFlow, MiniMap, Controls, Background, addEdge, useNodesState, useEdgesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';


import ControlPanel from './ControlPanel';

import AndGate from './gates/AndGate';
import NandGate from './gates/NandGate';
import OrGate from './gates/OrGate';
import NorGate from './gates/NorGate';
import XorGate from './gates/XorGate';
import XnorGate from './gates/XnorGate';
import NotGate from './gates/NotGate';
import BufferGate from './gates/BufferGate';

const nodeTypes = {
  andNode: AndGate,
  nandNode: NandGate,
  orNode: OrGate,
  norNode: NorGate,
  xorNode: XorGate,
  xnorNode: XnorGate,
  notNode: NotGate,
  bufferNode: BufferGate,
};

const FlowCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addGateNode = (type) => {
    const id = `${type}-${nodes.length + 1}`;
    const newNode = {
      id,
      type,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: `${type.toUpperCase()} Gate` },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
      <ControlPanel addGateNode={addGateNode} />
      <div style={{ flexGrow: 1 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          onConnect={onConnect}
        >
          <MiniMap />
          <Controls />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default FlowCanvas;
