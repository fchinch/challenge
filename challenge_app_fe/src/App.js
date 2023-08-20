import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import FileTable from './components/FileTable'
import { fetchFiles, fetchFilesData } from './actions/fileActions'

const App = () => {
  const dispatch = useDispatch();
  const filesRed = useSelector((state) => state.filesRed);
  const [files, setFiles] = useState(filesRed);
  const [searchText, setSearchText] = useState('');
  const [excludeIncompleteData, setExcludeIncompleteData] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(fetchFiles('',excludeIncompleteData))
  }, [dispatch]);

  useEffect(() => {
    setFiles(filesRed);
  }, [filesRed]);

  const handleButtonClick = async () => {
    try {
      setError(null);
      const response =  await dispatch(fetchFiles(searchText, excludeIncompleteData));
      //console.log(`response fetchFiles`, response);
      if(response){
        setError(response);
      }
    }catch (error) {
      //console.log('UI ERROR',error);
      setError("An error occurred while fetching data.");
    }
  };

  return (
    <div>
      <Header/>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <div className="p-3 mb-4 border rounded">
              <div className="row">
                <div className="col-md-6 mb-2">
                  <input
                    type="text"
                    placeholder="Search file"
                    className="form-control"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="excludeIncompleteData"
                      checked={excludeIncompleteData}
                      placeholder={'Checkbox Placeholder'}
                      onChange={(e) => setExcludeIncompleteData(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="excludeIncompleteData">
                      Exclude Incomplete Data
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={handleButtonClick} className="btn btn-primary btn-block"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-binoculars-fill mr-2" viewBox="0 0 16 16">
              <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1h-1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4h4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14H1zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14H9zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5V3z"/>
            </svg> Search</button>
          </div>
        </div>
        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}
        <FileTable files={files}/>
      </div>
    </div>
  )
}

export default App
