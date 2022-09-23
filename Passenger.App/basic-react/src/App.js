import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';

// component
// import Profile from './component/Profile';
// import TableProfile from './component/Profile/TableProfile';
import { 
  // Profile, TableProfile
  ListProduk,
  ClickButton,
 } from './component'

function App() {
  return (
    <div className="container-fluid">
      <div className='container text-center p-3'>
      <h1>Belajar React</h1>
      <p>Ayok kita mulai</p>
      <hr/>
      </div>
      {/* props */}

      {/* {
        profiles.map(profile => {
          const {id, name, hobby} = profile
          return (
            <Profile nomor={id} name={name} hobby={hobby}></Profile>
          )
        })
      } */}

      {/* <Profile></Profile> */}
      {/* <TableProfile></TableProfile> */}
      {/* <ListProduk></ListProduk> */}

      {/* event-handling */}
      <ClickButton></ClickButton>
    </div>
  );
}

export default App;

// 2 jenis component yaitu class based component dan fuction based component