import React from 'react';
import FontAwesomeIcon from 'fontawesome';
function Moves() {
  return (
    <div id="life-lines" className="halves">
      <div id="life-lines-main">
        <h3 className="life-line-header">Life Lines</h3>
        <button className="life-line-content">walk away</button>
        <button className="life-line-content">50 : 50</button>
        <button className="life-line-content">
          {/* <FontAwesomeIcon icon="fa-solid fa-phone-flip" /> */}
        </button>
        <button className="life-line-content"></button>
        <button id="close-btn">close</button>
      </div>
    </div>
  );
}

export default Moves;