import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

// Mock the bugService
jest.mock('../services/bugService', () => ({
  bugService: {
    getAllBugs: jest.fn().mockResolvedValue([]),
    createBug: jest.fn().mockResolvedValue({ _id: '1', title: 'Test Bug', description: 'Test Description', status: 'open' }),
    updateBug: jest.fn().mockResolvedValue({}),
    deleteBug: jest.fn().mockResolvedValue({})
  }
}));

describe('App Component', () => {
  it('renders main elements', async () => {
    render(<App />);
    
    expect(screen.getByText('🐞 Bug Tracker')).toBeInTheDocument();
    expect(screen.getByText('Report New Bug')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/bug title/i)).toBeInTheDocument();
    
    // Wait for loading to finish and "no bugs" message to appear
    await waitFor(() => {
      expect(screen.getByText('No bugs found')).toBeInTheDocument();
    });
  });

  it('renders no bugs message after loading', async () => {
    render(<App />);
    
    // Wait for loading to finish
    await waitFor(() => {
      expect(screen.getByText('No bugs found')).toBeInTheDocument();
    });
  });
});