import classes from "./card.css";
import {AiOutlineShopping} from "react-icons/ai";
// import Cafeimagem from "../assets/image-gran-espresso.png";


const Card = (props) => {
  return (
    <div className="card">
      <div className="imagem-cafe">
        <img src={props.imageUrl} alt="Imagem Produto" height={"180px"} />
      </div>
      <h3>{props.name}</h3>
      <h4>{props.description}</h4>
      <h5>R${props.price}</h5>
      <button><AiOutlineShopping style={{marginRight:"5px"}}/> Adicionar</button>
    </div>
  );
};

export default Card;
