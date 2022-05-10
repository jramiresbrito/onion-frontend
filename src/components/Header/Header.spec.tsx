import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '.';

describe('Header Component', () => {
  const mockOpenSatellitesModal = jest.fn();

  it('Renders Properly', async () => {
    render(<Header onOpenSatellitesModal={mockOpenSatellitesModal} />);

    screen.getByTestId('header-container');
    screen.getByTestId('logo');

    const button = await screen.findByTestId('header-button');
    expect(button).toHaveTextContent('Find Satellite');
    expect(button).toBeEnabled();
    expect(button).toHaveAttribute('type', 'button');
  });

  it('Run the received function when clicked on its button', async () => {
    render(<Header onOpenSatellitesModal={mockOpenSatellitesModal} />);

    const button = await screen.findByTestId('header-button');
    fireEvent.click(button);
    expect(mockOpenSatellitesModal).toHaveBeenCalled();
  });
});
