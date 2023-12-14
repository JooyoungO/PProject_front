import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Trading from "../../components/Trading/Trading";
import { useNavigate } from "react-router-dom";
import "./Reward.css";
import DataTradeList from "../../components/DataTradeList/DataTradeList";
import RewardNavbar from "../../components/RewardNavbar/RewardNavbar";

function Reward() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [model, setModel] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = "";
      try {
        const response = await axios.get("/reward/history", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        });
        if (response.status === 200) {
          setModel(response.data);
        }
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleTransferClick = () => {
    navigate("/RewardSend");
  };

  return (
    <>
      <DataTradeList listTitle={"리워드"} />
      <div className="reward">
        <p
          style={{
            color: "black",
            margin: "30px 0px 0px 16px",
            fontSize: "16px",
          }}
        >
          당신의 리워드는
        </p>
        <p style={{ margin: "6px 16px", fontSize: "32px" }}>
          <b>{model ? model.totalReward : "Loading..."} </b>
        </p>
        <p style={{ margin: "6px 16px", fontSize: "16px" }}>입니다.</p>
        <div className="reward-button" onClick={handleTransferClick}>
          <b>이체하기</b>
        </div>
        <p style={{ color: "#A5A5A5", marginLeft: "16px" }}>거래내역</p>
        {model && model.data &&
          model.data.map((data) => (
            <Trading
              src={data.img}
              name={data.sender}
              date={data.createdAt}
              trading={data.amount}
              balance={data.total}
            />
          ))}
      </div>
      <RewardNavbar />
    </>
  );
}

export default Reward;
