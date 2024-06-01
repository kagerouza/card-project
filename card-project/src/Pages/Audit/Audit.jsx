import { useState, useEffect } from 'react';
import "./stylesAudit.css";

const Audit = () => {
  const [customerDataArray, setCustomerDataArray] = useState([]);
  const [customerArray, setCustomerArray] = useState([]);

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem('customerDataArray');
    if (dataFromLocalStorage) {
      setCustomerDataArray(JSON.parse(dataFromLocalStorage));
    }
  }, []);
  
  useEffect(() => {
    const dataFromStorage = localStorage.getItem('removedCards');
    if (dataFromStorage) {
      setCustomerArray(JSON.parse(dataFromStorage));
    }
  }, []);

  return (
    <div className="audit__container">
      <h1>Audit Log</h1>
      <div className="audit__table-container">
        <table>
          <thead>
            <tr>
              <th>Ad</th>
              <th>Soyad</th>
              <th>Doğum Tarixi</th>
              <th>Gsm Nömrəsi</th>
              <th>Kart Nömrəsi</th>
              <th>Zaman</th>
            </tr>
          </thead>
          <tbody>
            {customerDataArray.map((customerData, index) => (
              <tr key={index}>
                <td>{customerData.Name}</td>
                <td>{customerData.Surname}</td>
                <td>{customerData.BirthDate}</td>
                <td>{customerData.GSMNumber}</td>
                <td>{customerData.CardNumber}</td>
                <td>{customerData.createDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1>Ləğv Edilmiş Kartlar</h1>
      <div className="audit__table-container">
        <table>
          <thead>
            <tr>
              <th>Kart Nömrəsi</th>
              <th>İzah</th>
              <th>Səbəb</th>
            </tr>
          </thead>
          <tbody>
            {customerArray.map((customerData, index) => (
              <tr key={index}>
                <td>{customerData.cardNumber}</td>
                <td>{customerData.explanation}</td>
                <td>{customerData.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Audit;
