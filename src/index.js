import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Detail from "./pages/Detail/Detail";
import Reward from "./pages/Reward/Reward";
import RewardSend from './pages/RewardSend/RewardSend';
import SendSuccess from './pages/SendSuccess/SendSuccess';
import CardList from './pages/CardList/CardList';
import Register from "./pages/Register/Register";
import SignupType from './pages/SignupType/SignupType';
import SignupType2 from './pages/SignupType2/SignupType2';
import Login from './pages/Login/Login';
import RewardDeposit from './pages/RewardDeposit/RewardDeposit';
import DepositSuccess from './pages/DepositSuccess/DepositSuccess';
import Reward2 from './pages/Reward2/Reward2';
import DetailCollector from './pages/DetailCollector/DetailCollector';
import User from './pages/User/User';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <CardList />
//   </React.StrictMode>
// );

//중요한 코드!
 ReactDOM.render(
 <React.StrictMode>
 <User />
 </React.StrictMode>,
 document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();