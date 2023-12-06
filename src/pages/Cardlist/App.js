// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Card from "../../components/Card/Card";
//import Navbar from './components/Navbar/Navbar';
import "./App.css";
import Detail from '../Detail/Detail';
// import BottomNav from './components/BottomBar/BottomNav';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      {/* Card 컴포넌트에 데이터를 전달 */}
      <Card
        image="path_to_image.jpg"
        title="카드 제목"
        description="여기에 카드 설명을 적습니다."
      />
      {/* <BottomNav /> */}
      <Router>
        <Routes>
          <Route path='../detail' element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
