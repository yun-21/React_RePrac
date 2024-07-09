interface textNode {
  textNode:string[];
}
const Ul : React.FC<textNode>=({textNode})=>{
  return(
    <ul>
      {textNode.map((ele)=>(
        <li>{ele}</li>
      ))}
    </ul>
  )
}
export default Ul;