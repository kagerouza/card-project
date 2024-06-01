import { useReducer } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Assets/stylesRemove.css";
import { reducer, initialState } from "../Store/Reducer";
import reasons from "../Constants"

const RemoveCustomer = () => {
  const { cardNumber } = useParams();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleRemove = () => {
    const currentReason =
      state.reason || document.querySelector(".remove__select").text;
    if (!currentReason) {
      alert("Kartı ləğv etmə səbəblərindən birini seçməlisiniz.");
      return;
    }
    const removedCards = JSON.parse(localStorage.getItem("removedCards")) || [];
    const removalRecord = {
      cardNumber,
      reason: currentReason,
      explanation: state.explanation,
    };
    removedCards.push(removalRecord);
    localStorage.setItem("removedCards", JSON.stringify(removedCards));

    dispatch({ type: "SET_REMOVED", payload: true });
    setTimeout(() => {
      dispatch({ type: "RESET" });
      navigate("/audit");
    }, 2000);
  };

  return (
    <div className="remove__container">
      <h2>Kartın Ləğv Edilməsi</h2>
      <div className="remove__card-number-container">
        <p>
          Kart Nömrəsi:{" "}
          {state.isCardNumberVisible ? cardNumber : "**** **** **** ****"}{" "}
        </p>
        <button
          onClick={() => dispatch({ type: "CARD_NUMBER_VISIBILITY" })}
        >
          {state.isCardNumberVisible ? "🔍" : "👁️"}
        </button>
      </div>
      <label className="remove__label">
        Səbəb:{" "}
        <select
          className="remove__select"
          value={state.reason}
          onChange={(e) =>
            dispatch({ type: "SET_REASON", payload: e.target.value })
          }
        >
          <option value="">Zəhmət olmasa səbəb seçin</option>
          {reasons.map((reason) => (
            <option key={reason.value} value={reason.text}>
              {reason.text}
            </option>
          ))}
        </select>
      </label>
      <label className="remove__label">
        Ləğvin izahlı səbəbi:{" "}
        <textarea
          className="remove__input"
          value={state.explanation}
          rows={2}
          cols={22}
          onChange={(e) =>
            dispatch({ type: "SET_EXPLANATION", payload: e.target.value })
          }
        />
      </label>
      {state.removed && <p>Kart uğurla ləğv olundu!</p>}
      <button className="remove__btn" onClick={handleRemove}>
        Ləğv Etmək
      </button>
    </div>
  );
};

export default RemoveCustomer;
