import React from 'react';

function Prizes({setStyle}) {
  return (
    <div id="prizes" className="halves">
        <p id="_100" className="prizes" style={setStyle(100)}>
            {"1. N100"}
        </p>
        <p id="_200" className="prizes" style={setStyle(200)}>
            {"2. N200"}
        </p>
        <p id="_300" className="prizes" style={setStyle(300)}>
            {"3. N300"}
        </p>
        <p id="_500" className="prizes" style={setStyle(500)}>
            {"4. N500"}
        </p>
        <p id="_1000" className="prizes" style={setStyle(1000)}>
            {"5. N1,000"}
        </p>
        <p id="_2000" className="prizes" style={setStyle(2000)}>
            {"6. N2,000"}
        </p>
        <p id="_4000" className="prizes" style={setStyle(4000)}>
            {"7. N4,000"}
        </p>
        <p id="_8000" className="prizes" style={setStyle(8000)}>
            {"8. N8,000"}
        </p>
        <p id="_16000" className="prizes" style={setStyle(16000)}>
            {"9. N16,000"}
        </p>
        <p id="_32000" className="prizes" style={setStyle(32000)}>
            {"10. N32,000"}
        </p>
        <p id="_64000" className="prizes" style={setStyle(64000)}>
            {"11. N64,000"}
        </p>
        <p id="_125000" className="prizes" style={setStyle(125000)}>
            {"12. N125,000"}
        </p>
        <p id="_250000" className="prizes" style={setStyle(250000)}>
            {"13. N250,000"}
        </p>
        <p id="_500000" className="prizes" style={setStyle(500000)}>
            {"14. N500,000"}
        </p>
        <p id="_1000000" className="prizes" style={setStyle(1000000)}>
            {"15. N1 MILLION"}
        </p>
    </div>
  );
}

export default Prizes;