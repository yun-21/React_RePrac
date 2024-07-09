import React from "react";
interface BinProperties{
  h1TextNode:string;
  styles:React.CSSProperties;
}
const Bin:React.FC<BinProperties>=({h1TextNode,styles})=>{
  return(
    <div>
      <h1 style={styles}>{h1TextNode}</h1>
    </div>
  );
}
export default Bin