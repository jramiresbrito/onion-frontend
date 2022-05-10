import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Logo } from '../../components/Logo';

describe('Logo Component', () => {
  it('Renders Properly', async () => {
    render(<Logo />);

    const logo = await screen.findByTestId('logo');
    expect(logo).toHaveTextContent('Starlink 🛰️');
  });
});
