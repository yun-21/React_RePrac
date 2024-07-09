interface textNode {
  textNode:string;
}

const Minam:React.FC<textNode> = ({textNode}) => {
  return (
    <h1>{textNode}</h1>
  );
}

export default Minam;