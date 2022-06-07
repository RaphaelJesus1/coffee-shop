import CartIcon from "../../assets/icons/cart-icon";
import Notification from "../notification/notification";
import "./cart.css";
import { useEffect, useState } from "react";
import Loader from "../../assets/icons/loader";
import { formatMoney } from "../../utils/formatters";

const Cart = (props) => {
  const [notification, setNotification] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [hasNegativeValues, setHasNegativeValues] = useState(false);
  const [total, setTotal] = useState();

  const removeItem = (idx) => {
    delete props.list[idx];
    props.setList((prev) => [...prev.filter((item) => item)]); // remove empties
  };

  const changeAmount = (idx, newAmount) => {
    const currentAmount = props.list[idx].amount;
    if (newAmount === currentAmount) return;

    props.list[idx].amount = newAmount;

    props.setList((prev) => [...prev]);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    const negativeValues = props.list.some((item) => item.amount < 1);
    setHasNegativeValues(negativeValues);

    if (!!negativeValues) {
      setIsLoading(false);
      return;
    }

    // chamar a api

    setNotification("success");
    setIsLoading(false);
  };

  useEffect(() => {
    if (props.list.length === 0 || !props.list ){
      setTotal(0.0);
      return;
    } 

    const totalValue = props.list.reduce(
      (sum, currentItem) =>
        (sum += currentItem.price * (currentItem.amount || 1)),
      0
    );
    setTotal(totalValue);
  }, [props.list]);

  return (
    <div className="overlay" style={{ display: !props.isModalOpen && "none" }}>
      <Notification
        variant={notification}
        show={!!notification}
        setIsOpen={setNotification}
      />
      <div className="modal">
        <div className="modal-header">
          <CartIcon size="2em" />
          <h1>Meu carrinho</h1>
          <button
            type="button"
            className="btn-close"
            onClick={() => props.setIsModalOpen && props.setIsModalOpen(false)}
          >
            <span className="close-icon">&times;</span>
          </button>
        </div>
        <div className="modal-list">
          {props.list.length > 0 ? props.list?.map((item, idx) => (
            <div key={idx} className="list-item">
              <button
                className="remove-item btn-close"
                onClick={() => removeItem(idx)}
              >
                &times;
              </button>
              <img
                height="100%"
                src={item.imageUrl}
                alt={"imagem " + item.name.toLowerCase()}
              />
              <input
                type="number"
                min="1"
                value={item.amount || 1}
                onChange={(event) => changeAmount(idx, event.target.value)}
              />
              <p>&times;</p>
              <p>{item.name}</p>
              <p>{formatMoney(item.price * (item.amount || 1))}</p>
            </div>
          )) : null}
        </div>
        <div className="list-total">
          <span>Total</span>
          <span>{total ? formatMoney(total) : "-"}</span>
        </div>
        <div className="modal-footer">
          {hasNegativeValues && <span>Não permitimos valores negativos</span>}
          <button type="button" onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? <Loader size="100%" /> : "Finalizar compra"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
