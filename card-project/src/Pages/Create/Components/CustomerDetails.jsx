import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getLocalStorageData,
  updateLocalCustomerData,
  generateNewDebitCard,
} from "../Utils/Helpers";
import CustomerInfo from "./CustomerInfo";
import "../Assets/stylesDetails.css";

const CustomerDetails = () => {
  const navigate = useNavigate();
  const localData = getLocalStorageData();
  const initialData = localData ? localData[localData.length - 1] : null;

  const [customerData, setCustomerData] = useState(initialData);
  const [debitCard, setDebitCard] = useState(initialData?.CardNumber || "");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (customerData) {
      const updatedDataArray = localData.map((data, index) => {
        if (index === localData.length - 1) {
          return customerData;
        }
        return data;
      });
      updateLocalCustomerData(updatedDataArray);
    }
  }, [customerData, localData]);

  const handleGenerateDebitCard = () => {
    const newDebitCard = generateNewDebitCard();
    setDebitCard(newDebitCard);
    setCustomerData((prevData) => ({
      ...prevData,
      CardNumber: newDebitCard,
    }));
    setSuccessMessage("Əməliyyat uğurla yerinə yetirildi!");
    setTimeout(() => {
      navigate("/search");
    }, 1000);
  };

  return (
    <div className="details__container">
      {successMessage ? (
        <p className="details__success-message">{successMessage}</p>
      ) : customerData ? (
        <CustomerInfo
          customerData={customerData}
          debitCard={debitCard}
          onGenerateCard={handleGenerateDebitCard}
        />
      ) : (
        <p className="details__no-data">Heç bir məlumat tapılmadı.</p>
      )}
    </div>
  );
};

export default CustomerDetails;
