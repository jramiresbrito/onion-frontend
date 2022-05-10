import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from '../App';
import Modal from 'react-modal';

Modal.setAppElement(document.createElement('div'));

describe('App Component', () => {
  it('Renders Properly', async () => {
    render(<App />);

    screen.getByTestId('app-container');
    screen.getByTestId('header-container');
    screen.getByTestId('globe-container');
    expect(
      screen.queryByTestId('app-satellites-modal')
    ).not.toBeInTheDocument();
  });

  it('Opens the modal when click in button', async () => {
    render(<App />);

    // The modal is closed initially
    expect(
      screen.queryByTestId('satellites-modal-container')
    ).not.toBeInTheDocument();

    // click on header-button to open the modal
    const button = await screen.findByTestId('header-button');
    fireEvent.click(button);
    // the modal is now opened
    screen.getByTestId('satellites-modal-container');
  });
});
