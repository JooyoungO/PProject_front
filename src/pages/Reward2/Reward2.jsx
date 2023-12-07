import React, { useState } from 'react';
import Trading from '../../components/Trading/Trading';
import './Reward2.css';
import cat from "../../images/cat.png";
import DataTradeList from '../../components/DataTradeList/DataTradeList';


function Reward2({listTitle}) {

    const [model] = useState({
        myReward: '본인이 가진 리워드',
        image: 'https://via.placeholder.com/150',
        name: '거래한 사람이름',
        date: '거리한 날짜',
        trading: '입출금 내역',
        balance: '잔액'
    });

    function onSendClickHandler() {
        console.log('이체하기 버튼을 눌렀어요')
    }

    return (
        <>
        {/* <DataTradeList listTitle={{listTitle}} /> */}
        <div className='reward'>
            <p style={{ 
                color: 'black', margin:'60px 0px 0px 16px', fontSize:'16px', fontSize:'16px'}}>당신의 리워드는</p>
            <p style={{margin:'6px 16px', fontSize:'32px'}}><b>{model ? model.myReward : "Loading..."} </b></p>
            <p style={{margin:'6px 16px', fontSize:'16px'}}>입니다.</p>
            <div className='DepositButton' onClick={onSendClickHandler}>입금하기</div>
            <p style={{color:'#A5A5A5', marginLeft:'16px'}}>거래내역</p>
            <Trading
            image src={model ? model.image : "defaul_image.png"} 
            name= {model ? model.name : "Loading..."}
            date= {model ? model.date : "Loading..."}
            trading= {model ? model.trading : "Loading..."}
            balance= {model ? model.balance : "Loading..."}
            />
            <Trading
            image src={model ? model.image : "defaul_image.png"} 
            name= {model ? model.name : "Loading..."}
            date= {model ? model.date : "Loading..."}
            trading= {model ? model.trading : "Loading..."}
            balance= {model ? model.balance : "Loading..."}
            />
            <Trading
            image src={model ? model.image : "defaul_image.png"} 
            name= {model ? model.name : "Loading..."}
            date= {model ? model.date : "Loading..."}
            trading= {model ? model.trading : "Loading..."}
            balance= {model ? model.balance : "Loading..."}
            />
            <Trading
            image src={model ? model.image : "defaul_image.png"} 
            name= {model ? model.name : "Loading..."}
            date= {model ? model.date : "Loading..."}
            trading= {model ? model.trading : "Loading..."}
            balance= {model ? model.balance : "Loading..."}
            />
        </div>
    </>
    )
}

export default Reward2;