import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Star1 from './Star1';

describe('Star1', () => {
  test.skip('toggles the achievement list when clicking the button', () => {
    render(<Star1 />);

    // Initially, the achievement list should not be visible
    expect(screen.queryByText(/Situation:/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Task:/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Action:/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Result:/)).not.toBeInTheDocument();

    // Click the button to show the achievement list
    fireEvent.click(screen.getByText('SHOW ACHIEVEMENT'));

    // Now, the achievement list should be visible
    expect(screen.getByText(/Situation:/)).toBeInTheDocument();
    expect(screen.getByText(/Task:/)).toBeInTheDocument();
    expect(screen.getByText(/Action:/)).toBeInTheDocument();
    expect(screen.getByText(/Result:/)).toBeInTheDocument();

    // Click the button again to hide the achievement list
    fireEvent.click(screen.getByText('CLOSE ACHIEVEMENT'));

    // Now, the achievement list should not be visible again
    expect(screen.queryByText(/Situation:/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Task:/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Action:/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Result:/)).not.toBeInTheDocument();
  });
});
