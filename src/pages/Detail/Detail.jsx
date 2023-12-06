import cat from '../../images/cat.png';
import './Detail.css'

function Detail(){
    return (
        <div className='Detail-wrapper'>
            <div className='Detail-image'>
                <img src={cat} alt=''></img>
            </div>
            <div className='Detail-title'>
                <p><b>집 고양이 전신 사진 데이터 확보</b></p>
            </div>
            <div className='Detail-user'>
                <p style={ { color : '#6F6F6F', textAlign : 'start' }} >고양이 사랑</p>
                <p style={ { color : '#6F6F6F', textAlign : 'left' }}>👥 100명</p>
                <p style={ { color : '#214FC7', textAlign : 'right' }}><b>💵 50 DBC 지급</b></p>
            </div>
            <div className='Detail-condition'>
                <h4 style={{ textAlign:'left', marginTop: '16px', marginLeft: '16px'}}>[사진조건]</h4>
                <ul>
                    <li style={{ textAlign: 'left'}}>고양이 전신 사진이 촬영되어야 합니다.</li>
                    <li style={{ textAlign: 'left'}}>고양이 전신 사진이 촬영되어야 합니다.</li>
                </ul>
            </div>
            <div>
                <h3 style={{ textAlign: 'left', marginLeft: '16px'}}>소개</h3>
                <p style={{textAlign: 'left', marginLeft: '16px'}}>😎 안녕하세요.
                    저희는 고양이 전신 사진을 100장 정도 확보하는 것을 목표로 하고 있습니다. 
                    ‘고양이사랑'팀은 2023년부터 법인등록하여 현재는 고양이들의 복지 정책을 위해 힘쓰고 있습니다. 
                    그러던 중 집 고양이의 전신 사진 데이터를 모아야만하는 상황이 있어 이렇게 사용하게 되었습니다. 
                    어려운 부분은 없으니 시간 되신다면 참여해주시면 좋을 것 같습니다. 감사합니다.</p>
            </div>
            <div className='footer-button'>참여하기</div>
        </div>
    );
}

export default Detail;