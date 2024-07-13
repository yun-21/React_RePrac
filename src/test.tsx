import React from 'react';
import { useState } from 'react';
function App() {
    const [message, setMessage] = useState('연습, usestate');
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={()=>setMessage('입니다')}>메세지 변경</button>
        </div>
    )
}
export default App;