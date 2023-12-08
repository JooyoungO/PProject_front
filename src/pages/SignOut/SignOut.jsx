import React from 'react';
import './SignOut.css';

function SignOut() {
    return(
        <div className='signout'>
            <div className='signout-text' style={{margin:'16px', whiteSpace: 'pre-wrap'}}>
                <p>회원 탈퇴 시 더 이상 데이터뱅크 서비스 사용이</p>
                <p>불가능하며 탈퇴 처리됩니다.</p>
            </div>
        </div>
    )
}

export default SignOut;