import React, { useState, useEffect } from "react";
import "./RewardSend.css";
import { useNavigate } from "react-router-dom";
import BackDataTradeList from "../../components/BackDataTradeList/BackDataTradeList";
import RewardNavbar from "../../components/RewardNavbar/RewardNavbar";

function RewardSend() {
  const navigate = useNavigate();
  const [model, setModel] = useState({
    databank: "0x4183...",
    mywallet: "0x92Ac...",
    // currentbalance: "3500",
  });

  const [amount, setAmount] = useState("");
  const [isAmountInputVisible, setIsAmountInputVisible] = useState(false);

  useEffect(() => {
    const endpoint = "/member/reward";
    const getReward = async () => {
      try {
        const response = await fetch(endpoint, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + window.sessionStorage.getItem("token"),
          },
        });

        if (response.ok) {
          const data = await response.json();
          //TODO: 데이터를 사용하여 현재 잔액을 업데이트
          setModel(prevState => ({
            ...prevState,
            currentbalance: data.data
          }));
        } else {
          const errorText = await response.text();
          alert(`실패: ${errorText}`);
        }
      } catch (error) {
        alert("오류가 발생했습니다.");
        console.error("API 호출 중 오류 발생:", error);
      }
    };

    getReward();
  }, []);

  const onNextClickHandler = async () => {
    const endpoint = "/reward/withdraw?amount=" + amount;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + window.sessionStorage.getItem("token"),
        },
      });

      // 회원가입 처리 후 로그인 페이지로 이동
      if (response.ok) {
        const data = await response.json();
        console.log("성공:", data);
        navigate("/sendsuccess"); // SendSuccess 컴포넌트로 이동
      } else {
        // 서버 에러 처리
        const errorText = await response.text();
        alert(`실패: ${errorText}`);
      }
    } catch (error) {
      // 네트워크 에러 처리
      alert("오류가 발생했습니다.");
      console.error("API 호출 중 오류 발생:", error);
    }
  };

  function onAmountInputChangeHandler(e) {
    setAmount(e.target.value);
    setIsAmountInputVisible(e.target.value !== ""); // 입력이 있을 때만 true로 설정
  }

  return (
    <>
      <BackDataTradeList listTitle={"리워드 이체"} />
      <div className="RewardSend" style={{ position: "relative" }}>
        <p
          style={{
            color: "black",
            margin: "32px 16px 16px 16px",
            fontSize: "16px",
          }}
        >
          결제 정보
        </p>
        <p
          style={{
            margin: "12px 16px 5px 16px",
            fontSize: "19px",
            fontWeight: "bolder",
          }}
        >
          데이터뱅크 ({model ? model.databank : "Loading..."}) 가
        </p>
        <p
          style={{
            margin: "5px 16px 16px 16px",
            fontSize: "19px",
            fontWeight: "bolder",
          }}
        >
          내 지갑 ({model ? model.mywallet : "Loading..."})으로 보냅니다.
        </p>
        <input
          type="text"
          placeholder="얼마나 옮길까요?"
          value={amount}
          onChange={onAmountInputChangeHandler}
          style={{
            width: "164px",
            height: "20px",
            margin: "16px 16px 16px 16px",
            fontSize: "20px",
            color: "#A5A5A5",
            backgroundColor: "#ffffff",
            border: "none",
            textAlign: "center",
            color: "#000",
          }}
        />
        {amount && (
          <p
            style={{
              display: "inline",
              margin: "3px",
              fontSize: "24px",
              color: "#A5A5A5",
              marginLeft: "5px",
            }}
          >
            <b>DBC</b>
          </p>
        )}

        <p
          style={{
            width: "151px",
            height: "20px",
            margin: "5px 16px 5px 16px",
            padding: "4px 8px 6px 8px",
            fontSize: "14px",
            color: "#ffffff",
            backgroundColor: "#A5A5A5",
            borderRadius: "4px",
          }}
        >
          현재 잔액 : {model ? model.currentbalance : "Loading..."}
        </p>
        <div
          className={`nextbutton ${isAmountInputVisible ? "blue" : ""}`}
          onClick={onNextClickHandler}
        >
          다음
        </div>
      </div>
      <RewardNavbar />
    </>
  );
}

export default RewardSend;