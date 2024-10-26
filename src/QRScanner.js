// QRScanner.js
import React, { useRef, useEffect } from 'react';
import QrScanner from 'qr-scanner';

const QRScanner = ({ onScan }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const scanner = new QrScanner(videoRef.current, (result) => {
      console.log("Scanned QR code:", result);
      onScan(result); // Callback to pass the result back to parent component
      scanner.stop(); // Stop scanning after a successful read
    });

    scanner.start(); // Start the scanner on component mount

    return () => {
      scanner.stop(); // Clean up the scanner on unmount
    };
  }, [onScan]);

  return <video ref={videoRef} style={{ width: "100%", height: "auto" }} />;
};

export default QRScanner;
