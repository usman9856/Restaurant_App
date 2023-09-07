import React, { useState } from 'react';
import "./css/food.css"
function ExpandableTable({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="expandable-table">
      <div className="expandable-header" onClick={toggleContent}>
        <div className="table-row">
          <div className="table-cell">Title</div>
          <div className="table-cell">Description</div>
          <div className="table-cell">Price</div>
        </div>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="expandable-content">
          {data.map((item, index) => (
            <div className="table-row" key={index}>
              <div className="table-cell">{item.title}</div>
              <div className="table-cell">{item.description}</div>
              <div className="table-cell">{item.price}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpandableTable;
