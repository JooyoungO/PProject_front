import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import Trading from '../../components/Trading/Trading';
import './Reward2.css';
import DataTradeList from '../../components/DataTradeList/DataTradeList';
import PointNavbar from '../../components/PointNavbar/PointNavbar';
import { useNavigate } from 'react-router-dom';


function Reward2({listTitle}) {

    const navigate = useNavigate();
    const { id } = useParams();
    const [model, setModel] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          const token = "";
          try {
            const response = await axios.get("/reward/history", {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
            });
            if (response.status === 200) {
              setModel(response.data);
            }
          } catch (error) {
            console.error("API 호출 중 오류 발생:", error);
          }
        };
    
        fetchData();
      }, [id]);

    // const [model] = useState({
    //     myReward: '본인이 가진 리워드',
    //     image: 'https://via.placeholder.com/150',
    //     name: '거래한 사람이름',
    //     date: '거리한 날짜',
    //     trading: '입출금 내역',
    //     balance: '잔액'
    // });

    function onSendClickHandler() {
        navigate('/RewardDeposit');
    }

    return (
        <>
        <DataTradeList listTitle={"잔액"} />
        <div className='reward'>
            <p style={{ 
                color: 'black', margin:'16px 0px 0px 16px', fontSize:'16px', fontSize:'16px'}}>당신의 잔액은</p>
            <p style={{margin:'6px 16px', fontSize:'32px'}}><b>{model ? model.myReward : "Loading..."} </b></p>
            <p style={{margin:'6px 16px', fontSize:'16px'}}>입니다.</p>
            <div className='DepositButton' onClick={onSendClickHandler}>입금하기</div>
            <p style={{color:'#A5A5A5', marginLeft:'16px'}}>거래내역</p>
            {model && model.data &&
            model.data.map((data) => (
                <Trading 
                    src={data.img}
                     name={data.sender}
                     date={data.createdAt}
                     trading={data.amount}
                     balance={data.total}
                />
            ))}
        </div>
        <PointNavbar />
    </>
    )
}

export default Reward2;