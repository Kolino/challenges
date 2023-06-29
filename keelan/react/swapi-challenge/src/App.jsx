import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import PersonLoader from './containers/PersonLoader/PersonLoader'

function App() {
  const [givenNum, setGivenNum] = useState(0);

  const handleSearch = (searchNum) => {
    setGivenNum(searchNum);
  };

  return (
    <>
      <SearchBar handleSubmit={handleSearch} />
      <PersonLoader searchNum ={givenNum} />
    </>
  );
}

export default App;
