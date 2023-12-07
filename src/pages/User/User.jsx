import React, { useState } from 'react';
import './User.css';

function User() {

    const [model] = useState({
        name: '본인이름'
    })
    return(
        <div className='user'>
            <p style={{ 
                color: 'black', margin:'32px 0px 0px 16px', fontSize:'24px', fontFamily:'SOYOMapleRegular'}}>
                    <b>{model ? model.name : "Loading..."}님, 안녕하세요.</b></p>
        
            <div className='user-menu'>
                <p>📸 내가 쓴 글</p>
                <p>📱 로그아웃</p>
                <p>❌ 회원탈퇴</p>
            </div>
        </div>
    )
}

export default User;