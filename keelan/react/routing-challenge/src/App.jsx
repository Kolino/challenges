import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getUsersPage } from './services/services';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import UsersPage from './pages/UsersPage/UsersPage';
import UserPageLoader from './containers/UserPageLoader/UserPageLoader';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsersPage().then(pageData => setUsers(pageData.results));
  }, []);

  console.log(users);

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/users' element={<UsersPage users={users} />} />
          <Route path='users/:id' element={<UserPageLoader users={users}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App
