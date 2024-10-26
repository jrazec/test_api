import React from 'react';
import Calendar from './Calendar';
import QRScanner from './QRScanner';
import QRCodeGenerator from './QRCodeGenerator';
function App() {
    return (
        <div className="App">
            <h1>My Calendar</h1>
            {/* <Calendar /> */}
            <QRCodeGenerator />
        </div>
    );
}

export default App;
