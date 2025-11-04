import React from 'react';

export default function BugList({ bugs, onUpdate, onDelete }) {
  if (!bugs || bugs.length === 0) return <p>No bugs found</p>;

  const handleStatusChange = (bug, newStatus) => {
    if (onUpdate) {
      onUpdate(bug._id, { status: newStatus });
    }
  };

  const handleDelete = (bug) => {
    if (onDelete && window.confirm('Are you sure you want to delete this bug?')) {
      onDelete(bug._id);
    }
  };

  return (
    <div>
      <h2>Bug List ({bugs.length})</h2>
      <div style={{ display: 'grid', gap: '10px' }}>
        {bugs.map((bug) => (
          <div 
            key={bug._id} 
            style={{ 
              border: '1px solid #ddd', 
              padding: '15px', 
              borderRadius: '4px',
              background: bug.status === 'resolved' ? '#e8f5e8' : '#fff'
            }}
          >
            <div style={{ marginBottom: '10px' }}>
              <strong>{bug.title}</strong>
              <span style={{ 
                marginLeft: '10px', 
                padding: '2px 8px', 
                borderRadius: '12px', 
                background: bug.status === 'open' ? '#ffeb3b' : 
                           bug.status === 'in-progress' ? '#2196f3' : '#4caf50',
                color: bug.status === 'open' ? '#000' : '#fff',
                fontSize: '12px'
              }}>
                {bug.status}
              </span>
            </div>
            
            <p style={{ margin: '10px 0', color: '#666' }}>
              {bug.description}
            </p>
            
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <select 
                value={bug.status} 
                onChange={(e) => handleStatusChange(bug, e.target.value)}
                style={{ padding: '4px 8px' }}
              >
                <option value="open">Open</option>
                <option value="in-progress">In Progress</option>
                <option value="resolved">Resolved</option>
              </select>
              
              <button 
                onClick={() => handleDelete(bug)}
                style={{ 
                  background: '#f44336', 
                  color: 'white', 
                  border: 'none', 
                  padding: '4px 8px', 
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </div>
            
            {bug.createdAt && (
              <small style={{ color: '#999', display: 'block', marginTop: '10px' }}>
                Created: {new Date(bug.createdAt).toLocaleDateString()}
              </small>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
