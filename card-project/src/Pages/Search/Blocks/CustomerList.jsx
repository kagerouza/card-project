import { useState } from "react";
import { Link } from "react-router-dom";

const CustomerList = ({ customers, onTransactionClick }) => {
  const [visibleCards, setVisibleCards] = useState({});

  const cardVisibility = (cardNumber) => {
    setVisibleCards((prev) => ({
      ...prev,
      [cardNumber]: !prev[cardNumber],
    }));
  };

  return (
    <div className="search__customer-list">
      <h3>Müştəri Siyahısı</h3>
      <table className="search__table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Doğum Tarixi</th>
            <th>GSM Nömrəsi</th>
            <th>Kart Nömrəsi</th>
            <th>Əməliyyatlar</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            const {
              CustomerID,
              Name,
              Surname,
              BirthDate,
              GSMNumber,
              CardNumber,
            } = customer;
            return (
              <tr key={CustomerID}>
                <td>{CustomerID}</td>
                <td>{Name}</td>
                <td>{Surname}</td>
                <td>{BirthDate}</td>
                <td>{GSMNumber}</td>
                <td>
                  {visibleCards[CardNumber]
                    ? CardNumber
                    : "**** **** **** ****"}{" "}
                  <button
                    className="search__form-btn"
                    onClick={() => cardVisibility(CardNumber)}
                  >
                    {visibleCards[CardNumber] ? "🔍" : "👁️"}
                  </button>{" "}
                  <Link className="search__form-btn" to={`/remove/${CardNumber}`}>
                    Kartı ləğv etmək
                  </Link>
                </td>
                <td>
                  <button
                    className="search__form-btn"
                    onClick={() => onTransactionClick(customer)}
                  >
                    Əməliyyatlar Siyahısı
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
