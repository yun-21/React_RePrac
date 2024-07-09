import React from 'react';
import minam from '../static/basic-data'
import Minam from './Minam' //컴포넌트 부품


//파스칼케이스
const App:React.FC =() =>{
  return (
    <div>
      <Minam textNode={minam}/>
      <h1>안녕</h1>
    </div>
  );
}

export default App;