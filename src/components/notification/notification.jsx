import CheckCircle from "../../assets/icons/check-circle";
import XCircle from "../../assets/icons/x-circle";
import "./notification.css";

const Notification = (props) => {
  return (
    <div className="overlay" style={{ display: !props.show && "none" }}>
      {props.variant === "success" && (
        <div className="notification">
          <CheckCircle size="48px" color="#08F26E" />
          <h2>Sucesso!</h2>
          <p>
            Seu pedido será preparado, e chamaremos seu nome quando estiver
            pronto
          </p>
          <button
            type="button"
            onClick={() => props.setIsOpen && props.setIsOpen(false)}
          >
            Ok
          </button>
        </div>
      )}
      {props.variant === "error" && (
        <div className="notification">
          <XCircle size="48px" color="#EA3333" />
          <h2>Erro</h2>
          <p>
            Não foi possível enviar seu pedido. Por favor, cheque seu pagamento
            e tente novamente
          </p>
          <button
            type="button"
            onClick={() => props.setIsOpen && props.setIsOpen(false)}
          >
            Tentar novamente
          </button>
        </div>
      )}
    </div>
  );
};

export default Notification;
