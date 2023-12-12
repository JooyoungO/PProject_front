// import React from 'react';
// // import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import CardList from "./pages/CardList/CardList";

// import App from './App';
// import reportWebVitals from './reportWebVitals';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import CardList from "./pages/CardList/CardList";
//  ReactDOM.render(
//  <React.StrictMode>
//  <CardList />
//  </React.StrictMode>,
//  document.getElementById('root')
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <CardList />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; // App 컴포넌트 임포트 (배포할 때 주석 풀기)
import DataSubmissionForm from './pages/DataSubmissionForm/DataSubmissionForm';
// import RewardSend from './pages/RewardSend/RewardSend';
import CardListTag from './pages/CardListTag/CardListTag';
import CardList from './pages/CardList/CardList';
import Delete from './pages/Delete/Delete';
import DetailCollector from './pages/DetailCollector/DetailCollector';
import CardListCollector2 from './pages/CardListCollector2/CardListCollector2';
import RewardDeposit from './pages/RewardDeposit/RewardDeposit';
import Reward2 from './pages/Reward2/Reward2';

import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Reward2 /> 
  </BrowserRouter>
); 