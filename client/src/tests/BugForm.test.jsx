import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import BugForm from '../components/BugForm';

test('calls onSubmit with bug data', async () => {
  const handleSubmit = jest.fn().mockResolvedValue(undefined);
  render(<BugForm onSubmit={handleSubmit} />);

  fireEvent.change(screen.getByPlaceholderText(/title/i), { target: { value: 'Login issue' } });
  fireEvent.change(screen.getByPlaceholderText(/description/i), { target: { value: 'Button not working' } });
  
  await act(async () => {
    fireEvent.click(screen.getByText(/report bug/i));
  });

  expect(handleSubmit).toHaveBeenCalledWith({
    title: 'Login issue',
    description: 'Button not working'
  });
});
