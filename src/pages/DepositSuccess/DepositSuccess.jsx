import React from 'react';
import './DepositSuccess.css';

function DepositSuccess() {
    return (
        <div className='DepositSuccess'>
            <div className='SendSuccess-text' style={{margin:'16px', whiteSpace: 'pre-wrap'}}>
                <p>🎉</p>
                <p>안전하게</p>
                <p>입금되었습니다.</p>
            </div>
            <div className='checkButton'>확인</div>

        </div>

    )
}

export default DepositSuccess;