// DataTradeList.js
// 상단바 컴포넌트
import React from 'react';
import './DataTradeList.css'; // DataTradeList 스타일시트

function DataTradeList({ listTitle }) {
  return (
    <div className="data-trade-list-container">
      <h3 className="data-trade-list-title">{listTitle}</h3>
    </div>
  );
}

export default DataTradeList;