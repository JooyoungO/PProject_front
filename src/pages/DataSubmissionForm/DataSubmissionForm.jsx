import React, { useState } from "react";
// import { useParams } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import BackDataTradeList from "../../components/BackDataTradeList/BackDataTradeList";
import DataNavbar from "../../components/DataNavbar/DataNavbar";
import "./DataSubmissionForm.css";
import camera from "../../images/camera.svg";

function DataSubmissionForm() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [reward, setReward] = useState("");
  const [capacity, setCapacity] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  // const [image, setImage] = useState(null);
  // const [image, setImage] = useState(
  // "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMTBfODcg%2FMDAxNjk5NTg1ODY4Mzcz.TDhp9IF3JpEmdcryX5Sj3eP69RxQBIBBxz-N4Rbk2VIg.bO3a3_R5kBasub2IlbIHA7QYqhbxQv-FMgr0U-UTnbgg.JPEG.eh60135%2F%25B8%25D5%25C4%25A1%25C5%25B2%25B0%25ED%25BE%25E7%25C0%25CC%25C1%25BE%25B7%25F914.jpg&type=a340"
  // ); // 이미지 URL
  // 향후 서버로부터 이미지를 업로드하거나 상태를 업데이트하는 로직을 구현할 때 setImage 함수를 사용할 예정(아직 warning)

  // 이미지 파일 처리 함수
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl); // 이미지 URL을 상태로 설정
    }
  };

  // const navigateToCardListCollector = () => {
  //   navigate("/CardListCollector");
  // };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // 이미지와 설명 데이터 처리 로직 구현
    // console.log(image);
    // 이 부분에서 서버로 이미지와 설명을 보내는 서버로 데이터를 보내는 API 호출 구현
    // navigateToCardListCollector();

    try {
      const location = "Gachon";
      const endpoint = `/colects/${id}`;

      const formData = new FormData();
      formData.append("image", image);

      const json = JSON.stringify({ title: title, content: content, location: location });
      const post = new Blob([json], { type: "application/json" });

      formData.append("post", post);

      const response = fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + window.sessionStorage.getItem("token"),
        },
        body: formData,
      });

      console.log(response);
      navigate("/cardListCollector");
    } catch (error) {
      alert(error);
      console.error("API 호출 중 오류 발생:", error);
    }
  }; 

  return (
    <>
      <div className="data-submission-container">
        <BackDataTradeList listTitle="데이터 수집 생성" />
        <form onSubmit={handleSubmit} className="submission-form">
        <div
            className="image-upload-section"
            onClick={() => document.getElementById("image-input").click()}
          >
            {image ? (
              // 이미지가 있을 때, 이미지를 표시
              <img src={image} alt="Uploaded" className="uploaded-image" />
            ) : (
              // 이미지가 없을 때, 카메라 아이콘과 텍스트를 표시하는 플레이스홀더 보여줌
              <div className="upload-placeholder">
                <img src={camera} alt="camera Logo" className="camera-icon" style={{ width: 24, height: 24 }}/>
                <span>여기를 클릭해서 사진을 추가해주세요!</span>
              </div>
            )}
            <input
              id="image-input"
              type="file"
              accept="image/*"
              capture="camera"
              onChange={handleImageChange}
              hidden
            />
          </div>
          <form class="data-form">
            <div class="form-group">
              <label for="texttitle">기본 정보</label>
            </div>
            <div class="form-group">
              <input type="제목" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} required />
              <input type="내용" placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)} required />
            </div>

            <div class="form-group">
              <label for="texttitle">리워드 정보</label>
            </div>
            <div class="form-group">
              <input type="리워드" placeholder="리워드" value={reward} onChange={(e) => setReward(e.target.value)} required />
              <input type="참여자 수" placeholder="참여자 수" value={capacity} onChange={(e) => setCapacity(e.target.value)} required />
            </div>
          </form>

          <div className="Next-button">
            <button 
            type="submit" onClick={handleSubmit} style={{ backgroundColor: image ? "#214FC7" : "#A5A5A5" }}>
              생성
            </button>
          </div>
        </form>
      </div>
      <DataNavbar />
    </>
  );
}

export default DataSubmissionForm;