import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/drawer.css';

const LogicGateDrawer = ({ isOpen, onClose }) => {
  // State to track which sections are expanded
  const [expandedSections, setExpandedSections] = useState({
    logicGates: true,
    inputComponents: true,
    outputComponents: true
  });

  // Toggle section expansion
  const toggleSection = (sectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`drawer-backdrop ${isOpen ? 'drawer-backdrop-open' : 'drawer-backdrop-closed'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`drawer-container ${isOpen ? 'drawer-open' : 'drawer-closed'}`}
      >
        {/* Drawer Header */}
        <div className="drawer-header">
          <h2 className="drawer-title">Circuit Elements</h2>
        </div>

        {/* Logic Gates Section */}
        <div className="drawer-section">
          <button 
            className="section-title-button"
            onClick={() => toggleSection('logicGates')}
            type="button"
          >
            <h3 className="section-title">Logic Gates</h3>
            <span className={`section-arrow ${expandedSections.logicGates ? 'expanded' : ''}`}>
              ▼
            </span>
          </button>
          
          <div className={`gates-grid ${expandedSections.logicGates ? 'expanded' : 'collapsed'}`}>
            {/* AND Gate */}
            <div className="logic-gate-card">
              <div className="gate-icon-container">
                {/* Add AND gate SVG or image here */}
              </div>
              <span className="gate-label">AND Gate</span>
            </div>

            {/* NAND Gate */}
            <div className="logic-gate-card">
              <div className="gate-icon-container">
                {/* Add NAND gate SVG or image here */}
              </div>
              <span className="gate-label">NAND Gate</span>
            </div>

            {/* Rest of your gates... */}
            {/* OR Gate */}
            <div className="logic-gate-card">
              <div className="gate-icon-container">
                {/* Add OR gate SVG or image here */}
              </div>
              <span className="gate-label">OR Gate</span>
            </div>

            {/* NOR Gate */}
            <div className="logic-gate-card">
              <div className="gate-icon-container">
                {/* Add NOR gate SVG or image here */}
              </div>
              <span className="gate-label">NOR Gate</span>
            </div>

            {/* XOR Gate */}
            <div className="logic-gate-card">
              <div className="gate-icon-container">
                {/* Add XOR gate SVG or image here */}
              </div>
              <span className="gate-label">XOR Gate</span>
            </div>

            {/* XNOR Gate */}
            <div className="logic-gate-card">
              <div className="gate-icon-container">
                {/* Add XNOR gate SVG or image here */}
              </div>
              <span className="gate-label">XNOR Gate</span>
            </div>

            {/* NOT Gate */}
            <div className="logic-gate-card">
              <div className="gate-icon-container">
                {/* Add NOT gate SVG or image here */}
              </div>
              <span className="gate-label">NOT Gate</span>
            </div>

            {/* BUFFER Gate */}
            <div className="logic-gate-card">
              <div className="gate-icon-container">
                {/* Add BUFFER gate SVG or image here */}
              </div>
              <span className="gate-label">BUFFER Gate</span>
            </div>
          </div>
        </div>

        {/* Input Components Section */}
        <div className="drawer-section">
          <button 
            className="section-title-button"
            onClick={() => toggleSection('inputComponents')}
            type="button"
          >
            <h3 className="section-title">Input Components</h3>
            <span className={`section-arrow ${expandedSections.inputComponents ? 'expanded' : ''}`}>
              ▼
            </span>
          </button>
          
          <div className={`gates-grid ${expandedSections.inputComponents ? 'expanded' : 'collapsed'}`}>
            {/* AND Gate */}
            <div className="logic-gate-card">
              <div className="gate-icon-container">
                {/* Add AND gate SVG or image here */}
              </div>
              <span className="gate-label">Toggle Switch</span>
            </div>

            {/* NAND Gate */}
            <div className="logic-gate-card">
              <div className="gate-icon-container">
                {/* Add NAND gate SVG or image here */}
              </div>
              <span className="gate-label">Push Button</span>
            </div>
          </div>
        </div>

        {/* Output Components Section */}
        <div className="drawer-section">
          <button 
            className="section-title-button"
            onClick={() => toggleSection('outputComponents')}
            type="button"
          >
            <h3 className="section-title">Output Components</h3>
            <span className={`section-arrow ${expandedSections.outputComponents ? 'expanded' : ''}`}>
              ▼
            </span>
          </button>
          
          <div className={`gates-grid ${expandedSections.outputComponents ? 'expanded' : 'collapsed'}`}>
            {/* AND Gate */}
            <div className="logic-gate-card">
              <div className="gate-icon-container">
                {/* Add AND gate SVG or image here */}
              </div>
              <span className="gate-label">LED Light</span>
            </div>

            {/* NAND Gate */}
            <div className="logic-gate-card">
              <div className="gate-icon-container">
                {/* Add NAND gate SVG or image here */}
              </div>
              <span className="gate-label">RGB LED</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LogicGateDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LogicGateDrawer; 