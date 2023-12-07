import React from 'react';
import './SendSuccess.css';

function SendSuccess() {
    return (
        <div className='SendSuccess'>
            <div className='SendSuccess-text' style={{margin:'16px', whiteSpace: 'pre-wrap'}}>
                <p>🎉</p>
                <p>안전하게</p>
                <p>이체되었습니다.</p>
            </div>
            <div className='checkButton'>확인</div>

        </div>

    )
}

export default SendSuccess;