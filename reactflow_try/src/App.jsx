import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';

import CustomNode from './components/CustomNode';
import AndGate from './components/AndGate';
import NandGate from './components/NandGate';
import OrGate from './components/OrGate';
import NorGate from './components/NorGate';
import XorGate from './components/XorGate';
import XnorGate from './components/XnorGate';
import NotGate from './components/NotGate';
import BufferGate from './components/BufferGate';

import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  { id: 'andcustom', type: 'andNode', position: { x: 0, y: 200 }, data: { label: '3' } },
  { id: 'nandcustom', type: 'nandNode', position: { x: 0, y: 300 }, data: { label: '4' } },
  { id: 'orcustom', type: 'orNode', position: { x: 0, y: 400 }, data: { label: '5' } },
  { id: 'norcustom', type: 'norNode', position: { x: 0, y: 500 }, data: { label: '6' } },
  { id: 'xorcustom', type: 'xorNode', position: { x: 0, y: 600 }, data: { label: '7' } },
  { id: 'xnorcustom', type: 'xnorNode', position: { x: 0, y: 700 }, data: { label: '8' } },
  { id: 'notcustom', type: 'notNode', position: { x: 200, y: 200 }, data: { label: '9' } },
  { id: 'buffercustom', type: 'bufferNode', position: { x: 300, y: 300 }, data: { label: '10' } }
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
const nodeTypes = {
  andNode: AndGate, 
  nandNode: NandGate,
  orNode: OrGate,
  norNode: NorGate,
  xorNode: XorGate,
  xnorNode: XnorGate,
  notNode: NotGate,
  bufferNode: BufferGate
};

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback((event, node) => {
    console.log('Clicked');
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
        onNodeClick={onNodeClick} 
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
