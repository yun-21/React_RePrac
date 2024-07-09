import React from 'react';
import ul from '../static/ul'
import minam from '../static/basic-data'
import Ul from './Ul' //컴포넌트 부품
import Minam from './Minam' //컴포넌트 부품
import Bin from './Bin'
import style from '../static/style'


//파스칼케이스
const App:React.FC =() =>{
  return (
    <div>
      <Ul textNode={ul}/>
      <Minam textNode={minam}/>
      <Bin styles={style} h1TextNode='헬로우'/>
      <h1>안녕</h1>
    </div>
  );
}

export default App;