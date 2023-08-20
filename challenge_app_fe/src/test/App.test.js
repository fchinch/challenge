import App from '../App';
import { render , cleanup } from './test-utils'
import { fireEvent, getByPlaceholderText, getByText, waitFor } from '@testing-library/react'

afterEach(()=>{
   cleanup();
})

describe("Main Screen",() =>{
  it("Should render title screen", () =>{
     const sut = render(<App />)
     const titleElement  = sut.getByText("React test app");
    expect(titleElement).toBeInTheDocument();
  })
})

describe('App component', () => {
  it('renders the App component', () => {
    const sut = render(<App />)
    const searchInput = sut.getByPlaceholderText('Search file');
    const searchButton = sut.getByText('Search');
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('fetches and displays data when search button is clicked', async () => {
    const fileName = 'test18.csv';
    const placeHolder = 'Search file';
    const button = 'Search';

    const sut = render(<App />)
    const searchInput = sut.getByPlaceholderText(placeHolder);
    const searchButton = sut.getByText(button);

    fireEvent.change(searchInput, { target: { value: fileName } });
    fireEvent.click(searchButton);

    await waitFor(() => {

      const table = sut.getByRole('table');
      const rows = table.querySelectorAll('tr');

      let fileNameFound = false;

     rows.forEach((row) => {
        const rowText = row.textContent;
        if (rowText.includes(fileName)) {
          fileNameFound = true;
          return;
        }
      });

      expect(fileNameFound).toBeTruthy();
    } , {timeout: 4000});
  });




});


