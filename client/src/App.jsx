import React, { useState, useEffect } from 'react';
import BugForm from './components/BugForm';
import BugList from './components/BugList';
import { bugService } from './services/bugService';

export default function App() {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch bugs on component mount
  useEffect(() => {
    fetchBugs();
  }, []);

  const fetchBugs = async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedBugs = await bugService.getAllBugs();
      setBugs(fetchedBugs);
    } catch (err) {
      setError('Failed to fetch bugs: ' + err.message);
      console.error('Error fetching bugs:', err);
    } finally {
      setLoading(false);
    }
  };

  const addBug = async (bugData) => {
    try {
      setError(null);
      const newBug = await bugService.createBug(bugData);
      setBugs([newBug, ...bugs]);
    } catch (err) {
      setError('Failed to create bug: ' + err.message);
      console.error('Error creating bug:', err);
    }
  };

  const updateBug = async (id, updateData) => {
    try {
      setError(null);
      const updatedBug = await bugService.updateBug(id, updateData);
      setBugs(bugs.map(bug => bug._id === id ? updatedBug : bug));
    } catch (err) {
      setError('Failed to update bug: ' + err.message);
      console.error('Error updating bug:', err);
    }
  };

  const deleteBug = async (id) => {
    try {
      setError(null);
      await bugService.deleteBug(id);
      setBugs(bugs.filter(bug => bug._id !== id));
    } catch (err) {
      setError('Failed to delete bug: ' + err.message);
      console.error('Error deleting bug:', err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🐞 Bug Tracker</h1>
      
      {error && (
        <div style={{ 
          background: '#ffebee', 
          color: '#c62828', 
          padding: '10px', 
          borderRadius: '4px', 
          marginBottom: '20px' 
        }}>
          {error}
        </div>
      )}
      
      <BugForm onSubmit={addBug} />
      <hr />
      
      {loading ? (
        <p>Loading bugs...</p>
      ) : (
        <BugList 
          bugs={bugs} 
          onUpdate={updateBug} 
          onDelete={deleteBug} 
        />
      )}
    </div>
  );
}
