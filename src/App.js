import React, { useState } from 'react';
import './App.css'; 
function Football() {
  // State untuk menghitung jumlah tembakan
  const [shots, setShots] = useState(0);
  // Fungsi yang dijalankan ketika tombol ditekan
  const shoot = () => {
    alert("Gooooaallllll!");
    // Menambah jumlah tembakan
    setShots(prevShots => prevShots + 1);
  };
  return (
    <div>
      <button onClick={shoot} style={{ padding: '10px 20px', fontSize: '16px', margin: '10px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
      Tembak PENALTY !!!</button>
      <h2>Jumlah Tembakan: {shots}</h2>
      {shots >= 5 && <p style={{ color: 'red' }}>You're on fire!</p>}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Football />
    </div>
  );
}

export default App;
