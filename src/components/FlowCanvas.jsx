import React, { useCallback } from 'react';
import Header from './Header';
import { useDarkMode } from '../hooks/useDarkMode';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import '../styles/flow.css';


// Initial nodes and edges
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const FlowCanvas = () => {
  // React Flow states
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  // Connection callback
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className="flow-wrapper">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="flow-container">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          className="flow-canvas"
        >
          <Controls className="flow-controls" />
          <MiniMap className="flow-minimap" />
          <Background 
            variant="dots" 
            gap={12} 
            size={1}
            className="flow-background"
          />
        </ReactFlow>
      </div>
    </div>
  );
};

export default FlowCanvas;