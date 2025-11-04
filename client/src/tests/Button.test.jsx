import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-primary');
    expect(button).not.toBeDisabled();
  });

  it('renders with different variants and sizes', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    let button = screen.getByRole('button', { name: /primary/i });
    expect(button).toHaveClass('btn-primary');

    rerender(<Button variant="secondary">Secondary</Button>);
    button = screen.getByRole('button', { name: /secondary/i });
    expect(button).toHaveClass('btn-secondary');

    rerender(<Button size="sm">Small</Button>);
    button = screen.getByRole('button', { name: /small/i });
    expect(button).toHaveClass('btn-sm');
  });

  it('calls onClick handler', () => {
    const handle = jest.fn();
    render(<Button onClick={handle}>Click</Button>);
    fireEvent.click(screen.getByRole('button', { name: /click/i }));
    expect(handle).toHaveBeenCalledTimes(1);
  });

  it('disabled does not call onClick', () => {
    const handle = jest.fn();
    render(<Button onClick={handle} disabled>Click</Button>);
    fireEvent.click(screen.getByRole('button', { name: /click/i }));
    expect(handle).not.toHaveBeenCalled();
  });
});
