import React from 'react';
import CardList from './pages/CardList/CardList';
import Detail from './pages/Detail/Detail';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import CardListCollector from './pages/CardListCollector/CardListCollector';
import DataSubmissionForm from './pages/DataSubmissionForm/DataSubmissionForm';
import DetailCollector from './pages/DetailCollector/DetailCollector';
import CardListCollector2 from './pages/CardListCollector2/CardListCollector2';
import Reward2 from './pages/Reward2/Reward2';
import RewardDeposit from './pages/RewardDeposit/RewardDeposit';
import DepositSuccess from './pages/DepositSuccess/DepositSuccess';
import User2 from './pages/User2/User2';
import AccountDeletion from './pages/AccountDeletion/AccountDeletion';
import Login from './pages/Login/Login';


function App() {
  return (
    <div className="app">
      <Routes>
        {/* <Route path="/" element={<CardList />} /> 
        <Route path="/detail/:id" element={<Detail />} /> */}

        <Route path='/CardListCollector' element={<CardListCollector listTitle={"데이터 수집 목록"} />} />
        <Route path='/CardListCollector' element={<CardListCollector listTitle={"데이터 수집 목록"} />} />
        <Route path='/DataSubmissionForm' element={<DataSubmissionForm />} />
        <Route path='/DataSubmissionForm' element={<CardListCollector />} />
        <Route path='/detail/:id' element={<DetailCollector />} />
        <Route path='/CardListCollector2' element={<CardListCollector2 />} />

        <Route path='/Reward2' element={<Reward2 />} />
        <Route path='/User2' element={<User2 />} />
        <Route path='/RewardDeposit' element={<RewardDeposit />} />
        <Route path='/DepositSuccess' element={<DepositSuccess />} /> 
        <Route path='/AccountDeletion' element={<AccountDeletion />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;