import React from "react";
interface BinProperties{
  h1TextNode:string;
}
const Bin:React.FC<BinProperties>=({h1TextNode})=>{
  let style:React.CSSProperties ={
    color:"blue",
    backgroundColor:"yellow",
    fontSize:"33px"
  }
  return(
    <div>
      <h1 style={style}>{h1TextNode}</h1>
    </div>
  );
}
export default Bin;