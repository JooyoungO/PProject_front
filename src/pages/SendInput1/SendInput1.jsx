import React, {useState} from 'react';
import './SendInput1.css';
import Button from '../../components/Button/Button';

function SendInput1() {

    const [model] = useState({
        databank: '이상한 hex형',
        mywallet: '얘도 이상한 hex형',
        currentbalance: '얼만큼 있는지'
    })

    function onNextClickHandler() {
        console.log('다음 버튼을 눌렀어요!')
    }

    function onHowMuchClickHandler() {
        console.log('키보드가 나와야 함');
    }

    return (
        <div className='sendInput1' style={{ position: 'relative' }}>
            {/* 상단바가 들어오면 margin 값을 변경해줘야 함 
                상단바와 '결제 정보' 간격은 32px */}
            <p style={{color:'black', margin:'120px 16px 16px 16px', fontSize:'16px'}}>결제 정보</p>
            <p style={{margin:'12px 16px 5px 16px', fontSize: '19px', fontWeight:'bolder'}}>데이터뱅크 ({model ? model.databank : "Loading..."})</p>
            <p style={{margin:'5px 16px 16px 16px', fontSize: '19px', fontWeight:'bolder'}}>내 지갑 ({model ? model.mywallet : "Loading..."})으로 보냅니다.</p>
            <div onClick={onHowMuchClickHandler} style={{color:'#A5A5A5', margin:'32px 16px 16px 16px'}}><b>얼마나 옮길까요?</b></div>
            <p style={{
                width:'151px',
                height:'20px',
                margin:'5px 16px 5px 16px',
                padding:'4px 8px 6px 8px',
                fontSize:'14px',
                color:'#ffffff',
                backgroundColor:'#A5A5A5',
                borderRadius:'4px'
            }}>현재 잔액 : {model ? model.currentbalance : "Loading..."}</p>
            {/* bottom 값 BottomNav 가 들어오면 변경해야 함 */}
        <div style={{position:'absolute', marginLeft:'16px', bottom:'10px'}}>
            <Button 
                text='다음'
                color='#ffffff'
                backgroundColor='#A5A5A5'
                borderColor='none'
                onClick={onNextClickHandler}
            />
        </div>
        
        </div>
    )
}

export default SendInput1;