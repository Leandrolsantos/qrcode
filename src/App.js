import { useState } from 'react';
import QRCode from 'react-qr-code';
import './App.css';

function App() {

  const [link, setLink] = useState('')

  function handleQrcode(event){
    setLink(event.target.value);
  }

  return (
    <div className="container">
      
    <QRCode
    value={link}
    />

      <input 
      className="input"
      placeholder="Digite aqui..."
      value={link}
      onChange={ (event) => handleQrcode(event)}
      />

    </div>
  );
}

export default App;
