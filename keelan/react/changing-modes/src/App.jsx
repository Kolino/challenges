import { useState } from 'react'
import styles from './App.module.scss';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [number, setNumber] = useState(0);

  const generateNumber = () => {
    setNumber(Math.floor(Math.random() * 101));
  };

  const pageClasses = isDarkMode ? [styles.page, styles.page__dark] : [styles.page];

  console.log('rendering');

  return (
    <>
      <section className={pageClasses.join(' ')}>
        <button onClick={toggleDarkMode}>{isDarkMode ? 'Change to light mode' : 'Change to dark mode'}</button>
        <button onClick={generateNumber}>Generate random number between 0 and 100</button>
        <p>Generated number: {number}</p>
        <p>{number % 2 === 0 ? 'The number is even.' : 'The number is odd.'}</p>
      </section>
    </>
  )
}

export default App
