import React from 'react';
import { createContext , useState} from 'react';
import './App.css';
import FileForm from './components/FileForm';
import HotelImage from './components/HotelImage';


export const AppContext = createContext(null)


function App() {
  const [hotel, setHotel] = useState(AppContext)
  return (
    <AppContext.Provider value={[hotel, setHotel]}>
    <div className="App">
<FileForm/>
<HotelImage/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
