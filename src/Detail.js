import potato from './image/potato.png'

function Detail(){
    return (
        <div className='Detail-wrapper'>
            <div className='Detail-image'>
                <img src={potato} alt=''></img>
            </div>
            <div className='Detail-title'>
                <p>집 고양이 전신 사진 데이터 확보</p>
            </div>
            <div className='Detail-user'>
                <h3 color='#6F6F6F' >고양이 사랑</h3>
                <h4 color='#6F6F6F'>100명</h4>
                <h3 color='#214FC7'><b>50 DBC 지급</b></h3>
            </div>
            <div className='footer-button'>참여하기</div>
        </div>
    );
}

export default Detail;