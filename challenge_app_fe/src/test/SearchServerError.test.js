import { render as render3 } from './test-utils'
import App from '../App'
import { fireEvent } from '@testing-library/react'

describe('Search scenarios', () => {
  it('Validating if it shows the alert when the server is returning an error with the file.', async () => {
    const fileName = 'test5.csv';
    const { getByPlaceholderText, getByText, findByText } = render3(<App />);
    const searchInput = getByPlaceholderText('Search file');
    const searchButton = getByText('Search');

    fireEvent.change(searchInput, { target: { value: fileName } });
    fireEvent.click(searchButton);



    const alertElement = await findByText('An error occurred while fetching data.');
    expect(alertElement).toBeInTheDocument();
  });
});
