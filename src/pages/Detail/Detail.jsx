// import React, { useState, useEffect } from 'react';
//import { useParams } from 'react-router-dom';
// import axios from 'axios'; //*api 불러오면 주석해제
import React, { useState } from 'react'; //api 불러오면 삭제
import './Detail.css';
import Button from '../../components/Button/Button';

function Detail() {
    // 임시 데이터로 상태 초기화
    const [model] = useState({
        image: 'https://via.placeholder.com/150',
        title: '제목의 길이가 길어도 잘 들어가는지 확인중',
        userName: '사용자 이름',
        participantCount: '100',
        reward: '50',
        conditions: ['고양이 전신 사진이 촬영되어야 합니다.'],
        description: '😎 안녕하세요. 저희는 고양이 전신 사진을 100장 정도 확보하는 것을 목표로 하고 있습니다...',
    });

// function Detail() {
//     const [model, setModel] = useState(null);
//     const { id } = useParams();

//     useEffect(() => {
//         const fetchData = async () => {
//             const token = "test";
//             try {
//                 const res = await axios.get(`http://172.16.228.187:8080/collects/${id}`, {  // id를 사용하는 URL
//                     headers: {
//                         "Content-Type": `application/json;charset=UTF-8`,
//                         "Accept": "application/json",
//                         "Authorization": "Bearer " + token,
//                     },
//                     responseType: "json"
//                 });
    
//                 setModel(res.data);  // API 응답으로 상태 업데이트
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         }
    
//         fetchData();
//     }, [id]);   //*api 불러오면 주석해제

    function onParticipationClickHandler() {
        console.log('참여하기 버튼을 눌렀어요!');
    }

    return (
        <div className='Detail-wrapper'>
            <div className='Detail-image'>
                <img src={model ? model.image : 'default_image.png'} alt={model ? model.title : 'Loading...'} />
            </div>
            <div className='Detail-title'>
                <p>{model ? model.title : "Loading..."}</p>
            </div>
            <div className='Detail-user'>
            <p style={ { color : '#6F6F6F', textAlign : 'start' }} >{model ? model.userName : "Loading..."}</p>
            <p style={ { color : '#6F6F6F', textAlign : 'left' }}>👥 {model ? model.participantCount : "Loading..."}명</p>
            <p style={ { color : '#214FC7', textAlign : 'right' }}><b>💵 {model ? model.reward : "Loading..."} DBC 지급</b></p>
            </div>
            <div className='Detail-condition'>
                <h4 style={{ textAlign:'left', marginTop: '16px', marginLeft: '16px'}}>[사진조건]</h4>
                <ul>
                    {/* 조건 내용을 동적으로 렌더링 */}
                    {model && model.conditions.map((condition, index) => (
                        <li key={index} style={{ textAlign: 'left'}}>{condition}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 style={{ textAlign: 'left', marginLeft: '16px'}}>소개</h3>
                <p style={{textAlign: 'left', marginLeft: '16px', marginRight:'16px'}}>
                    {model ? model.description : 'Loading...'}
                </p>
            </div>

            <Button 
                text='참여하기'
                color='#ffffff'
                backgroundColor='#214FC7'
                borderColor='#214FC7'
                onClick={onParticipationClickHandler}
                />
        </div>
    );
}

export default Detail;