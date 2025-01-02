import React from 'react';

function Toolbar() {
  const tools = [
    { id: 'transform', icon: 'fas fa-arrows-alt', title: 'Transform' },
    { id: 'move', icon: 'fas fa-ruler-combined', title: 'Move' },
    { id: 'rotate', icon: 'fas fa-sync-alt', title: 'Rotate' },
    { id: 'scale', icon: 'fas fa-expand-arrows-alt', title: 'Scale' },
  ];

  return (
    <div id="left-toolbar">
      {tools.map((tool) => (
        <div key={tool.id} id={`left-toolbar-tool-${tool.id}`} title={tool.title}>
          <i className={tool.icon}></i>
        </div>
      ))}
    </div>
  );
}

export default Toolbar;
