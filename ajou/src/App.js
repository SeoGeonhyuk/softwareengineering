import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

function App() {
  return (
    <div
      style={{
        backgroundColor: '#0077c2',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link to='/' style={{ textDecoration: 'none' }} className={'link-styles'}>
        <Button className={'main-buttons'}>Home</Button>
      </Link>
      <br />
      <Link
        to='/paldal'
        style={{ textDecoration: 'none' }}
        className={'link-styles'}
      >
        <Button className={'main-buttons'}>팔달관</Button>
      </Link>
      <Link
        to='/seongho'
        style={{ textDecoration: 'none' }}
        className={'link-styles'}
      >
        <Button className={'main-buttons'}>성호관</Button>
      </Link>

      <Link
        to='/dasan'
        style={{ textDecoration: 'none' }}
        className={'link-styles'}
      >
        <Button className={'main-buttons'}>다산관</Button>
      </Link>

      <Routes>
        <Route path='/' element={<div></div>} />
        <Route
          path='/paldal'
          element={
            <div>
              팔달관 <label for='dropdown'> 층 선택 :</label>
              <select name='dropdown' id='dropdown'>
                <option value=''>Select an option</option>
                <option value='option1'>1층</option>
                <option value='option2'>2층</option>
                <option value='option3'>3층</option>
                <option value='option4'>4층</option>
              </select>
            </div>
          }
        />{' '}
        //route-페이지
        <Route
          path='/seongho'
          element={
            <div>
              성호관 <label for='dropdown'> 층 선택 :</label>
              <select name='dropdown' id='dropdown'>
                <option value=''>Select an option</option>
                <option value='option1'>1층</option>
                <option value='option2'>2층</option>
                <option value='option3'>3층</option>
                <option value='option4'>4층</option>
              </select>
            </div>
          }
        />
        <Route
          path='/dasan'
          element={
            <div>
              다산관 <label for='dropdown'> 층 선택 :</label>
              <select name='dropdown' id='dropdown'>
                <option value=''>Select an option</option>
                <option value='option1'>1층</option>
                <option value='option2'>2층</option>
                <option value='option3'>3층</option>
                <option value='option4'>4층</option>
              </select>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
