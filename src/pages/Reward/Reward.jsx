import React from 'react';
import Trading from '../../components/Trading/Trading';
import './Reward.css';
import cat from "../../images/cat.png";


function Reward() {
    return (
        <div className='reward'>
            <p style={{ 
                color: 'black', margin:'60px 0px 0px 16px', fontSize:'16px', fontSize:'16px'}}>당신의 리워드는</p>
            <p style={{margin:'6px 16px', fontSize:'16px', fontSize:'32px'}}><b>1,012,716 DBC </b></p>
            <p style={{margin:'6px 16px', fontSize:'16px'}}>입니다.</p>
            {/** 버튼 컴포넌트 들어올 자리, 지금은 만든게 없어서 대체 */}
            <div className='reward-button'><b>이체하기</b></div>
            <p style={{color:'#A5A5A5', marginLeft:'16px'}}>거래내역</p>
            <Trading
            image={cat} 
            name='지갑 출금'
            date='2023. 12. 05 16:25'
            trading='-8,000 DBC'
            balance='1012,716 DBC'
            />
            <Trading
            image={cat} 
            name='지갑 출금'
            date='2023. 12. 05 16:25'
            trading='-8,000 DBC'
            balance='1012,716 DBC'
            />
            <Trading
            image={cat} 
            name='지갑 출금'
            date='2023. 12. 05 16:25'
            trading='-8,000 DBC'
            balance='1012,716 DBC'
            />
            <Trading
            image={cat} 
            name='지갑 출금'
            date='2023. 12. 05 16:25'
            trading='-8,000 DBC'
            balance='1012,716 DBC'
            />
        </div>
    )
}

export default Reward;