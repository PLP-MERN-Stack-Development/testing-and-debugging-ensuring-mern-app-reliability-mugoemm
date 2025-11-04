import React, { useState } from 'react';

export default function BugForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!title.trim() || !description.trim()) {
      alert('Please fill in both title and description');
      return;
    }

    setIsSubmitting(true);
    
    try {
      await onSubmit({ title: title.trim(), description: description.trim() });
      setTitle('');
      setDescription('');
    } catch (error) {
      // Error handling is done in parent component
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Report New Bug</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <input 
            placeholder="Bug title (required)"
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={isSubmitting}
            style={{ 
              width: '100%', 
              padding: '8px 12px', 
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <textarea 
            placeholder="Bug description (required)"
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            required
            disabled={isSubmitting}
            rows="4"
            style={{ 
              width: '100%', 
              padding: '8px 12px', 
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px',
              resize: 'vertical'
            }}
          />
        </div>
        <button 
          type="submit" 
          disabled={isSubmitting || !title.trim() || !description.trim()}
          style={{
            background: '#2196f3',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            fontSize: '16px',
            opacity: isSubmitting || !title.trim() || !description.trim() ? 0.6 : 1
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Report Bug'}
        </button>
      </form>
    </div>
  );
}
