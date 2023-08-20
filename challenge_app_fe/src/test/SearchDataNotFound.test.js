import { render as render2 } from './test-utils'
import App from '../App'
import { fireEvent } from '@testing-library/react'

describe('Search scenarios', () => {
  it('Validating if it shows the alert when the file has no valid lines.', async () => {
    const fileName = 'test15.csv';
    const { getByPlaceholderText, getByText, findByText } = render2(<App />);
    const searchInput = getByPlaceholderText('Search file');
    const searchButton = getByText('Search');

    fireEvent.change(searchInput, { target: { value: fileName } });
    fireEvent.click(searchButton);



    const alertElement = await findByText('Data not found.');
    expect(alertElement).toBeInTheDocument();
  });


});
