// QRCodeGenerator.js
import React, { useState } from 'react';
import QrScanner from 'qr-scanner';
const QRCodeGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const generateQRCode = () => {
    const encodedText = encodeURIComponent(inputText);
    const u = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodedText}`;
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=1`;
    const url1 = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=2`;
    const url2 = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=3`;
    setQrCodeUrl([u,url,url1,url2]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text to generate QR"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {qrCodeUrl && qrCodeUrl.map(qrLink=>{
       return <img src={qrLink} alt="Generated QR Code" />
      })}
    </div>
  );
};

export default QRCodeGenerator;
